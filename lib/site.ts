export const site = {
  name: "EvEra",
  tagline: "Phuket's Complete EV Ecosystem",
  domain: "evera.asia",
  phone: "092-279-6111",
  line: "@easysupercharge",
  lineUrl: "https://line.me/R/ti/p/@easysupercharge",
  email: "ev@easynetwork.co.th",
  facebook: "https://facebook.com/easysupercharge",
  location: "Phuket, Thailand",
  interimWeb: "easysupercharge.com",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "EV Fleet Solutions", href: "/corporate-fleet" },
  { label: "ESG", href: "/esg" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "250+", label: "EV Fleet" },
  { value: "9", label: "Charging Stations" },
  { value: "5,120kW", label: "Network Capacity" },
  { value: "1965", label: "Heritage Since" },
];

export const ecosystem = [
  {
    slug: "easy-super-charge",
    title: "Easy Super Charge",
    summary: "Phuket's fastest-growing public charging network — 9 stations, 5,120kW planned.",
    icon: "bolt",
    href: "/ecosystem/easy-super-charge",
  },
  {
    slug: "easyvolt-fleet",
    title: "Easy Volt Fleet",
    summary: "250+ EV taxis under Easy Volt and Erawan Volt — operating 24/7 island-wide.",
    icon: "taxi",
    href: "/ecosystem/easyvolt-fleet",
  },
  {
    slug: "phuket-ev-drive",
    title: "Phuket EV Drive",
    summary: "EV rental for tourists and residents — daily, weekly, monthly packages.",
    icon: "car",
    href: "/ecosystem/phuket-ev-drive",
  },
  {
    slug: "ev-fleet-solutions",
    title: "EV Fleet Solutions",
    summary: "Our Corporate Fleet offering — all-inclusive monthly EV programmes for hotels, corporate, government and industrial.",
    icon: "building",
    href: "/corporate-fleet",
  },
  {
    slug: "flagship-hub",
    title: "Flagship 880kW Hub",
    summary: "Phuket's largest charging hub — under construction, opening 2026.",
    icon: "hub",
    href: "/ecosystem/flagship-hub",
  },
  {
    slug: "prime-ev-mobility",
    title: "Prime EV Mobility",
    summary: "Mass-transit electrification — EV vans and buses for Phuket, launching 2027.",
    icon: "bus",
    href: "/ecosystem/prime-ev-mobility",
  },
];

export const stations = [
  { name: "Katu Hub", power: "480kW", status: "Live", vendor: "OneCharge" },
  { name: "Bangchak Katu", power: "240kW × 2", status: "Live", vendor: "Galvanic" },
  { name: "Old Town Hub", power: "480kW", status: "Live", vendor: "OneCharge" },
  { name: "Thalang", power: "240kW × 2", status: "Live", vendor: "Galvanic" },
  { name: "Bus Terminal", power: "240kW × 2", status: "Live", vendor: "Galvanic" },
  { name: "Flagship Hub", power: "880kW", status: "Q2 2026", vendor: "TBA" },
  { name: "North Phuket", power: "880kW", status: "Q3 2026", vendor: "TBA" },
  { name: "Patong Beach", power: "480kW", status: "Q4 2026", vendor: "TBA" },
  { name: "North Shore", power: "480kW", status: "TBD", vendor: "TBA" },
];

export const networkCapacity = {
  live: 2400,
  coming: 2720,
  total: 5120,
};

export const fleetModels = [
  {
    name: "MG4 D Standard Range",
    type: "Hatchback EV",
    range: "350 km",
    charge: "50 kW DC",
    image: "/assets/fleet/MG4.png",
    description: "Compact daily-driver hatchback — ideal for executives and pool fleets.",
  },
  {
    name: "MG S5 EV D+",
    type: "SUV EV",
    range: "400 km",
    charge: "80 kW DC",
    image: "/assets/fleet/MG S5.png",
    description: "Premium SUV for hotel airport transfers and executive transport.",
  },
  {
    name: "Riddara Econ 63 kWh",
    type: "Pickup EV",
    range: "380 km",
    charge: "80 kW DC",
    image: "/assets/fleet/Riddara Econ 63kWh.png",
    description: "Workhorse pickup for industrial, logistics, and service operations.",
  },
];
