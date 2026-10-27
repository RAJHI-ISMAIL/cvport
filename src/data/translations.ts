export type Language = "en" | "ar" | "zh";

export interface Translations {
  dir: "ltr" | "rtl";
  lang: string;
  nav: {
    skills: string;
    projects: string;
    experience: string;
    education: string;
    certifications: string;
    contact: string;
    contactBtn: string;
  };
  hero: {
    tagline: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    viewWork: string;
    downloadResume: string;
    connectWith: string;
    location: string;
  };
  skills: {
    sectionLabel: string;
    allSkills: string;
    showLess: string;
    softSkills: string;
  };
  projects: {
    sectionLabel: string;
    viewAll: string;
    autoOn: string;
    autoOff: string;
    paused: string;
    projectOf: string;
    viewDetails: string;
    liveDemo: string;
    overview: string;
    video: string;
    gallery: string;
    technologiesUsed: string;
    liveLink: string;
    repoLink: string;
    close: string;
    allProjects: string;
    details: string;
    visit: string;
    presentation: string;
  };
  certifications: {
    sectionLabel: string;
    verified: string;
    viewInWebsite: string;
    pdf: string;
    exploreExperience: string;
    switchCert: string;
    competencies: string;
    closeViewer: string;
    download: string;
    openTab: string;
  };
  experience: {
    sectionLabel: string;
    viewResume: string;
    present: string;
  };
  cta: {
    headline: string;
    button: string;
  };
  education: {
    sectionLabel: string;
  };
  languages: {
    sectionLabel: string;
  };
  contact: {
    sectionLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendBtn: string;
    emailLabel: string;
    phoneLabel: string;
    websiteLabel: string;
    locationLabel: string;
    orSendEmail: string;
  };
  footer: {
    copyright: string;
  };
}

const en: Translations = {
  dir: "ltr",
  lang: "en",
  nav: { skills: "SKILLS", projects: "PROJECTS", experience: "EXPERIENCE", education: "EDUCATION", certifications: "CERTIFICATIONS", contact: "CONTACT", contactBtn: "CONTACT ME" },
  hero: { tagline: "HEY, I'M ISMAIL 👋", titleLine1: "AI & SOFTWARE", titleLine2: "ENGINEER", intro: "Master's student in Computer Science at Henan University of Technology. I build intelligent, full-stack and mobile applications, with a growing focus on deep learning.", viewWork: "VIEW MY WORK", downloadResume: "DOWNLOAD RESUME", connectWith: "CONNECT WITH ME", location: "📍 ZHENGZHOU, CHINA" },
  skills: { sectionLabel: "SKILLS →", allSkills: "ALL SKILLS →", showLess: "SHOW LESS ↑", softSkills: "SOFT SKILLS" },
  projects: { sectionLabel: "FEATURED PROJECTS", viewAll: "VIEW ALL PROJECTS →", autoOn: "AUTO: ON", autoOff: "AUTO: OFF", paused: "PAUSED", projectOf: "Project {n} of {total}", viewDetails: "VIEW DETAILS", liveDemo: "LIVE DEMO", overview: "OVERVIEW", video: "VIDEO", gallery: "GALLERY", technologiesUsed: "Technologies Used", liveLink: "Live Demo", repoLink: "Repository", close: "CLOSE", allProjects: "All Featured Projects", details: "DETAILS →", visit: "VISIT ↗", presentation: "SLIDES" },
  certifications: { sectionLabel: "CERTIFICATIONS", verified: "VERIFIED", viewInWebsite: "VIEW IN WEBSITE", pdf: "PDF", exploreExperience: "EXPLORE EXPERIENCE →", switchCert: "SWITCH CERTIFICATE:", competencies: "Competencies:", closeViewer: "CLOSE VIEWER", download: "DOWNLOAD", openTab: "OPEN TAB" },
  experience: { sectionLabel: "EXPERIENCE →", viewResume: "VIEW FULL RESUME ↓", present: "Present" },
  cta: { headline: "LET'S BUILD SOMETHING AMAZING TOGETHER.", button: "GET IN TOUCH →" },
  education: { sectionLabel: "EDUCATION →" },
  languages: { sectionLabel: "LANGUAGES" },
  contact: { sectionLabel: "CONTACT", namePlaceholder: "YOUR NAME", emailPlaceholder: "YOUR EMAIL", messagePlaceholder: "YOUR MESSAGE", sendBtn: "SEND MESSAGE →", emailLabel: "Email", phoneLabel: "Phone", websiteLabel: "Website", locationLabel: "Location", orSendEmail: "OR SEND A QUICK EMAIL →" },
  footer: { copyright: "All rights reserved." },
};

