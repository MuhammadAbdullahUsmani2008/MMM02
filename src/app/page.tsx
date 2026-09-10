import { Hero } from "@/components/Hero";
import { HeroGallery } from "@/components/HeroGallery";
import { HeroNGO } from "@/components/HeroNGO";
import { ImpactBand } from "@/components/home/ImpactBand";
import { Mission } from "@/components/home/Mission";
import { Programmes } from "@/components/home/Programmes";
import { GazaBand } from "@/components/home/GazaBand";
import { Giving } from "@/components/home/Giving";
import { Reports } from "@/components/home/Reports";
import { SocialFeed } from "@/components/home/SocialFeed";
import { JoinCta } from "@/components/home/JoinCta";

export default function HomePage() {
  return (
    <>
      <HeroGallery />
      <ImpactBand />
      <Mission />
      <Programmes />
      <GazaBand />
      <Giving />
      <Reports />
      <SocialFeed />
      <JoinCta />
    </>
  );
}
