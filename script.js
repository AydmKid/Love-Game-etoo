const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const domainGrid = document.getElementById("domainGrid");

const cards = Array.from(domainGrid.querySelectorAll(".domain-card"));
const html = document.documentElement;

const translations = {
  en: {
    pageTitle: "Domains For Sale | Walla Domains",
    pageDescription: "A modern landing page to showcase premium domains for sale with clear pricing and direct contact options.",
    brandSubtitle: "Premium domains ready for sale",
    navCta: "View Domains",
    heroEyebrow: "Personally owned premium domains",
    heroTitle: "Domains I bought and now offer for resale",
    heroText: "A modern showcase page for domain names I personally own, with clear pricing, category, and availability to help serious buyers contact me quickly.",
    heroPrimary: "Browse Listings",
    heroSecondary: "Contact Now",
    statDomains: "Domains listed",
    statCategories: "Categories",
    statReply: "Reply time",
    panelBadge: "Featured domain",
    panelText: "A strong name for a tech store, niche e-commerce project, or digital marketplace.",
    panelPrice: "Price: $3,200",
    panelStatus: "Status: Owned and available",
    listEyebrow: "Owned domain portfolio",
    listTitle: "Domains available for resale and transfer",
    listText: "These domains are already owned and can be transferred to the buyer after agreement and payment.",
    searchLabel: "Search",
    searchPlaceholder: "Search by domain name or extension",
    categoryLabel: "Category",
    optionAll: "All",
    optionTech: "Tech",
    optionBusiness: "Business",
    optionMedia: "Media",
    optionBrand: "Brand",
    sortLabel: "Sort By",
    sortDefault: "Default",
    sortPriceAsc: "Price: Low to High",
    sortPriceDesc: "Price: High to Low",
    sortName: "Name",
    statusAvailable: "Available",
    statusReserved: "Reserved",
    domain1Desc: "A direct, brandable name for electronics stores, review platforms, or tech marketplaces.",
    domain2Desc: "Ideal for an AI platform, automation tools, or a modern SaaS startup targeting the region.",
    domain3Desc: "A distinctive option for fintech services, digital wallets, or payment solutions.",
    domain4Desc: "A short, modern name for a branding agency, identity studio, or creative consultancy.",
    domain5Desc: "Fits a content agency, news platform, podcast network, or production studio.",
    domain6Desc: "A strong fit for a business hub, professional community, or startup services platform.",
    domain7Desc: "A creative, unconventional domain for digital content, design studios, or creator communities.",
    domain8Desc: "An easy-to-remember Arabic-inspired name for premium brands or personal ventures.",
    buyNow: "Buy Now",
    inquiry: "Inquiry",
    featuresEyebrow: "Why buy from this list?",
    featuresTitle: "A clearer way to present domains you already own",
    feature1Title: "Ownership clarity",
    feature1Text: "Visitors understand that these domains are already owned and offered for direct resale.",
    feature2Title: "Simple negotiation",
    feature2Text: "Each listing shows a clear starting price so buyers can quickly decide what fits them.",
    feature3Title: "Easy transfer flow",
    feature3Text: "The page makes it easy to explain that domain transfer happens after payment confirmation.",
    transferEyebrow: "Transfer process",
    transferTitle: "How the sale works",
    transfer1Title: "1. Buyer contacts you",
    transfer1Text: "The buyer chooses a domain and sends a purchase inquiry through email or WhatsApp.",
    transfer2Title: "2. Payment is confirmed",
    transfer2Text: "You agree on the price and confirm payment through your preferred secure method.",
    transfer3Title: "3. Domain is transferred",
    transfer3Text: "After confirmation, you transfer the domain from your registrar account to the buyer.",
    contactEyebrow: "Start a deal",
    contactTitle: "Interested in one of my domains?",
    contactText: "Contact me directly to ask about price, transfer details, or to reserve a domain before final payment.",
    emailLabel: "Email",
    emailHint: "Best for offers, negotiation, and transfer details",
    whatsappLabel: "WhatsApp",
    whatsapp: "WhatsApp Direct",
    whatsappHint: "Fast replies for pricing and domain availability",
    instagramLabel: "Instagram",
    instagramHint: "Follow or message me for new domain updates"
  },
  ar: {
    pageTitle: "دومينات للبيع | Walla Domains",
    pageDescription: "موقع حديث لعرض مجموعة دومينات مميزة للبيع مع أسعار واضحة وخيارات تواصل مباشرة.",
    brandSubtitle: "مجموعة دومينات جاهزة للبيع",
    navCta: "شاهد الدومينات",
    heroEyebrow: "دومينات أملكها بشكل شخصي",
    heroTitle: "دومينات اشتريتها وأعرضها الآن لإعادة البيع",
    heroText: "صفحة حديثة لعرض أسماء النطاقات التي أملكها شخصيًا مع السعر والتصنيف والحالة حتى يتمكن المشتري الجاد من التواصل بسرعة.",
    heroPrimary: "تصفح القائمة",
    heroSecondary: "تواصل الآن",
    statDomains: "دومين معروض",
    statCategories: "تصنيفات متنوعة",
    statReply: "سرعة الرد",
    panelBadge: "دومين مميز",
    panelText: "اسم قوي لمتجر تقني أو منصة تجارة إلكترونية متخصصة.",
    panelPrice: "السعر: $3,200",
    panelStatus: "الحالة: مملوك ومتاح",
    listEyebrow: "بورتفوليو الدومينات",
    listTitle: "دومينات متاحة لإعادة البيع والنقل",
    listText: "هذه الدومينات مملوكة بالفعل ويمكن نقلها إلى المشتري بعد الاتفاق وإتمام الدفع.",
    searchLabel: "بحث",
    searchPlaceholder: "ابحث باسم الدومين أو الامتداد",
    categoryLabel: "التصنيف",
    optionAll: "الكل",
    optionTech: "تقني",
    optionBusiness: "أعمال",
    optionMedia: "إعلام",
    optionBrand: "براند",
    sortLabel: "الترتيب",
    sortDefault: "افتراضي",
    sortPriceAsc: "السعر: من الأقل",
    sortPriceDesc: "السعر: من الأعلى",
    sortName: "الاسم",
    statusAvailable: "متاح",
    statusReserved: "محجوز",
    domain1Desc: "اسم مباشر وقوي لمتجر أجهزة، منصة مراجعات، أو سوق إلكتروني تقني.",
    domain2Desc: "مناسب لمنصة ذكاء اصطناعي، أدوات أتمتة، أو مشروع SaaS عربي حديث.",
    domain3Desc: "اسم مميز للخدمات المالية، المحافظ الرقمية، أو حلول الدفع في المنطقة.",
    domain4Desc: "اسم قصير وحديث لبناء وكالة هوية بصرية أو خدمة تطوير علامات تجارية.",
    domain5Desc: "مناسب لوكالة محتوى، منصة أخبار، أو مشروع بودكاست وإنتاج مرئي.",
    domain6Desc: "اختيار ممتاز لمركز أعمال، مجتمع مهني، أو منصة خدمات للشركات الناشئة.",
    domain7Desc: "اسم غير تقليدي يصلح لمنصة محتوى رقمي، ستوديو تصميم، أو مجتمع إبداعي.",
    domain8Desc: "اسم عربي سهل التذكر مناسب للبراندات الشخصية أو المتاجر الراقية.",
    buyNow: "طلب شراء",
    inquiry: "استفسار",
    featuresEyebrow: "لماذا الشراء من هذه القائمة؟",
    featuresTitle: "طريقة أوضح لعرض الدومينات التي تملكها بالفعل",
    feature1Title: "وضوح الملكية",
    feature1Text: "يفهم الزائر أن هذه الدومينات مملوكة بالفعل ومطروحة لإعادة البيع بشكل مباشر.",
    feature2Title: "تفاوض أسهل",
    feature2Text: "كل دومين يظهر معه سعر مبدئي واضح ليسهّل على المشتري اتخاذ القرار بسرعة.",
    feature3Title: "آلية نقل بسيطة",
    feature3Text: "الصفحة توضح أن نقل الدومين يتم بعد تأكيد الدفع والاتفاق النهائي.",
    transferEyebrow: "آلية النقل",
    transferTitle: "كيف تتم عملية البيع",
    transfer1Title: "1. المشتري يتواصل معك",
    transfer1Text: "يختار المشتري الدومين المناسب ثم يرسل طلب شراء عبر البريد أو الواتساب.",
    transfer2Title: "2. يتم تأكيد الدفع",
    transfer2Text: "يتم الاتفاق على السعر وتأكيد استلام المبلغ عبر طريقة الدفع التي تعتمدها.",
    transfer3Title: "3. يتم نقل الدومين",
    transfer3Text: "بعد التأكيد، تنقل الدومين من حساب شركة التسجيل إلى حساب المشتري.",
    contactEyebrow: "ابدأ الصفقة",
    contactTitle: "مهتم بشراء أحد دوميناتي؟",
    contactText: "تواصل معي مباشرة للاستفسار عن السعر أو تفاصيل النقل أو حجز الدومين قبل إتمام الدفع.",
    emailLabel: "البريد الإلكتروني",
    emailHint: "الأفضل للعروض والتفاوض وتفاصيل نقل الدومين",
    whatsappLabel: "واتساب",
    whatsapp: "واتساب مباشر",
    whatsappHint: "ردود سريعة بخصوص السعر وتوفر الدومين",
    instagramLabel: "إنستقرام",
    instagramHint: "تابعني أو راسلني لمعرفة الدومينات الجديدة"
  }
};

function applyLanguage() {
  const browserLanguage = navigator.language || "en";
  const language = browserLanguage.toLowerCase().startsWith("ar") ? "ar" : "en";
  const dictionary = translations[language];

  html.lang = language;
  html.dir = language === "ar" ? "rtl" : "ltr";

  document.title = dictionary.pageTitle;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", dictionary.pageDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });
}

function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedSort = sortFilter.value;

  const visibleCards = cards.filter((card) => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;
    const matchesSearch = name.includes(searchTerm);
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;
    const shouldShow = matchesSearch && matchesCategory;

    card.classList.toggle("hidden", !shouldShow);
    return shouldShow;
  });

  const sortedCards = [...visibleCards].sort((first, second) => {
    if (selectedSort === "price-asc") {
      return Number(first.dataset.price) - Number(second.dataset.price);
    }

    if (selectedSort === "price-desc") {
      return Number(second.dataset.price) - Number(first.dataset.price);
    }

    if (selectedSort === "name") {
      return first.dataset.name.localeCompare(second.dataset.name);
    }

    return cards.indexOf(first) - cards.indexOf(second);
  });

  sortedCards.forEach((card) => domainGrid.appendChild(card));
}

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);

applyLanguage();
applyFilters();
