function getAllProducts() {
  return [

    // ===================== iPHONES =====================
    {
      id: 101,
      name: "iPhone 7",
      category: "phones",
      brand: "apple",
      price: 85000,
      emoji: "📱",
      description: "The iPhone that introduced water resistance and stereo speakers. Powered by the A10 Fusion chip with a 12MP camera. A reliable classic.",
      features: ["A10 Fusion Chip", "12MP Camera", "IP67 Water Resistant", "Touch ID", "4.7-inch Retina Display", "Stereo Speakers"]
    },
    {
      id: 102,
      name: "iPhone 7 Plus",
      category: "phones",
      brand: "apple",
      price: 110000,
      emoji: "📱",
      description: "The larger 7 Plus introduced the iconic dual-camera system with Portrait Mode for the first time on iPhone.",
      features: ["A10 Fusion Chip", "Dual 12MP Cameras", "Portrait Mode", "IP67 Water Resistant", "5.5-inch Display", "3GB RAM"]
    },
    {
      id: 103,
      name: "iPhone 8",
      category: "phones",
      brand: "apple",
      price: 100000,
      emoji: "📱",
      description: "Glass-front and back design with wireless charging support and the powerful A11 Bionic chip.",
      features: ["A11 Bionic Chip", "12MP Camera", "Wireless Charging", "True Tone Display", "4.7-inch Retina", "Touch ID"]
    },
    {
      id: 104,
      name: "iPhone 8 Plus",
      category: "phones",
      brand: "apple",
      price: 130000,
      emoji: "📱",
      description: "The 8 Plus delivers the same power as the 8 with a larger screen and dual-camera Portrait Mode.",
      features: ["A11 Bionic Chip", "Dual 12MP Cameras", "Portrait Mode", "Wireless Charging", "5.5-inch Display", "3GB RAM"]
    },
    {
      id: 105,
      name: "iPhone X",
      category: "phones",
      brand: "apple",
      price: 165000,
      emoji: "📱",
      description: "The future of iPhone. The X introduced Face ID, the Super Retina OLED display, and the iconic notch design.",
      features: ["A11 Bionic Chip", "Face ID", "Super Retina OLED", "12MP Dual Camera", "Wireless Charging", "Animoji"]
    },
    {
      id: 106,
      name: "iPhone XS",
      category: "phones",
      brand: "apple",
      price: 185000,
      emoji: "📱",
      description: "Refined and faster than the X, the XS brings the A12 Bionic chip and improved camera Smart HDR.",
      features: ["A12 Bionic Chip", "Smart HDR Camera", "Face ID", "OLED Super Retina", "Dual SIM", "IP68 Water Resistant"]
    },
    {
      id: 107,
      name: "iPhone XS Max",
      category: "phones",
      brand: "apple",
      price: 210000,
      emoji: "📱",
      description: "The largest and most premium iPhone of its era with a stunning 6.5-inch OLED display.",
      features: ["A12 Bionic Chip", "6.5-inch OLED", "Smart HDR Camera", "Face ID", "IP68", "4GB RAM"]
    },
    {
      id: 108,
      name: "iPhone XR",
      category: "phones",
      brand: "apple",
      price: 160000,
      emoji: "📱",
      description: "The most colourful iPhone with the longest battery life of its generation and a beautiful Liquid Retina display.",
      features: ["A12 Bionic Chip", "Liquid Retina LCD", "12MP Camera", "Face ID", "Best-ever battery life", "6 colour options"]
    },
    {
      id: 109,
      name: "iPhone 11",
      category: "phones",
      brand: "apple",
      price: 230000,
      emoji: "📱",
      description: "Powerful Night Mode, Ultra Wide camera, and the A13 Bionic chip — a massive upgrade in every way.",
      features: ["A13 Bionic Chip", "Night Mode", "Ultra Wide Camera", "Face ID", "IP68", "All-day battery"]
    },
    {
      id: 110,
      name: "iPhone 11 Pro",
      category: "phones",
      brand: "apple",
      price: 310000,
      emoji: "📱",
      description: "Pro photography. Pro performance. Triple camera with Night Mode and Super Retina XDR OLED display.",
      features: ["A13 Bionic Chip", "Triple 12MP Camera", "Night Mode", "Super Retina XDR", "Midnight Green", "IP68"]
    },
    {
      id: 111,
      name: "iPhone 11 Pro Max",
      category: "phones",
      brand: "apple",
      price: 360000,
      emoji: "📱",
      description: "The most powerful iPhone of 2019 with the best battery life ever and an expansive 6.5-inch OLED.",
      features: ["A13 Bionic Chip", "Triple Camera", "Night Mode", "6.5-inch OLED", "Best Battery Life 2019", "IP68"]
    },
    {
      id: 112,
      name: "iPhone 12",
      category: "phones",
      brand: "apple",
      price: 320000,
      emoji: "📱",
      description: "5G, Ceramic Shield, A14 Bionic, and OLED in a refreshed flat-edge design — a generational leap.",
      features: ["A14 Bionic Chip", "5G Connectivity", "Super Retina XDR OLED", "Ceramic Shield", "MagSafe", "Night Mode Video"]
    },
    {
      id: 113,
      name: "iPhone 12 Pro Max",
      category: "phones",
      brand: "apple",
      price: 480000,
      emoji: "📱",
      description: "Pro Max capabilities with sensor-shift OIS, ProRAW photography, and the huge 6.7-inch ProMotion display.",
      features: ["A14 Bionic", "Sensor-shift OIS", "ProRAW Support", "6.7-inch OLED", "LiDAR Scanner", "5G"]
    },
    {
      id: 114,
      name: "iPhone 13",
      category: "phones",
      brand: "apple",
      price: 430000,
      emoji: "📱",
      description: "Cinematic Mode video, a bigger battery, and the blazing A15 Bionic — easily the best value iPhone.",
      features: ["A15 Bionic Chip", "Cinematic Mode", "Bigger Battery", "Super Retina XDR", "5G", "128GB base storage"]
    },
    {
      id: 115,
      name: "iPhone 13 Pro Max",
      category: "phones",
      brand: "apple",
      price: 620000,
      emoji: "📱",
      description: "ProMotion 120Hz, macro photography, LiDAR, and the longest battery life ever on an iPhone at the time.",
      features: ["A15 Bionic", "ProMotion 120Hz", "Macro Camera", "LiDAR Scanner", "6.7-inch ProMotion OLED", "5G"]
    },
    {
      id: 116,
      name: "iPhone 14",
      category: "phones",
      brand: "apple",
      price: 560000,
      emoji: "📱",
      description: "Crash Detection, Emergency SOS via satellite, and a refined camera system with Action mode video.",
      features: ["A15 Bionic", "Crash Detection", "Satellite SOS", "Action Mode Video", "5G", "IP68"]
    },
    {
      id: 117,
      name: "iPhone 14 Pro Max",
      category: "phones",
      brand: "apple",
      price: 820000,
      emoji: "📱",
      description: "The Dynamic Island, always-on display, 48MP camera, and A16 Bionic — the peak of 2022 iPhone.",
      features: ["A16 Bionic", "Dynamic Island", "Always-On Display", "48MP Main Camera", "ProRes Video", "Emergency SOS Satellite"]
    },
    {
      id: 118,
      name: "iPhone 15",
      category: "phones",
      brand: "apple",
      price: 680000,
      emoji: "📱",
      description: "USB-C arrives on the base iPhone with Dynamic Island, 48MP camera, and A16 Bionic chip.",
      features: ["A16 Bionic", "USB-C", "Dynamic Island", "48MP Camera", "Roadside Assistance via Satellite", "5G"]
    },
    {
      id: 119,
      name: "iPhone 15 Pro",
      category: "phones",
      brand: "apple",
      price: 1050000,
      emoji: "📱",
      description: "Titanium design, A17 Pro chip, Action Button, and USB 3 speeds — the first truly pro iPhone.",
      features: ["A17 Pro Chip", "Titanium Frame", "Action Button", "USB 3.0 Speed", "48MP Triple Camera", "ProRes 4K 60fps"]
    },
    {
      id: 120,
      name: "iPhone 15 Pro Max",
      category: "phones",
      brand: "apple",
      price: 1250000,
      emoji: "📱",
      description: "5x optical zoom periscope telephoto, titanium, and A17 Pro. The most capable iPhone camera ever in 2023.",
      features: ["A17 Pro Chip", "5x Periscope Zoom", "Titanium Frame", "6.7-inch ProMotion OLED", "Action Button", "USB 3.0"]
    },
    {
      id: 121,
      name: "iPhone 16",
      category: "phones",
      brand: "apple",
      price: 850000,
      emoji: "📱",
      description: "Apple Intelligence, Camera Control button, A18 chip, and a 48MP camera system in a fresh new design.",
      features: ["A18 Chip", "Apple Intelligence", "Camera Control", "48MP Fusion Camera", "USB-C", "Action Button"]
    },
    {
      id: 122,
      name: "iPhone 16 Pro",
      category: "phones",
      brand: "apple",
      price: 1350000,
      emoji: "📱",
      description: "4K 120fps ProRes video, Camera Control, Apple Intelligence, and A18 Pro in a Desert Titanium finish.",
      features: ["A18 Pro Chip", "4K 120fps ProRes", "Camera Control", "Apple Intelligence", "5x Optical Zoom", "USB 3.0"]
    },
    {
      id: 123,
      name: "iPhone 16 Pro Max",
      category: "phones",
      brand: "apple",
      price: 1650000,
      emoji: "📱",
      description: "The biggest Pro Max ever — 6.9-inch display, best-ever battery life, and the ultimate Apple Intelligence experience.",
      features: ["A18 Pro Chip", "6.9-inch ProMotion OLED", "Apple Intelligence", "Camera Control", "5x Zoom", "All-day+ battery"]
    },
    {
      id: 124,
      name: "iPhone 17",
      category: "phones",
      brand: "apple",
      price: 1750000,
      emoji: "📱",
      description: "Apple's refreshed 2025 flagship — aluminium-glass hybrid back, A19 chip, 48MP dual camera with Center Stage front cam.",
      features: ["A19 Chip", "48MP Dual Camera", "Center Stage Front Camera", "ProMotion Super Retina XDR", "Apple Intelligence 2.0", "USB-C"]
    },
    {
      id: 125,
      name: "iPhone 17 Pro",
      category: "phones",
      brand: "apple",
      price: 2500000,
      emoji: "📱",
      description: "Heat-forged aluminium unibody, A19 Pro, and 8x optical-quality zoom — built for creators and professionals.",
      features: ["A19 Pro Chip", "8x Optical-quality Zoom", "48MP Triple Camera", "Heat-forged Aluminium", "Apple Intelligence 2.0", "4K 120fps ProRes"]
    },
    {
      id: 126,
      name: "iPhone 17 Pro Max",
      category: "phones",
      brand: "apple",
      price: 2900000,
      emoji: "📱",
      description: "The best iPhone ever made — 6.9-inch display, best-ever battery life, A19 Pro, and Ceramic Shield 2 for unmatched durability.",
      features: ["A19 Pro Chip", "6.9-inch Super Retina XDR", "Ceramic Shield 2", "Best-ever iPhone battery", "Apple Intelligence 2.0", "10x Periscope Zoom"]
    },

    // ===================== SAMSUNG GALAXY S SERIES =====================
    {
      id: 201,
      name: "Samsung Galaxy S8",
      category: "phones",
      brand: "samsung",
      price: 75000,
      emoji: "📲",
      description: "Infinity Display and IP68 water resistance introduced in 2017. Bixby's first appearance and iris scanner for secure unlock.",
      features: ["Snapdragon 835", "5.8-inch Infinity Display", "12MP Camera", "IP68", "Iris Scanner", "Bixby Assistant"]
    },
    {
      id: 202,
      name: "Samsung Galaxy S8+",
      category: "phones",
      brand: "samsung",
      price: 90000,
      emoji: "📲",
      description: "The larger Infinity Display flagship of 2017 with a stunning 6.2-inch curved screen and premium build.",
      features: ["Snapdragon 835", "6.2-inch Infinity Display", "12MP Camera", "IP68", "4GB RAM", "DeX Support"]
    },
    {
      id: 203,
      name: "Samsung Galaxy S9",
      category: "phones",
      brand: "samsung",
      price: 95000,
      emoji: "📲",
      description: "Variable aperture camera (f/1.5 – f/2.4) that adapts like a human eye. Super Slow-Mo at 960fps.",
      features: ["Snapdragon 845", "Variable Aperture Camera", "Super Slow-Mo 960fps", "IP68", "Stereo Speakers", "AR Emoji"]
    },
    {
      id: 204,
      name: "Samsung Galaxy S9+",
      category: "phones",
      brand: "samsung",
      price: 120000,
      emoji: "📲",
      description: "Dual cameras with 2x optical zoom and the industry-first variable aperture in a large 6.2-inch form factor.",
      features: ["Snapdragon 845", "Dual Variable Aperture", "2x Optical Zoom", "6.2-inch Display", "6GB RAM", "IP68"]
    },
    {
      id: 205,
      name: "Samsung Galaxy S10",
      category: "phones",
      brand: "samsung",
      price: 160000,
      emoji: "📲",
      description: "Triple rear cameras, punch-hole display, ultrasonic fingerprint sensor, and Wi-Fi 6 on the 10th anniversary Galaxy.",
      features: ["Snapdragon 855", "Triple Camera", "Punch-hole Display", "Ultrasonic Fingerprint", "Wi-Fi 6", "IP68"]
    },
    {
      id: 206,
      name: "Samsung Galaxy S10+",
      category: "phones",
      brand: "samsung",
      price: 195000,
      emoji: "📲",
      description: "The premium S10 with dual front cameras, triple rear cameras, and a generous 6.4-inch Dynamic AMOLED screen.",
      features: ["Snapdragon 855", "Triple Rear + Dual Front Camera", "6.4-inch AMOLED", "4100mAh Battery", "8GB RAM", "IP68"]
    },
    {
      id: 207,
      name: "Samsung Galaxy S20",
      category: "phones",
      brand: "samsung",
      price: 210000,
      emoji: "📲",
      description: "First Samsung with 5G support, Space Zoom, and 120Hz display — a landmark upgrade for Samsung fans.",
      features: ["Exynos 990/SD865", "5G", "120Hz Display", "64MP Camera", "Space Zoom", "IP68"]
    },
    {
      id: 208,
      name: "Samsung Galaxy S20 Ultra",
      category: "phones",
      brand: "samsung",
      price: 295000,
      emoji: "📲",
      description: "100x Space Zoom and 108MP camera made the S20 Ultra a photography powerhouse unlike anything before it.",
      features: ["Exynos 990", "108MP Camera", "100x Space Zoom", "8K Video", "5000mAh Battery", "5G"]
    },
    {
      id: 209,
      name: "Samsung Galaxy S21",
      category: "phones",
      brand: "samsung",
      price: 280000,
      emoji: "📲",
      description: "Refined, faster, and more affordable than its predecessor. Contour-Cut camera design and 8K video capture.",
      features: ["Exynos 2100", "Triple Camera", "8K Video", "120Hz AMOLED", "5G", "5000mAh Battery"]
    },
    {
      id: 210,
      name: "Samsung Galaxy S21 Ultra",
      category: "phones",
      brand: "samsung",
      price: 420000,
      emoji: "📲",
      description: "First S Ultra with built-in S Pen support, 108MP quad cameras, and 100x Space Zoom.",
      features: ["Exynos 2100", "108MP Quad Camera", "S Pen Support", "100x Space Zoom", "120Hz Curved Display", "5G"]
    },
    {
      id: 211,
      name: "Samsung Galaxy S22",
      category: "phones",
      brand: "samsung",
      price: 350000,
      emoji: "📲",
      description: "Compact, refined design with Snapdragon 8 Gen 1, brighter display, and improved low-light cameras.",
      features: ["Snapdragon 8 Gen 1", "50MP Camera", "Bright 120Hz AMOLED", "IP68", "Adaptive Refresh Rate", "5G"]
    },
    {
      id: 212,
      name: "Samsung Galaxy S22 Ultra",
      category: "phones",
      brand: "samsung",
      price: 550000,
      emoji: "📲",
      description: "The Note returns — built-in S Pen silo, 108MP camera, 100x zoom, and Note-like flat design. A fan favourite.",
      features: ["Snapdragon 8 Gen 1", "Built-in S Pen", "108MP Camera", "100x Space Zoom", "6.8-inch AMOLED", "IP68"]
    },
    {
      id: 213,
      name: "Samsung Galaxy S23",
      category: "phones",
      brand: "samsung",
      price: 430000,
      emoji: "📲",
      description: "All-Snapdragon 8 Gen 2 globally, 50MP camera with improved Night Mode, and a refined Armor Aluminium frame.",
      features: ["Snapdragon 8 Gen 2", "50MP Camera", "Night Mode AI", "120Hz AMOLED", "3900mAh Battery", "IP68"]
    },
    {
      id: 214,
      name: "Samsung Galaxy S23 Ultra",
      category: "phones",
      brand: "samsung",
      price: 730000,
      emoji: "📲",
      description: "200MP camera, built-in S Pen, Snapdragon 8 Gen 2, and 100x zoom — the apex of Android in 2023.",
      features: ["Snapdragon 8 Gen 2", "200MP Camera", "Built-in S Pen", "100x Zoom", "5000mAh Battery", "Galaxy AI Preview"]
    },
    {
      id: 215,
      name: "Samsung Galaxy S24",
      category: "phones",
      brand: "samsung",
      price: 850000,
      emoji: "📲",
      description: "Galaxy AI built-in — Circle to Search, Live Translate, Chat Assist, and powerful Snapdragon 8 Gen 3 inside.",
      features: ["Snapdragon 8 Gen 3", "Galaxy AI", "Circle to Search", "50MP Camera", "120Hz AMOLED", "7 years of updates"]
    },
    {
      id: 216,
      name: "Samsung Galaxy S24 Ultra",
      category: "phones",
      brand: "samsung",
      price: 1615000,
      emoji: "📲",
      description: "Titanium body, 200MP quad camera, built-in S Pen, and Galaxy AI — the definitive Android flagship of 2024.",
      features: ["Snapdragon 8 Gen 3", "200MP Quad Camera", "Titanium Frame", "S Pen", "Galaxy AI", "100x Space Zoom"]
    },
    {
      id: 217,
      name: "Samsung Galaxy S25",
      category: "phones",
      brand: "samsung",
      price: 1090000,
      emoji: "📲",
      description: "Snapdragon 8 Elite, smarter Galaxy AI, and a refined slim design. The most advanced base Galaxy S ever.",
      features: ["Snapdragon 8 Elite", "Galaxy AI Enhanced", "50MP Triple Camera", "120Hz AMOLED", "4000mAh Battery", "7 years of updates"]
    },
    {
      id: 218,
      name: "Samsung Galaxy S25+",
      category: "phones",
      brand: "samsung",
      price: 1349000,
      emoji: "📲",
      description: "Larger 6.7-inch display with Snapdragon 8 Elite, upgraded 50MP triple cameras, and Galaxy AI at its best.",
      features: ["Snapdragon 8 Elite", "6.7-inch AMOLED", "50MP Triple Camera", "Galaxy AI", "4900mAh Battery", "45W Charging"]
    },
    {
      id: 219,
      name: "Samsung Galaxy S25 Ultra",
      category: "phones",
      brand: "samsung",
      price: 1951000,
      emoji: "📲",
      description: "The most powerful Galaxy ever — 200MP quad camera, redesigned S Pen, Snapdragon 8 Elite, and Galaxy AI 2.0.",
      features: ["Snapdragon 8 Elite", "200MP Quad Camera", "Redesigned S Pen", "Galaxy AI 2.0", "5000mAh Battery", "100x Space Zoom"]
    },

    // ===================== ADULT TABLETS =====================

    // --- iPad Series ---
    {
      id: 301,
      name: "iPad 9th Gen (10.2\")",
      category: "tablets-adult",
      brand: "apple",
      price: 400000,
      emoji: "📟",
      description: "The bestselling iPad, now even better. A13 Bionic, True Tone display, and Apple Pencil support — perfect for students and everyday use.",
      features: ["A13 Bionic Chip", "10.2-inch Retina Display", "Apple Pencil (1st gen) Support", "Touch ID", "64GB Storage", "Wi-Fi"]
    },
    {
      id: 302,
      name: "iPad 10th Gen (10.9\")",
      category: "tablets-adult",
      brand: "apple",
      price: 550000,
      emoji: "📟",
      description: "Completely redesigned with USB-C, all-screen design, and A14 Bionic. The most affordable modern iPad.",
      features: ["A14 Bionic Chip", "10.9-inch Liquid Retina", "USB-C", "5G Optional", "12MP Front Camera", "Apple Pencil (1st gen)"]
    },
    {
      id: 303,
      name: "iPad Mini 7 (A17 Pro)",
      category: "tablets-adult",
      brand: "apple",
      price: 900000,
      emoji: "📟",
      description: "The pocket powerhouse — A17 Pro chip, 8.3-inch display, Apple Pencil Pro support, and Apple Intelligence in a compact body.",
      features: ["A17 Pro Chip", "8.3-inch Liquid Retina", "Apple Pencil Pro", "Apple Intelligence", "USB-C", "5G Optional"]
    },
    {
      id: 304,
      name: "iPad Air 11\" (M3)",
      category: "tablets-adult",
      brand: "apple",
      price: 1200000,
      emoji: "📟",
      description: "Thin, light, and powerful M3 chip iPad Air. Perfect for creative work, video editing, and everyday productivity.",
      features: ["Apple M3 Chip", "11-inch Liquid Retina", "USB-C", "Apple Pencil Pro", "Wi-Fi 6E", "Apple Intelligence"]
    },
    {
      id: 305,
      name: "iPad Air 13\" (M3)",
      category: "tablets-adult",
      brand: "apple",
      price: 1600000,
      emoji: "📟",
      description: "The large iPad Air for creators — expansive 13-inch display, M3 performance, and all-day battery life.",
      features: ["Apple M3 Chip", "13-inch Liquid Retina", "USB-C with USB 3", "Apple Pencil Pro", "Magic Keyboard Compatible", "Apple Intelligence"]
    },
    {
      id: 306,
      name: "iPad Air 11\" (M4) — 2026",
      category: "tablets-adult",
      brand: "apple",
      price: 1350000,
      emoji: "📟",
      description: "The freshly released 2026 iPad Air with M4 chip, Wi-Fi 7, Bluetooth 6, and 30% faster performance than M3.",
      features: ["Apple M4 Chip", "Wi-Fi 7 & Bluetooth 6", "5G Sub-6GHz", "12MP Rear Camera", "Apple Pencil Pro", "Apple Intelligence"]
    },
    {
      id: 307,
      name: "iPad Pro 11\" M4",
      category: "tablets-adult",
      brand: "apple",
      price: 1800000,
      emoji: "📟",
      description: "The thinnest Apple product ever. Ultra Retina XDR OLED, M4 chip, and Apple Pencil Pro — a laptop replacement.",
      features: ["Apple M4 Chip", "Ultra Retina XDR OLED", "Tandem OLED Display", "Apple Pencil Pro", "Thunderbolt / USB 4", "Nano-texture glass optional"]
    },
    {
      id: 308,
      name: "iPad Pro 13\" M4",
      category: "tablets-adult",
      brand: "apple",
      price: 2500000,
      emoji: "📟",
      description: "The most powerful iPad ever with an enormous OLED display, M4 chip, and professional-grade performance.",
      features: ["Apple M4 Chip", "13-inch Ultra Retina XDR OLED", "Up to 16GB RAM", "Apple Pencil Pro", "Magic Keyboard Support", "Thunderbolt / USB 4"]
    },

    // --- Samsung Galaxy Tab ---
    {
      id: 309,
      name: "Samsung Galaxy Tab A8",
      category: "tablets-adult",
      brand: "samsung",
      price: 155000,
      emoji: "📓",
      description: "Affordable 10.5-inch display for entertainment and productivity. Great for streaming, browsing, and study.",
      features: ["Unisoc T618", "10.5-inch LCD", "4GB RAM / 64GB Storage", "7040mAh Battery", "USB-C", "microSD up to 1TB"]
    },
    {
      id: 310,
      name: "Samsung Galaxy Tab S6 Lite (2024)",
      category: "tablets-adult",
      brand: "samsung",
      price: 290000,
      emoji: "📓",
      description: "Slim, lightweight with built-in S Pen and a beautiful 10.4-inch display. Ideal for students and note-takers.",
      features: ["Snapdragon 720G", "10.4-inch LCD", "S Pen Included", "4GB RAM / 64GB", "7040mAh Battery", "Book Cover Support"]
    },
    {
      id: 311,
      name: "Samsung Galaxy Tab S9 FE",
      category: "tablets-adult",
      brand: "samsung",
      price: 480000,
      emoji: "📓",
      description: "Fan Edition with IP68 rating, included S Pen, and AMOLED display at a mid-range price point.",
      features: ["Exynos 1380", "10.9-inch AMOLED", "S Pen Included", "IP68 Water Resistant", "8GB RAM / 128GB", "8000mAh Battery"]
    },
    {
      id: 312,
      name: "Samsung Galaxy Tab S9",
      category: "tablets-adult",
      brand: "samsung",
      price: 850000,
      emoji: "📓",
      description: "Flagship 11-inch Dynamic AMOLED display with Snapdragon 8 Gen 2, IP68 protection and included S Pen.",
      features: ["Snapdragon 8 Gen 2", "11-inch Dynamic AMOLED", "S Pen Included", "IP68 Rated", "8GB RAM / 128GB", "120Hz Refresh Rate"]
    },
    {
      id: 313,
      name: "Samsung Galaxy Tab S9 Ultra",
      category: "tablets-adult",
      brand: "samsung",
      price: 1450000,
      emoji: "📓",
      description: "The ultimate Android tablet — enormous 14.6-inch AMOLED, dual front cameras, S Pen, and Snapdragon 8 Gen 2.",
      features: ["Snapdragon 8 Gen 2", "14.6-inch Dynamic AMOLED", "Dual Front Cameras", "S Pen Included", "12GB RAM / 256GB", "IP68 Rating"]
    },
    {
      id: 314,
      name: "Samsung Galaxy Tab S10 FE",
      category: "tablets-adult",
      brand: "samsung",
      price: 550000,
      emoji: "📓",
      description: "2025 Fan Edition with Exynos 1580, Galaxy AI features, S Pen and a bright 10.9-inch display.",
      features: ["Exynos 1580", "10.9-inch AMOLED", "Galaxy AI", "S Pen Included", "8GB RAM / 128GB", "8000mAh Battery"]
    },
    {
      id: 315,
      name: "Samsung Galaxy Tab S10 Ultra",
      category: "tablets-adult",
      brand: "samsung",
      price: 1700000,
      emoji: "📓",
      description: "Snapdragon 8 Gen 3, 14.6-inch Dynamic AMOLED, Galaxy AI, and the most premium Samsung tablet experience.",
      features: ["Snapdragon 8 Gen 3", "14.6-inch Dynamic AMOLED X Elite", "Galaxy AI", "S Pen Included", "12GB RAM / 256GB", "IP68"]
    },

    // --- Lenovo Tablets ---
    {
      id: 316,
      name: "Lenovo Tab M10 Plus (3rd Gen)",
      category: "tablets-adult",
      brand: "lenovo",
      price: 185000,
      emoji: "💊",
      description: "A well-rounded mid-range tablet with a 10.6-inch 2K display, quad speakers, and solid battery life for everyday use.",
      features: ["Snapdragon 680", "10.6-inch 2K LCD", "Quad Speakers", "4GB RAM / 128GB", "7700mAh Battery", "Android 12"]
    },
    {
      id: 317,
      name: "Lenovo Tab P12 Pro",
      category: "tablets-adult",
      brand: "lenovo",
      price: 580000,
      emoji: "💊",
      description: "Professional-grade tablet with a stunning 12.6-inch AMOLED display, Snapdragon 870, and productivity tools.",
      features: ["Snapdragon 870", "12.6-inch AMOLED 2K+", "Quad JBL Speakers", "8GB RAM / 256GB", "10200mAh Battery", "Precision Pen 3 Support"]
    },

    // ===================== CHILDREN'S TABLETS =====================
    {
      id: 401,
      name: "Modio M1 Kids Tablet 7\"",
      category: "tablets-kids",
      brand: "modio",
      price: 30000,
      emoji: "🎮",
      description: "Nigeria's most popular budget kids tablet — pre-installed educational apps, durable bumper case, and parental controls. Perfect for toddlers.",
      features: ["7-inch IPS Display", "1GB RAM / 16GB Storage", "Pre-installed Education Apps", "Thick Bumper Case", "Wi-Fi", "Parental Controls"]
    },
    {
      id: 402,
      name: "Modio M3 Kids Tablet 7\"",
      category: "tablets-kids",
      brand: "modio",
      price: 38000,
      emoji: "🎮",
      description: "Upgraded Modio with 16GB storage, dual cameras, and learning apps including math, spelling, and nursery rhymes.",
      features: ["7-inch Display", "1GB RAM / 16GB ROM", "Dual Camera", "Educational Games & Apps", "Bumper Case Included", "Wi-Fi"]
    },
    {
      id: 403,
      name: "Atouch A38 Kids Tablet 8\"",
      category: "tablets-kids",
      brand: "atouch",
      price: 50000,
      emoji: "🎮",
      description: "Colourful 8-inch kids tablet with unbreakable bumper, 5000mAh battery, and curated educational content for ages 3–10.",
      features: ["8-inch IPS Display", "2GB RAM / 32GB", "5000mAh Battery (6-8hrs)", "Bumper Case + Tempered Glass", "Family Link Compatible", "Educational Pre-loads"]
    },
    {
      id: 404,
      name: "Atouch KD53 Educational Tablet",
      category: "tablets-kids",
      brand: "atouch",
      price: 65000,
      emoji: "🎮",
      description: "Feature-rich Atouch with OTG support, headset, pencil set, and finger gyro. Great for interactive learning and creative play.",
      features: ["8-inch Display", "3GB RAM / 32GB", "OTG Support", "Pencil + Headset + Gyro Included", "Parental Lock", "Nursery–Primary 6 Content"]
    },
    {
      id: 405,
      name: "Bebe B42 Pro Kids Tablet",
      category: "tablets-kids",
      brand: "bebe",
      price: 54000,
      emoji: "🎮",
      description: "Sturdy and colourful with thick shock-proof pouch. Loaded with Nigerian curriculum-aligned content and offline educational games.",
      features: ["7-inch HD Display", "2GB RAM / 32GB", "Nigerian Curriculum Content", "Thick Shock-proof Pouch", "Dual Camera", "Wi-Fi + Bluetooth"]
    },
    {
      id: 406,
      name: "Genius Kids Educational Tablet",
      category: "tablets-kids",
      brand: "genius",
      price: 37000,
      emoji: "🎮",
      description: "A trusted name in Nigeria for children's learning tablets. Bright display, pre-loaded games, and a tough protective case.",
      features: ["7-inch LCD", "2GB ROM / 16GB", "Pre-loaded Kids Apps", "Protective Case", "Wi-Fi", "For Ages 3-8"]
    },
    {
      id: 407,
      name: "Amazon Fire 7 Kids Edition",
      category: "tablets-kids",
      brand: "amazon",
      price: 85000,
      emoji: "🎮",
      description: "Amazon's most affordable Kids Edition with 1 year of Amazon Kids+ content, kid-proof case, and a 2-year worry-free guarantee.",
      features: ["7-inch Display", "2GB RAM / 16GB", "Amazon Kids+ (1 Year)", "Kid-Proof Case Included", "2-Year Guarantee", "Parental Dashboard"]
    },
    {
      id: 408,
      name: "Amazon Fire HD 8 Kids Edition",
      category: "tablets-kids",
      brand: "amazon",
      price: 130000,
      emoji: "🎮",
      description: "Bigger screen, 13-hour battery, and thousands of books, videos, and games through Amazon Kids+. Perfect for school-age children.",
      features: ["8-inch HD Display", "2GB RAM / 32GB", "Amazon Kids+ (1 Year)", "13-Hour Battery", "Kid-Proof Case", "Ages 3-12"]
    },
    {
      id: 409,
      name: "Lenovo Tab M8 Kids",
      category: "tablets-kids",
      brand: "lenovo",
      price: 193000,
      emoji: "🎮",
      description: "Premium kids tablet with 8-inch IPS display, Kids Mode parental controls, and Google Family Link. Includes silicone bumper case.",
      features: ["8-inch IPS Display", "2GB RAM / 32GB", "Kids Mode + Family Link", "Quad-Core 2GHz", "Silicone Bumper Case", "Expandable to 512GB"]
    },
    {
      id: 410,
      name: "Samsung Galaxy Tab A9 Kids",
      category: "tablets-kids",
      brand: "samsung",
      price: 240000,
      emoji: "🎮",
      description: "Samsung's kid-friendly version of the Tab A9 with Samsung Kids pre-loaded, durable case, and a big 8.7-inch display.",
      features: ["Helio G99", "8.7-inch LCD", "Samsung Kids Mode", "4GB RAM / 64GB", "5100mAh Battery", "Protective Case Included"]
    },
    {
      id: 411,
      name: "Atouch KT36 Unbreakable Kids Tablet",
      category: "tablets-kids",
      brand: "atouch",
      price: 72000,
      emoji: "🎮",
      description: "Boasts an unbreakable screen — designed for even the most accident-prone children. With educational content from nursery to JSS.",
      features: ["Unbreakable Screen", "8-inch Display", "3GB RAM / 32GB", "Nursery–JSS 3 Content", "Thick Drop-Proof Casing", "5000mAh Battery"]
    },
    {
      id: 412,
      name: "iPad (9th Gen) for Kids",
      category: "tablets-kids",
      brand: "apple",
      price: 400000,
      emoji: "🎮",
      description: "The best kids tablet money can buy — Apple's A13 Bionic-powered iPad with Screen Time parental controls, built for long-term learning.",
      features: ["A13 Bionic Chip", "10.2-inch Retina Display", "Screen Time Parental Controls", "Apple Pencil Support", "Thousands of Kids Apps", "Touch ID"]
    }
  ];
}