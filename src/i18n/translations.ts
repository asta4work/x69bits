export type Language = "en" | "ar" | "de";

export interface Translation {
  // Common
  language: string;
  languageName: string;
  dir: "ltr" | "rtl";
  
  // Navigation
  nav: {
    home: string;
    pricing: string;
    features: string;
    terms: string;
    privacy: string;
    clientPortal: string;
  };
  
  // Hero
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    viewPlans: string;
    whyUs: string;
    uptimeSLA: string;
    protection: string;
    ssdStorage: string;
  };
  
  // Features
  features: {
    title1: string;
    title2: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  
  // Pricing
  pricing: {
    title1: string;
    title2: string;
    subtitle: string;
    mostPopular: string;
    perMonth: string;
    payWithPaypal: string;
    paymentNote: string;
    plans: {
      name: string;
      description: string;
    }[];
    features: string[];
  };
  
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    legal: string;
    termsOfService: string;
    privacyPolicy: string;
    allRightsReserved: string;
  };
  
  // SEO
  seo: {
    homeTitle: string;
    homeDescription: string;
    termsTitle: string;
    termsDescription: string;
    privacyTitle: string;
    privacyDescription: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    language: "en",
    languageName: "English",
    dir: "ltr",
    
    nav: {
      home: "Home",
      pricing: "Pricing",
      features: "Features",
      terms: "Terms",
      privacy: "Privacy",
      clientPortal: "Client Portal",
    },
    
    hero: {
      badge: "Enterprise-Grade Infrastructure",
      title1: "Business Hosting",
      title2: "Built to Scale",
      subtitle: "Deploy VPS, dedicated servers, and cloud infrastructure in seconds. Enterprise performance with 99.9% uptime SLA, DDoS protection, and 24/7 expert support.",
      viewPlans: "View Plans",
      whyUs: "Why x69bits",
      uptimeSLA: "Uptime SLA",
      protection: "Protection",
      ssdStorage: "SSD Storage",
    },
    
    features: {
      title1: "Why Choose",
      title2: "x69bits",
      subtitle: "Enterprise infrastructure designed for businesses that demand reliability, performance, and scalability without the enterprise price tag.",
      items: [
        { title: "Control Panel", description: "Full server control with FTP access, file manager, console, and resource monitoring." },
        { title: "DDoS Protection", description: "Enterprise-grade mitigation against attacks up to 1Tbps included with every plan." },
        { title: "Instant Deployment", description: "Your server is provisioned and ready within seconds of payment confirmation." },
        { title: "99.9% Uptime SLA", description: "Guaranteed uptime backed by service credits and automatic failover systems." },
        { title: "NVMe SSD Storage", description: "Ultra-fast NVMe drives for blazing database queries and application performance." },
        { title: "24/7 Expert Support", description: "Technical specialists available around the clock via ticket and live chat." },
        { title: "Global Network", description: "Strategic datacenter locations for optimal latency to your customers worldwide." },
        { title: "Secure Infrastructure", description: "SSL certificates, firewalls, and automated backups to protect your business." },
      ],
    },
    
    pricing: {
      title1: "Simple,",
      title2: "Transparent",
      subtitle: "No hidden fees, no surprises. Scale up or down anytime. All plans include our full feature set.",
      mostPopular: "Most Popular",
      perMonth: "/month",
      payWithPaypal: "Pay with PayPal",
      paymentNote: "All payments are securely processed through PayPal. Servers are deployed instantly after payment confirmation.",
      plans: [
        { name: "Starter VPS", description: "Perfect for small projects & websites" },
        { name: "Business VPS", description: "Ideal for growing businesses" },
        { name: "Enterprise VPS", description: "For high-traffic applications" },
      ],
      features: [
        "2 vCPU Cores", "4 GB RAM", "50 GB NVMe Storage", "2 TB Bandwidth", "1 IPv4 Address", "Control Panel", "DDoS Protection",
        "4 vCPU Cores", "8 GB RAM", "100 GB NVMe Storage", "5 TB Bandwidth", "Priority Support", "Daily Backups",
        "8 vCPU Cores", "16 GB RAM", "200 GB NVMe Storage", "10 TB Bandwidth", "2 IPv4 Addresses", "Premium Support", "Free SSL Certificates",
      ],
    },
    
    footer: {
      description: "Enterprise-grade VPS and cloud hosting with powerful control panel. Fast, reliable, and scalable infrastructure for businesses worldwide.",
      quickLinks: "Quick Links",
      legal: "Legal",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      allRightsReserved: "All rights reserved.",
    },
    
    seo: {
      homeTitle: "x69bits - Enterprise VPS & Cloud Hosting | Yemen Business Hosting",
      homeDescription: "Deploy VPS and cloud servers in seconds with x69bits. Enterprise-grade performance, DDoS protection, and 24/7 support for businesses in Yemen and beyond.",
      termsTitle: "Terms of Service | x69bits",
      termsDescription: "Read our terms of service for VPS and cloud hosting at x69bits.",
      privacyTitle: "Privacy Policy | x69bits",
      privacyDescription: "Learn how x69bits protects your privacy and handles your data.",
    },
  },
  
  ar: {
    language: "ar",
    languageName: "العربية",
    dir: "rtl",
    
    nav: {
      home: "الرئيسية",
      pricing: "الأسعار",
      features: "المميزات",
      terms: "الشروط",
      privacy: "الخصوصية",
      clientPortal: "بوابة العملاء",
    },
    
    hero: {
      badge: "بنية تحتية للشركات اليمنية والعربية",
      title1: "استضافة احترافية",
      title2: "لنجاح أعمالك",
      subtitle: "انشر سيرفرات VPS والخوادم السحابية في ثوانٍ. أداء مؤسسي مع ضمان تشغيل 99.9%، حماية DDoS متقدمة، ودعم فني على مدار الساعة. الحل الأمثل للشركات اليمنية والعربية.",
      viewPlans: "عرض الخطط",
      whyUs: "لماذا x69bits",
      uptimeSLA: "ضمان التشغيل",
      protection: "الحماية",
      ssdStorage: "تخزين SSD",
    },
    
    features: {
      title1: "لماذا تختار",
      title2: "x69bits",
      subtitle: "بنية تحتية احترافية مصممة خصيصاً للشركات اليمنية والعربية التي تتطلب الموثوقية والأداء العالي وقابلية التوسع بأسعار منافسة.",
      items: [
        { title: "لوحة التحكم", description: "تحكم كامل في الخادم مع وصول FTP ومدير الملفات ووحدة التحكم ومراقبة الموارد." },
        { title: "حماية DDoS", description: "حماية على مستوى المؤسسات ضد الهجمات حتى 1 تيرابت في الثانية مضمنة مع كل خطة." },
        { title: "نشر فوري", description: "خادمك جاهز ومُعد خلال ثوانٍ من تأكيد الدفع." },
        { title: "ضمان وقت تشغيل 99.9%", description: "وقت تشغيل مضمون مدعوم برصيد الخدمة وأنظمة تجاوز الفشل التلقائية." },
        { title: "تخزين NVMe SSD", description: "محركات NVMe فائقة السرعة لاستعلامات قاعدة البيانات وأداء التطبيقات السريع." },
        { title: "دعم فني 24/7", description: "متخصصون تقنيون متاحون على مدار الساعة عبر التذاكر والدردشة المباشرة." },
        { title: "شبكة عالمية", description: "مواقع مراكز بيانات استراتيجية لزمن انتقال مثالي لعملائك حول العالم." },
        { title: "بنية تحتية آمنة", description: "شهادات SSL وجدران حماية ونسخ احتياطية تلقائية لحماية أعمالك." },
      ],
    },
    
    pricing: {
      title1: "أسعار",
      title2: "شفافة",
      subtitle: "لا رسوم خفية، لا مفاجآت. قم بالترقية أو التخفيض في أي وقت. جميع الخطط تشمل مجموعة الميزات الكاملة.",
      mostPopular: "الأكثر شعبية",
      perMonth: "/شهر",
      payWithPaypal: "ادفع عبر PayPal",
      paymentNote: "تتم معالجة جميع المدفوعات بشكل آمن عبر PayPal. يتم نشر الخوادم فورًا بعد تأكيد الدفع.",
      plans: [
        { name: "VPS للمبتدئين", description: "مثالي للمشاريع والمواقع الصغيرة" },
        { name: "VPS للأعمال", description: "مثالي للشركات المتنامية" },
        { name: "VPS للمؤسسات", description: "للتطبيقات عالية الحركة" },
      ],
      features: [
        "2 نوى vCPU", "4 جيجا رام", "50 جيجا تخزين NVMe", "2 تيرا عرض نطاق", "1 عنوان IPv4", "لوحة التحكم", "حماية DDoS",
        "4 نوى vCPU", "8 جيجا رام", "100 جيجا تخزين NVMe", "5 تيرا عرض نطاق", "دعم ذو أولوية", "نسخ احتياطية يومية",
        "8 نوى vCPU", "16 جيجا رام", "200 جيجا تخزين NVMe", "10 تيرا عرض نطاق", "2 عنوان IPv4", "دعم متميز", "شهادات SSL مجانية",
      ],
    },
    
    footer: {
      description: "استضافة VPS وسحابية على مستوى المؤسسات مع لوحة تحكم متطورة. بنية تحتية سريعة وموثوقة وقابلة للتوسع للشركات في جميع أنحاء العالم.",
      quickLinks: "روابط سريعة",
      legal: "قانوني",
      termsOfService: "شروط الخدمة",
      privacyPolicy: "سياسة الخصوصية",
      allRightsReserved: "جميع الحقوق محفوظة.",
    },
    
    seo: {
      homeTitle: "x69bits - أفضل استضافة سيرفرات VPS في اليمن | للشركات ورجال الأعمال",
      homeDescription: "أفضل خدمة استضافة سيرفرات VPS وسحابية للشركات اليمنية والعربية. حماية DDoS، ضمان تشغيل 99.9%، تخزين NVMe سريع، ودعم فني على مدار الساعة. الحل الأمثل لرجال الأعمال والشركات الناشئة في اليمن.",
      termsTitle: "شروط الخدمة | x69bits - استضافة سيرفرات اليمن",
      termsDescription: "اقرأ شروط وأحكام خدمة استضافة سيرفرات VPS والسحابة في x69bits. خدمة موثوقة للشركات اليمنية والعربية.",
      privacyTitle: "سياسة الخصوصية | x69bits - استضافة سيرفرات اليمن",
      privacyDescription: "تعرف على كيفية حماية x69bits لخصوصيتك وبياناتك. نلتزم بأعلى معايير الأمان لحماية معلومات عملائنا في اليمن والوطن العربي.",
    },
  },
  
  de: {
    language: "de",
    languageName: "Deutsch",
    dir: "ltr",
    
    nav: {
      home: "Startseite",
      pricing: "Preise",
      features: "Funktionen",
      terms: "AGB",
      privacy: "Datenschutz",
      clientPortal: "Kundenportal",
    },
    
    hero: {
      badge: "Enterprise-Infrastruktur",
      title1: "Business Hosting",
      title2: "Skalierbar gebaut",
      subtitle: "Stellen Sie VPS, dedizierte Server und Cloud-Infrastruktur in Sekunden bereit. Enterprise-Leistung mit 99,9% Uptime-SLA, DDoS-Schutz und 24/7-Support.",
      viewPlans: "Pläne ansehen",
      whyUs: "Warum x69bits",
      uptimeSLA: "Uptime-SLA",
      protection: "Schutz",
      ssdStorage: "SSD-Speicher",
    },
    
    features: {
      title1: "Warum",
      title2: "x69bits wählen",
      subtitle: "Enterprise-Infrastruktur für Unternehmen, die Zuverlässigkeit, Leistung und Skalierbarkeit verlangen - ohne Enterprise-Preise.",
      items: [
        { title: "Control Panel", description: "Volle Serverkontrolle mit FTP-Zugang, Dateimanager, Konsole und Ressourcenüberwachung." },
        { title: "DDoS-Schutz", description: "Enterprise-Schutz gegen Angriffe bis zu 1 Tbps in jedem Plan inklusive." },
        { title: "Sofortige Bereitstellung", description: "Ihr Server ist innerhalb von Sekunden nach Zahlungsbestätigung einsatzbereit." },
        { title: "99,9% Uptime-SLA", description: "Garantierte Uptime mit Service-Credits und automatischen Failover-Systemen." },
        { title: "NVMe SSD-Speicher", description: "Ultraschnelle NVMe-Laufwerke für blitzschnelle Datenbankabfragen und App-Performance." },
        { title: "24/7 Experten-Support", description: "Technische Spezialisten rund um die Uhr per Ticket und Live-Chat erreichbar." },
        { title: "Globales Netzwerk", description: "Strategische Rechenzentrumsstandorte für optimale Latenz zu Ihren Kunden weltweit." },
        { title: "Sichere Infrastruktur", description: "SSL-Zertifikate, Firewalls und automatische Backups zum Schutz Ihres Unternehmens." },
      ],
    },
    
    pricing: {
      title1: "Einfache,",
      title2: "transparente",
      subtitle: "Keine versteckten Gebühren, keine Überraschungen. Jederzeit hoch- oder runterskalieren. Alle Pläne enthalten unser volles Funktionspaket.",
      mostPopular: "Beliebteste",
      perMonth: "/Monat",
      payWithPaypal: "Mit PayPal bezahlen",
      paymentNote: "Alle Zahlungen werden sicher über PayPal abgewickelt. Server werden sofort nach Zahlungsbestätigung bereitgestellt.",
      plans: [
        { name: "Starter VPS", description: "Perfekt für kleine Projekte & Websites" },
        { name: "Business VPS", description: "Ideal für wachsende Unternehmen" },
        { name: "Enterprise VPS", description: "Für Anwendungen mit hohem Traffic" },
      ],
      features: [
        "2 vCPU-Kerne", "4 GB RAM", "50 GB NVMe-Speicher", "2 TB Bandbreite", "1 IPv4-Adresse", "Control Panel", "DDoS-Schutz",
        "4 vCPU-Kerne", "8 GB RAM", "100 GB NVMe-Speicher", "5 TB Bandbreite", "Prioritäts-Support", "Tägliche Backups",
        "8 vCPU-Kerne", "16 GB RAM", "200 GB NVMe-Speicher", "10 TB Bandbreite", "2 IPv4-Adressen", "Premium-Support", "Kostenlose SSL-Zertifikate",
      ],
    },
    
    footer: {
      description: "Enterprise-VPS und Cloud-Hosting mit leistungsstarkem Control Panel. Schnelle, zuverlässige und skalierbare Infrastruktur für Unternehmen weltweit.",
      quickLinks: "Schnelllinks",
      legal: "Rechtliches",
      termsOfService: "Nutzungsbedingungen",
      privacyPolicy: "Datenschutzrichtlinie",
      allRightsReserved: "Alle Rechte vorbehalten.",
    },
    
    seo: {
      homeTitle: "x69bits - Enterprise VPS & Cloud Hosting | Yemen Business Hosting",
      homeDescription: "Stellen Sie VPS und Cloud-Server in Sekunden mit x69bits bereit. Enterprise-Leistung, DDoS-Schutz und 24/7-Support für Unternehmen.",
      termsTitle: "Nutzungsbedingungen | x69bits",
      termsDescription: "Lesen Sie unsere Nutzungsbedingungen für VPS und Cloud-Hosting bei x69bits.",
      privacyTitle: "Datenschutzrichtlinie | x69bits",
      privacyDescription: "Erfahren Sie, wie x69bits Ihre Privatsphäre schützt und Ihre Daten verarbeitet.",
    },
  },
};
