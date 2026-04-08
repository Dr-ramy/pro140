import type { ButtonItem } from "@/components/content/mainitems/types";

export const lessonOne = {
  items: <ButtonItem[]>
[
    //عشان تضيف فيديو من اليوتيوب خد الرابط من embed
    { type: "button", id: "1vid0", text: "الأهداف", icon: "intro", time: "" },
    { type: "modal", id: "book1", text: " تصميم واجهات التفاعل   ", icon: "video" },
    { type: "modal", id: "book2", text: " تصميم المقررات الالكترونية   ", icon: "video" },
    { type: "modal", id: "book3", text: " أشهر برامج إدارة التعلم   ", icon: "video" },
    { type: "modal", id: "book4", text: " إنشاء المحتوى   ", icon: "video" },
    { type: "modal", id: "book5", text: " أدوات إنشاء المحتوى   ", icon: "video" },
    { type: "modal", id: "yt-lesson1", text: " Powtoon   ", icon: "video" },
            { type: "button", id: "1act1", text: " نشاط", icon: "activity" },
    { type: "modal", id: "yt-lesson2", text: " Canva   ", icon: "video" },
        { type: "button", id: "1act2", text: " نشاط ", icon: "activity" },
    { type: "modal", id: "yt-lesson3", text: " Story Line   ", icon: "video" },
       { type: "button", id: "1act3", text: " نشاط ", icon: "activity" },
    { type: "modal", id: "yt-lesson4", text: " animoto    ", icon: "video" },
        { type: "button", id: "1act4", text: " نشاط", icon: "activity" },
    { type: "modal", id: "yt-lesson5", text: " piktochart   ", icon: "video" },
    { type: "button", id: "1act5", text: "نشاط ", icon: "activity" },
],

  videoMap: 
  {
    "1vid0": "/videos/vid1/vid0.mp4",
    "1vid1": " ",
    "1vid2": " ",
    "1vid3": " ",
    "1vid4": " ",
    "1vid5": " ",
    "1vid6": " ",
    "1vid7": " ",
  },

  formLinks: 
  {
    "1act1":   " https://forms.gle/KDQsKQt5L8Uts4NB7  ",
    "1act2":   " https://forms.gle/qECBAbfGkQti7Ho79  ",
    "1act3":   " https://forms.gle/ZAu2dedjpe9dk9Ky5  ",
    "1act4":   " https://forms.gle/rVZSD7W4r7Cfs5Ks7  ",
    "1act5":   " https://forms.gle/ifzQhWus7rR4hqEW9  ",
    "1act6":   "   ",
    "1act7":   "   ",
    "1act8":   "   ",
    "1act9":   "   ",
    "1act10":  "   ",
    "1act11":  "   ",
    "1act12":  "   ",
    "1act13":  "   ",
  },
}