import { programs, reports, regions, values, givingTiers } from "./site";
import { socialFeeds } from "./socialFeeds";
import { galleryGroups } from "./gallery";

export type SearchEntry = {
  title: string;
  href: string;
  section: string;
  terms: string;
};

/* ------------------------------------------------------------------ */
/* Static page entries                                                 */
/* ------------------------------------------------------------------ */

const pages: SearchEntry[] = [
  {
    title: "Who we are",
    href: "/about",
    section: "About",
    terms: "history mission vision means values founded 2005 kashmir earthquake lahore volunteer network muslim healthcare professionals timeline",
  },
  {
    title: "Where we work",
    href: "/about#reach",
    section: "About",
    terms: "punjab sindh balochistan khyber pakhtunkhwa gaza districts regions lahore tharparkar chitral gilgit baltistan azad jammu kashmir dera ghazi khan",
  },
  {
    title: "What we do",
    href: "/what-we-do",
    section: "Programmes",
    terms: "programmes projects camps relief water food winter training education clinics surgery",
  },
  {
    title: "Disaster response",
    href: "/disaster-response",
    section: "Response",
    terms: "flood emergency indus taunsa dera ghazi khan mangrotha deployment phases assessment clinic clean water ration first 24 hours",
  },
  {
    title: "Donate",
    href: "/donate",
    section: "Give",
    terms: "donate sadaqah bank transfer iban ubl jazzcash easypaisa unit cost giving donation",
  },
  {
    title: "How your donation is spent",
    href: "/donate#allocation",
    section: "Give",
    terms: "allocation transparency overhead administration percentage accountability where money goes",
  },
  {
    title: "Zakat Calculator",
    href: "/zakat-calculator",
    section: "Give",
    terms: "zakat calculator calculate 2.5 percent nisab eligible amount pkrupee",
  },
  {
    title: "Volunteer with us",
    href: "/get-involved",
    section: "Take part",
    terms: "doctor nurse dentist physiotherapist pharmacist paramedic student deployment join team membership aims benefits",
  },
  {
    title: "Partner with us",
    href: "/get-involved#partners",
    section: "Take part",
    terms: "hospital supplier pharmaceutical mosque company foundation partnership institutional corporate",
  },
  {
    title: "Field reports",
    href: "/media",
    section: "Media",
    terms: "news updates deployments stories reports field logs",
  },
  {
    title: "Photo library",
    href: "/media#gallery",
    section: "Media",
    terms: "photographs gallery images pictures photos",
  },
  {
    title: "Video",
    href: "/media#video",
    section: "Media",
    terms: "video documentaries youtube gaza ramadan hot meal clean water bread relief campaign",
  },
  {
    title: "Live social feed",
    href: "/#social-feed",
    section: "Media",
    terms: "social feed live youtube facebook instagram x twitter whatsapp channel updates",
  },
  {
    title: "Contact",
    href: "/contact",
    section: "About",
    terms: "phone whatsapp email address model town lahore bank receipt",
  },
];

/* ------------------------------------------------------------------ */
/* Build the full index from live site data                            */
/* ------------------------------------------------------------------ */

const programEntries: SearchEntry[] = programs.map((p) => ({
  title: p.title,
  href: `/what-we-do/${p.slug}`,
  section: p.region,
  terms: `${p.summary} ${p.body.join(" ")} ${p.highlights.map((h) => `${h.label} ${h.value}`).join(" ")}`.toLowerCase(),
}));

const reportEntries: SearchEntry[] = reports.map((r) => ({
  title: r.title,
  href: `/media/${r.slug}`,
  section: r.kind,
  terms: `${r.place} ${r.excerpt} ${r.body.join(" ")} ${r.kind}`.toLowerCase(),
}));

const regionEntries: SearchEntry[] = regions.map((r) => ({
  title: r.name,
  href: "/about#reach",
  section: "Where we work",
  terms: `${r.detail} ${r.focus}`.toLowerCase(),
}));

const valueEntries: SearchEntry[] = values.map((v) => ({
  title: v.key,
  href: "/about#mission",
  section: "Our values",
  terms: `${v.key} ${v.body}`.toLowerCase(),
}));

const givingEntries: SearchEntry[] = givingTiers.map((g) => ({
  title: g.title,
  href: "/donate",
  section: "What a donation buys",
  terms: `${g.amount} ${g.body}`.toLowerCase(),
}));

const socialEntries: SearchEntry[] = socialFeeds.map((s) => ({
  title: s.author.name,
  href: s.url,
  section: "Social feed",
  terms: `${s.content} ${s.tags.join(" ")} ${s.platform}`.toLowerCase(),
}));

const galleryEntries: SearchEntry[] = galleryGroups.map((g) => ({
  title: g.label,
  href: "/media#gallery",
  section: "Photo library",
  terms: `${g.label} ${g.region}`.toLowerCase(),
}));

export const searchIndex: SearchEntry[] = [
  ...programEntries,
  ...reportEntries,
  ...regionEntries,
  ...valueEntries,
  ...givingEntries,
  ...socialEntries,
  ...galleryEntries,
  ...pages,
];

/* ------------------------------------------------------------------ */
/* Search                                                              */
/* ------------------------------------------------------------------ */

export function search(query: string, limit = 7): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];

  const words = q.split(/\s+/).filter(Boolean);

  return searchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const haystack = `${title} ${entry.section.toLowerCase()} ${entry.terms}`;
      let score = 0;

      for (const w of words) {
        if (title.startsWith(w)) score += 6;
        else if (title.includes(w)) score += 4;
        else if (haystack.includes(w)) score += 1;
      }

      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entry);
}
