export type HomeVariant = "classic" | "news";

/**
 * Content blocks supported by ContentSection renderer
 */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "divider" }
  | { type: "link"; label: string; href: string; external?: boolean }
  | {
      type: "callout";
      variant?: "info" | "warning" | "success";
      title?: string;
      text: string;
    };

export type ContentCard =
  | {
      id: "authors" | "intro" | "goals" | "content";
      title: string;
      collapsible: boolean;
      /**
       * New (recommended): structured blocks
       */
      blocks: ContentBlock[];
      /**
       * Legacy (optional): keep for backward-compatibility while migrating
       */
      lines?: string[];
    }
  | {
      id: string; // allow future cards without changing types
      title: string;
      collapsible: boolean;
      blocks: ContentBlock[];
      lines?: string[];
    };

export const siteContent = {
  home: {
    variant: "classic" as HomeVariant,

    layout:
      {
        backgroundClass: "bg-background",
        // أمثلة:
        // "bg-muted"
        // "bg-slate-50"
        // "bg-gradient-to-b from-background to-muted"
        // "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]"
        // "bg-zinc-900 text-zinc-100"
      },

    social:
      {
        facebook: "https://www.facebook.com/yourpage",
        whatsapp: "https://wa.me/1234567890",
      },

    labels:
      {
        login: "تسجيل الدخول",
        admin: "لوحة المشرف",
        profile: "الملف الشخصي",
        logout: "خروج",
        more: "المزيد",
        less: "إخفاء",
      },

    // أقسام الصفحة وروابطها
    sections:
      [
        { id: "authors", label: "المؤلفون" },
        { id: "intro", label: "مقدمة" },
        { id: "goals", label: "الأهداف" },
        { id: "content", label: "المحتوى" },
      ],

    title:
      "  نمط توجيه روبوتات الدردشة داخل التقييم القائم على السيناريو وأثره في تنميه مهارات اتخاذ القرار وخفض الضغوط الاكاديميه لدى طلاب كليه التربيه   ",

    contentCards: [
      {
        id: "authors",
        title: "المؤلفون",
        collapsible: false,

        // ✅ Structured blocks
        blocks: [
          { type: "paragraph", text: "اعداد/ أميرة محمود خليفة" },
          { type: "divider" },
/*
          { type: "subheading", text: "الإشراف" },
          { type: "paragraph", text: " أ.د/ أماني على السيد رجب" },
          { type: "paragraph", text: "أستاذ المناهج وطرق تدريس الدراسات الاجتماعية ورئيس القسم" },
          { type: "paragraph", text: "كلية التربية – جامعة المنصورة" },

          { type: "divider" },

          { type: "paragraph", text: "د. هالة السيد أحمد" },
          { type: "paragraph", text: "مدرس المناهج وطرق تدريس الدراسات الاجتماعية" },
          { type: "paragraph", text: "كلية التربية – جامعة المنصورة" },    
*/    
        ],
      },

      {
        id: "intro",
        title: "مقدمة",
        collapsible: true,

blocks: [
  { type: "paragraph", text: "يشهد العصر الحالي تطورًا متسارعًا في توظيف تقنيات الذكاء الاصطناعي، خاصة روبوتات الدردشة، في مجالات التعليم والتدريب، مما أتاح فرصًا جديدة لتحسين جودة التعلم وتفاعليته." },
  { type: "paragraph", text: "ويُعد نمط توجيه روبوتات الدردشة أحد الأساليب الحديثة التي تسهم في تقديم دعم مخصص للمتعلمين داخل بيئات تعليمية قائمة على التفاعل والمحاكاة." },
  { type: "paragraph", text: "وفي هذا السياق، يبرز التقييم القائم على السيناريو كأداة فعالة لقياس مهارات التفكير واتخاذ القرار من خلال مواقف تحاكي الواقع." },
  { type: "paragraph", text: "إذ يتيح هذا النوع من التقييم للمتعلمين الانخراط في تجارب تعليمية واقعية تعزز قدرتهم على تحليل المشكلات واختيار البدائل المناسبة." },
  { type: "paragraph", text: "كما تسهم روبوتات الدردشة الموجهة في تقديم إرشادات فورية وتغذية راجعة مستمرة، مما يساعد على تحسين الأداء واتخاذ قرارات أكثر دقة." },
  { type: "paragraph", text: "ومن جهة أخرى، يعاني العديد من الطلاب من ضغوط أكاديمية متزايدة تؤثر سلبًا على تحصيلهم وأدائهم." },
  { type: "paragraph", text: "وهنا يظهر دور هذه التقنيات في تخفيف تلك الضغوط من خلال توفير بيئة تعلم مرنة وداعمة." },
  { type: "paragraph", text: "كما تعزز هذه البيئة شعور المتعلم بالثقة والاستقلالية أثناء التعلم." },
  { type: "paragraph", text: "ومن ثم، فإن دمج نمط توجيه روبوتات الدردشة داخل التقييم القائم على السيناريو يمثل اتجاهًا واعدًا لتنمية مهارات اتخاذ القرار." },
  { type: "paragraph", text: "ويسهم في الوقت ذاته في خفض مستويات الضغوط الأكاديمية لدى المتعلمين، مما يدعم تحقيق نواتج تعليمية أكثر فاعلية واستدامة." },
],

},

     {
  id: "goals",
  title: "الأهداف",
  collapsible: true,
  blocks: [
  { type: "subheading", text: "الهدف العام " },
  {
    type: "bullets",
    items: [
      "يهدف البرنامج إلى تنمية مهارات اتخاذ القرار وخفض الضغوط الأكاديمية لدى الطلاب من خلال توظيف نمط توجيه روبوتات الدردشة داخل التقييم القائم على السيناريو."
    ],
  },
  { type: "divider" },
  { type: "subheading", text: "الأهداف الخاصة " },
  {
    type: "numbered",
    items: [
      "تحليل المواقف التعليمية القائمة على السيناريو لاتخاذ قرارات مناسبة لدى الطلاب.",
      "تفسير المشكلات الأكاديمية في ضوء معطيات الموقف التعليمي لدى الطلاب.",
      "اختيار البدائل الأنسب من بين عدة خيارات في مواقف محاكاة واقعية لدى الطلاب.",
      "توظيف التغذية الراجعة المقدمة من روبوتات الدردشة لتحسين جودة القرار لدى الطلاب.",
      "تنمية القدرة على التفكير المنطقي والمنظم أثناء التعامل مع المواقف التعليمية لدى الطلاب.",
      "تعزيز مهارات حل المشكلات من خلال التفاعل مع سيناريوهات تعليمية متنوعة لدى الطلاب.",
      "زيادة وعي الطلاب بأساليب إدارة الضغوط الأكاديمية في المواقف التعليمية المختلفة.",
      "تطبيق استراتيجيات فعالة للتعامل مع التوتر والضغوط أثناء التقييم لدى الطلاب.",
      "تنمية الثقة بالنفس عند اتخاذ القرار في بيئات تعلم تفاعلية لدى الطلاب.",
      "تنمية مهارات التعلم الذاتي من خلال التفاعل مع روبوتات الدردشة الموجهة لدى الطلاب.",
      "تحسين القدرة على إدارة الوقت أثناء التعامل مع مهام التقييم القائم على السيناريو لدى الطلاب.",
      "تعزيز التفاعل الإيجابي مع التقنيات الحديثة في العملية التعليمية لدى الطلاب.",
      "تنمية مهارات التفكير النقدي عند تحليل نتائج القرارات المتخذة لدى الطلاب.",
      "القدرة على مراجعة القرارات وتعديلها بناءً على التغذية الراجعة لدى الطلاب.",
      "تقليل الشعور بالقلق المرتبط بالاختبارات من خلال بيئات تقييم داعمة لدى الطلاب.",
      "تنمية مهارات التواصل الرقمي الفعال أثناء التفاعل مع روبوتات الدردشة لدى الطلاب.",
      "تعزيز الاستقلالية في التعلم واتخاذ القرار داخل بيئات التعلم الرقمية لدى الطلاب."
    ],
  },
],
},

 {
  id: "content",
  title: "المحتوى",
  collapsible: false,

  blocks: [
    { type: "subheading", text: " المقررات الالكترونية" },
    {
      type: "bullets",
      items: [
        "تصميم واجهات التفاعل ",
        " تصميم المقررات الالكترونية",
        " أشهر برامج إدارة التعلم",
        " إنشاء المحتوى",
        "أدوات إنشاء المحتوى "
      ],
    },
    /*
    { type: "divider" },
    { type: "subheading", text: "الوحدة الثالثة: الجغرافيا" },
    {
      type: "bullets",
      items: [
        "الأقاليم الجغرافية",
        "الخريطة الطبوغرافية"
      ],
    },
    */

  ],
},
    ] satisfies ContentCard[],
  },

} as const;
