// =============================================================
//  RESUME CONTENT
//  Edit this file to update the site. Everything else picks
//  up these values automatically.
// =============================================================

export const profile = {
  firstName: "Jessica",
  lastName: "Kriklewicz",
  title: "Senior Art Director, Product Designer & Design Lead",
  tagline:
    "End-to-end design across brand, graphic, product, and web. Eighteen years spanning enterprise organisations, leading agencies, and freelance consultancy.",
  email: "jessie@jessie-co.com",
  location: "Available globally",
  locationDetail: "Sydney · Singapore · Remote",
  website: "jessie-co.com",
  websiteUrl: "https://jessie-co.com",
  portfolioUrl: "https://www.jessie-co.com/portfolio",
  initials: "JK",
};

export const about = [
  "With over 18 years of experience across leading agencies, enterprise organisations, and freelance consultancy, I design and deliver high-quality digital experiences that balance user needs with business outcomes.",
  "My work spans brand, graphic, product, and web. From early concept and strategy through to final UI, motion, and development. I've led design across large-scale platforms used by millions, and worked directly with founders and small teams to bring new ideas to life.",
  "I'm passionate about staying ahead of where design is going. Currently deep in AI-driven creative workflows, exploring how they sharpen craft, accelerate iteration, and open up new possibilities.",
];

export const aboutHeadline = {
  before: "A designer shaped by",
  accent: "scale, range, and craft.",
};

// =============================================================
//  ROLES
// =============================================================

export type Project = {
  title: string;
  place?: string;
  summary: string;
  bullets?: string[];
  link?: { label: string; url: string };
};

export type Role = {
  period: string;
  place: string;
  title: string;
  company: string;
  summary?: string;
  bullets?: string[];
  projectsLabel?: string;
  projects?: Project[];
  achievements?: { label: string; items: string[] };
  otherClients?: { label: string; text: string };
  notableClients?: { label: string; text: string };
};

