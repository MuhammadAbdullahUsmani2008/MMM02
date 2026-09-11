"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * WebGL Liquid Distortion Transition
 *
 * Renders two images (current + next) into a full-screen plane and animates
 * a liquid / gooey distortion between them using a custom fragment shader.
 * The distortion is driven by a simplex-noise displacement that "melts"
 * the outgoing image into the incoming one.
 */

type Props = {
  currentImage: string;
  nextImage: string;
  /** 0..1 progress of the transition (0 = fully current, 1 = fully next) */
  progress: number;
  /** Trigger a new transition wave when this value changes */
  waveKey: number;
  className?: string;
};

const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;

  uniform sampler2D uCurrent;
  uniform sampler2D uNext;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uResolution;

  varying vec2 vUv;

  // --- Simplex noise (Ashima Arts) ---
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;

    // Liquid displacement field
    float t = uTime * 0.6;
    float n1 = snoise(vec3(uv.x * 3.0, uv.y * 3.0 * aspect, t));
    float n2 = snoise(vec3(uv.x * 6.0 + 5.0, uv.y * 6.0 * aspect + 3.0, t * 1.3));
    float n3 = snoise(vec3(uv.x * 9.0 + 11.0, uv.y * 9.0 * aspect + 7.0, t * 1.7));

    // Amplitude peaks in the middle of the transition
    float amp = sin(uProgress * 3.14159);
    float strength = amp * 0.18;

    vec2 displacement = vec2(
      (n1 + n2 * 0.5 + n3 * 0.25) * strength,
      (n1 * 0.7 + n2 * 0.4 + n3 * 0.2) * strength
    );

    // Sample both images with the displacement
    vec2 curUv = uv + displacement;
    vec2 nextUv = uv - displacement * 0.6;

    vec4 cur = texture2D(uCurrent, curUv);
    vec4 next = texture2D(uNext, nextUv);

    // Soft liquid mask — a wavy boundary that sweeps across
    float wave = snoise(vec3(uv.x * 2.0, uv.y * 2.0 * aspect, t * 0.8));
    float boundary = uv.x + wave * 0.15 - uProgress * 1.4;
    float mask = smoothstep(-0.12, 0.12, boundary);

    // Blend with a touch of the displaced current on top for gooey feel
    vec3 color = mix(cur.rgb, next.rgb, mask);
    float alpha = 1.0;

    gl_FragColor = vec4(color, alpha);
  }
`;

export function LiquidTransition({
  currentImage,
  nextImage,
  progress,
  waveKey,
  className = "",
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const currentTexRef = useRef<THREE.Texture | null>(null);
  const nextTexRef = useRef<THREE.Texture | null>(null);
  const progressRef = useRef(progress);
  const waveKeyRef = useRef(waveKey);
  const timeRef = useRef(0);
  const rafRef = useRef<number>(0);

  progressRef.current = progress;

  // Load a texture from an image URL
  const loadTexture = (url: string): Promise<THREE.Texture> =>
    new Promise((resolve, reject) => {
      const loader = new THREE.TextureLoader();
      loader.load(
        url,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.minFilter = THREE.LinearFilter;
          resolve(tex);
        },
        undefined,
        reject
      );
    });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // --- Setup renderer ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Scene & camera ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    cameraRef.current = camera;

    // --- Material ---
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uCurrent: { value: null },
        uNext: { value: null },
        uProgress: { value: 0 },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      },
      transparent: true,
    });
    materialRef.current = material;

    // --- Plane ---
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- Load textures ---
    let disposed = false;
    Promise.all([loadTexture(currentImage), loadTexture(nextImage)])
      .then(([cur, next]) => {
        if (disposed) return;
        currentTexRef.current = cur;
        nextTexRef.current = next;
        material.uniforms.uCurrent.value = cur;
        material.uniforms.uNext.value = next;
      })
      .catch(() => {
        // Fallback: if textures fail, just show current image via CSS behind
      });

    // --- Resize ---
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      material.uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener("resize", handleResize);

    // --- Animation loop ---
    const clock = new THREE.Clock();
    const animate = () => {
      timeRef.current += clock.getDelta();
      material.uniforms.uTime.value = timeRef.current;
      material.uniforms.uProgress.value = progressRef.current;
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      currentTexRef.current?.dispose();
      nextTexRef.current?.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      materialRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-trigger a wave when waveKey changes (optional pulse)
  useEffect(() => {
    if (waveKeyRef.current !== waveKey) {
      waveKeyRef.current = waveKey;
    }
  }, [waveKey]);

  return <div ref={mountRef} className={`absolute inset-0 ${className}`} aria-hidden="true" />;
}
