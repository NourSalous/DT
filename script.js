// DealTam Website JavaScript
class DealTamWebsite {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = this.initializeTranslations();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.setupSmoothScrolling();
        this.setupFormHandling();
        this.loadLanguage();
    }

    initializeTranslations() {
        return {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.services': 'Services',
                'nav.process': 'Process',
                'nav.why-us': 'Why Choose Us',
                'nav.fees': 'Fee Structure',
                'nav.contact': 'Contact',

                // Hero Section
                'hero.title': 'Built on Trust . Driven by Trade',
                'hero.subtitle': 'Your Story in Global Trade Begins Here',
                'hero.description': 'In the complex tapestry of international commerce, every business has a unique story waiting to be told. Yet between the lines of contracts, logistics, and cultural divides, many promising chapters remain unwritten.',
                'hero.description2': 'At DealTam, we believe your success story shouldn\'t be hindered by borders or bureaucracy. We are the narrators who help you write your next chapter - one of growth, opportunity, and seamless connection between Turkish excellence and global markets.',
                'hero.description3': 'Welcome to a partnership where your ambitions meet our expertise. Let\'s begin your story.',
                'hero.learn-more': 'Learn More',
                'hero.get-started': 'Get Started',

                // About Section
                'about.title': 'Who We Are',
                'about.story1': 'Our story began in Istanbul - the historic bridge between continents and cultures. From this crossroads of the world, we saw businesses struggling to connect across borders, missing opportunities due to uncertainty and complexity.',
                'about.story2': 'DealTam was born from a simple belief: global trade should be an adventure, not an obstacle course. We became the trusted guide that businesses needed - the local experts with global vision who could navigate the intricacies of international commerce with confidence and care.',
                'about.story3': 'Today, we\'re more than consultants; we\'re storytellers who help write success stories for our clients, one successful shipment at a time.',
                'about.vision.title': 'Our Vision',
                'about.vision.text': 'To Be Your Compass in Global Commerce. We imagine a world where borders don\'t hinder business, but enable it. Our vision is to be the leading consulting partner for exporters and importers globally, not by simply executing tasks, but by crafting an innovative and secure trade journey that consistently exceeds expectations.',
                'about.mission.title': 'Our Mission',
                'about.mission.text': 'Your Success, Our Blueprint. Our mission is simple yet profound: to deliver exceptional value by ensuring your business journey is seamless. We achieve this through an unwavering commitment to transparency, quality, and the cultivation of strong partnerships with globally recognized suppliers.',

                // Services Section
                'services.title': 'Comprehensive Trade Solutions',
                'services.sourcing.title': 'Supplier Sourcing & Verification',
                'services.sourcing.description': 'Finding qualified manufacturers',
                'services.quality.title': 'Quality Control & Inspection',
                'services.quality.description': 'Ensuring product compliance',
                'services.logistics.title': 'Logistics & Shipping Management',
                'services.logistics.description': 'End-to-end transport solutions',
                'services.customs.title': 'Customs Clearance Support',
                'services.customs.description': 'Documentation and compliance',
                'services.contract.title': 'Contract Management',
                'services.contract.description': 'Legal protection and dispute resolution',
                'services.analysis.title': 'Market Analysis',
                'services.analysis.description': 'Data-driven sourcing decisions',

                // Process Section
                'process.title': 'Our Working Methodology',
                'process.phase1.title': 'Consultation & Planning',
                'process.phase1.item1': 'Initial needs assessment',
                'process.phase1.item2': 'Project scope definition',
                'process.phase1.item3': 'Timeline establishment',
                'process.phase2.title': 'Sourcing & Negotiation',
                'process.phase2.item1': 'Supplier identification',
                'process.phase2.item2': 'Background verification',
                'process.phase2.item3': 'Price negotiation',
                'process.phase2.item4': 'Sample evaluation',
                'process.phase3.title': 'Execution & Monitoring',
                'process.phase3.item1': 'Order placement',
                'process.phase3.item2': 'Production oversight',
                'process.phase3.item3': 'Quality inspections',
                'process.phase3.item4': 'Logistics coordination',
                'process.phase4.title': 'Delivery & Support',
                'process.phase4.item1': 'Final quality assurance',
                'process.phase4.item2': 'Shipping management',
                'process.phase4.item3': 'Delivery confirmation',
                'process.phase4.item4': 'After-sales support',

                // Why Choose Us Section
                'why-us.title': 'The DealTam Advantage',
                'why-us.end-to-end.title': 'End-to-End Management',
                'why-us.end-to-end.description': 'Single point of contact for entire process',
                'why-us.verified.title': 'Verified Supplier Network',
                'why-us.verified.description': 'Pre-qualified, reliable manufacturers',
                'why-us.transparent.title': 'Transparent Communication',
                'why-us.transparent.description': 'Regular updates at every stage',
                'why-us.risk.title': 'Risk Mitigation',
                'why-us.risk.description': 'Comprehensive contracts and compliance',
                'why-us.cost.title': 'Cost Efficiency',
                'why-us.cost.description': 'Competitive pricing with no hidden fees',
                'why-us.quality.title': 'Quality Assurance',
                'why-us.quality.description': 'Multiple inspection checkpoints',

                // Fee Structure Section
                'fees.title': 'Transparent Pricing',
                'fees.subtitle': 'One Fee, Complete Service - No Hidden Costs',
                'fees.badge': 'BEST VALUE',
                'fees.model.title': 'Complete Service Package',
                'fees.percentage': '2-5%',
                'fees.percentage-label': 'of Order Value',
                'fees.includes.item1': 'Supplier sourcing and negotiation',
                'fees.includes.item2': 'Quality control and inspections',
                'fees.includes.item3': 'Shipping coordination support',
                'fees.includes.item4': 'Customs documentation assistance',
                'fees.includes.item5': 'End-to-end project management',
                'fees.includes.item6': 'Regular progress reporting',
                'fees.guarantee.title': '100% Transparency',
                'fees.guarantee.text': 'No hidden fees, no surprises',
                'fees.commitment.title': 'Fixed Before Start',
                'fees.commitment.text': 'Agreed upon before project commencement',
                'fees.cta': 'Get Started Today',
                'fees.comparison.title': 'Why Our Pricing?',
                'fees.comparison.description': 'Single transparent fee covering multiple services that would typically require separate providers and costs.',

                // Contact Section
                'contact.title': 'Begin Your Success Story',
                'contact.location.title': 'Location',
                'contact.location.address': 'Istanbul, Türkiye',
                'contact.phone.title': 'Phone Numbers',
                'contact.email.title': 'Email',
                'contact.social.title': 'Follow Us',
                'contact.form.name': 'Your Name',
                'contact.form.email': 'Your Email',
                'contact.form.phone': 'Your Phone',
                'contact.form.message': 'Your Message',
                'contact.form.submit': 'Send Message'
            },
            ar: {
                // Navigation
                'nav.home': 'الرئيسية',
                'nav.about': 'من نحن',
                'nav.services': 'الخدمات',
                'nav.process': 'العملية',
                'nav.why-us': 'لماذا نحن',
                'nav.fees': 'هيكل الرسوم',
                'nav.contact': 'اتصل بنا',

                // Hero Section
                'hero.title': ' شراكات موثوقة ، تجارة بلا حدود',
                'hero.subtitle': 'قصتك في التجارة العالمية تبدأ من هنا',
                'hero.description': 'في نسيج التجارة الدولية المعقد، كل شركة لديها قصة فريدة تنتظر أن تُحكى. ولكن بين سطور العقود واللوجستيات والفوارق الثقافية، تبقى فصول واعدة كثيرة غير مكتوبة.',
                'hero.description2': 'في ديل تم، نؤمن أن قصة نجاحك لا ينبغي أن تعيقها الحدود أو البيروقراطية. نحن الرواة الذين يساعدونك في كتابة فصل قادم - فصل من النمو والفرص والاتصال السلس بين التميز التركي والأسواق العالمية.',
                'hero.description3': 'مرحباً بكم في شراكة حيث طموحاتكم تلتقي بخبرتنا. لنبدأ قصتكم.',
                'hero.learn-more': 'اعرف المزيد',
                'hero.get-started': 'ابدأ الآن',

                // About Section
                'about.title': 'من نحن',
                'about.story1': 'بدأت قصتنا في إسطنبول - الجسر التاريخي بين القارات والثقافات. من هذه مفترق طرق العالم، رأينا الشركات تكافح للاتصال عبر الحدود، وتفوت الفرص بسبب عدم اليقين والتعقيد.',
                'about.story2': 'وُلدت ديل تم من إيمان بسيط: يجب أن تكون التجارة العالمية مغامرة، وليس مسار عقبات. أصبحنا الدليل الموثوق الذي تحتاجه الشركات - الخبراء المحليين برؤية عالمية يستطيعون التنقل في تعقيدات التجارة الدولية بثقة واهتمام.',
                'about.story3': 'اليوم، نحن أكثر من مستشارين؛ نحن رواة قصص نساعد في كتابة قصص النجاح لعملائنا، شحنة ناجحة تلو الأخرى.',
                'about.vision.title': 'رؤيتنا',
                'about.vision.text': 'أن نكون بوصلتك في التجارة العالمية. نتخيل عالماً حيث لا تعيق الحدود الأعمال، بل تمكنها. رؤيتنا هي أن نكون الشريك الاستشاري الرائد للمصدرين والمستوردين عالمياً، ليس من خلال تنفيذ المهام ببساطة، بل من خلال صياغة رحلة تجارية مبتكرة وآمنة تتجاوز التوقعات باستمرار.',
                'about.mission.title': 'رسالتنا',
                'about.mission.text': 'نجاحكم، مخططنا. رسالتنا بسيطة لكنها عميقة: تقديم قيمة استثنائية من خلال ضمان أن رحلتك التجارية سلسة. نحقق هذا من خلال التزام ثابت بالشفافية والجودة، وزراعة شراكات قوية مع موردين معترف بهم عالمياً.',

                // Services Section
                'services.title': 'حلول تجارية شاملة',
                'services.sourcing.title': 'توفير الموردين والتحقق منهم',
                'services.sourcing.description': 'العثور على مصنعين مؤهلين',
                'services.quality.title': 'مراقبة الجودة والتفتيش',
                'services.quality.description': 'ضمان امتثال المنتج',
                'services.logistics.title': 'إدارة الخدمات اللوجستية والشحن',
                'services.logistics.description': 'حلول النقل الشاملة',
                'services.customs.title': 'دعم التخليص الجمركي',
                'services.customs.description': 'الوثائق والامتثال',
                'services.contract.title': 'إدارة العقود',
                'services.contract.description': 'الحماية القانونية وتسوية النزاعات',
                'services.analysis.title': 'تحليل السوق',
                'services.analysis.description': 'قرارات التوريد المبنية على البيانات',

                // Process Section
                'process.title': 'منهجية عملنا',
                'process.phase1.title': 'الاستشارة والتخطيط',
                'process.phase1.item1': 'تقييم الاحتياجات الأولي',
                'process.phase1.item2': 'تحديد نطاق المشروع',
                'process.phase1.item3': 'وضع الجدول الزمني',
                'process.phase2.title': 'التوريد والتفاوض',
                'process.phase2.item1': 'تحديد الموردين',
                'process.phase2.item2': 'التحقق من الخلفية',
                'process.phase2.item3': 'التفاوض على السعر',
                'process.phase2.item4': 'تقييم العينات',
                'process.phase3.title': 'التنفيذ والمتابعة',
                'process.phase3.item1': 'وضع الطلب',
                'process.phase3.item2': 'الإشراف على الإنتاج',
                'process.phase3.item3': 'فحوصات الجودة',
                'process.phase3.item4': 'تنسيق الخدمات اللوجستية',
                'process.phase4.title': 'التسليم والدعم',
                'process.phase4.item1': 'ضمان الجودة النهائي',
                'process.phase4.item2': 'إدارة الشحن',
                'process.phase4.item3': 'تأكيد التسليم',
                'process.phase4.item4': 'الدعم بعد البيع',

                // Why Choose Us Section
                'why-us.title': 'ميزة ديل تم',
                'why-us.end-to-end.title': 'إدارة شاملة من البداية للنهاية',
                'why-us.end-to-end.description': 'نقطة اتصال واحدة للعملية بأكملها',
                'why-us.verified.title': 'شبكة موردين موثوقة',
                'why-us.verified.description': 'مصنعون موثوقون ومؤهلون مسبقاً',
                'why-us.transparent.title': 'تواصل شفاف',
                'why-us.transparent.description': 'تحديثات منتظمة في كل مرحلة',
                'why-us.risk.title': 'تخفيف المخاطر',
                'why-us.risk.description': 'عقود شاملة وامتثال',
                'why-us.cost.title': 'كفاءة التكاليف',
                'why-us.cost.description': 'أسعار تنافسية بدون رسوم خفية',
                'why-us.quality.title': 'ضمان الجودة',
                'why-us.quality.description': 'نقاط فحص متعددة',

                // Fee Structure Section
                'fees.title': 'تسعير شفاف',
                'fees.subtitle': 'رسوم واحدة، خدمة شاملة - بدون تكاليف خفية',
                'fees.badge': 'أفضل قيمة',
                'fees.model.title': 'باقة الخدمة الشاملة',
                'fees.percentage': '2-5%',
                'fees.percentage-label': 'من قيمة الطلب',
                'fees.includes.item1': 'توفير الموردين والتفاوض',
                'fees.includes.item2': 'مراقبة الجودة والتفتيش',
                'fees.includes.item3': 'دعم تنسيق الشحن',
                'fees.includes.item4': 'مساعدة الوثائق الجمركية',
                'fees.includes.item5': 'إدارة المشروع من البداية للنهاية',
                'fees.includes.item6': 'تقارير التقدم المنتظمة',
                'fees.guarantee.title': 'شفافية 100%',
                'fees.guarantee.text': 'لا توجد رسوم خفية، لا مفاجآت',
                'fees.commitment.title': 'ثابت قبل البدء',
                'fees.commitment.text': 'يتم الاتفاق عليها قبل بدء المشروع',
                'fees.cta': 'ابدأ اليوم',
                'fees.comparison.title': 'لماذا تسعيرنا؟',
                'fees.comparison.description': 'رسوم شفافة واحدة تغطي خدمات متعددة تتطلب عادة مقدمي خدمات منفصلين وتكاليف.',

                // Contact Section
                'contact.title': 'ابدأ قصتك الناجحة',
                'contact.location.title': 'الموقع',
                'contact.location.address': 'إسطنبول، تركيا',
                'contact.phone.title': 'أرقام الهاتف',
                'contact.email.title': 'البريد الإلكتروني',
                'contact.social.title': 'تابعنا',
                'contact.form.name': 'اسمك',
                'contact.form.email': 'بريدك الإلكتروني',
                'contact.form.phone': 'رقم هاتفك',
                'contact.form.message': 'رسالتك',
                'contact.form.submit': 'إرسال الرسالة'
            },
            tr: {
                // Navigation
                'nav.home': 'Ana Sayfa',
                'nav.about': 'Hakkımızda',
                'nav.services': 'Hizmetler',
                'nav.process': 'Süreç',
                'nav.why-us': 'Neden Biz',
                'nav.fees': 'Ücret Yapısı',
                'nav.contact': 'İletişim',

                // Hero Section
                'hero.title': 'Güven Temelimiz . Ticaret Yolumuz',
                'hero.subtitle': 'Küresel Ticarette Hikayeniz Burada Başlıyor',
                'hero.description': 'Karmaşık uluslararası ticaret dokusunda, her işletmenin anlatılmayı bekleyen benzersiz bir hikayesi var. Ancak sözleşmeler, lojistik ve kültürel farklılıklar arasında, birçok umut verici bölüm yazılmadan kalıyor.',
                'hero.description2': 'DealTam olarak, başarı hikayenizin sınırlar veya bürokrasi tarafından engellenmemesi gerektiğine inanıyoruz. Bir sonraki bölümünüzü -büyüme, fırsat ve Türkiye mükemmelliği ile küresel pazarlar arasında sorunsuz bağlantıdan oluşan- yazmanıza yardımcı olan anlatıcılarız.',
                'hero.description3': 'Yeteneklerimizin sizin hırslarınızla buluştuğu bir ortaklığa hoş geldiniz. Hikayenize başlayalım.',
                'hero.learn-more': 'Daha Fazla Bilgi',
                'hero.get-started': 'Başlayın',

                // About Section
                'about.title': 'Biz Kimiz',
                'about.story1': 'Hikayemiz İstanbul\'da - kıtalar ve kültürler arasındaki tarihi köprüde - başladı. Dünyanın bu kesişme noktasından, sınırlar ötesinde bağlantı kurmakta zorlanan, belirsizlik ve karmaşıklık nedeniyle fırsatları kaçıran işletmeler gördük.',
                'about.story2': 'DealTam, basit bir inançtan doğdu: küresel ticaret bir macera olmalı, engel parkuru değil. İşletmelerin ihtiyaç duyduğu güvenilir rehber olduk - uluslararası ticaretin karmaşıklıklarını güven ve özenle yönlendirebilen, küresel vizyona sahip yerel uzmanlar.',
                'about.story3': 'Bugün, danışmanlardan daha fazlasıyız; müşterilerimiz için başarı hikayeleri yazmaya yardımcı olan hikaye anlatıcılarıyız.',
                'about.vision.title': 'Vizyonumuz',
                'about.vision.text': 'Küresel Ticarette Pusulanız Olmak. Sınırların işi engellemediği, tam tersine mümkün kıldığı bir dünya hayal ediyoruz. Vizyonumuz, sadece görevleri yerine getirerek değil, beklentileri sürekli olarak aşan yenilikçi ve güvenli bir ticaret yolculuğu tasarlayarak, küresel ölçekte ihracatçılar ve ithalatçılar için lider danışmanlık ortağı olmaktır.',
                'about.mission.title': 'Misyonumuz',
                'about.mission.text': 'Başarınız, Yol Haritamız. Misyonumuz basit ama derindir: iş yolculuğunuzun sorunsuz olmasını sağlayarak olağanüstü değer sunmak. Bunu, şeffaflık, kalite ve küresel çapta tanınan tedarikçilerle güçlü ortaklıklar geliştirmeye yönelik sarsılmaz bir bağlılıkla gerçekleştiriyoruz.',

                // Services Section
                'services.title': 'Kapsamlı Ticaret Çözümleri',
                'services.sourcing.title': 'Tedarikçi Kaynağı ve Doğrulama',
                'services.sourcing.description': 'Nitelikli üreticileri bulma',
                'services.quality.title': 'Kalite Kontrol ve Denetim',
                'services.quality.description': 'Ürün uyumluluğunu sağlama',
                'services.logistics.title': 'Lojistik ve Nakliye Yönetimi',
                'services.logistics.description': 'Uçtan uca taşıma çözümleri',
                'services.customs.title': 'Gümrük Takip Desteği',
                'services.customs.description': 'Belgelendirme ve uyumluluk',
                'services.contract.title': 'Sözleşme Yönetimi',
                'services.contract.description': 'Yasal koruma ve anlaşmazlık çözümü',
                'services.analysis.title': 'Pazar Analizi',
                'services.analysis.description': 'Veri odaklı tedarik kararları',

                // Process Section
                'process.title': 'Çalışma Metodolojimiz',
                'process.phase1.title': 'Danışmanlık ve Planlama',
                'process.phase1.item1': 'İlk ihtiyaç değerlendirmesi',
                'process.phase1.item2': 'Proje kapsamı tanımlama',
                'process.phase1.item3': 'Zaman çizelgesi oluşturma',
                'process.phase2.title': 'Tedarik ve Müzakere',
                'process.phase2.item1': 'Tedarikçi belirleme',
                'process.phase2.item2': 'Arka plan doğrulama',
                'process.phase2.item3': 'Fiyat müzakere',
                'process.phase2.item4': 'Numune değerlendirme',
                'process.phase3.title': 'Yürütme ve İzleme',
                'process.phase3.item1': 'Sipariş verme',
                'process.phase3.item2': 'Üretim gözetimi',
                'process.phase3.item3': 'Kalite denetimleri',
                'process.phase3.item4': 'Lojistik koordinasyon',
                'process.phase4.title': 'Teslimat ve Destek',
                'process.phase4.item1': 'Son kalite güvencesi',
                'process.phase4.item2': 'Nakliye yönetimi',
                'process.phase4.item3': 'Teslimat onayı',
                'process.phase4.item4': 'Satış sonrası destek',

                // Why Choose Us Section
                'why-us.title': 'DealTam Avantajı',
                'why-us.end-to-end.title': 'Uçtan Uca Yönetim',
                'why-us.end-to-end.description': 'Tüm süreç için tek iletişim noktası',
                'why-us.verified.title': 'Doğrulanmış Tedarikçi Ağı',
                'why-us.verified.description': 'Önceden nitelendirilmiş, güvenilir üreticiler',
                'why-us.transparent.title': 'Şeffaf İletişim',
                'why-us.transparent.description': 'Her aşamada düzenli güncellemeler',
                'why-us.risk.title': 'Risk Azaltma',
                'why-us.risk.description': 'Kapsamlı sözleşmeler ve uyumluluk',
                'why-us.cost.title': 'Maliyet Verimliliği',
                'why-us.cost.description': 'Gizli ücret olmadan rekabetçi fiyatlandırma',
                'why-us.quality.title': 'Kalite Güvencesi',
                'why-us.quality.description': 'Çoklu denetim kontrol noktaları',

                // Fee Structure Section
                'fees.title': 'Şeffaf Fiyatlandırma',
                'fees.subtitle': 'Tek Ücret, Tam Hizmet - Gizli Maliyet Yok',
                'fees.badge': 'EN İYİ DEĞER',
                'fees.model.title': 'Tam Hizmet Paketi',
                'fees.percentage': '2-5%',
                'fees.percentage-label': 'Sipariş Değerinin',
                'fees.includes.item1': 'Tedarikçi kaynağı ve müzakere',
                'fees.includes.item2': 'Kalite kontrolü ve denetimler',
                'fees.includes.item3': 'Nakliye koordinasyon desteği',
                'fees.includes.item4': 'Gümrük belgelendirme yardımı',
                'fees.includes.item5': 'Uçtan uca proje yönetimi',
                'fees.includes.item6': 'Düzenli ilerleme raporlama',
                'fees.guarantee.title': '%100 Şeffaflık',
                'fees.guarantee.text': 'Gizli ücret yok, sürpriz yok',
                'fees.commitment.title': 'Başlamadan Önce Sabit',
                'fees.commitment.text': 'Proje başlamadan önce kararlaştırılır',
                'fees.cta': 'Bugün Başlayın',
                'fees.comparison.title': 'Neden Fiyatlandırmamız?',
                'fees.comparison.description': 'Genellikle ayrı sağlayıcılar ve maliyetler gerektiren birden fazla hizmeti kapsayan tek şeffaf ücret.',

                // Contact Section
                'contact.title': 'Başarı Hikayenizi Başlatın',
                'contact.location.title': 'Konum',
                'contact.location.address': 'İstanbul, Türkiye',
                'contact.phone.title': 'Telefon Numaraları',
                'contact.email.title': 'E-posta',
                'contact.social.title': 'Bizi Takip Edin',
                'contact.form.name': 'Adınız',
                'contact.form.email': 'E-postanız',
                'contact.form.phone': 'Telefonunuz',
                'contact.form.message': 'Mesajınız',
                'contact.form.submit': 'Mesaj Gönder'
            }
        };
    }

    setupEventListeners() {
        // Language selector dropdown
        const langDropdown = document.getElementById('lang-dropdown');
        if (langDropdown) {
            langDropdown.addEventListener('change', (e) => {
                const lang = e.target.value;
                this.changeLanguage(lang);
            });
        }

        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Add animation classes to elements
        const animateElements = document.querySelectorAll('.service-card, .benefit-card, .vm-card, .process-step, .pricing-model, .fee-includes, .value-proposition');
        animateElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupFormHandling() {
        const form = document.querySelector('.form');
        if (form) {
            form.addEventListener('submit', (e) => {
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                // Show loading state
                submitBtn.innerHTML = '<span class="loading"></span> Sending...';
                submitBtn.disabled = true;

                // Wait for Google Forms submission
                setTimeout(() => {
                    form.reset();
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.style.background = '#10b981';

                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = '';
                        submitBtn.disabled = false;
                    }, 3000);
                }, 2000);
            });
        }
    }


    handleFormSubmission(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            // Reset form
            form.reset();

            // Show success message
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = '#10b981';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 2000);
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;

        // Update dropdown selection
        const langDropdown = document.getElementById('lang-dropdown');
        if (langDropdown) {
            langDropdown.value = lang;
        }

        // Update document direction for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', lang);
        }

        // Update all translatable elements
        this.updateTranslations();

        // Save language preference
        localStorage.setItem('dealtam-language', lang);
    }

    updateTranslations() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.dataset.key;
            const translation = this.translations[this.currentLanguage][key];

            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translation;
                } else if (element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    loadLanguage() {
        const savedLanguage = localStorage.getItem('dealtam-language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.changeLanguage(savedLanguage);
        } else {
            // Default to English
            this.changeLanguage('en');
        }
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DealTamWebsite();
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .benefit-card, .vm-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Remove typing effect - display text immediately
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }
});