export const roles: Role[] = [
  {
    period: "Sept 2022 — Present",
    place: "Sydney & Singapore",
    title: "Creative Director, Designer & Founder",
    company: "@ Jessie-Co Creative",
    summary:
      "Leading end-to-end design and delivery across brand, graphic, product, and web for startups, founders, and consultancy clients.",
    bullets: [
      "Delivered brand strategy, visual identity, UX, UI, motion, and Webflow development across multiple projects",
      "Worked directly with founders to define positioning, messaging, and digital experience",
      "Led all client communication, project direction, scope, and delivery independently",
    ],
    projectsLabel: "Stand out projects",
    projects: [
      {
        title: "Drift Connections",
        place:
          "Premium Technology Integration Consultancy · Byron Bay / Northern Rivers",
        summary:
          "Led the full strategy, brand repositioning, design and Webflow build of a premium website for a design-led technology consultancy serving luxury residential, retreat, and boutique commercial clients.",
        bullets: [
          "Full brand positioning in their premium market",
          "Developed a calm, architectural visual direction with custom AI-generated image treatments, motion, and video concepts to communicate invisible technology systems",
          "Wireframed, designed, and built the responsive Webflow site, managing hosting, launch, and post-launch refinements",
        ],
        link: { label: "View project", url: "https://www.driftconnections.com/" },
      },
      {
        title: "Niina Nummela",
        place: "Wellness & Coaching",
        summary:
          "Logo design, brand positioning, and full website build to launch her 12-week flagship coaching program.",
        bullets: [
          "Full brand identity, minimal and premium",
          "Site architecture, wireframes, and content strategy",
          "Copywriting and messaging across the full site",
          "Visual design with motion and micro-interactions throughout",
          "Designed and built the responsive Webflow site",
        ],
        link: { label: "View project", url: "https://niina-nummela-2026-03-14-59d50f0f9a996a.webflow.io/" },
      },
    ],
  },
  {
    period: "Nov 2016 — Sept 2022",
    place: "Full-time · Sydney",
    title: "Senior UI / Product Designer",
    company:
      "@ Commonwealth Bank — Australia's number 1 bank (8 million users)",
    summary:
      "Led the visual design across high-impact features within the CommBank App and digital ecosystem, working in a collaborative Agile environment to deliver end-to-end experiences across product, UX, and UI.",
    bullets: [
      "Provided strategic design direction and creative vision throughout the app",
      "Leadership, mentoring, and support for junior and mid-tier designers",
      "Advanced the Design System and drove pattern efficiencies",
      "Led continuous process improvement and cross-team collaboration",
      "Facilitated collaboration sessions across teams for idea generation and evaluation",
    ],
    projectsLabel: "Stand out projects",
    projects: [
      {
        title: "CommBank App re-design",
        summary:
          "Lead UI visual designer on the app re-design, increasing discoverability of features and sales products, optimising accessibility, and giving customers the ability to customise their experience. Provided strategic design direction for new Accounts and Payments features, mentoring designers to maintain coherency.",
      },
      {
        title: "Coronavirus Money Plan",
        summary:
          "Lead UI visual designer on a major new feature to help customers affected by COVID-19. Worked with senior stakeholders, behavioural scientists, and copywriters, reducing release to market from six months to two.",
      },
      {
        title: "Automated Chat Platform",
        place: "Ceba Chat",
        summary:
          "Led the visual experience of a new platform spanning the CommBank App, NetBank, and CommBank.com.au. Managed end-to-end design across 4 Agile scrum teams, delivering in nine months with increased sales. Developed a comprehensive UI pattern system, style guides, and specs that streamlined cross-team collaboration. Recruited and led designers to support delivery. Collaborated with senior stakeholders to produce conceptual interactive prototypes shaping product vision, including how to bring Chat into branches.",
      },
    ],
    achievements: {
      label: "Achievements",
      items: [
        "Designed three products that received the CEO Award",
        "Received an award for excellence and exceeding role expectations",
      ],
    },
  },
  {
    period: "Aug 2011 — Nov 2016",
    place: "Full-time · Sydney",
    title: "Creative Lead / Senior UI / Product Designer",
    company: "@ Wiliam — Digital Design Agency",
    summary:
      "Led design across complex digital projects for high-profile and boutique clients across many industries, combining UX, UI, art direction, and brand. Later managed a team of designers and front-end developers, including scheduling and recruitment.",
    projectsLabel: "Stand out projects",
    projects: [
      {
        title: "Mastercard — Cash Passport",
        summary:
          "Led the complete visual redesign of three Cash Passport responsive websites, including style guides, collaborating closely with the UX team and the client to enhance conversion rates.",
      },
      {
        title: "Mortgage Choice — Home Loan Experts",
        summary:
          "Trusted as their dedicated designer for 3+ years, leading the redesign of their online presence across multiple websites. Work included stakeholder management, art direction, visual UI style guide creation, and detailed specs. All designs aligned with brand guidelines. The goal was to boost online sales, brand awareness, and expansion into new markets.",
      },
      {
        title: "Tresillian",
        place: "Australia's largest child and family health organisation",
        summary:
          "Lead visual UI designer for the responsive website redesign, prioritising an optimal experience for tired parents seeking support. Also directed the photographer responsible for the website's imagery.",
      },
    ],
    otherClients: {
      label: "Other notable clients",
      text: "Fairfax Media, Compare Insurance, Roadshow Entertainment, Haverick Meats, Dimmi, Mode Sportif",
    },
  },
  {
    period: "Jan — May 2010",
    place: "Full-time Contract · Sydney",
    title: "Graphic Designer",
    company: "@ BetEzy — Betting Agency",
    summary:
      "Designed web and print merchandise for the primary marketing brand and 40+ sub-brands across Australian sport.",
    notableClients: {
      label: "Notable clients",
      text: "AFL and NRL teams including Essendon, St Kilda, Port Power, Western Bulldogs, Demons, Kangaroos, Crows, Bulldogs, Rabbitohs, Knights, Sharks, and Titans.",
    },
  },
  {
    period: "Nov 2007 — Jan 2010",
    place: "Full-time · Sydney",
    title: "Web & Graphic Designer",
    company: "@ FuseFarm — Digital Design Agency",
    summary:
      "Designed websites for clients including Sydney Festival 2009, Sydney Italian Festival 2009, Suncorp, and Eyecorp.",
    projectsLabel: "Stand out freelance projects (during this period)",
    projects: [
      {
        title: "Madera",
        place: "Restaurant / Cafe · Sydney",
        summary:
          "Worked closely with the owner to create the full identity and branding, including signage, typography, photography direction, and ongoing collateral.",
      },
      {
        title: "The Purist Company",
        place: "Beauty · Australia-wide",
        summary:
          "Responsible for creative direction and design of [A'kin] pureBaby brochure.",
      },
    ],
  },
];

