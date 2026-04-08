// PrePost.ts
export type SidebarExtraAction =
  | { type: "openUrl"; url: string; target?: "_self" | "_blank" }
  | { type: "openRoute"; route: string }
  | { type: "openModal"; modalId: string };

export type SidebarExtraItem = {
  id: string;
  text: string;
  icon: "cog" | "quiz" | "chat" | "robot" | "video";
  action: SidebarExtraAction;
};

export type ModalKey = "gemini-1" | "gemini-2" | "gemini-3" | "gemini-4";

export type ModalSpec =
  | { id: string; kind: "gemini"; key: ModalKey }
  | { id: string; kind: "iframe"; title: string; iframeUrl: string };

export type CurriculumMeta = {
  units: Array<{
    id: string;
    title: string;
    lessons: Array<{
      id: string; // لازم يطابق lessonKey في LessonData
      title: string;
    }>;
  }>;
  beforeLearningItems: SidebarExtraItem[];
  afterLearningItems: SidebarExtraItem[];
  modals: ModalSpec[];
};

// =========================
// Group 1
// =========================
const GROUP_1: CurriculumMeta = {
  units: [
    {
      id: "unit-1",
      title: " المقررات الالكترونية",
      lessons: [
      { id: "lesson_one", title: " تصميم المقررات الالكترونية" },
      /*
      { id: "lesson_two", title: "امتداد الدولة الأموية " },
      { id: "lesson_three", title: " نهاية الدولة الأموية" },
       */
      ],
    },
    /*
        {
      id: "unit-2",
      title: "جغرافيا",
      lessons: [
      { id: "lesson_four", title: " الأقاليم الجغرافية" },
      { id: "lesson_five", title: " الخريطة الطبوغرافية" },
      ],
    },
    */
  ],

  beforeLearningItems: [
    {
      id: "pre-quiz",
      text: "الاختبار القبلي",
      icon: "quiz",
      action: {
        type: "openUrl",
        url: "https://forms.gle/axsg88LfLXSqgd2z7",
        target: "_blank",
      },
    },
    {
      id: "chat-room",
      text: "غرفة المحادثة",
      icon: "chat",
      action: { type: "openRoute", route: "/chat" },
    },

    {
      id: "ai-assistant",
      text: "روبوتات الدردشة",
      icon: "robot",
      action: {
        type: "openUrl",
        url: " https://met1a140.vercel.app/scenes",
        target: "_blank",
      },
    },
    /*
    {
      id: "ai-assistant2",
      text: "2الاستقصاء بالذكاء الاصطناعي",
      icon: "robot",
      action: { type: "openRoute", route: "/coco" },
    },
*/
  ],

  afterLearningItems: [
    {
      id: "post-quiz",
      text: "الاختبار البعدي",
      icon: "quiz",
      action: {
        type: "openUrl",
        url: " https://forms.gle/CM6dS3ZFnZkSXhaD7",
        target: "_blank",
      },
    },
  ],

  modals: [
    { id: "1modal", kind: "gemini", key: "gemini-1" },
    { id: "2modal", kind: "gemini", key: "gemini-2" },
    { id: "3modal", kind: "gemini", key: "gemini-3" },
    { id: "4modal", kind: "gemini", key: "gemini-4" },
    {
      id: "yt-lesson1",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/8xUg6K4te60?si=Tcpoamc5xBt_u3dp",
    },
        {
      id: "yt-lesson2",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/4ZzNGoAQ2rk?si=uiJJbjZ4HGpYqFhU",
    },
        {
      id: "yt-lesson3",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/a9WxGHxVf74?si=KEfjNX5Rf62HSWIt",
    },
        {
      id: "yt-lesson4",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/wLzOThiu0rE?si=MeaqvW6n8CEGomsO",
    },
        {
      id: "yt-lesson5",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/L7V3nlrsS0w?si=mEEVkkEr6KuRIcuU",
    },
      {
      id: "book1",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook0/index.html#p=1",
    },
          {
      id: "book2",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook1/index.html#p=1",
    },
          {
      id: "book3",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook2/index.html#p=1",
    },
          {
      id: "book4",
      kind: "iframe",
      title: "محتوى تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook3/index.html#p=1",
    },
          {
      id: "book5",
      kind: "iframe",
      title: "محتوى تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook4/index.html#p=1",
    },
  ],
};
//************************************************************************/
// =========================
// Group 2
// =========================
const GROUP_2: CurriculumMeta = {
  units: [
    {
      id: "unit-1",
      title: " المقررات الالكترونية",
      lessons: [
      { id: "lesson_one", title: " تصميم المقررات الالكترونية" },
      /*
      { id: "lesson_two", title: "امتداد الدولة الأموية " },
      { id: "lesson_three", title: " نهاية الدولة الأموية" },
       */
      ],
    },
    /*
        {
      id: "unit-2",
      title: "جغرافيا",
      lessons: [
      { id: "lesson_four", title: " الأقاليم الجغرافية" },
      { id: "lesson_five", title: " الخريطة الطبوغرافية" },
      ],
    },
    */
  ],

  beforeLearningItems: [
    {
      id: "pre-quiz",
      text: "الاختبار القبلي",
      icon: "quiz",
      action: {
        type: "openUrl",
        url: "https://forms.gle/axsg88LfLXSqgd2z7",
        target: "_blank",
      },
    },
    {
      id: "chat-room",
      text: "غرفة المحادثة",
      icon: "chat",
      action: { type: "openRoute", route: "/chat" },
    },
    {
      id: "ai-assistant",
      text: "روبوتات الدردشة",
      icon: "robot",
      action: {
        type: "openUrl",
        url: " https://met2a140.vercel.app/scenes",
        target: "_blank",
      },
    },
    /*
    {
      id: "ai-assistant2",
      text: "2الاستقصاء بالذكاء الاصطناعي",
      icon: "robot",
      action: { type: "openRoute", route: "/coco" },
    },
*/
  ],

  afterLearningItems: [
    {
      id: "post-quiz",
      text: "الاختبار البعدي",
      icon: "quiz",
      action: {
        type: "openUrl",
        url: "https://forms.gle/CM6dS3ZFnZkSXhaD7",
        target: "_blank",
      },
    },
  ],

  modals: [
    { id: "1modal", kind: "gemini", key: "gemini-1" },
    { id: "2modal", kind: "gemini", key: "gemini-2" },
    { id: "3modal", kind: "gemini", key: "gemini-3" },
    { id: "4modal", kind: "gemini", key: "gemini-4" },
    {
      id: "yt-lesson1",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/8xUg6K4te60?si=Tcpoamc5xBt_u3dp",
    },
        {
      id: "yt-lesson2",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/4ZzNGoAQ2rk?si=uiJJbjZ4HGpYqFhU",
    },
        {
      id: "yt-lesson3",
      kind: "iframe",
      title: "فيديو55555 تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/a9WxGHxVf74?si=KEfjNX5Rf62HSWIt",
    },
        {
      id: "yt-lesson4",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/wLzOThiu0rE?si=MeaqvW6n8CEGomsO",
    },
        {
      id: "yt-lesson5",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://www.youtube.com/embed/L7V3nlrsS0w?si=mEEVkkEr6KuRIcuU",
    },
      {
      id: "book1",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook0/index.html#p=1",
    },
          {
      id: "book2",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook1/index.html#p=1",
    },
          {
      id: "book3",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook2/index.html#p=1",
    },
          {
      id: "book4",
      kind: "iframe",
      title: "محتوى تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook3/index.html#p=1",
    },
          {
      id: "book5",
      kind: "iframe",
      title: "محتوى تعليمي",
      iframeUrl:
        "https://dr-ramy.github.io/flip140/FlipBook/index.html#p=1",
    },
  ],
};


// ✅ Placeholders آمنة (نسخ مستقلة)
//const GROUP_2: CurriculumMeta = structuredClone(GROUP_1);
const GROUP_3: CurriculumMeta = structuredClone(GROUP_1);
const GROUP_4: CurriculumMeta = structuredClone(GROUP_1);

export function getCurriculumMeta(
  groupId: string | number | undefined
): CurriculumMeta {
  const gid = String(groupId ?? "").trim();
  switch (gid) {
    case "2":
      return GROUP_2;
    case "3":
      return GROUP_3;
    case "4":
      return GROUP_4;
    default:
      return GROUP_1;
  }
}