const ar: Translations = {
  dir: "rtl",
  lang: "ar",
  nav: { skills: "المهارات", projects: "المشاريع", experience: "الخبرة", education: "التعليم", certifications: "الشهادات", contact: "التواصل", contactBtn: "تواصل معي" },
  hero: { tagline: "مرحباً، أنا إسماعيل 👋", titleLine1: "مهندس ذكاء", titleLine2: "اصطناعي وبرمجيات", intro: "طالب ماجستير في علوم الحاسوب بجامعة هينان للتكنولوجيا. أبني تطبيقات ذكية متكاملة وتطبيقات جوال، مع تركيز متزايد على التعلم العميق.", viewWork: "اعرض أعمالي ↗", downloadResume: "تحميل السيرة الذاتية ↓", connectWith: "تواصل معي", location: "📍 الصين — جنغجو" },
  skills: { sectionLabel: "← المهارات", allSkills: "← كل المهارات", showLess: "عرض أقل ↑", softSkills: "المهارات الشخصية" },
  projects: { sectionLabel: "أبرز المشاريع", viewAll: "← عرض كل المشاريع", autoOn: "تشغيل تلقائي", autoOff: "إيقاف تلقائي", paused: "متوقف", projectOf: "المشروع {n} من {total}", viewDetails: "عرض التفاصيل", liveDemo: "عرض مباشر", overview: "نظرة عامة", video: "فيديو", gallery: "معرض الصور", technologiesUsed: "التقنيات المستخدمة", liveLink: "الرابط المباشر", repoLink: "المستودع", close: "إغلاق", allProjects: "كل المشاريع", details: "← تفاصيل", visit: "← زيارة", presentation: "عرض تقديمي" },
  certifications: { sectionLabel: "الشهادات", verified: "معتمدة", viewInWebsite: "عرض في الموقع", pdf: "PDF", exploreExperience: "← استعرض الخبرة", switchCert: "تبديل الشهادة:", competencies: "الكفاءات:", closeViewer: "إغلاق العارض", download: "تحميل", openTab: "فتح في تبويب" },
  experience: { sectionLabel: "← الخبرة العملية", viewResume: "عرض السيرة الكاملة ↓", present: "حتى الآن" },
  cta: { headline: "لنبني شيئاً رائعاً معاً.", button: "← تواصل معي" },
  education: { sectionLabel: "← التعليم" },
  languages: { sectionLabel: "اللغات" },
  contact: { sectionLabel: "تواصل معي", namePlaceholder: "اسمك", emailPlaceholder: "بريدك الإلكتروني", messagePlaceholder: "رسالتك", sendBtn: "← إرسال الرسالة", emailLabel: "البريد الإلكتروني", phoneLabel: "الهاتف", websiteLabel: "الموقع الإلكتروني", locationLabel: "الموقع", orSendEmail: "← أو أرسل بريداً سريعاً" },
  footer: { copyright: "جميع الحقوق محفوظة." },
};

const zh: Translations = {
  dir: "ltr",
  lang: "zh",
  nav: { skills: "技能", projects: "项目", experience: "经历", education: "教育", certifications: "证书", contact: "联系", contactBtn: "联系我" },
  hero: { tagline: "你好，我是伊斯梅尔 👋", titleLine1: "人工智能与", titleLine2: "软件工程师", intro: "河南工业大学计算机科学硕士研究生。我构建智能、全栈和移动应用程序，专注于深度学习领域。", viewWork: "查看我的作品 ↗", downloadResume: "下载简历 ↓", connectWith: "与我联系", location: "📍 中国·郑州" },
  skills: { sectionLabel: "技能 →", allSkills: "全部技能 →", showLess: "收起 ↑", softSkills: "软技能" },
  projects: { sectionLabel: "精选项目", viewAll: "查看全部项目 →", autoOn: "自动: 开", autoOff: "自动: 关", paused: "已暂停", projectOf: "项目 {n} / {total}", viewDetails: "查看详情", liveDemo: "在线演示", overview: "概览", video: "视频", gallery: "图集", technologiesUsed: "使用技术", liveLink: "在线演示", repoLink: "代码仓库", close: "关闭", allProjects: "全部项目", details: "详情 →", visit: "访问 ↗", presentation: "幻灯片" },
  certifications: { sectionLabel: "证书", verified: "已认证", viewInWebsite: "网站内查看", pdf: "PDF", exploreExperience: "查看工作经历 →", switchCert: "切换证书：", competencies: "核心能力：", closeViewer: "关闭查看器", download: "下载", openTab: "新标签打开" },
  experience: { sectionLabel: "工作经历 →", viewResume: "查看完整简历 ↓", present: "至今" },
  cta: { headline: "让我们一起构建精彩的作品。", button: "立即联系 →" },
  education: { sectionLabel: "教育背景 →" },
  languages: { sectionLabel: "语言能力" },
  contact: { sectionLabel: "联系我", namePlaceholder: "您的姓名", emailPlaceholder: "您的邮箱", messagePlaceholder: "您的留言", sendBtn: "发送消息 →", emailLabel: "邮箱", phoneLabel: "电话", websiteLabel: "网站", locationLabel: "位置", orSendEmail: "或发送快速邮件 →" },
  footer: { copyright: "版权所有。" },
};

export const allTranslations: Record<Language, Translations> = { en, ar, zh };

export const languageLabels: Record<Language, { flag: string; label: string; nativeLabel: string }> = {
  en: { flag: "🇬🇧", label: "English", nativeLabel: "EN" },
  ar: { flag: "🇹🇳", label: "Arabic", nativeLabel: "عربي" },
  zh: { flag: "🇨🇳", label: "Chinese", nativeLabel: "中文" },
};
