/**
 * SRI LAKSHMI GANAPATHI ENGINEERING WORKS
 * Interactive scripts: Bilingual toggle (Telugu/English), Cost Estimator,
 * Gallery filtering, WhatsApp direct lead generation.
 */

// State
let currentLanguage = 'en';

// Bilingual Translations Dictionary
const translations = {
  en: {
    location_short: "East Godavari, Andhra Pradesh | 17°00'58.4\"N 82°16'03.7\"E",
    work_hours: "Mon - Sat: 8:00 AM - 8:30 PM",
    nav_home: "Home",
    nav_products: "Products & Services",
    nav_calculator: "Cost Estimator",
    nav_gallery: "Portfolio",
    nav_why: "Why Choose Us",
    nav_contact: "Contact & Location",
    btn_whatsapp: "WhatsApp Quote",
    btn_lang_switch: "Change to తెలుగు",
    
    // Hero
    hero_badge: "25+ Years of Father's Master Craftsmanship & Trust",
    hero_title_1: "Modern Container Houses,",
    hero_title_2: "Glass Railings & Premium Gates",
    hero_sub_telugu: "ఆంధ్రప్రదేశ్ మరియు భారతదేశవ్యాప్తంగా నమ్మకమైన కంటైనర్ హోమ్స్, మోడ్రన్ గ్లాస్ రైలింగ్స్, డెకరేటివ్ గేట్స్ & సమగ్ర వెల్డింగ్ పనులు.",
    hero_desc: "Specialized in Luxury Container Homes, Toughened Glass Balcony Systems, CNC Laser-Cut Gates, Stainless Steel Railings, and Industrial Heavy Welding Fabrication. Direct manufacturer pricing with premium steel & glass.",
    hero_btn_quote: "Get Instant WhatsApp Quote",
    hero_btn_calc: "Calculate Cost",
    stat_projects: "Projects Completed",
    stat_rustproof: "Tata & Jindal Steel",
    stat_exp: "Years Father Experience",
    stat_rating: "Client Trust Rating",
    tag_featured: "Featured Masterpiece",
    showcase_title: "Custom Modular Container House",
    showcase_desc: "2-Story Luxury Living with Rooftop Terrace & Frameless Glass Railings",

    // Services
    services_subtitle: "OUR SPECIALIZED CRAFTSMANSHIP",
    services_title: "Products & Welding Fabrication Services",
    services_desc: "Built with precision, strength, and aesthetic perfection. Every cut, weld, and polish is inspected for lifetime durability.",
    badge_top_product: "🔥 Top Product",
    svc_1_title: "Container Houses & Modular Living",
    svc_1_te: "కంటైనర్ హౌస్ మరియు పోర్టబుల్ ఆఫీసులు",
    svc_1_desc: "Custom-designed luxury 20ft & 40ft container homes, farmhouse cottages, site offices, cafes, and rooftop modular suites. Fully insulated, electrified, and earthquake-resistant.",
    
    svc_2_title: "Frameless Toughened Glass Railings",
    svc_2_te: "బాల్కనీ & మెట్ల గ్లాస్ రైలింగ్స్",
    svc_2_desc: "Sleek modern balcony and staircase railings built with 12mm / 15mm Saint-Gobain toughened laminated glass and Jindal SS 304 / aluminum base shoe spigots.",

    svc_3_title: "CNC Laser Cut & Modern Designer Gates",
    svc_3_te: "మోడ్రన్ డిజైనర్ గేట్స్ & స్లైడింగ్ గేట్స్",
    svc_3_desc: "State-of-the-art entrance gates crafted with precision CNC sheet cutting, wrought iron accents, teak wood louvers, and motorized automated sliding systems.",

    svc_4_title: "SS 304 Staircase & Balcony Railings",
    svc_4_te: "స్టెయిన్లెస్ స్టీల్ రైలింగ్స్",
    svc_4_desc: "Mirror finish and brushed matte stainless steel pipe and square bar railings for staircases, duplex stairs, and verandahs. Guaranteed 100% Jindal SS 304 certified steel.",

    svc_5_title: "Window Safety Grills & Balcony Grills",
    svc_5_te: "కిటికీ గ్రిల్స్ మరియు రక్షణ గ్రిల్స్",
    svc_5_desc: "High-security MS designer window grills, heavy safety grates, decorative balcony safety enclosures, and compound wall spike safety rails.",

    svc_6_title: "Industrial Sheds, Trusses & Welding",
    svc_6_te: "ఇండస్ట్రియల్ షెడ్స్ & సమగ్ర వెల్డింగ్ వర్క్స్",
    svc_6_desc: "Factory sheds, warehouse roof trusses, polyhouse structures, rolling shutters, spiral stairs, and customized metal fabrication for commercial and residential requirements.",
    btn_enquire: "Enquire Now",

    // Calculator
    calc_badge: "FREE INSTANT ESTIMATION",
    calc_heading: "Calculate Your Project Cost Instantly",
    calc_te: "మీకు కావలసిన పనిని ఎంచుకుని సులభంగా అంచనా వ్యయాన్ని లెక్కించండి.",
    calc_desc: "Get an instant transparent estimate for your Container Home, Glass Railing, Gate, or Grill fabrication. You can directly send this estimate to our WhatsApp for the best direct factory price discount!",
    calc_p1: "No hidden charges or middlemen commissions",
    calc_p2: "Genuine Tata & Jindal Steel Grade guarantee",
    calc_p3: "Free site inspection in Andhra Pradesh",
    lbl_select_work: "Select Product / Work Type:",
    lbl_quantity: "Quantity / Units:",
    lbl_finish: "Material / Grade:",
    lbl_est_range: "Approximate Estimated Investment:",
    lbl_est_note: "* Includes fabrication, anti-rust coating & welding masterwork. Final quote confirmed after site measurement.",
    btn_send_estimate: "Send Estimate to WhatsApp for Best Discount",

    // Gallery
    gallery_subtitle: "OUR RECENT WORKS",
    gallery_title: "Project Gallery & Real Work Showcase",
    gallery_desc: "Browse through our executed projects of container living spaces, frameless glass balconies, designer main gates, and architectural steel work.",

    // Why Us
    why_subtitle: "THE CRAFTSMANSHIP ADVANTAGE",
    why_title: "Why Customers Trust Sri Lakshmi Ganapathi Works",
    why_te: "మా నాన్నగారి 25 ఏళ్ళ అనుభవం మరియు నిబద్ధత — ప్రతి పనిలోనూ ఉన్నతమైన నాణ్యత, సరైన కొలతలు మరియు మన్నికైన స్టీల్!",
    why_desc: "Unlike commercial contractors who outsource work to subcontractors, our father personally oversees every single weld, measurement, alignment, and finishing. We combine authentic traditional craftsmanship with the latest CNC laser cutting and modern container engineering.",
    why_f1_title: "100% Certified Brand Materials",
    why_f1_desc: "We use only Tata Structura, Jindal SS 304, and Saint-Gobain 12mm Toughened glass. No low-grade imitation metals.",
    why_f2_title: "Direct Workshop Price — No Middlemen",
    why_f2_desc: "You deal directly with the fabrication masters, saving 20% to 30% compared to third-party interior contractors.",
    why_f3_title: "Exact Millimeter Precision",
    why_f3_desc: "Perfect alignment for glass railings and zero-vibration sliding gates that operate effortlessly for years.",
    why_f4_title: "All-India & Andhra Delivery",
    why_f4_desc: "We manufacture container houses and modular structures that can be transported and installed anywhere in India.",

    // Contact
    contact_subtitle: "CONNECT WITH US",
    contact_title: "Visit Our Workshop or Get in Touch",
    contact_desc: "Ready to discuss your Container House, Glass Railings, or Gate fabrication? Call us directly or visit our workshop.",
    cnt_phone_title: "Direct Call / WhatsApp",
    cnt_phone_sub: "Available 7 days a week for immediate quotations",
    cnt_loc_title: "Workshop Exact Location",
    btn_get_directions: "Get Google Map Directions",
    cnt_coverage_title: "Service Areas",

    // Enquiry
    enquiry_title: "Request a Free Measurement & Site Visit",
    enquiry_desc: "Fill this quick 30-second form or message us. Our team will contact you within 15 minutes.",
    lbl_your_name: "Your Name (మీ పేరు): *",
    lbl_your_phone: "Phone Number (ఫోన్ నెంబర్): *",
    lbl_req_service: "Service Needed (కావలసిన పని): *",
    lbl_your_city: "Your Town / City (మీ ఊరు):",
    lbl_message: "Work Details / Approximate Size (కొలతలు / వివరాలు):",
    btn_submit_enquiry: "Submit & Chat on WhatsApp Immediately",

    // Footer
    footer_bio: "Andhra Pradesh's dedicated manufacturer of Container Houses, Frameless Glass Railings, CNC Designer Main Gates, SS Railings, Safety Grills, and Industrial Steel Fabrication.",
    footer_prod_title: "Our Products",
    footer_contact_title: "Direct Contacts"
  },

  te: {
    location_short: "తూర్పు గోదావరి, ఆంధ్రప్రదేశ్ | 17°00'58.4\"N 82°16'03.7\"E",
    work_hours: "సోమ - శని: ఉదయం 8:00 - రాత్రి 8:30",
    nav_home: "ముఖ్యాంశం",
    nav_products: "ఉత్పత్తులు & పనులు",
    nav_calculator: "ధర అంచనా",
    nav_gallery: "ఫోటోలు / పనుల గ్యాలరీ",
    nav_why: "మా ప్రత్యేకతలు",
    nav_contact: "సంప్రదించండి",
    btn_whatsapp: "వాట్సాప్ కొటేషన్",
    btn_lang_switch: "Switch to English",

    // Hero
    hero_badge: "నాన్నగారి 25+ ఏళ్ల విశేష అనుభవం మరియు అచంచలమైన నమ్మకం",
    hero_title_1: "అత్యాధునిక కంటైనర్ హోమ్స్,",
    hero_title_2: "గ్లాస్ రైలింగ్స్ & మోడ్రన్ గేట్స్",
    hero_sub_telugu: "ఆంధ్రప్రదేశ్ మరియు భారతదేశవ్యాప్తంగా నమ్మకమైన కంటైనర్ హోమ్స్, మోడ్రన్ గ్లాస్ రైలింగ్స్, డెకరేటివ్ గేట్స్ & సమగ్ర వెల్డింగ్ పనులు.",
    hero_desc: "లగ్జరీ కంటైనర్ ఇళ్ళు, టఫ్ఫెండ్ గ్లాస్ బాల్కనీ సిస్టమ్స్, లేజర్ కట్ సీఎన్‌సీ గేట్లు, స్టెయిన్‌లెస్ స్టీల్ రైలింగ్స్ మరియు ఇండస్ట్రియల్ హెవీ వెల్డింగ్ పనులలో నిపుణులు. దళారులు లేకుండా నేరుగా ఫ్యాక్టరీ ధరలకే లభించును.",
    hero_btn_quote: "వాట్సాప్ ద్వారా వెంటనే ధర తెలుసుకోండి",
    hero_btn_calc: "ఖర్చు లెక్కించండి",
    stat_projects: "పూర్తయిన ప్రాజెక్టులు",
    stat_rustproof: "టాటా & జిందాల్ స్టీల్",
    stat_exp: "నాన్నగారి అనుభవం",
    stat_rating: "కస్టమర్ల విశ్వాసం",
    tag_featured: "ప్రత్యేకమైన వర్క్",
    showcase_title: "కస్టమ్ మాడ్యులర్ కంటైనర్ హౌస్",
    showcase_desc: "రూఫ్‌టాప్ టెర్రస్ & ఫ్రేమ్‌లెస్ గ్లాస్ రైలింగ్స్‌తో కూడిన 2-అంతస్తుల లగ్జరీ ఇల్లు",

    // Services
    services_subtitle: "మా ప్రత్యేక నైపుణ్యం",
    services_title: "మా ఉత్పత్తులు & వెల్డింగ్ ఫ్యాబ్రికేషన్ సర్వీసెస్",
    services_desc: "ఖచ్చితమైన కొలతలు, తిరుగులేని బలం మరియు అందమైన డిజైన్లతో మీ ఇంటిని ముస్తాబు చేస్తాం.",
    badge_top_product: "🔥 ముఖ్యమైన ఉత్పత్తి",
    svc_1_title: "కంటైనర్ హోమ్స్ & మాడ్యులర్ లివింగ్",
    svc_1_te: "20ft & 40ft కంటైనర్ ఇళ్ళు & సైట్ ఆఫీసులు",
    svc_1_desc: "ఫార్మ్‌హౌస్‌లు, రిసార్ట్‌లు, ఆధునిక రెసిడెన్షియల్ ఇళ్ళు మరియు కమర్షియల్ పోర్టబుల్ ఆఫీసులు. పూర్తి థర్మల్ ఇన్సులేషన్ మరియు ఎలక్ట్రిఫికేషన్ తో 15-30 రోజుల్లో సిద్ధం.",

    svc_2_title: "ఫ్రేమ్‌లెస్ టఫ్ఫెండ్ గ్లాస్ రైలింగ్స్",
    svc_2_te: "బాల్కనీ & మెట్ల గ్లాస్ రైలింగ్స్",
    svc_2_desc: "12mm సెయింట్-గోబైన్ టఫ్ఫెండ్ గ్లాస్ మరియు జిందాల్ SS 304 స్పిగోట్స్ బేస్ తో ఆధునిక విల్లా బాల్కనీలు మరియు మెట్ల రైలింగ్స్.",

    svc_3_title: "CNC లేజర్ కట్ & మోడ్రన్ డిజైనర్ గేట్స్",
    svc_3_te: "స్లైడింగ్ & ఆటోమేటిక్ గేట్స్",
    svc_3_desc: "లేజర్ కటింగ్ టెక్నాలజీతో కూడిన సరికొత్త జాళీ గేట్లు, వుడెన్ టచ్ గేట్లు మరియు మన్నికైన యాంటీ-రస్ట్ పౌడర్ కోటింగ్ గేట్స్.",

    svc_4_title: "SS 304 స్టెయిన్‌లెస్ స్టీల్ రైలింగ్స్",
    svc_4_te: "మెట్లు & వరండా స్టీల్ రైలింగ్స్",
    svc_4_desc: "తుప్పు పట్టని ఒరిజినల్ జిందాల్ SS 304 గ్రేడ్ పైపులతో మరియు నాణ్యమైన ఆర్గాన్ టిగ్ వెల్డింగ్‌తో జీవితకాల మన్నిక.",

    svc_5_title: "విండో సేఫ్టీ గ్రిల్స్ & బాల్కనీ గ్రిల్స్",
    svc_5_te: "బలమైన రక్షణ ఇనుప గ్రిల్స్",
    svc_5_desc: "దొంగల భయం లేని పటిష్టమైన స్క్వేర్ బార్ గ్రిల్స్, డిజైనర్ కిటికీ గ్రిల్స్ మరియు పిల్లల భద్రత కోసం బాల్కనీ మెష్ వర్క్స్.",

    svc_6_title: "ఇండస్ట్రియల్ షెడ్స్ & భారీ వెల్డింగ్ పనులు",
    svc_6_te: "ఫ్యాక్టరీ రూఫ్ ట్రస్సెస్ & గోడౌన్ వర్క్స్",
    svc_6_desc: "టాటా స్ట్రక్చురా స్టీల్ పైపులతో ఫ్యాక్టరీ షెడ్లు, గోడౌన్ ట్రస్సెస్, రోలింగ్ షట్టర్లు మరియు ఆర్డర్ ప్రకారం స్టీల్ నిర్మాణాలు.",
    btn_enquire: "వివరాలు కోరండి",

    // Calculator
    calc_badge: "ఉచిత తక్షణ ఖర్చు అంచనా",
    calc_heading: "మీ ప్రాజెక్ట్ ఖర్చును క్షణాల్లో లెక్కించండి",
    calc_te: "మీకు కావలసిన పనిని ఎంచుకుని సులభంగా అంచనా వ్యయాన్ని లెక్కించండి.",
    calc_desc: "కంటైనర్ హౌస్, గ్లాస్ రైలింగ్ లేదా గేట్ కోసం ఇప్పుడే అంచనా వేసి వాట్సాప్‌కి పంపండి. మేము ప్రత్యేక తగ్గింపు అందిస్తాము!",
    calc_p1: "ఎలాంటి దళారీలు లేకుండా నేరుగా వర్క్‌షాప్ ధరలు",
    calc_p2: "ఒరిజినల్ టాటా & జిందాల్ స్టీల్ గ్యారెంటీ",
    calc_p3: "ఆంధ్రప్రదేశ్‌లో ఉచిత సైట్ విజిట్ & కొలతలు",
    lbl_select_work: "పని రకాన్ని ఎంచుకోండి:",
    lbl_quantity: "పరిమాణం / కొలత:",
    lbl_finish: "నాణ్యత / మెటీరియల్:",
    lbl_est_range: "సుమారు అంచనా ఖర్చు:",
    lbl_est_note: "* వెల్డింగ్, ఫిట్టింగ్ మరియు యాంటీ రస్ట్ కోటింగ్ తో కలిపి. ఖచ్చితమైన కొలతల తర్వాత ఫైనల్ కొటేషన్ ఇవ్వబడుతుంది.",
    btn_send_estimate: "ఈ అంచనాను వాట్సాప్‌కి పంపి రాయితీ పొందండి",

    // Gallery
    gallery_subtitle: "మేము పూర్తి చేసిన పనులు",
    gallery_title: "పనుల ఫోటోల గ్యాలరీ",
    gallery_desc: "మా ఆధ్వర్యంలో తయారు చేయబడిన కంటైనర్ విల్లాలు, గ్లాస్ బాల్కనీలు మరియు గేట్ల ఫోటోలను చూడండి.",

    // Why Us
    why_subtitle: "మా పనితనం ప్రత్యేకత",
    why_title: "శ్రీ లక్ష్మీ గణపతి ఇంజనీరింగ్ వర్క్స్‌ను ఎందుకు ఎంచుకోవాలి?",
    why_te: "మా నాన్నగారి 25 ఏళ్ళ అనుభవం మరియు నిబద్ధత — ప్రతి పనిలోనూ ఉన్నతమైన నాణ్యత, సరైన కొలతలు మరియు మన్నికైన స్టీల్!",
    why_desc: "థర్డ్ పార్టీ కాంట్రాక్టర్లలా మేము పనులను ఇతరులకు అప్పగించము. మా నాన్నగారు స్వయంగా ప్రతి కొలతను, ప్రతి వెల్డ్ జాయింట్‌ను పర్యవేక్షించి అత్యుత్తమ నాణ్యతను అందిస్తారు.",
    why_f1_title: "100% బ్రాండెడ్ నాణ్యమైన మెటీరియల్",
    why_f1_desc: "టాటా స్ట్రక్చురా, జిందాల్ SS 304 మరియు సెయింట్ గోబైన్ 12mm గ్లాస్ మాత్రమే వాడతాం.",
    why_f2_title: "నేరుగా ఫ్యాక్టరీ ధర — 20% నుండి 30% ఆదా",
    why_f2_desc: "దళారీలు లేకపోవడం వల్ల నేరుగా తక్కువ ధరలకే నాణ్యమైన పని లభిస్తుంది.",
    why_f3_title: "మిల్లీమీటర్ లెవెల్ కచ్చితత్వం",
    why_f3_desc: "ఎలాంటి లోపాలు లేకుండా సజావుగా కదిలే గేట్లు మరియు స్ట్రాంగ్ గ్లాస్ ఫిట్టింగ్స్.",
    why_f4_title: "ఆంధ్రప్రదేశ్ & ఇండియా అంతటా డెలివరీ",
    why_f4_desc: "కంటైనర్ హోమ్స్ దేశంలో ఎక్కడికైనా సురక్షితంగా రవాణా చేసి ఇన్స్టాల్ చేస్తాం.",

    // Contact
    contact_subtitle: "మమ్మల్ని సంప్రదించండి",
    contact_title: "మా వర్క్‌షాప్‌ను సందర్శించండి లేదా కాల్ చేయండి",
    contact_desc: "కంటైనర్ ఇళ్ళు, గ్లాస్ రైలింగ్స్ లేదా గేట్ పనుల గురించి మాట్లాడటానికి నేరుగా కాల్ చేయండి.",
    cnt_phone_title: "కాల్ / వాట్సాప్ వివరాలు",
    cnt_phone_sub: "వారంలో 7 రోజులు తక్షణ కొటేషన్ కోసం అందుబాటులో ఉంటాము",
    cnt_loc_title: "వర్క్‌షాప్ ఖచ్చితమైన లొకేషన్",
    btn_get_directions: "గూగుల్ మ్యాప్ డైరెక్షన్స్ చూడండి",
    cnt_coverage_title: "సర్వీస్ ప్రాంతాలు",

    // Enquiry
    enquiry_title: "ఉచిత సైట్ విజిట్ & కొలతల కోసం సంప్రదించండి",
    enquiry_desc: "ఈ చిన్న ఫారమ్ పూరించండి లేదా కాల్ చేయండి. మా టీమ్ 15 నిమిషాల్లో మిమ్మల్ని సంప్రదిస్తుంది.",
    lbl_your_name: "మీ పేరు: *",
    lbl_your_phone: "ఫోన్ నెంబర్: *",
    lbl_req_service: "కావలసిన పని: *",
    lbl_your_city: "మీ ఊరు / గ్రామం:",
    lbl_message: "కొలతలు / ఇతర వివరాలు:",
    btn_submit_enquiry: "సమర్పించి వెంటనే వాట్సాప్‌లో మాట్లాడండి",

    // Footer
    footer_bio: "ఆంధ్రప్రదేశ్‌లో నమ్మకమైన కంటైనర్ హోమ్స్, టఫ్ఫెండ్ గ్లాస్ రైలింగ్స్, మోడ్రన్ సీఎన్‌సీ గేట్స్ మరియు సమగ్ర వెల్డింగ్ పనుల కేంద్రం.",
    footer_prod_title: "మా ఉత్పత్తులు",
    footer_contact_title: "సంప్రదించండి"
  }
};