// =============================================================
//  EDUCATION
// =============================================================

export type EducationEntry = {
  index: string;
  course: string;
  school?: string;
  when: string;
  desc?: string;
};

export const education: EducationEntry[] = [
  {
    index: "i.",
    course: "AI Web Design Sprint",
    school: "@ Flux Academy · Julian Galluzzo",
    when: "April 2026 · In progress",
    desc: "Intensive program on AI-assisted design-to-development workflows using Claude Code, Next.js, Sanity CMS & Vercel.",
  },
  {
    index: "ii.",
    course: "Webflow University",
    when: "2024",
  },
  {
    index: "iii.",
    course: "User Experience Design",
    school: "@ General Assembly",
    when: "Aug — Nov 2015 · Part-time, Sydney",
  },
  {
    index: "iv.",
    course: "CSS & HTML Web Design",
    school: "@ Shillington College",
    when: "May — Aug 2014 · Part-time, Sydney",
  },
  {
    index: "v.",
    course: "Diploma of Visual Communications & Graphic Design",
    school: "@ Croydon TAFE",
    when: "2003 — 2004 · Full-time, Adelaide",
  },
  {
    index: "vi.",
    course: "Certificate in Applied Design",
    school: "@ Tea Tree Gully TAFE",
    when: "2002 · Full-time, Adelaide",
  },
  {
    index: "vii.",
    course: "Certificate in Fashion Design",
    school: "@ East Sydney TAFE",
    when: "2000 · Full-time, Sydney",
  },
];

// =============================================================
//  SKILLS
// =============================================================

export type SkillRow = {
  name: string;
  details: string[];
};

export const skills: SkillRow[] = [
  {
    name: "Brand & Visual Design",
    details: [
      "Visual identity",
      "Art direction",
      "Premium brand systems",
      "Illustration",
      "Typography",
      "Image direction",
    ],
  },
  {
    name: "Motion & Interaction Design",
    details: [
      "Micro-interactions",
      "Transitions",
      "Scroll-based animation",
      "Web-ready video",
      "Performance-conscious motion",
    ],
  },
  {
    name: "Tools & Technology",
    details: [
      "Figma",
      "Webflow",
      "Adobe Creative Suite",
      "Claude Code",
      "Next.js (learning with AI)",
    ],
  },
  {
    name: "Product & UI Design",
    details: [
      "User interface design",
      "Wireframing and prototyping",
      "Interaction design",
      "Design systems",
      "Strategic design thinking",
    ],
  },
  {
    name: "Delivery & Collaboration",
    details: [
      "Stakeholder management",
      "Workshop facilitation",
      "Cross-functional teams",
      "Leadership and mentoring",
      "Presenting to all levels",
      "Copywriting and SEO awareness",
    ],
  },
  {
    name: "AI-Driven Creative",
    details: [
      "AI image generation",
      "AI-assisted design and development workflows",
      "Creative direction with AI tools",
    ],
  },
];

// =============================================================
//  NAV
// =============================================================

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
