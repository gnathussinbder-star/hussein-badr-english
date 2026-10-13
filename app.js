(function () {
  "use strict";

  const LANG_KEY = "hbe-language";
  const THEME_KEY = "hbe-theme";
  const CATEGORY_LABELS = {
    ar: {
      vocabulary: "المفردات", grammar: "القواعد", speaking: "المحادثة",
      listening: "الاستماع", pronunciation: "النطق", reading: "القراءة", writing: "الكتابة"
    },
    en: {
      vocabulary: "Vocabulary", grammar: "Grammar", speaking: "Speaking",
      listening: "Listening", pronunciation: "Pronunciation", reading: "Reading", writing: "Writing"
    }
  };
  const TRANSLATIONS = {
    ar: {
      skipLink: "تجاوز إلى المحتوى", announcement: "ابدأ رحلتك في الإنجليزية خطوةً بخطوة، وبمسار واضح يناسب مستواك.", exploreNow: "استكشف المسارات",
      brandSubtitle: "من الصفر إلى الطلاقة", navHome: "الرئيسية", navPaths: "المسارات", navLessons: "الدروس", navSkills: "المهارات", navFaq: "الأسئلة الشائعة", navAbout: "عن المنصة", startLearning: "ابدأ التعلّم",
      heroEyebrow: "مسارك الواضح لتعلّم الإنجليزية", heroTitle: "تعلّم الإنجليزية من <span class=\"text-gradient\">تحت الصفر</span><br>وابنِ ثقتك خطوةً بخطوة.", heroDescription: "دروس منظمة، أمثلة من الحياة اليومية، وتدرّج عملي يساعدك على الانتقال من الأساسيات إلى استخدام الإنجليزية بثقة — دون تشتّت بين المصادر.",
      browsePaths: "تصفّح المسارات التعليمية", browseLessons: "اكتشف الدروس", heroProofTitle: "تعلّم متوازن وعملي", heroProofBody: "مفردات • استماع • محادثة • قواعد", learningJourney: "رحلتك التعليمية", yourNextStep: "خطوتك التالية", buildFoundation: "ابنِ الأساس", learningRoadmap: "خريطة التعلّم", ofFive: "من 05", roadmapItem1: "الحروف والنطق", roadmapSub1: "ابدأ من الأساس الصحيح", roadmapDone: "الأساس", roadmapItem2: "الكلمات والجمل", roadmapSub2: "عبارات تستخدمها كل يوم", roadmapItem3: "الاستماع والمحادثة", roadmapSub3: "افهم وتواصل بثقة", roadmapNote: "الاستمرارية أهم من السرعة.", listenAndRepeat: "استمع وكرّر", practicePronunciation: "تدرّب على النطق", useEnglish: "استخدم الإنجليزية", notJustMemorize: "لا تكتفِ بالحفظ", heroBottomLabel: "تعلّم بوضوح، وتدرّب باستمرار، وتقدّم بثقة.", viewLearningMap: "شاهد خريطة التعلّم", 
      trust1Title: "تدرّج واضح", trust1Body: "من الأساسيات إلى المستويات الأعلى", trust2Title: "تطبيق واقعي", trust2Body: "جمل ومواقف من الحياة اليومية", trust3Title: "مهارات متكاملة", trust3Body: "استماع، قراءة، كتابة، وتحدّث", trust4Title: "تعلّم مرن", trust4Body: "من الهاتف أو الجهاز اللوحي",
      pathsKicker: "مسارات التعلّم", pathsTitle: "اختر مستواك، وابدأ من مكانك", pathsDescription: "لا تحتاج إلى معرفة كل شيء الآن. اختر المستوى المناسب، وركّز على الخطوة التالية.", allLessons: "كل الدروس", loading: "جارٍ تحميل المحتوى…", levelNote: "ملاحظة: هذه المستويات خريطة تعليمية إرشادية وليست شهادة أو اختبار تحديد مستوى رسميًا.", levelAction: "استكشف الدروس", lessonsKicker: "مكتبة الدروس", lessonsTitle: "تعلّم شيئًا جديدًا اليوم", lessonsDescription: "ابحث عن موضوع، أو مهارة، أو مستوى لتصل إلى الدرس الذي يناسبك.", organizedContent: "محتوى منظّم", searchPlaceholder: "ابحث عن درس أو كلمة أو مستوى…", searchHint: "تظهر النتائج مباشرة أثناء الكتابة.", filterAll: "كل الدروس", filterVocabulary: "المفردات", filterGrammar: "القواعد", filterSpeaking: "المحادثة", filterListening: "الاستماع", filterPronunciation: "النطق", noResultsTitle: "لم نعثر على نتائج", noResultsBody: "جرّب كلمة أخرى أو غيّر نوع التصفية.", clearSearch: "مسح البحث", moreContentNote: "تُضاف الدروس والملفات التعليمية تدريجيًا.", watchYoutube: "تابع الدروس على يوتيوب", lessonAction: "عرض تفاصيل الدرس", lessonLevel: "المستوى", searchCount: "عدد النتائج:", searchCountSuffix: "درس", searchAllCount: "كل الدروس المعروضة:", 
      skillsKicker: "تعلّم متوازن", skillsTitle: "لا تحفظ الكلمات فقط.<br><span class=\"text-gradient\">تعلّم كيف تستخدمها.</span>", skillsDescription: "التواصل باللغة يحتاج إلى مجموعة مهارات تتطوّر معًا. اجعل كل درس فرصة للفهم والتطبيق، لا للمشاهدة فقط.", startPractice: "ابدأ بالتطبيق", skillListening: "الاستماع", skillListeningBody: "درّب أذنك على فهم الكلمات والجمل في سياقها.", skillListeningTag: "افهم ما تسمع", skillSpeaking: "المحادثة", skillSpeakingBody: "حوّل ما تتعلّمه إلى جمل تستطيع قولها.", skillSpeakingTag: "استخدم اللغة", skillVocabulary: "المفردات والقواعد", skillVocabularyBody: "افهم الكلمات وتركيب الجمل من خلال أمثلة واضحة.", skillVocabularyTag: "ابنِ أساسًا متينًا", skillReadingWriting: "القراءة والكتابة", skillReadingWritingBody: "اقرأ النصوص القصيرة واكتب أفكارك تدريجيًا.", skillReadingWritingTag: "افهم وعبّر",
      ctaKicker: "خطوة واحدة تكفي لتبدأ", ctaTitle: "لا تنتظر أن تصبح جاهزًا. ابدأ التعلّم اليوم.", ctaDescription: "اختر درسًا قصيرًا، طبّقه بصوتك، ثم كرّر غدًا. التقدّم يأتي من الاستمرار.", choosePath: "اختر مسارك", faqKicker: "إجابات واضحة", faqTitle: "هل لديك سؤال؟", faqDescription: "جمعنا أكثر الأسئلة شيوعًا عن طريقة التعلّم وكيفية الاستفادة من المنصة.", stillQuestions: "ما زال لديك سؤال؟", contactByEmail: "تواصل عبر البريد الإلكتروني", aboutKicker: "عن المنصة", aboutTitle: "Hussein Badr English", aboutDescription: "منصة تعليمية تهدف إلى تنظيم رحلة تعلّم الإنجليزية من الأساسيات إلى الاستخدام العملي. نؤمن أن الفهم والممارسة والتكرار المتوازن أهم من حفظ المعلومات دون استخدامها.", preparedBy: "إعداد وتقديم", footerDescription: "مساحة تعليمية تساعدك على فهم الإنجليزية وتطبيقها خطوةً بخطوة.", quickLinks: "روابط سريعة", followAlong: "تابع المحتوى", footerSocialDescription: "تابع القنوات لمشاهدة الدروس ومعرفة التحديثات الجديدة.", allRightsReserved: "جميع الحقوق محفوظة.", contact: "اتصل بنا", backToTop: "العودة إلى الأعلى ↑", footerNote: "تعليم أوضح، خطوة بعد خطوة.", loadingError: "تعذّر تحميل المحتوى. تأكّد من رفع ملفي site.json و faq.json في المجلد الرئيسي للموقع.", openEmail: "راسلنا", categoryLabel: "التصنيف", levelLoadingError: "تعذّر عرض المسارات التعليمية.", resultsFor: "نتائج البحث", searchEmpty: "لا توجد نتائج مطابقة."
    },
    en: {
      skipLink: "Skip to content", announcement: "Start your English journey step by step, with a clear path for your level.", exploreNow: "Explore learning paths",
      brandSubtitle: "From zero to fluency", navHome: "Home", navPaths: "Learning paths", navLessons: "Lessons", navSkills: "Skills", navFaq: "FAQs", navAbout: "About", startLearning: "Start learning",
      heroEyebrow: "A clear path to learning English", heroTitle: "Learn English from <span class=\"text-gradient\">the ground up</span><br>and build confidence step by step.", heroDescription: "Structured lessons, everyday examples, and practical progression to help you move from the basics toward using English with confidence—without getting lost between resources.",
      browsePaths: "Explore learning paths", browseLessons: "Explore lessons", heroProofTitle: "Balanced, practical learning", heroProofBody: "Vocabulary • Listening • Speaking • Grammar", learningJourney: "Your learning journey", yourNextStep: "Your next step", buildFoundation: "Build your foundation", learningRoadmap: "Learning roadmap", ofFive: "of 05", roadmapItem1: "Letters and pronunciation", roadmapSub1: "Start with the right basics", roadmapDone: "Foundation", roadmapItem2: "Words and sentences", roadmapSub2: "Phrases for everyday use", roadmapItem3: "Listening and speaking", roadmapSub3: "Understand and communicate", roadmapNote: "Consistency matters more than speed.", listenAndRepeat: "Listen and repeat", practicePronunciation: "Practise pronunciation", useEnglish: "Use English", notJustMemorize: "Go beyond memorising", heroBottomLabel: "Learn clearly, practise regularly, and progress with confidence.", viewLearningMap: "View the learning roadmap",
      trust1Title: "Clear progression", trust1Body: "From the basics to higher levels", trust2Title: "Real-life practice", trust2Body: "Everyday sentences and situations", trust3Title: "Connected skills", trust3Body: "Listening, reading, writing, and speaking", trust4Title: "Flexible learning", trust4Body: "Learn on phone or tablet",
      pathsKicker: "Learning paths", pathsTitle: "Choose your level and start where you are", pathsDescription: "You do not need to know everything yet. Choose a suitable level and focus on the next step.", allLessons: "All lessons", loading: "Loading content…", levelNote: "Note: These levels are a learning guide, not an official certificate or placement test.", levelAction: "Explore lessons", lessonsKicker: "Lesson library", lessonsTitle: "Learn something new today", lessonsDescription: "Search by topic, skill, or level to find a lesson that fits you.", organizedContent: "Organised content", searchPlaceholder: "Search lessons, words, or levels…", searchHint: "Results update as you type.", filterAll: "All lessons", filterVocabulary: "Vocabulary", filterGrammar: "Grammar", filterSpeaking: "Speaking", filterListening: "Listening", filterPronunciation: "Pronunciation", noResultsTitle: "No results found", noResultsBody: "Try another keyword or change the filter.", clearSearch: "Clear search", moreContentNote: "Lessons and learning files will be added gradually.", watchYoutube: "Watch lessons on YouTube", lessonAction: "Lesson details", lessonLevel: "Level", searchCount: "Results:", searchCountSuffix: "lessons", searchAllCount: "Lessons shown:",
      skillsKicker: "Balanced learning", skillsTitle: "Do not only memorise words.<br><span class=\"text-gradient\">Learn how to use them.</span>", skillsDescription: "Communication requires a set of skills that grow together. Make every lesson a chance to understand and practise—not just watch.", startPractice: "Start practising", skillListening: "Listening", skillListeningBody: "Train your ear to understand words and sentences in context.", skillListeningTag: "Understand what you hear", skillSpeaking: "Speaking", skillSpeakingBody: "Turn what you learn into sentences you can say.", skillSpeakingTag: "Use the language", skillVocabulary: "Vocabulary and grammar", skillVocabularyBody: "Understand words and sentence structure through clear examples.", skillVocabularyTag: "Build a strong foundation", skillReadingWriting: "Reading and writing", skillReadingWritingBody: "Read short texts and gradually practise expressing your ideas.", skillReadingWritingTag: "Understand and express",
      ctaKicker: "One small step is enough to begin", ctaTitle: "Do not wait until you feel ready. Start learning today.", ctaDescription: "Choose a short lesson, practise it aloud, and repeat tomorrow. Progress comes from consistency.", choosePath: "Choose your path", faqKicker: "Clear answers", faqTitle: "Have a question?", faqDescription: "Find answers to common questions about learning and getting the most from this platform.", stillQuestions: "Still have a question?", contactByEmail: "Contact us by email", aboutKicker: "About the platform", aboutTitle: "Hussein Badr English", aboutDescription: "An educational platform designed to organise the journey from English basics toward practical use. We believe understanding, practice, and balanced repetition matter more than memorising information without using it.", preparedBy: "Created and presented by", footerDescription: "A learning space to help you understand and use English step by step.", quickLinks: "Quick links", followAlong: "Follow the content", footerSocialDescription: "Follow the channels for lessons and updates.", allRightsReserved: "All rights reserved.", contact: "Contact", backToTop: "Back to top ↑", footerNote: "Clearer learning, one step at a time.", loadingError: "Could not load content. Make sure site.json and faq.json are in the website root.", openEmail: "Email us", categoryLabel: "Category", levelLoadingError: "Could not display learning paths.", resultsFor: "Search results", searchEmpty: "No matching results."
    }
  };

  const state = { lang: "ar", theme: "light", siteData: null, faqData: null, query: "", category: "all" };
  const byId = (id) => document.getElementById(id);
  const t = (key) => (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || key;
  const translated = (value) => {
    if (value && typeof value === "object") return value[state.lang] || value.ar || value.en || "";
    return value == null ? "" : String(value);
  };
  const safeStorage = {
    get(key) { try { return window.localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch (_) { /* Storage may be disabled; keep the site usable. */ } }
  };

  function applyTranslations() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n);
      // Preserve decorative icons nested beside the text.
      if (element.firstChild && element.firstChild.nodeType === Node.TEXT_NODE) {
        element.firstChild.nodeValue = value;
      } else if (element.children.length) {
        element.insertBefore(document.createTextNode(value), element.firstChild);
      } else {
        element.textContent = value;
      }
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = t(element.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder)); });
    const languageButton = byId("language-toggle");
    if (languageButton) {
      languageButton.querySelector("span").textContent = state.lang === "ar" ? "EN" : "عربي";
      languageButton.setAttribute("aria-label", state.lang === "ar" ? "Switch language to English" : "تغيير اللغة إلى العربية");
    }
    const menuButton = byId("mobile-menu-toggle");
    if (menuButton) menuButton.setAttribute("aria-label", state.lang === "ar" ? "فتح القائمة" : "Open navigation menu");
    const themeButton = byId("theme-toggle");
    if (themeButton) themeButton.setAttribute("aria-label", state.lang === "ar" ? "تبديل الوضع الليلي والنهاري" : "Toggle dark and light mode");
    renderLevels();
    renderLessons();
    renderFaq();
    renderSocialLinks();
    updateSearchStatus();
  }

  function applyTheme(theme) {
    state.theme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = state.theme;
    const button = byId("theme-toggle");
    if (button) {
      const icon = button.querySelector("i");
      if (icon) icon.className = state.theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
      button.title = state.lang === "ar" ? (state.theme === "dark" ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي") : (state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      button.setAttribute("aria-pressed", String(state.theme === "dark"));
    }
    safeStorage.set(THEME_KEY, state.theme);
  }

  function textSearchable(value) {
    if (value == null) return "";
    if (typeof value === "string" || typeof value === "number") return String(value);
    if (Array.isArray(value)) return value.map(textSearchable).join(" ");
    return Object.values(value).map(textSearchable).join(" ");
  }

  function normalizeSearch(value) {
    return String(value || "").normalize("NFKC").toLocaleLowerCase().replace(/[\u064B-\u065F\u0670]/g, "").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ـ/g, "").trim();
  }

  function levelFor(code) {
    return (state.siteData?.levels || []).find((level) => level.code.toUpperCase() === String(code || "").toUpperCase());
  }

  const ACCENTS = { gold: "#d39c00", blue: "#2563eb", violet: "#8b5cf6", mint: "#0c9c83" };

  function renderLevels() {
    const container = byId("level-grid");
    if (!container) return;
    const levels = state.siteData?.levels || [];
    if (!levels.length) {
      container.innerHTML = `<div class="loading-card"><span>${escapeHtml(t("levelLoadingError"))}</span></div>`;
      return;
    }
    const query = normalizeSearch(state.query);
    const filtered = levels.filter((level) => {
      if (!query) return true;
      const haystack = normalizeSearch(textSearchable([level.code, level.name, level.label, level.description, level.searchTerms, level.skills]));
      return haystack.includes(query);
    });
    container.innerHTML = filtered.map((level) => {
      const accent = ACCENTS[level.accent] || ACCENTS.blue;
      const levelName = translated(level.name);
      const levelDesc = translated(level.description);
      return `<article class="level-card" style="--card-accent:${accent}">
        <div class="level-card-head"><span class="level-icon"><i class="${escapeAttr(level.icon || "fa-solid fa-book-open")}" aria-hidden="true"></i></span><span class="level-code">${escapeHtml(level.code)}</span></div>
        <span class="level-label">${escapeHtml(translated(level.label))}</span>
        <h3>${escapeHtml(levelName)}</h3><p>${escapeHtml(levelDesc)}</p>
        <div class="level-card-bottom"><span>${escapeHtml(translated(level.duration))}</span><a href="#lessons" data-level-filter="${escapeAttr(level.code)}"><span>${escapeHtml(t("levelAction"))}</span><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></a></div>
      </article>`;
    }).join("") || `<div class="loading-card"><span>${escapeHtml(t("searchEmpty"))}</span></div>`;
  }

  function renderLessons() {
    const container = byId("lesson-grid");
    const emptyState = byId("empty-state");
    if (!container) return;
    const lessons = state.siteData?.lessons || [];
    if (!lessons.length) {
      container.innerHTML = `<div class="loading-card"><span>${escapeHtml(t("loadingError"))}</span></div>`;
      if (emptyState) emptyState.hidden = true;
      return;
    }
    const query = normalizeSearch(state.query);
    const filtered = lessons.filter((lesson) => {
      const categoryMatches = state.category === "all" || lesson.category === state.category;
      const haystack = normalizeSearch(textSearchable([lesson.title, lesson.description, lesson.level, lesson.category, lesson.tags, levelFor(lesson.level)?.name, levelFor(lesson.level)?.description]));
      return categoryMatches && (!query || haystack.includes(query));
    });
    container.innerHTML = filtered.map((lesson) => {
      const categoryLabel = CATEGORY_LABELS[state.lang][lesson.category] || (state.lang === "ar" ? "درس تعليمي" : "Learning lesson");
      const title = translated(lesson.title);
      const description = translated(lesson.description);
      return `<article class="lesson-card" data-category="${escapeAttr(lesson.category)}">
        <div class="lesson-card-top"><span class="lesson-icon"><i class="${escapeAttr(lesson.icon || "fa-solid fa-book-open")}" aria-hidden="true"></i></span><span class="lesson-level">${escapeHtml(lesson.level)}</span></div>
        <span class="lesson-category">${escapeHtml(categoryLabel)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p>
        <div class="lesson-card-footer"><span class="lesson-duration"><i class="fa-regular fa-clock" aria-hidden="true"></i>${escapeHtml(translated(lesson.duration))}</span><a href="https://youtube.com/@husseinbadr1" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttr(t("lessonAction") + ": " + title)}"><span>${escapeHtml(t("lessonAction"))}</span><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></a></div>
      </article>`;
    }).join("");
    if (emptyState) emptyState.hidden = filtered.length > 0;
  }

  function renderFaq() {
    const container = byId("faq-list");
    if (!container) return;
    const questions = state.faqData?.questions || [];
    if (!questions.length) {
      container.innerHTML = `<div class="loading-card"><span>${escapeHtml(t("loadingError"))}</span></div>`;
      return;
    }
    container.innerHTML = questions.map((item, index) => `<details class="faq-item" ${index === 0 ? "" : ""}>
      <summary class="faq-question"><span>${escapeHtml(translated(item.question))}</span><span class="faq-chevron"><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></span></summary>
      <p class="faq-answer">${escapeHtml(translated(item.answer))}</p>
    </details>`).join("");
    // Keep the accordion tidy by allowing only one item open at a time.
    container.querySelectorAll(".faq-item").forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        container.querySelectorAll(".faq-item").forEach((other) => { if (other !== item) other.open = false; });
      });
    });
  }

  function renderSocialLinks() {
    const container = byId("social-links");
    const links = state.siteData?.socialLinks || [];
    const email = state.siteData?.site?.email;
    if (container && links.length) {
      container.innerHTML = links.map((item) => `<a href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttr(item.label)}" title="${escapeAttr(item.label)}"><i class="${escapeAttr(item.icon)}" aria-hidden="true"></i></a>`).join("");
    }
    if (email) {
      document.querySelectorAll(".footer-email, .faq-help-card a[href^='mailto:']").forEach((link) => {
        link.href = `mailto:${email}`;
      });
      const footerEmail = document.querySelector(".footer-email");
      if (footerEmail) footerEmail.innerHTML = `<i class="fa-regular fa-envelope" aria-hidden="true"></i> ${escapeHtml(email)}`;
    }
  }

  function updateSearchStatus() {
    const target = byId("search-results-status");
    if (!target) return;
    const query = String(state.query || "").trim();
    if (!state.siteData?.lessons) {
      target.textContent = "";
      return;
    }
    const normalized = normalizeSearch(query);
    const total = state.siteData.lessons.filter((lesson) => {
      const categoryMatches = state.category === "all" || lesson.category === state.category;
      const haystack = normalizeSearch(textSearchable([lesson.title, lesson.description, lesson.level, lesson.category, lesson.tags, levelFor(lesson.level)?.name]));
      return categoryMatches && (!normalized || haystack.includes(normalized));
    }).length;
    if (query || state.category !== "all") {
      target.textContent = `${query ? t("resultsFor") + " · " : ""}${t("searchCount")} ${total} ${t("searchCountSuffix")}`;
    } else {
      target.textContent = `${t("searchAllCount")} ${total}`;
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  }
  function escapeAttr(value) { return escapeHtml(value); }

  async function loadData() {
    try {
      const [siteResponse, faqResponse] = await Promise.all([fetch("./site.json", { cache: "no-cache" }), fetch("./faq.json", { cache: "no-cache" })]);
      if (!siteResponse.ok || !faqResponse.ok) throw new Error("A content JSON file could not be fetched.");
      const [siteData, faqData] = await Promise.all([siteResponse.json(), faqResponse.json()]);
      if (!Array.isArray(siteData.levels) || !Array.isArray(siteData.lessons) || !Array.isArray(faqData.questions)) throw new Error("The content format is invalid.");
      state.siteData = siteData;
      state.faqData = faqData;
      renderLevels();
      renderLessons();
      renderFaq();
      renderSocialLinks();
      updateSearchStatus();
    } catch (error) {
      console.error("Hussein Badr English: content failed to load.", error);
      const message = t("loadingError");
      ["level-grid", "lesson-grid", "faq-list"].forEach((id) => {
        const element = byId(id);
        if (element) element.innerHTML = `<div class="loading-card"><i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i><span>${escapeHtml(message)}</span></div>`;
      });
    }
  }

  function setLanguage(language) {
    state.lang = language === "en" ? "en" : "ar";
    safeStorage.set(LANG_KEY, state.lang);
    applyTranslations();
  }

  function initializeNavigation() {
    const toggle = byId("mobile-menu-toggle");
    const nav = byId("primary-navigation");
    if (!toggle || !nav) return;
    const closeMenu = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      const icon = toggle.querySelector("i");
      if (icon) icon.className = "fa-solid fa-bars";
      document.body.classList.remove("menu-open");
    };
    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      const icon = toggle.querySelector("i");
      if (icon) icon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
      document.body.classList.toggle("menu-open", open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 850) closeMenu(); });
  }

  function initializeActiveNav() {
    const links = Array.from(document.querySelectorAll(".primary-navigation .nav-link"));
    const sections = links.map((link) => byId(link.getAttribute("href").slice(1))).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  function initializeEvents() {
    byId("theme-toggle")?.addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
    byId("language-toggle")?.addEventListener("click", () => setLanguage(state.lang === "ar" ? "en" : "ar"));
    const search = byId("lesson-search");
    search?.addEventListener("input", () => {
      state.query = search.value;
      renderLevels();
      renderLessons();
      updateSearchStatus();
    });
    byId("lesson-filters")?.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-filter]");
      if (!button) return;
      state.category = button.dataset.filter || "all";
      byId("lesson-filters").querySelectorAll("button[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderLessons();
      updateSearchStatus();
    });
    byId("clear-search")?.addEventListener("click", () => {
      state.query = "";
      state.category = "all";
      if (search) search.value = "";
      byId("lesson-filters")?.querySelectorAll("button[data-filter]").forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
      renderLevels();
      renderLessons();
      updateSearchStatus();
      search?.focus();
    });
    byId("level-grid")?.addEventListener("click", (event) => {
      const anchor = event.target.closest("a[data-level-filter]");
      if (!anchor) return;
      const levelCode = anchor.dataset.levelFilter;
      const searchBox = byId("lesson-search");
      if (searchBox) searchBox.value = levelCode;
      state.query = levelCode;
      state.category = "all";
      byId("lesson-filters")?.querySelectorAll("button[data-filter]").forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
      renderLessons();
      updateSearchStatus();
    });
  }

  function initialize() {
    state.lang = safeStorage.get(LANG_KEY) === "en" ? "en" : "ar";
    const preferredTheme = safeStorage.get(THEME_KEY);
    state.theme = preferredTheme === "dark" ? "dark" : "light";
    applyTheme(state.theme);
    applyTranslations();
    const year = byId("current-year");
    if (year) year.textContent = String(new Date().getFullYear());
    initializeNavigation();
    initializeActiveNav();
    initializeEvents();
    loadData();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
}());
