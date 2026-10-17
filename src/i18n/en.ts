import type { Dictionary } from "./th";

/**
 * English dictionary. Typed as the Thai one, so a missing or renamed key here is
 * a build error. Product names, "OMS", "ZORT", "VDO Proof", "Dispatch Gate" and
 * "OMS Status Guard" stay untranslated in both languages. The people in the
 * scene get local names in each language (Mike, Emma, Kate here).
 */
export const en: Dictionary = {
  nav: {
    speed: "Speed",
    intelligence: "Intelligence",
    network: "Network",
    products: "Products",
    faq: "FAQ",
    contact: "Contact",
    cta: "Talk to us",
  },

  a11y: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Change language",
    scene:
      "3D illustration: a warehouse handling more orders in the same space, the warehouse brain directing people and machines, and parcel shops across the country becoming fulfillment points.",
    diagram: "How Packiko connects",
  },

  hero: {
    hello: "Packiko by ThaiCloud · The future of fulfillment",
    title: ["More orders.", "Fewer people.", "Faster delivery."],
    lead: "Three stories about fulfillment.",
    stories: ["Speed", "Intelligence", "Network"],
    ctaPrimary: "Talk to us",
    ctaSecondary: "Start the story",
    scroll: "Scroll",
  },

  chapters: [
    { num: "01", name: "Speed" },
    { num: "02", name: "Intelligence" },
    { num: "03", name: "Network" },
  ],

  speed: {
    intro: {
      title: "e-Commerce keeps growing.",
      body: "More sales mean more orders. But many warehouses cannot pack fast enough. Staff pick one order at a time and walk the same aisles again and again.",
    },
    wave: {
      kicker: "Wave W-0193 · 40 orders",
      title: "Orders become a wave. Stock is found before anyone walks.",
      body: "Packiko groups orders into a wave, oldest first, and reserves stock for every line: pick slots before reserve, earliest expiry first. The pick sheet comes out in walking order.",
      sheet: "Pick sheet",
      lines: ["Tee black M ×2", "Cap navy ×1", "Serum 30 ml ×3", "Phone case ×1", "Tote bag ×2"],
      lot: "Lot L2611 · exp 11/2026",
    },
    pack: {
      kicker: "Pack station P-05",
      title: "Every box checked. Every box on video.",
      body: "The next order in the wave appears on its own. Each item is scanned before the box closes, so a wrong size is caught on the spot. VDO Proof records the whole pack, searchable by order number, time or packer.",
    },
    dispatch: {
      kicker: "Dispatch Gate",
      title: "Nothing leaves without a check.",
      body: "Every box is scanned at the gate and its status checked with the OMS. An order cancelled after packing is blocked and sent to the exception queue. Only a supervisor can override it, and the reason is logged.",
    },
    proof: {
      kicker: "One of our customers",
      unit: "orders a day",
      from: "started at 4,000",
      body: "One of our customers grew from 4,000 to 20,000 orders a day. With Packiko, they handled that growth in the same warehouse, without adding more space.",
    },
    punch: {
      sub: "That's what Packiko does.",
      lines: ["More orders.", "Same space.", "Same team."],
      chips: [
        { value: "5×", label: "orders a day" },
        { value: "+0 m²", label: "no extra warehouse area" },
        { value: "+0", label: "no extra staff hired" },
      ],
    },
  },

  intelligence: {
    intro: {
      title: "The world is facing a labor shortage.",
      body: "And warehouses still depend heavily on people: on who remembers where things are, and who decides what comes next.",
      goal: "Our goal is simple: make warehouses depend less on people.",
    },
    brain: {
      title: "We are building the brain of the warehouse.",
      body: "One queue for the whole floor decides what comes next and who does it. Supervisor-urgent work goes first, then the nearest cutoff, then first in. Today it hands tasks to people identified by badge; next, to machines.",
      todayLabel: "On the floor today",
      today: [
        "Waves and walk-order pick routes",
        "Work prioritised by cutoff and SLA",
        "Every item scanned, every box on VDO Proof",
        "Dispatch Gate with OMS Status Guard",
        "Every task tied to a real person",
      ],
      nextLabel: "Next, on the same brain",
      next: ["AMRs", "Sorters", "Auto-baggers"],
    },
    vision: {
      kicker: "Our vision is simple.",
      lines: ["Let software run the warehouse.", "Let people stay in control."],
      note: "People stay in control and approve key decisions. Supervisors see the whole floor, and every override is logged.",
    },
  },

  network: {
    intro: {
      title: "Same-day delivery already works in major cities.",
      body: "But what about the rest of the country? Products sit in large central warehouses, so everyone else waits longer. An order to Chiang Mai still starts its trip in Bangkok.",
    },
    partner: {
      kicker: "With our strategic partner",
      unit: "parcel shops nationwide",
      body: "Together, we plan to turn these shops into micro-fulfillment centers.",
    },
    closer: {
      body: "Instead of keeping every product in a large warehouse, we keep popular products in shops close to customers. The order to Chiang Mai is packed and handed over from a shop nearby.",
      lines: ["Closer products.", "Faster delivery.", "Nationwide."],
    },
    legend: {
      hub: "Main warehouse",
      shop: "Parcel shop",
      mfc: "Micro-fulfillment center",
    },
  },

  scene: {
    zones: {
      storage: "Storage · zones A–C",
      pack: "Pack stations · VDO Proof",
      gate: "Dispatch Gate",
      carrier: "Carrier",
      inbound: "Inbound · receive & put away",
      returns: "Returns",
      office: "Command center",
      staging: "Carrier lanes",
    },
    oneOrder: "Ineffective · 1 order per trip",
    waveTrip: "40 orders · 1 trip",
    picker: "Mike",
    reserve: "Reserve slot, used after pick slots",
    fefo: "earliest expiry first",
    vdo: {
      packer: "Packer: Emma",
      items: ["Tee black M ×1", "Serum 30 ml ×1", "Tote bag ×1"],
      wrong: "Wrong size: scanned L, the order says M",
      closed: "Box closed · label printed",
      next: "Next order in the wave",
    },
    gate: {
      ok: "OMS check passed · ready to ship",
      blocked: "Cancelled in OMS · blocked",
      exception: "Exception queue",
      handover: "Handed to the carrier",
    },
    same: { space: "Same space", team: "Same team" },
    questions: ["Where is this SKU?", "Which order is next?", "Is this order still valid?", "Which wave first?", "Who packed PK-10422?"],
    tasks: ["Next slot: B1-12-2", "Next order PK-10511 loads itself", "Checked with the OMS at the gate", "W-0195 · cutoff 14:00 · urgent", "Emma · P-05 · 10:42 · on video"],
    bottleneck: "P-02 at 92% load · bottleneck",
    amr: "AMR · next, on the same brain",
    override: {
      title: "Supervisor override",
      body: "PK-10490 · the OMS didn't answer",
      by: "Released by Kate · reason logged",
    },
    map: {
      bangkok: "Warehouse · Bangkok",
      customer: "Customer · Chiang Mai",
      shop: "Shop nearby · micro-fulfillment",
    },
  },

  ticker: [
    "Wave planning",
    "Walk-order pick routes",
    "VDO Proof",
    "Dispatch Gate",
    "OMS Status Guard",
    "Worker identity",
    "Real-time stock",
    "Micro-fulfillment",
  ],


  platform: {
    eyebrow: "One brain, every connection",
    heading: "From the order to the doorstep, on one platform.",
    lead: "Packiko sits behind your OMS. Orders flow in from every channel you sell on, the brain plans the work for people and machines on the floor, and parcels leave with the carriers you already use.",
    oms: ["orders · cancels", "status updates"],
    identity: "Worker identity · audit",
    coreSub: "stock · wave · pick · pack · dispatch · VDO proof",
    hint: "← scroll the diagram →",
  },

  products: {
    eyebrow: "Products",
    heading: "One Platform. Four Ways In.",
    lead: "Four products on one Packiko Core, from a record button inside the system you already use to an enterprise 3PL warehouse. Start where it fits your business and grow without moving systems.",
    more: "Talk to us",
    cards: [
      {
        title: "Packiko Add-in",
        tag: "Proof",
        fit: "For OMS / marketplace partners and the merchants on them",
        detail: "VDO Proof as a Web SDK, embedded straight into a partner's packing screen (ZORT, for example). Video evidence for every order and fewer claims and disputes, while the merchant changes nothing.",
      },
      {
        title: "Packiko Prime",
        tag: "Real stock",
        fit: "For online shops already on an OMS that are starting to feel the physical-stock pain",
        detail: "Separates real warehouse stock from sales stock: SKUs, inbound, packing, returns, optional VDO Proof and a basic dashboard. Quick to start, no change to how you sell.",
      },
      {
        title: "Packiko Ultra",
        tag: "Speed + Intelligence",
        fit: "For fulfilment centers, 3PLs and brands running their own warehouse",
        detail: "Full operational control: waves, pick and pack stations, Dispatch Gate, OMS Status Guard, staff performance, SLA and bottleneck views, and enterprise reporting.",
      },
      {
        title: "Packiko Hub",
        tag: "Network",
        fit: "For branch networks, parcel shops and partner storefronts",
        detail: "Turns a branch into a micro fulfilment node: parcel intake, packing service, customer stock held at the branch, and a branch dashboard. Extend the network closer to the customer.",
      },
    ],
  },


  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "What is Packiko?",
        a: "A warehouse control system for online shops, warehouse teams and 3PLs: real stock control, packing mistakes prevented, video on every order, and a record of who did what on the floor, all on one shared API.",
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
        q: "Staff share machines. How do you know who did what?",
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

  closing: {
    kicker: "Get in touch",
    lines: ["More orders.", "Fewer people.", "Faster delivery."],
    lead: "Online merchants and investors: come and talk to us about the future of fulfillment.",
    merchants: {
      title: "Online merchants",
      body: "See how your orders would run on Packiko: more orders with the same team, and every box on video.",
      cta: "Book a demo",
    },
    investors: {
      title: "Investors",
      body: "Talk to us about the brain of the warehouse and a nationwide micro-fulfillment network.",
      cta: "Start a conversation",
    },
  },

  contact: {
    heading: "Talk to us",
    lead: "Tell us briefly about your operation or what you're interested in. Our team will get back to you shortly.",
    locationHeading: "Our location",
    roleLabel: "I am",
    roles: ["an online merchant", "an investor", "a partner", "something else"],
    form: {
      name: "Your name",
      email: "Email address *",
      subject: "Subject",
      message: "Tell us about your operation",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent. Our team will get back to you shortly.",
      errorGeneric: "Something went wrong. Please try again, or email us at hello@thaicloud.com",
      errorRequired: "Please fill in your name, email and message.",
      errorEmail: "That email address doesn't look right.",
    },
  },

  footer: {
    blurb: "Packiko by ThaiCloud, the brain of the warehouse. More orders. Fewer people. Faster delivery.",
    story: "The story",
    company: "Packiko",
    contact: "Contact",
    city: "Bangkok, Thailand",
  },
};
