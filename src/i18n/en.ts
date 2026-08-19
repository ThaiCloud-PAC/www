import type { Dictionary } from "./th";

/**
 * English dictionary. Typed as the Thai one, so a missing or renamed key here is
 * a build error. Product names, "OMS", "ZORT", "VDO Proof", "Dispatch Gate" and
 * "OMS Status Guard" stay untranslated in both languages.
 */
export const en: Dictionary = {
  nav: {
    home: "Home",
    problems: "Problems",
    solution: "Solution",
    products: "Products",
    faq: "FAQ",
    contact: "Contact",
  },

  a11y: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toTop: "Back to top",
    theme: "Toggle light/dark mode",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    themeSystem: "Follow system",
    language: "Change language",
    problemGroups: "Problem groups",
    diagram: "Packiko platform diagram",
  },

  hero: {
    eyebrow: "Packiko by ThaiCloud",
    heading: "Intelligence Layer",
    rotating: ["for Logistics.", "for Fulfilment.", "for eCommerce."],
    sub: "Packiko sits behind your OMS, so online shops and warehouse teams see real physical stock, pack without mistakes, and keep a video record of every order. Built by a team that has run real warehouses for more than 10 years.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "See How It Works",
    chips: [
      { value: "10+ years", label: "real warehouse ops" },
      { value: "80%", label: "error reduction" },
      { value: "30%", label: "faster packing" },
    ],
  },

  pillars: [
    { label: "Verification", sub: "Video proof" },
    { label: "Visibility", sub: "Real stock" },
    { label: "Logistics", sub: "Carrier links" },
    { label: "HUB Network", sub: "Branch nodes" },
    { label: "Fintech", sub: "Working capital" },
  ],

  problems: {
    eyebrow: "The Problem",
    heading: "The better you sell, the easier it breaks",
    lead: "Stock that doesn't match, wrong items packed, claims you can't answer — and it doesn't stop at the shop. It reaches the warehouse floor and the people working it.",
    groups: [
      {
        title: "Online shops",
        lead: "As orders grow, the back office starts to slip",
        items: [
          { t: "Stock doesn't match", d: "Sold, but nobody can find it in the warehouse — so the order is cancelled, the customer refunded, and the shop's rating takes the hit." },
          { t: "Wrong items packed", d: "Wrong model, colour or size picked, or items missing from the box — a reshipment, another delivery fee, and your team's time gone." },
          { t: "Customers file claims", d: "The customer says the parcel was incomplete, never arrived, or held the wrong item — and the shop has no evidence to check it against." },
          { t: "Marketplaces tend to side with the buyer", d: "With no proof of what was actually packed, the shop usually ends up refunding, even when the team followed every step correctly." },
        ],
      },
      {
        title: "The warehouse floor: pick–pack–ship",
        lead: "Order volume climbs, people walk further, and nobody sees the whole picture",
        items: [
          { t: "One order at a time, walking the same aisles twice", d: "No waves, no pick route — staff walk far further than they need to, and peak season makes it worse." },
          { t: "Packed, with nothing to show for it", d: "Once the box is closed, who packed it, what went in, and when are all unknown. When a claim arrives, there is no answer." },
          { t: "Shipping orders that were already cancelled", d: "The OMS cancelled the order but the floor never knew. The parcel has left the building, has to be recovered, and the shipping cost is lost." },
          { t: "Bottlenecks show up too late", d: "No view of which station orders are stuck at or when the SLA breaks — the customer asks first." },
        ],
      },
      {
        title: "Staff and teams",
        lead: "Warehouse work is people work, but most systems have no idea who did what",
        items: [
          { t: "Shared machines, so nobody can say who did it", d: "Several people use the same machine at a station, work is recorded against the 'station' rather than a person, and there is nothing to trace back." },
          { t: "No per-person measurement", d: "Who picks fast, who packs accurately, who slips often — unknown. Staffing and bonuses end up based on gut feel." },
          { t: "New staff have to memorise everything", d: "No on-floor guidance, long ramp-up, quality depends on the veterans — and when they leave it starts over." },
          { t: "Supervisors decide without data", d: "No view of which bench is overloaded, which zone is idle, or how many people today needs — so it's always over- or under-staffed." },
        ],
      },
    ],
  },

  solution: {
    eyebrow: "The Solution",
    heading: "Real control, from stock on the shelf to the parcel on the truck",
    lead: "Packiko sits behind your OMS. You keep selling on the same channels; we take care of the physical stock, pick–pack–ship, the evidence and the people on the floor — all on one shared API.",
    mapHint: "← scroll the diagram →",
    items: [
      { t: "Inventory Control", d: "See real warehouse stock in real time, separate from the sales stock in your OMS. Nothing goes missing, nothing oversells." },
      { t: "AI Wave & Pick Route", d: "Group orders into waves and lay out the shortest pick route — less walking, more picks per hour." },
      { t: "Packing Verification", d: "Every item scanned before the box closes. Wrong model, wrong size or a missing item is flagged on the spot." },
      { t: "VDO Proof", d: "Every order recorded while it is packed, searchable by order number, time or packer — an answer to a claim in seconds." },
      { t: "OMS Status Guard & Dispatch Gate", d: "Status checked against the OMS before packing and before dispatch. Cancelled orders are blocked immediately, and every box passes the gate before it leaves the warehouse." },
      { t: "Worker Identity & Performance", d: "A badge scan identifies the person at a shared station, so every pick, pack and approval belongs to a real name — with backlog, bottlenecks and per-person output on one screen." },
    ],
  },

  stats: {
    items: [
      { label: "% Error Reduction" },
      { label: "% Faster Packing" },
      { label: "% Labor Efficiency" },
      { label: "Orders / Day" },
    ],
    line: "Built by operators — by a team that has run real warehouses for more than 10 years, not from a meeting room.",
    cta: "Book a Demo",
  },

  products: {
    eyebrow: "Our Products",
    heading: "One Platform. Four Ways In.",
    lead: "Four products on one Packiko Core — from a record button inside the system you already use, to an enterprise 3PL warehouse. Start where it fits your business and grow without moving systems.",
    more: "Talk to us",
    cards: [
      {
        title: "Packiko Add-in",
        fit: "For OMS / marketplace partners and the merchants on them",
        detail: "VDO Proof as a Web SDK, embedded straight into a partner's packing screen (ZORT, for example). Video evidence for every order, fewer claims and disputes — and the merchant changes nothing.",
      },
      {
        title: "Packiko Prime",
        fit: "For online shops already on an OMS that are starting to feel the physical-stock pain",
        detail: "Separates real warehouse stock from sales stock — SKUs, inbound, packing, returns, optional VDO Proof and a basic dashboard. Quick to start, no change to how you sell.",
      },
      {
        title: "Packiko Ultra",
        fit: "For fulfilment centers, 3PLs and brands running their own warehouse",
        detail: "Full operational control — waves, pick and pack stations, Dispatch Gate, OMS Status Guard, staff performance, SLA and bottleneck views, and enterprise reporting.",
      },
      {
        title: "Packiko Hub",
        fit: "For branch networks, parcel shops and partner storefronts",
        detail: "Turns a branch into a micro fulfilment node — parcel intake, packing service, customer stock held at the branch, and a branch dashboard. Extend the network closer to the customer.",
      },
    ],
    matrix: {
      caption: "You are… / you need…",
      legend: "● core strength · ○ supported · – not what this product is for",
      rows: [
        "Already on an OMS, want video evidence without changing systems",
        "Separate real stock from sales stock — inbound, packing, returns",
        "A large warehouse / 3PL with many clients and stations",
        "Waves · Dispatch Gate · OMS Status Guard · per-person measurement",
        "Turn branches / parcel shops into fulfilment points",
      ],
    },
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "What is Packiko?",
        a: "A warehouse control system for online shops, warehouse teams and 3PLs — real stock control, packing mistakes prevented, video on every order, and a record of who did what on the floor, all on one shared API.",
      },
      {
        q: "Do we have to change our OMS or sales system?",
        a: "No. Packiko sits behind your OMS; you keep selling and managing orders on the same channels. LISA pulls paid orders across for you (ZORT first, other systems can be added) and syncs statuses back automatically. On the floor, the pick–pack steps simply get clearer.",
      },
      {
        q: "How is this different from putting a camera over the packing bench?",
        a: "A camera only gives you footage after the fact. Packiko finds the video by order number, time or packer instantly, and works alongside item scanning, stock control, and the OMS Status Guard that stops a cancelled order from being shipped.",
      },
      {
        q: "Staff share machines — how do you know who did what?",
        a: "Shared machines log in as a station account and each worker scans a badge before starting. Personal devices use SSO. Every pick, pack and approval is therefore tied to a real person, traceable and measurable.",
      },
      {
        q: "If the OMS goes down mid-day, does the floor stop?",
        a: "No. Pick and pack stations keep working; those orders are flagged OMS-unverified and must clear a status check with the OMS at the Dispatch Gate before anything is released. A cancelled order still cannot get out.",
      },
      {
        q: "Which product should we start with?",
        a: "Already on an OMS and want real stock control → Prime · want video evidence inside your existing system → Add-in · fulfilment center / 3PL → Ultra · branch network → Hub. Not sure? Send us a note with the form below and our team will look at your operation with you.",
      },
    ],
  },

  contact: {
    heading: "Ready to make your warehouse intelligent?",
    locationHeading: "Our Location",
    lead: "Tell us briefly how your operation runs today. A team that has run real warehouses for more than 10 years will assess it and suggest the right place to start.",
    form: {
      name: "Your Name",
      email: "Email Address *",
      subject: "Subject",
      message: "Tell us about your operation",
      send: "Send Message",
      sending: "Sending…",
      success: "Message sent — our team will get back to you shortly.",
      errorGeneric: "Something went wrong. Please try again, or email us at hello@thaicloud.com",
      errorRequired: "Please fill in your name, email and message.",
      errorEmail: "That email address doesn't look right.",
    },
  },

  footer: {
    blurb: "Packiko by ThaiCloud — The Fulfilment Ecosystem for Online Commerce.",
    products: "Products",
    company: "Company",
    contact: "Contact",
    links: {
      problems: "Problems we solve",
      solution: "Solution",
      faq: "FAQ",
      contact: "Contact",
    },
    city: "Bangkok, Thailand",
  },
};
