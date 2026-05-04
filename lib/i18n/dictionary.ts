export const locales = ["en", "th"] as const;
export type Locale = (typeof locales)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "evera_locale";

type Dict = {
  nav: {
    home: string;
    about: string;
    ecosystem: string;
    fleet: string;
    esg: string;
    contact: string;
  };
  cta: {
    getInTouch: string;
    sendEnquiry: string;
    talkToUs: string;
    requestProposal: string;
    exploreSolutions: string;
    fleet: string;
    bookConsultation: string;
    discussSite: string;
  };
  footer: {
    explore: string;
    contact: string;
    rights: string;
    intro: string;
  };
  language: {
    en: string;
    th: string;
    label: string;
    note: string;
  };
  hero: {
    home: {
      eyebrow: string;
      h1Line1: string;
      h1Line2: string;
      sub: string;
    };
  };
};

export const dictionaries: Record<Locale, Dict> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      ecosystem: "Ecosystem",
      fleet: "EV Fleet Solutions",
      esg: "ESG",
      contact: "Contact",
    },
    cta: {
      getInTouch: "Get in touch",
      sendEnquiry: "Send an enquiry",
      talkToUs: "Talk to us",
      requestProposal: "Request a Fleet Proposal",
      exploreSolutions: "Explore Our Solutions",
      fleet: "EV Fleet Solutions",
      bookConsultation: "Book a 30-min consultation",
      discussSite: "Discuss a site",
    },
    footer: {
      explore: "Explore",
      contact: "Contact",
      rights: "All rights reserved.",
      intro:
        "Phuket's Complete EV Ecosystem. Corporate fleet, EV taxi, EV rental, and the island's fastest-growing charging network — all under one operator.",
    },
    language: {
      en: "EN",
      th: "TH",
      label: "Language",
      note: "",
    },
    hero: {
      home: {
        eyebrow: "EvEra · Phuket",
        h1Line1: "Phuket's Complete",
        h1Line2: "EV Ecosystem",
        sub: "Corporate EV fleet, EV taxi, EV rental and Phuket's fastest-growing charging network — all under one operator. EvEra is the complete EV ecosystem for business, government, and tourism in Phuket.",
      },
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับ EvEra",
      ecosystem: "ธุรกิจของเรา",
      fleet: "EV Fleet Solutions",
      esg: "ESG",
      contact: "ติดต่อเรา",
    },
    cta: {
      getInTouch: "ติดต่อเรา",
      sendEnquiry: "ส่งคำถาม",
      talkToUs: "พูดคุยกับเรา",
      requestProposal: "ขอใบเสนอ Fleet",
      exploreSolutions: "ดูบริการทั้งหมด",
      fleet: "EV Fleet Solutions",
      bookConsultation: "นัดปรึกษา 30 นาที",
      discussSite: "คุยเรื่องสถานี",
    },
    footer: {
      explore: "บริการ",
      contact: "ติดต่อ",
      rights: "สงวนลิขสิทธิ์",
      intro:
        "ระบบนิเวศ EV ครบวงจรในภูเก็ต — Corporate Fleet, แท็กซี่ไฟฟ้า, เช่ารถ EV และเครือข่ายสถานีชาร์จที่ใหญ่ที่สุดของจังหวัด ภายใต้ผู้ให้บริการรายเดียว",
    },
    language: {
      en: "EN",
      th: "TH",
      label: "ภาษา",
      note: "เนื้อหาบางส่วนยังเป็นภาษาอังกฤษ — กำลังแปลเพิ่มเติม",
    },
    hero: {
      home: {
        eyebrow: "EvEra · ภูเก็ต",
        h1Line1: "ระบบนิเวศ EV",
        h1Line2: "ครบวงจรในภูเก็ต",
        sub: "Corporate EV Fleet, แท็กซี่ไฟฟ้า, เช่ารถ EV และเครือข่ายสถานีชาร์จที่เติบโตเร็วที่สุดของภูเก็ต — ภายใต้ผู้ให้บริการรายเดียว สำหรับองค์กร ภาครัฐ และอุตสาหกรรมท่องเที่ยว",
      },
    },
  },
};