// Unit labels and pricing models
const productPricing = {
  container_20: {
    unitLabel: "Number of Cabins (యూనిట్లు):",
    defaultUnits: 1,
    minCost: 240000,
    maxCost: 295000,
    isArea: false
  },
  container_40: {
    unitLabel: "Number of 40ft Units (యూనిట్లు):",
    defaultUnits: 1,
    minCost: 480000,
    maxCost: 590000,
    isArea: false
  },
  glass_railing: {
    unitLabel: "Balcony / Stair Area (Sq.Ft / చ.అడుగులు):",
    defaultUnits: 60,
    minCost: 650,
    maxCost: 950,
    isArea: true
  },
  cnc_gate: {
    unitLabel: "Gate Area (Width x Height in Sq.Ft):",
    defaultUnits: 80,
    minCost: 450,
    maxCost: 750,
    isArea: true
  },
  ss_railing: {
    unitLabel: "Running Length (Running Feet / రన్నింగ్ ఫీట్):",
    defaultUnits: 45,
    minCost: 420,
    maxCost: 680,
    isArea: true
  },
  safety_grill: {
    unitLabel: "Grill Total Area (Sq.Ft / చ.అడుగులు):",
    defaultUnits: 100,
    minCost: 190,
    maxCost: 290,
    isArea: true
  },
  industrial_shed: {
    unitLabel: "Roof Covered Area (Sq.Ft / చ.అడుగులు):",
    defaultUnits: 500,
    minCost: 240,
    maxCost: 380,
    isArea: true
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Update year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initial calculation
  updateCalculatorUnits();
});

