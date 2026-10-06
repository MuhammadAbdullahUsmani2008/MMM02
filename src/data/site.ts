export const org = {
  name: "Muslim Medical Mission",
  legalName: "Muslim Medical Mission Foundation",
  short: "MMM",
  motto: "Wisdom, Action, Service for Allah for Right",
  founded: 2005,
  phone: "+92 321 424 4433",
  phoneHref: "tel:+923214244433",
  whatsapp: "https://wa.me/923214244433",
  email: "medicalmissionpak@gmail.com",
  address: {
    line1: "Building Number 430, Phase 1",
    line2: "Johar Town, Lahore",
    country: "Punjab, Pakistan",
  },
  social: [
    { name: "Facebook", href: "https://facebook.com/MMMPakOfficial" },
    { name: "Instagram", href: "https://instagram.com/MMMPakOfficial" },
    { name: "X", href: "https://x.com/MMMPakOfficial" },
    { name: "YouTube", href: "https://youtube.com/@mmmpakofficial" },
  ],
  bank: {
    title: "Muslim Medical Mission Foundation",
    bank: "United Bank Limited (UBL)",
    account: "0635338617189",
    iban: "PK50UNIL0109000338617189",
    branch: "0635, C Block Bank Square Market, Model Town, Lahore",
  },
  mobileWallets: "JazzCash and EasyPaisa: 0321 4244433",
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type MegaColumn = {
  heading: string;
  links: { label: string; href: string; note?: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  /** One line of framing shown beside the links in the mega panel. */
  blurb?: string;
  columns?: MegaColumn[];
  feature?: {
    title: string;
    body: string;
    href: string;
    cta: string;
    image: string;
  };
};

export const nav: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    blurb:
      "Volunteer led since the 2005 Kashmir earthquake, run by practising clinicians who serve humanity.",
    columns: [
      {
        heading: "The organisation",
        links: [
          { label: "Who we are", href: "/about", note: "Founded in 2005" },
          { label: "Mission and vision", href: "/about#mission" },
          { label: "Our means & ethics", href: "/about#means" },
          { label: "Where we work", href: "/about#reach" },
        ],
      },
      {
        heading: "Accountability",
        links: [
          { label: "How your donation is spent", href: "/donate#allocation" },
          { label: "Field reports", href: "/media" },
          { label: "Contact the team", href: "/contact" },
        ],
      },
    ],
    feature: {
      title: "Pre-Conference BLS with Rescue 1122",
      body: "Ensuring every MMM volunteer in the field is properly equipped through hands-on emergency drills.",
      href: "/about",
      cta: "Read about training",
      image: "/media/field/bls-rescue-1122.jpg",
    },
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    blurb:
      "Three operational pillars delivering free frontline healthcare, disaster relief, and medical education.",
    columns: [
      {
        heading: "Pillar A: Mercy in Motion",
        links: [
          { label: "Free medical camps", href: "/what-we-do/flood-medical-camps" },
          { label: "Welfare & prison clinics", href: "/what-we-do/prison-healthcare" },
          { label: "Surgical missions", href: "/what-we-do/save-vision" },
          { label: "Nutrition and flood relief", href: "/what-we-do/flood-relief" },
          { label: "Water is Life", href: "/what-we-do/water-for-life" },
        ],
      },
      {
        heading: "Pillar B: First to Reach",
        links: [
          { label: "Rapid deployment teams", href: "/disaster-response" },
          { label: "2005 Kashmir earthquake", href: "/disaster-response" },
          { label: "Flood emergency camps", href: "/what-we-do/flood-medical-camps" },
          { label: "Gaza field clinics", href: "/what-we-do/gaza-field-clinics" },
          { label: "Winter packages", href: "/what-we-do/winter-packages" },
        ],
      },
      {
        heading: "Pillar C: MMM Academy",
        links: [
          { label: "Annual medical conferences", href: "/what-we-do/training" },
          { label: "CME series & symposia", href: "/what-we-do/professional-development" },
          { label: "Skills for Service (Rescue 1122)", href: "/what-we-do/training" },
          { label: "Future Healers scholarships", href: "/what-we-do/health-education" },
          { label: "Community health literacy", href: "/what-we-do/health-education" },
        ],
      },
    ],
    feature: {
      title: "Building Tomorrow's Healers",
      body: "Raising a generation of Muslim healthcare professionals grounded in clinical excellence and Islamic medical ethics.",
      href: "/what-we-do",
      cta: "Explore all programs",
      image: "/media/field/hero-national-conference.jpg",
    },
  },
  {
    label: "Disaster Response",
    href: "/disaster-response",
    blurb: "Rapid clinical and emergency relief deployment across disaster-affected zones.",
    columns: [
      {
        heading: "Emergency Operations",
        links: [
          { label: "Kashmir earthquake 2005", href: "/disaster-response" },
          { label: "Flood emergency medical camps", href: "/what-we-do/flood-medical-camps" },
          { label: "Ration & food relief", href: "/what-we-do/flood-relief" },
          { label: "Tharparkar drought clinics", href: "/what-we-do/flood-medical-camps" },
        ],
      },
      {
        heading: "Gaza Relief Mission",
        links: [
          { label: "Gaza field clinics", href: "/what-we-do/gaza-field-clinics" },
          { label: "Water for Life tankers", href: "/what-we-do/water-for-life" },
          { label: "Food parcels & hot meals", href: "/what-we-do/food-parcels-gaza" },
          { label: "Winter relief packages", href: "/what-we-do/winter-packages" },
        ],
      },
    ],
    feature: {
      title: "When Calamity Strikes",
      body: "Since the 2005 Kashmir earthquake, our pre-trained medical teams deploy within hours, not days.",
      href: "/disaster-response",
      cta: "See response timeline",
      image: "/media/field/hero-disaster-response.jpg",
    },
  },
  {
    label: "Media",
    href: "/media",
    blurb:
      "Photographs, field video and reports from the clinicians on the frontline.",
    columns: [
      {
        heading: "Newsroom",
        links: [
          { label: "Field reports", href: "/media" },
          { label: "Photo library", href: "/media#gallery" },
          { label: "Video", href: "/media#video" },
          { label: "Live social feed", href: "/#social-feed" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Health campaigns", href: "/what-we-do/health-education" },
          { label: "For journalists", href: "/contact" },
        ],
      },
    ],
    feature: {
      title: "Field Reports & Stories",
      body: "Visual documentation and firsthand dispatches from our active medical relief missions across Pakistan and Gaza.",
      href: "/media",
      cta: "View gallery",
      image: "/media/field/conference-awards-ceremony.jpg",
    },
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    blurb: "Join a network of volunteer doctors, paramedics, and supporters serving humanity.",
    columns: [
      {
        heading: "Volunteer",
        links: [
          { label: "Doctors & medical staff", href: "/get-involved" },
          { label: "Paramedics & field support", href: "/get-involved" },
          { label: "Student volunteer wing", href: "/get-involved" },
        ],
      },
      {
        heading: "Support Us",
        links: [
          { label: "Donate directly", href: "/donate" },
          { label: "Corporate & institutional partners", href: "/get-involved#partners" },
          { label: "Contact the team", href: "/contact" },
        ],
      },
    ],
    feature: {
      title: "Join the Medical Mission",
      body: "Lend your clinical expertise or time to bring urgent medical relief to those most in need.",
      href: "/get-involved",
      cta: "Join as volunteer",
      image: "/media/field/future-healers-mentorship.jpg",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Impact                                                              */
/* ------------------------------------------------------------------ */

export const impactStats = [
  {
    value: 1000000,
    suffix: "+",
    label: "Patients Served",
    detail: "Free consultation and medicine",
  },
  {
    value: 16,
    suffix: "",
    label: "Annual Medical Conferences Organised",
    detail: "Educational & professional development",
  },
  {
    value: 20,
    suffix: "+",
    label: "Years of Service",
    detail: "Volunteer led, without a paid fundraising arm",
  },
  {
    value: 12,
    suffix: "+",
    label: "National Disasters Responded To",
    detail: "Rapid emergency response across Pakistan",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years of Service to People of Gaza",
    detail: "Water, food & medicine for displaced families",
  },
  {
    value: 15,
    suffix: "+",
    label: "Regular Flagship Projects",
    detail: "Standing programmes running year-round",
  },
];

/* ------------------------------------------------------------------ */
/* Programmes                                                          */
/* ------------------------------------------------------------------ */

export type Accent = "blue" | "magenta" | "navy" | "cyan";

export type Program = {
  slug: string;
  title: string;
  region: "Pakistan" | "Gaza" | "Pakistan and Gaza";
  summary: string;
  body: string[];
  image: string;
  gallery: string[];
  accent: Accent;
  highlights: { label: string; value: string }[];
};

export const programs: Program[] = [
  {
    slug: "flood-medical-camps",
    title: "Flood emergency medical camps",
    region: "Pakistan",
    summary:
      "During flood emergencies, Muslim Medical Mission provides free medical camps in affected communities. Teams offer medical consultations, basic treatment, essential medicines, and referrals where further care is needed.",
    body: [
      "During flood emergencies, Muslim Medical Mission provides free medical camps in affected communities. Teams offer medical consultations, basic treatment, essential medicines, and referrals where further care is needed.",
    ],
    image: "/media/field/pillar-a-camp-01.jpg",
    gallery: [
      "/media/field/pillar-a-camp-02.jpg",
      "/media/field/pillar-a-camp-03.jpg",
      "/media/field/pillar-a-camp-04.jpg",
      "/media/field/pillar-a-camp-05.jpg",
    ],
    accent: "blue",
    highlights: [
      { label: "Medical camps", value: "Free in affected communities" },
      { label: "Consultations", value: "Medical teams provide exams" },
      { label: "Referrals", value: "Where further care is needed" },
    ],
  },
  {
    slug: "flood-relief",
    title: "Flood relief distribution",
    region: "Pakistan",
    summary:
      "Muslim Medical Mission provides flood relief to affected communities in South Punjab and Balochistan. Support includes staple food, clean drinking water, and cash assistance for households facing significant losses.",
    body: [
      "Muslim Medical Mission provides flood relief to affected communities in South Punjab and Balochistan. Support includes staple food, clean drinking water, and cash assistance for households facing significant losses.",
    ],
    image: "/media/disaster/disaster-13.jpg",
    gallery: [
      "/media/disaster/disaster-07.jpg",
      "/media/disaster/disaster-12.jpg",
      "/media/disaster/disaster-08.jpg",
      "/media/disaster/disaster-15.jpeg",
    ],
    accent: "magenta",
    highlights: [
      { label: "Regions", value: "South Punjab and Balochistan" },
      { label: "Staple food", value: "Provided to affected households" },
      { label: "Cash assistance", value: "For families facing significant losses" },
    ],
  },
  {
    slug: "gaza-field-clinics",
    title: "Field clinics in Gaza",
    region: "Gaza",
    summary:
      "Paramedic and clinical teams running consultations, dressings, dispensing and paediatric care inside shelters and tented clinics.",
    body: [
      "Our Gaza clinics operate where a health system has effectively stopped. Teams work out of shelter rooms and tented treatment areas, seeing whoever presents, with a caseload dominated by wound care, respiratory infection, skin disease, malnutrition and untreated chronic illness.",
      "The work is unglamorous and repetitive and it is what keeps people alive: dressings changed properly, antibiotics dispensed as a full course rather than a partial one, blood pressures taken, children weighed, and referral arranged for anything beyond what a tent can hold.",
      "Everything is carried under one banner, emergency relief from the people of Pakistan to the people of Gaza, and delivered by Pakistani clinicians alongside local staff.",
    ],
    image: "/media/medical/medical-45.jpg",
    gallery: [
      "/media/medical/medical-28.jpg",
      "/media/medical/medical-34.jpg",
      "/media/medical/medical-43.jpg",
      "/media/medical/medical-47.jpg",
      "/media/medical/medical-17.jpg",
      "/media/medical/medical-13.jpg",
    ],
    accent: "cyan",
    highlights: [
      { label: "Delivered by", value: "Paramedic and clinical teams" },
      { label: "Caseload", value: "Wounds, infection, paediatrics" },
      { label: "Charge to the patient", value: "Nothing" },
    ],
  },
  {
    slug: "food-parcels-gaza",
    title: "Food parcels and hot meals",
    region: "Gaza",
    summary:
      "Family food parcels handed over at the shelter door, and hot meals cooked and served where families have no way to cook at all.",
    body: [
      "A displaced family living in a tent has no reliable way to store or cook food. Two things follow from that. Parcels have to be built around what can actually be prepared with what a household has, and where nothing can be prepared, the meal has to arrive cooked.",
      "We do both. Parcels go out household by household with the recipient recorded, so the same families are not served twice while their neighbours go without. Hot meals are cooked in bulk and distributed on a fixed rota so people are not queuing on rumour.",
    ],
    image: "/media/gaza-food/gaza-food-01.jpg",
    gallery: [
      "/media/gaza-food/gaza-food-02.jpg",
      "/media/gaza-food/gaza-food-03.jpg",
      "/media/gaza-food/gaza-food-04.jpg",
      "/media/gaza-food/gaza-food-05.jpg",
      "/media/gaza-food/gaza-food-06.jpg",
    ],
    accent: "magenta",
    highlights: [
      { label: "One family food parcel", value: "PKR 12,000" },
      { label: "Feeds", value: "A household for a month" },
      { label: "Tracked", value: "Household by household" },
    ],
  },
  {
    slug: "water-for-life",
    title: "Water for Life",
    region: "Gaza",
    summary:
      "Muslim Medical Mission provides drinking water to communities affected by damaged or unavailable water infrastructure. Water tankers supply camps and shelters with water for household and communal use.",
    body: [
      "Muslim Medical Mission provides drinking water to communities affected by damaged or unavailable water infrastructure. Water tankers supply camps and shelters with water for household and communal use.",
    ],
    image: "/media/gaza-water/gaza-water-01.jpg",
    gallery: [
      "/media/gaza-water/gaza-water-02.jpg",
      "/media/gaza-water/gaza-water-03.jpg",
      "/media/gaza-water/gaza-water-04.jpg",
      "/media/gaza-water/gaza-water-05.jpg",
    ],
    accent: "blue",
    highlights: [
      { label: "Water tankers", value: "Supply camps and shelters" },
      { label: "Household use", value: "Water provided for families" },
      { label: "Communal use", value: "Water for shared facilities" },
    ],
  },
  {
    slug: "winter-packages",
    title: "Winter packages",
    region: "Gaza",
    summary:
      "Quilts, blankets and warm clothing for families living under canvas through a Gaza winter.",
    body: [
      "A tent gives shelter from rain and almost nothing against cold. Winter kills infants and the elderly in canvas shelters every year, and it does so quietly, without making the news.",
      "Each package contains a heavy quilt, blankets and warm clothing sized for the children in the household. Distribution is recorded the same way food is, so coverage can be checked rather than assumed.",
    ],
    image: "/media/gaza-winter/gaza-winter-01.jpg",
    gallery: [
      "/media/gaza-winter/gaza-winter-02.jpg",
      "/media/gaza-winter/gaza-winter-03.jpg",
      "/media/gaza-winter/gaza-winter-04.jpg",
      "/media/gaza-winter/gaza-winter-05.jpg",
    ],
    accent: "navy",
    highlights: [
      { label: "One winter package", value: "PKR 9,000" },
      { label: "Contains", value: "Quilt, blankets, warm clothing" },
      { label: "Tracked", value: "Household by household" },
    ],
  },
  {
    slug: "health-education",
    title: "Health education campaigns",
    region: "Pakistan",
    summary:
      "Public awareness work on outbreaks, hygiene, maternal health and vaccination, delivered through mosques, schools and community halls.",
    body: [
      "Most of the illness our doctors see in the field was preventable. Clean water handling, hand hygiene, recognising the warning signs in a sick infant and knowing when a fever needs a clinic rather than a home remedy will save more lives than any single camp.",
      "We run campaigns through the institutions people already trust, mosques, schools and community elders, in the language they actually speak, and we return to the same places so the message is not a one off visit.",
    ],
    image: "/media/brand/health-campaign.jpg",
    gallery: ["/media/brand/community-gathering.jpg"],
    accent: "magenta",
    highlights: [
      { label: "Channels", value: "Mosques, schools, community" },
      { label: "Topics", value: "Outbreaks, hygiene, maternal health" },
      { label: "Method", value: "Repeat visits, local language" },
    ],
  },
  {
    slug: "professional-development",
    title: "Professional development",
    region: "Pakistan",
    summary:
      "Continuing education for Muslim healthcare professionals, and the ethical grounding that sits underneath the clinical work.",
    body: [
      "Our founding purpose is not only to treat people. It is to form healthcare professionals whose conduct at home and abroad reflects the faith they profess, and who understand that the way a patient is spoken to is part of the treatment.",
      "We run continuing education sessions, mentoring for students and junior doctors, and study circles on Islamic medical ethics, because a mission that trains no successors ends with its founders.",
    ],
    image: "/media/field/pillar-c-conference-01.jpg",
    gallery: [
      "/media/field/pillar-c-conference-02.jpg",
      "/media/field/pillar-c-conference-03.jpg",
      "/media/field/pillar-c-conference-04.jpg",
    ],
    accent: "navy",
    highlights: [
      { label: "For", value: "Students and practising clinicians" },
      { label: "Includes", value: "CPD, mentoring, ethics" },
      { label: "Purpose", value: "Succession, not dependency" },
    ],
  },
  {
    slug: "save-vision",
    title: "Save Vision",
    region: "Pakistan",
    summary:
      "Save Vision provides basic eye screening at medical camps, distributes reading glasses where needed, and refers patients requiring cataract surgery to partner hospitals for further treatment.",
    body: [
      "Save Vision provides basic eye screening at medical camps, distributes reading glasses where needed, and refers patients requiring cataract surgery to partner hospitals for further treatment.",
    ],
    image: "/media/field/free-medical-camp-doctors.jpg",
    gallery: ["/media/field/surgical-camp-rajanpur.jpg"],
    accent: "cyan",
    highlights: [
      { label: "Screening", value: "At medical camps" },
      { label: "Reading glasses", value: "Distributed on site" },
      { label: "Cataract surgery", value: "Referred to partner hospitals" },
    ],
  },
  {
    slug: "prison-healthcare",
    title: "Medical care in prisons",
    region: "Pakistan",
    summary:
      "Muslim Medical Mission provides scheduled medical care in correctional facilities, including clinical consultations, basic treatment, communicable disease screening, and hospital referrals when further care is required.",
    body: [
      "Muslim Medical Mission provides scheduled medical care in correctional facilities, including clinical consultations, basic treatment, communicable disease screening, and hospital referrals when further care is required.",
    ],
    image: "/media/field/surgical-camp-kotlakhpat.jpg",
    gallery: ["/media/field/field-tent-clinic.jpg"],
    accent: "navy",
    highlights: [
      { label: "Clinical consultations", value: "Scheduled rounds in correctional facilities" },
      { label: "Basic treatment", value: "On-site care provided" },
      { label: "Referrals", value: "When further care is required" },
    ],
  },
  {
    slug: "training",
    title: "Paramedic and first responder training",
    region: "Pakistan",
    summary:
      "Turning volunteers into people who can hold a scene, stop a bleed and keep an airway open until a doctor arrives.",
    body: [
      "In most of the districts we work in, the first person to reach a casualty is not an ambulance crew. It is a neighbour. Training that neighbour properly is the highest return intervention available to us.",
      "Our courses cover basic life support, haemorrhage control, fracture management, safe transport and triage, and they end with an assessment rather than a certificate handed out for attendance. Graduates form the standing teams that deploy when a district floods.",
    ],
    image: "/media/field/bls-rescue-1122.jpg",
    gallery: [
      "/media/field/first-aid-workshop-table.jpg",
      "/media/field/iv-fluid-therapy-station.jpg",
      "/media/field/bls-lecture-hall.jpg",
    ],
    accent: "blue",
    highlights: [
      { label: "Covers", value: "Life support, bleeding, triage" },
      { label: "Ends with", value: "Assessment, not attendance" },
      { label: "Feeds", value: "District response teams" },
    ],
  },
];

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* Giving                                                              */
/* ------------------------------------------------------------------ */

export const givingTiers = [
  {
    amount: "3,000",
    title: "Five patients seen",
    body: "Consultation, diagnosis and a full course of medicine for five people at a rural camp.",
    accent: "blue" as Accent,
  },
  {
    amount: "9,000",
    title: "One family kept warm",
    body: "A winter package of quilt, blankets and warm clothing for a household living under canvas.",
    accent: "navy" as Accent,
  },
  {
    amount: "12,000",
    title: "A family fed for a month",
    body: "A full food parcel for a displaced household, built around what can be cooked in a shelter.",
    accent: "magenta" as Accent,
  },
  {
    amount: "45,000",
    title: "A water tanker delivered",
    body: "Clean drinking water trucked into a displacement camp where the mains no longer run.",
    accent: "cyan" as Accent,
  },
];

export const allocation = [
  { label: "Direct programme delivery", value: 88 },
  { label: "Logistics and field transport", value: 8 },
  { label: "Administration", value: 4 },
];

/* ------------------------------------------------------------------ */
/* Field reports                                                       */
/* ------------------------------------------------------------------ */

export type Report = {
  slug: string;
  title: string;
  place: string;
  kind: string;
  excerpt: string;
  body: string[];
  image: string;
  date: string;
};

export const reports: Report[] = [
  {
    slug: "one-million-patients",
    title: "More than 1,000,000 patients given free consultation and medicine",
    place: "Punjab, AJK, Karachi, Tharparkar, Sindh, Balochistan & Gilgit-Baltistan",
    kind: "Medical Camps",
    excerpt:
      "Free medical camps are held in various cities and towns according to a preset schedule. Local population is also involved for logistic support. A special focus is put on underdeveloped districts and rural areas. In addition to Punjab we have successfully organized free medical camps in Azad Jammu and Kashmir, Karachi, Tharparkar, interior Sindh, Balochistan and Gilgit Baltistan.",
    body: [
      "Free medical camps are held in various cities and towns according to a preset schedule. Local population is also involved for logistic support. A special focus is put on underdeveloped districts and rural areas, where a district hospital may be a full day's journey away and the cost of a single consultation can be more than a family earns in a week.",
      "In addition to Punjab we have successfully organized free medical camps in Azad Jammu and Kashmir, Karachi, Tharparkar, interior Sindh, Balochistan and Gilgit Baltistan. Each camp runs on the same discipline: a standing drug list, a volunteer clinical team, and a record of every patient seen so the next deployment is better planned than the last.",
      "The one-million mark is not a fundraising claim. It is the running count of consultations logged across two decades of camps, each one free at the point of delivery and each one recorded so that the number can be checked rather than assumed.",
    ],
    image: "/media/field/pillar-a-camp-04.jpg",
    date: "2026",
  },
  {
    slug: "taunsa-flood-response",
    title: "Emergency boat deployment and medical relief along the rising Indus",
    place: "Taunsa Sharif, Dera Ghazi Khan",
    kind: "Disaster Response",
    excerpt:
      "Rapid response disaster teams led by senior clinicians mobilized emergency relief boats, setting up frontline triage and treating waterborne illnesses where roads had washed out.",
    body: [
      "When the Indus broke its banks around Taunsa Sharif, the roads went first. Villages that had been reachable by metalled road the week before were islands, and the families who had not evacuated were cut off from the nearest functioning clinic.",
      "Our rapid response teams, led by senior clinicians, mobilized emergency relief boats to reach households the water had isolated. On the far bank they set up frontline triage, treating waterborne illness, wound infection and the chronic conditions that had gone unmedicated since the water rose.",
      "The operation ran on the same logic as every deployment: assessment before procurement, local volunteers who know which households are quietly going without, and a record of every patient treated so the response can be measured rather than described.",
    ],
    image: "/media/field/hero-disaster-response.jpg",
    date: "2022",
  },
  {
    slug: "surgical-camp-central-jail",
    title: "Free Surgical Camp at Central Jail Kot Lakhpat and District Facilities",
    place: "Kot Lakhpat, Lahore",
    kind: "Surgical Mission",
    excerpt:
      "Volunteer consultant surgeons conducted vital procedures and provided specialized medication for incarcerated and underprivileged patients who otherwise had zero access to surgery.",
    body: [
      "Prisoners are among the least visible patients in the country. Overcrowding turns a single case of tuberculosis or hepatitis into an outbreak, and routine complaints go unexamined for months. For a patient who needs surgery, the barrier is higher still: no family to arrange it, no money to pay for it, and no way to reach a theatre.",
      "Our volunteer consultant surgeons conducted vital procedures inside Central Jail Kot Lakhpat and at district facilities, providing specialized medication for incarcerated and underprivileged patients who otherwise had zero access to surgery.",
      "The work is unglamorous and it is precisely the work our mission asks of us. Every procedure is recorded, every patient followed through recovery, and the same teams return on a schedule so that care is continuous rather than a one-off visit.",
    ],
    image: "/media/field/surgical-camp-kotlakhpat.jpg",
    date: "2025",
  },
  {
    slug: "bls-rescue-1122",
    title: "Emergency First Responder Training in collaboration with Punjab Rescue 1122",
    place: "Lahore & Regional Hubs",
    kind: "Responders Training",
    excerpt:
      "Hands-on trauma management, BLS, haemorrhage control, and disaster triage workshops training volunteers to act as certified frontline lifesavers in emergencies.",
    body: [
      "In most of the districts we work in, the first person to reach a casualty is not an ambulance crew. It is a neighbour. Training that neighbour properly is the highest return intervention available to us.",
      "In collaboration with Punjab Emergency Service Rescue 1122, our courses cover hands-on trauma management, basic life support, haemorrhage control, fracture management and disaster triage. They end with an assessment rather than a certificate handed out for attendance.",
      "Graduates form the standing teams that deploy when a district floods. The training turns everyday volunteers into certified frontline lifesavers, ready to hold a scene, stop a bleed and keep an airway open until a doctor arrives.",
    ],
    image: "/media/field/bls-rescue-1122.jpg",
    date: "2025",
  },
];

export const reportBySlug = (slug: string) => reports.find((r) => r.slug === slug);

/* ------------------------------------------------------------------ */
/* Our means - under the guidance of the Quran and Sunnah              */
/* ------------------------------------------------------------------ */

export const means = [
  "Service to humanity without any discrimination of gender or genetics, race or religion, geography or generation, and time or era.",
  "Human resource development for peace and disaster.",
  "Developing and practicing medical science and technology for peace.",
];

/* ------------------------------------------------------------------ */
/* Where we work                                                       */
/* ------------------------------------------------------------------ */

export const regions = [
  {
    name: "Lahore",
    detail: "Professional education, medical conferences, training, and coordination of MMM's national programs.",
    focus: "",
  },
  {
    name: "Tharparkar",
    detail: "Free medical care and humanitarian assistance for communities facing drought, disease, and limited healthcare access.",
    focus: "",
  },
  {
    name: "Chitral",
    detail: "Emergency medical and humanitarian support for communities affected by devastating floods.",
    focus: "",
  },
  {
    name: "South Punjab",
    detail: "Medical camps and flood-relief assistance for vulnerable families across underserved communities.",
    focus: "",
  },
  {
    name: "Balochistan",
    detail: "Healthcare outreach and humanitarian relief for remote and disaster-affected communities.",
    focus: "",
  },
  {
    name: "Gilgit-Baltistan",
    detail: "Free medical services reaching communities in some of Pakistan's most remote areas.",
    focus: "",
  },
  {
    name: "Azad Jammu & Kashmir (AJK)",
    detail: "MMM has extended its healthcare outreach to underserved communities in AJK through free medical services and community-focused healthcare initiatives.",
    focus: "",
  },
  {
    name: "Dera Ghazi Khan",
    detail: "Medical and humanitarian outreach supporting communities affected by poverty, floods, and limited healthcare access.",
    focus: "",
  },
];
