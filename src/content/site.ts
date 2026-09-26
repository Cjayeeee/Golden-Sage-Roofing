import heroPremium from "@/assets/hero-premium.jpg";
import heroArchitectural from "@/assets/hero-architectural.jpg";
import shingleArchitectural from "@/assets/shingle-architectural.jpg";
import shingleAsphalt from "@/assets/shingle-asphalt.jpg";
import shinglePremium from "@/assets/shingle-premium.jpg";
import roofingProducts from "@/assets/roofing-products.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";
import rooflineDetail from "@/assets/roofline-detail.jpg";

export const images = {
  heroPremium,
  heroArchitectural,
  shingleArchitectural,
  shingleAsphalt,
  shinglePremium,
  roofingProducts,
  projectResidential,
  projectCommercial,
  projectRenovation,
  rooflineDetail,
};

export const company = {
  name: "Golden Sage Roofing Pvt. Ltd.",
  shortName: "Golden Sage Roofing",
  description:
    "A Canadian roofing company supplying roofing shingles and roofing solutions for residential and commercial buildings.",
  address: "[CANADIAN BUSINESS ADDRESS]",
  phone: "[PHONE NUMBER]",
  email: "[EMAIL ADDRESS]",
  hours: "[BUSINESS HOURS]",
  serviceArea: "[SERVICE AREAS TO BE CONFIRMED]",
};

export type NavItem = { label: string; to: string };

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Roofing Shingles", to: "/roofing-shingles" },
  { label: "Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
];

export const navV2: NavItem[] = [
  { label: "Home", to: "/v2" },
  { label: "About Us", to: "/v2/about" },
  { label: "Roofing Shingles", to: "/v2/roofing-shingles" },
  { label: "Projects", to: "/v2/projects" },
  { label: "Contact Us", to: "/v2/contact" },
];

export const whyUs = [
  {
    title: "Quality Roofing Solutions",
    body: "We supply roofing shingles and related roofing products selected for residential and commercial applications.",
  },
  {
    title: "Professional Service",
    body: "Clear communication from first enquiry through to product selection and project handover.",
  },
  {
    title: "Built for Lasting Protection",
    body: "Roofing systems are specified as a complete assembly, not a single layer, so the roof performs as intended.",
  },
  {
    title: "Customer-Focused Approach",
    body: "We take time to understand the building, the budget and the result you want before recommending a product.",
  },
];

export const values = [
  { title: "Quality", body: "We work with roofing products we can stand behind and specify them honestly." },
  { title: "Integrity", body: "Straightforward advice and no claims we cannot support with documentation." },
  { title: "Craftsmanship", body: "Detailing, flashing and finish work are where a roof is won or lost." },
  { title: "Customer Focus", body: "Your building, your timeline, your budget — the recommendation follows from those." },
];

export type Product = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  summary: string;
  detail: string;
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "architectural-shingles",
    name: "Architectural Shingles",
    image: shingleArchitectural,
    alt: "Close-up of layered dimensional architectural asphalt roofing shingles",
    summary:
      "Laminated, multi-layer shingles with a dimensional profile and pronounced shadow lines.",
    detail:
      "Architectural shingles are built from bonded layers, which gives the roof a deeper, more sculpted appearance than a flat three-tab profile. They are a common choice where the roof is a visible part of the elevation.",
    applications: ["Residential new builds", "Roof replacement", "Visible steep-slope roofs"],
  },
  {
    slug: "asphalt-shingles",
    name: "Asphalt Shingles",
    image: shingleAsphalt,
    alt: "Close-up of brown three-tab asphalt roofing shingles in even rows",
    summary: "Traditional asphalt shingles with a uniform, flat profile and a broad colour range.",
    detail:
      "Asphalt shingles remain the most widely used steep-slope roofing material in Canada. They install quickly, suit a wide range of roof shapes, and are typically the most cost-effective shingle option.",
    applications: ["Residential roofing", "Garages and outbuildings", "Budget-conscious replacement"],
  },
  {
    slug: "premium-shingles",
    name: "Premium Shingles",
    image: shinglePremium,
    alt: "Close-up of premium slate-look designer roofing shingles with deep shadow bands",
    summary: "Designer profiles that reference slate and wood shake while installing as a shingle.",
    detail:
      "Premium or designer shingles use heavier constructions and distinctive cuts to imitate traditional roofing materials. They suit heritage properties and architecturally led projects where the roof carries the design.",
    applications: ["Architect-led homes", "Heritage properties", "Feature rooflines"],
  },
  {
    slug: "other-roofing-products",
    name: "Other Roofing Products",
    image: roofingProducts,
    alt: "Ridge cap shingles, underlayment roll, drip edge and roof vent arranged on a shingle roof",
    summary: "Underlayment, ridge caps, starter strips, ventilation and flashing components.",
    detail:
      "A shingle roof is a system. Underlayment, starter strips, ridge caps, ventilation and edge metal all affect how the finished roof performs, and we can supply these alongside the shingles.",
    applications: ["Complete roof assemblies", "Ventilation upgrades", "Edge and flashing details"],
  },
];

export const productSpecFields = [
  "Available colours",
  "Material",
  "Dimensions",
  "Warranty",
  "Technical specifications",
  "Manufacturer",
  "Installation information",
  "Product brochure / specification PDF",
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: "Residential" | "Commercial";
  category: "New Construction" | "Renovation";
  solution: string;
  description: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    slug: "project-placeholder-01",
    name: "[PROJECT NAME]",
    location: "[CITY, PROVINCE]",
    type: "Residential",
    category: "New Construction",
    solution: "Architectural shingles",
    description:
      "Placeholder entry. Project details will be published once the completed project information is confirmed.",
    image: projectResidential,
    alt: "Two-storey Canadian family home with a grey architectural shingle roof",
  },
  {
    slug: "project-placeholder-02",
    name: "[PROJECT NAME]",
    location: "[CITY, PROVINCE]",
    type: "Commercial",
    category: "New Construction",
    solution: "Asphalt shingles",
    description:
      "Placeholder entry. Commercial project details will be added once confirmed with the client.",
    image: projectCommercial,
    alt: "Low-rise Canadian commercial building with a sloped shingle roof",
  },
  {
    slug: "project-placeholder-03",
    name: "[PROJECT NAME]",
    location: "[CITY, PROVINCE]",
    type: "Residential",
    category: "Renovation",
    solution: "Premium shingles",
    description:
      "Placeholder entry. Renovation scope and product selection to be confirmed before publication.",
    image: projectRenovation,
    alt: "Canadian home during a roof renovation with new dark shingles partly installed",
  },
];

export const selectionFactors = [
  { title: "Local climate", body: "Snow load, ice, wind exposure and seasonal temperature swings differ across Canada." },
  { title: "Building design", body: "Elevation, materials and colour all influence which roof profile suits the building." },
  { title: "Roof slope", body: "Pitch determines which products can be used and how the assembly is detailed." },
  { title: "Installation requirements", body: "Fastening, underlayment and ventilation follow the manufacturer's instructions." },
  { title: "Product specifications", body: "Compare documented specifications rather than general marketing claims." },
  { title: "Maintenance requirements", body: "Inspection and upkeep expectations should be understood before selection." },
];

export const projectTypes = ["New roof", "Roof replacement", "Renovation", "Repair", "Supply only", "Not sure yet"];
export const propertyTypes = ["Residential", "Commercial", "Multi-unit", "Other"];
export const timelines = ["As soon as possible", "1–3 months", "3–6 months", "6+ months", "Planning stage"];