// Language Toggle
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'te' : 'en';
  document.documentElement.setAttribute('data-lang', currentLanguage);
  document.documentElement.lang = currentLanguage;

  const labelEl = document.getElementById('currentLangLabel');
  if (labelEl) {
    labelEl.textContent = currentLanguage === 'en' ? 'తెలుగు (Telugu)' : 'English';
  }
  const mobileLabelEl = document.getElementById('mobileLangLabel');
  if (mobileLabelEl) {
    mobileLabelEl.textContent = currentLanguage === 'en' ? 'తెలుగు' : 'English';
  }

  // Update all translatable elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      el.textContent = translations[currentLanguage][key];
    }
  });

  // Re-run calculator labels
  updateCalculatorUnits();
}

// Mobile Menu
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.toggle('active');
  }
}

// Calculator logic
function updateCalculatorUnits() {
  const serviceSelect = document.getElementById('calcService');
  const unitLabel = document.getElementById('calcUnitLabel');
  const qtyInput = document.getElementById('calcQuantity');
  
  if (!serviceSelect || !unitLabel || !qtyInput) return;

  const selectedKey = serviceSelect.value;
  const config = productPricing[selectedKey] || productPricing.container_20;

  unitLabel.textContent = config.unitLabel;
  if (!qtyInput.dataset.modified) {
    qtyInput.value = config.defaultUnits;
  }

  calculateEstimate();
}

function calculateEstimate() {
  const serviceSelect = document.getElementById('calcService');
  const qtyInput = document.getElementById('calcQuantity');
  const finishSelect = document.getElementById('calcFinish');
  const displayEl = document.getElementById('estimateDisplay');

  if (!serviceSelect || !qtyInput || !displayEl) return;

  qtyInput.dataset.modified = "true";

  const selectedKey = serviceSelect.value;
  const config = productPricing[selectedKey] || productPricing.container_20;
  const qty = Math.max(1, parseFloat(qtyInput.value) || 1);
  const finish = finishSelect ? finishSelect.value : 'premium';

  let multiplier = 1.0;
  if (finish === 'standard') multiplier = 0.9;
  if (finish === 'luxury') multiplier = 1.25;

  let minTotal = Math.round(config.minCost * qty * multiplier);
  let maxTotal = Math.round(config.maxCost * qty * multiplier);

  displayEl.textContent = `₹ ${minTotal.toLocaleString('en-IN')} - ₹ ${maxTotal.toLocaleString('en-IN')}`;
}

// Handle Calculator WhatsApp Action
function handleCalculatorSubmit(e) {
  e.preventDefault();
  const serviceSelect = document.getElementById('calcService');
  const qtyInput = document.getElementById('calcQuantity');
  const finishSelect = document.getElementById('calcFinish');
  const displayEl = document.getElementById('estimateDisplay');

  const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
  const qty = qtyInput.value;
  const finishName = finishSelect.options[finishSelect.selectedIndex].text;
  const estimate = displayEl.textContent;

  const text = `Namaste Sri Lakshmi Ganapathi Works,\n\nI calculated an estimate on your website:\n- Work: ${serviceName}\n- Quantity/Area: ${qty}\n- Grade: ${finishName}\n- Estimated Range: ${estimate}\n\nPlease share your best direct workshop quotation and availability for site measurement.\n\nThank you!`;

  const waUrl = `https://wa.me/919912453563?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

// Handle Enquiry Form
function handleEnquiryForm(e) {
  e.preventDefault();
  const name = document.getElementById('clientName').value.trim();
  const phone = document.getElementById('clientPhone').value.trim();
  const service = document.getElementById('clientService').value;
  const city = document.getElementById('clientLocation').value.trim();
  const msg = document.getElementById('clientMsg').value.trim();

  let text = `Namaste Sri Lakshmi Ganapathi Works,\n\nI would like to request a quote / site visit:\n`;
  text += `- Name: ${name}\n`;
  text += `- Phone: ${phone}\n`;
  text += `- Service Required: ${service}\n`;
  if (city) text += `- Location: ${city}\n`;
  if (msg) text += `- Details: ${msg}\n`;
  text += `\nPlease call me back or message me with details.`;

  const waUrl = `https://wa.me/919912453563?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

// Gallery Filtering
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-btn');

  // Update button active states
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(`'${category}'`)) {
      btn.classList.add('active');
    }
  });

  // Filter items
  items.forEach(item => {
    const itemCat = item.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Zero-tolerance horizontal scroll prevention guard
window.addEventListener('scroll', () => {
  if (window.scrollX > 0) {
    window.scrollTo(0, window.scrollY);
  }
}, { passive: true });

