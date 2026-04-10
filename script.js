const languages = {
  english: {
    label: "English",
    voice: "en-US",
    phrases: {
      greetings: [
        { phrase: "Hello, how are you?", translation: "Hello, how are you?" },
        { phrase: "Good morning.", translation: "Good morning." },
        { phrase: "Nice to meet you.", translation: "Nice to meet you." }
      ],
      travel: [
        { phrase: "Where is the train station?", translation: "Where is the train station?" },
        { phrase: "I need a ticket.", translation: "I need a ticket." },
        { phrase: "How much does it cost?", translation: "How much does it cost?" }
      ],
      food: [
        { phrase: "I would like something to eat.", translation: "I would like something to eat." },
        { phrase: "Can I get the menu?", translation: "Can I get the menu?" },
        { phrase: "This is delicious.", translation: "This is delicious." }
      ],
      daily: [
        { phrase: "I have an appointment today.", translation: "I have an appointment today." },
        { phrase: "My phone battery is low.", translation: "My phone battery is low." },
        { phrase: "I will call you later.", translation: "I will call you later." }
      ]
    }
  },
  spanish: {
    label: "Spanish",
    voice: "es-ES",
    phrases: {
      greetings: [
        { phrase: "Hola, ¿cómo estás?", translation: "Hello, how are you?" },
        { phrase: "Buenos días.", translation: "Good morning." },
        { phrase: "Mucho gusto.", translation: "Nice to meet you." }
      ],
      travel: [
        { phrase: "¿Dónde está la estación de tren?", translation: "Where is the train station?" },
        { phrase: "Necesito un billete.", translation: "I need a ticket." },
        { phrase: "¿Cuánto cuesta?", translation: "How much does it cost?" }
      ],
      food: [
        { phrase: "Quisiera algo de comer.", translation: "I would like something to eat." },
        { phrase: "¿Puedo ver el menú?", translation: "Can I get the menu?" },
        { phrase: "Esto está delicioso.", translation: "This is delicious." }
      ],
      daily: [
        { phrase: "Tengo una cita hoy.", translation: "I have an appointment today." },
        { phrase: "La batería de mi teléfono está baja.", translation: "My phone battery is low." },
        { phrase: "Te llamaré más tarde.", translation: "I will call you later." }
      ]
    }
  },
  french: {
    label: "French",
    voice: "fr-FR",
    phrases: {
      greetings: [
        { phrase: "Bonjour, comment ça va?", translation: "Hello, how are you?" },
        { phrase: "Bon matin.", translation: "Good morning." },
        { phrase: "Enchanté.", translation: "Nice to meet you." }
      ],
      travel: [
        { phrase: "Où est la gare?", translation: "Where is the train station?" },
        { phrase: "J'ai besoin d'un billet.", translation: "I need a ticket." },
        { phrase: "Combien ça coûte?", translation: "How much does it cost?" }
      ],
      food: [
        { phrase: "Je voudrais quelque chose à manger.", translation: "I would like something to eat." },
        { phrase: "Puis-je voir le menu?", translation: "Can I get the menu?" },
        { phrase: "C'est délicieux.", translation: "This is delicious." }
      ],
      daily: [
        { phrase: "J'ai un rendez-vous aujourd'hui.", translation: "I have an appointment today." },
        { phrase: "La batterie de mon téléphone est faible.", translation: "My phone battery is low." },
        { phrase: "Je t'appellerai plus tard.", translation: "I will call you later." }
      ]
    }
  },
  german: {
    label: "German",
    voice: "de-DE",
    phrases: {
      greetings: [
        { phrase: "Hallo, wie geht es dir?", translation: "Hello, how are you?" },
        { phrase: "Guten Morgen.", translation: "Good morning." },
        { phrase: "Freut mich, dich kennenzulernen.", translation: "Nice to meet you." }
      ],
      travel: [
        { phrase: "Wo ist der Bahnhof?", translation: "Where is the train station?" },
        { phrase: "Ich brauche ein Ticket.", translation: "I need a ticket." },
        { phrase: "Wie viel kostet das?", translation: "How much does it cost?" }
      ],
      food: [
        { phrase: "Ich möchte etwas essen.", translation: "I would like something to eat." },
        { phrase: "Kann ich die Speisekarte haben?", translation: "Can I get the menu?" },
        { phrase: "Das ist lecker.", translation: "This is delicious." }
      ],
      daily: [
        { phrase: "Ich habe heute einen Termin.", translation: "I have an appointment today." },
        { phrase: "Der Akku meines Telefons ist schwach.", translation: "My phone battery is low." },
        { phrase: "Ich rufe dich später an.", translation: "I will call you later." }
      ]
    }
  },
  japanese: {
    label: "Japanese",
    voice: "ja-JP",
    phrases: {
      greetings: [
        { phrase: "こんにちは、お元気ですか？", translation: "Hello, how are you?" },
        { phrase: "おはようございます。", translation: "Good morning." },
        { phrase: "はじめまして。", translation: "Nice to meet you." }
      ],
      travel: [
        { phrase: "駅はどこですか？", translation: "Where is the train station?" },
        { phrase: "切符が必要です。", translation: "I need a ticket." },
        { phrase: "いくらですか？", translation: "How much does it cost?" }
      ],
      food: [
        { phrase: "何か食べたいです。", translation: "I would like something to eat." },
        { phrase: "メニューを見せてください。", translation: "Can I get the menu?" },
        { phrase: "これは美味しいです。", translation: "This is delicious." }
      ],
      daily: [
        { phrase: "今日は予定があります。", translation: "I have an appointment today." },
        { phrase: "携帯のバッテリーが少ないです。", translation: "My phone battery is low." },
        { phrase: "後で電話します。", translation: "I will call you later." }
      ]
    }
  },
  hindi: {
    label: "Hindi",
    voice: "hi-IN",
    phrases: {
      greetings: [
        { phrase: "नमस्ते, आप कैसे हैं?", translation: "Hello, how are you?" },
        { phrase: "शुभ प्रभात।", translation: "Good morning." },
        { phrase: "आपसे मिलकर अच्छा लगा।", translation: "Nice to meet you." }
      ],
      travel: [
        { phrase: "ट्रेन स्टेशन कहाँ है?", translation: "Where is the train station?" },
        { phrase: "मुझे एक टिकट चाहिए।", translation: "I need a ticket." },
        { phrase: "यह कितना है?", translation: "How much does it cost?" }
      ],
      food: [
        { phrase: "मुझे खाने के लिए कुछ चाहिए।", translation: "I would like something to eat." },
        { phrase: "क्या मुझे मेनू मिल सकता है?", translation: "Can I get the menu?" },
        { phrase: "यह स्वादिष्ट है।", translation: "This is delicious." }
      ],
      daily: [
        { phrase: "आज मेरी एक अपॉइंटमेंट है।", translation: "I have an appointment today." },
        { phrase: "मेरा फोन चार्ज कम है।", translation: "My phone battery is low." },
        { phrase: "मैं बाद में कॉल करूंगा।", translation: "I will call you later." }
      ]
    }
  },
  arabic: {
    label: "Arabic",
    voice: "ar-SA",
    phrases: {
      greetings: [
        { phrase: "مرحبًا كيف حالك؟", translation: "Hello, how are you?" },
        { phrase: "صباح الخير.", translation: "Good morning." },
        { phrase: "تشرفنا.", translation: "Nice to meet you." }
      ],
      travel: [
        { phrase: "أين محطة القطار؟", translation: "Where is the train station?" },
        { phrase: "أحتاج إلى تذكرة.", translation: "I need a ticket." },
        { phrase: "كم السعر؟", translation: "How much does it cost?" }
      ],
      food: [
        { phrase: "أريد شيئًا لأكله.", translation: "I would like something to eat." },
        { phrase: "هل يمكنني الحصول على القائمة؟", translation: "Can I get the menu?" },
        { phrase: "هذا لذيذ.", translation: "This is delicious." }
      ],
      daily: [
        { phrase: "لدي موعد اليوم.", translation: "I have an appointment today." },
        { phrase: "بطارية هاتفي منخفضة.", translation: "My phone battery is low." },
        { phrase: "سأتصل بك لاحقًا.", translation: "I will call you later." }
      ]
    }
  }
};

const fromLanguageSelect = document.getElementById("fromLanguage");
const toLanguageSelect = document.getElementById("toLanguage");
const phraseCategorySelect = document.getElementById("phraseCategory");
const userText = document.getElementById("userText");
const displayPhrase = document.getElementById("displayPhrase");
const displayTranslation = document.getElementById("displayTranslation");
const pronunciationText = document.getElementById("pronunciationText");
const lessonTipText = document.getElementById("lessonTipText");
const playPronunciation = document.getElementById("playPronunciation");
const translateTextButton = document.getElementById("translateText");
const pickPhraseButton = document.getElementById("pickPhrase");
const tabText = document.getElementById("tabText");
const tabVoice = document.getElementById("tabVoice");
const textPractice = document.getElementById("textPractice");
const voicePractice = document.getElementById("voicePractice");
const startTextMode = document.getElementById("startTextMode");
const startVoiceMode = document.getElementById("startVoiceMode");
const detectedText = document.getElementById("detectedText");
const startVoice = document.getElementById("startVoice");
const stopVoice = document.getElementById("stopVoice");

let speechRecognition;
let recognitionActive = false;
let currentTargetLanguage = "english";
let currentSourceLanguage = "english";
let currentPhrase = "";
let currentTranslation = "";

function fillLanguageOptions() {
  const autoOption = document.createElement("option");
  autoOption.value = "auto";
  autoOption.textContent = "Detect language";
  fromLanguageSelect.appendChild(autoOption);

  Object.entries(languages).forEach(([key, data]) => {
    const optionA = document.createElement("option");
    optionA.value = key;
    optionA.textContent = data.label;
    fromLanguageSelect.appendChild(optionA);
    const optionB = document.createElement("option");
    optionB.value = key;
    optionB.textContent = data.label;
    toLanguageSelect.appendChild(optionB);
  });
  fromLanguageSelect.value = "english";
  toLanguageSelect.value = "spanish";
}

function setMode(mode) {
  const textActive = mode === "text";
  tabText.classList.toggle("active", textActive);
  tabVoice.classList.toggle("active", !textActive);
  textPractice.classList.toggle("hidden", !textActive);
  voicePractice.classList.toggle("hidden", textActive);
}

function updateCurrentLanguages() {
  currentSourceLanguage = fromLanguageSelect.value;
  currentTargetLanguage = toLanguageSelect.value;
}

const translationApiUrls = [
  { url: "https://translate.googleapis.com/translate_a/single?client=gtx", type: "google" },
  { url: "https://api.mymemory.translated.net/get", type: "mymemory" },
  { url: "https://translate.argosopentech.com/translate", type: "libre" },
  { url: "https://libretranslate.de/translate", type: "libre" }
];
const translationProxyUrl = "https://api.allorigins.win/raw?url=";
const languageCodeMap = {
  english: "en",
  spanish: "es",
  french: "fr",
  german: "de",
  japanese: "ja",
  hindi: "hi",
  arabic: "ar"
};

const simpleDictionary = {
  spanish: {
    what: "qué",
    are: "estás",
    you: "tú",
    eating: "comiendo",
    going: "yendo",
    where: "dónde",
    do: "haces",
    is: "es",
    this: "esto",
    need: "necesito",
    help: "ayuda",
    want: "quiero",
    hello: "hola",
    hey: "hola",
    how: "cómo",
    i: "yo",
    am: "soy",
    nice: "encantado",
    to: "a",
    meet: "conocerte",
    my: "mi",
    phone: "teléfono",
    battery: "batería",
    low: "baja",
    ticket: "billete",
    train: "tren",
    station: "estación",
    food: "comida",
    menu: "menú",
    delicious: "delicioso",
    today: "hoy",
    later: "más tarde",
    please: "por favor",
    thank: "gracias",
    yes: "sí",
    no: "no"
  },
  french: {
    what: "quoi",
    are: "êtes",
    you: "tu",
    eating: "manges",
    going: "vas",
    where: "où",
    do: "fais",
    is: "est",
    this: "ceci",
    need: "ai besoin",
    help: "aide",
    want: "veux",
    hello: "bonjour",
    hey: "salut",
    how: "comment",
    i: "je",
    am: "suis",
    nice: "content",
    to: "à",
    meet: "rencontrer",
    my: "mon",
    phone: "téléphone",
    battery: "batterie",
    low: "faible",
    ticket: "billet",
    train: "train",
    station: "gare",
    food: "nourriture",
    menu: "menu",
    delicious: "délicieux",
    today: "aujourd'hui",
    later: "plus tard",
    please: "s'il vous plaît",
    thank: "merci",
    yes: "oui",
    no: "non"
  },
  german: {
    what: "was",
    are: "bist",
    you: "du",
    eating: "isst",
    going: "gehst",
    where: "wo",
    do: "machst",
    is: "ist",
    this: "dies",
    need: "brauche",
    help: "Hilfe",
    want: "will",
    hello: "hallo",
    hey: "hallo",
    how: "wie",
    i: "ich",
    am: "bin",
    nice: "schön",
    to: "zu",
    meet: "treffen",
    my: "mein",
    phone: "Telefon",
    battery: "Akku",
    low: "schwach",
    ticket: "Ticket",
    train: "Zug",
    station: "Bahnhof",
    food: "Essen",
    menu: "Speisekarte",
    delicious: "lecker",
    today: "heute",
    later: "später",
    please: "bitte",
    thank: "danke",
    yes: "ja",
    no: "nein"
  },
  japanese: {
    what: "何",
    are: "です",
    you: "あなた",
    eating: "食べている",
    going: "行っている",
    where: "どこ",
    do: "する",
    is: "です",
    this: "これ",
    need: "必要",
    help: "助け",
    want: "欲しい",
    hello: "こんにちは",
    hey: "こんにちは",
    how: "どう",
    i: "私",
    am: "です",
    nice: "嬉しい",
    to: "に",
    meet: "会う",
    my: "私の",
    phone: "電話",
    battery: "バッテリー",
    low: "少ない",
    ticket: "切符",
    train: "電車",
    station: "駅",
    food: "食べ物",
    menu: "メニュー",
    delicious: "美味しい",
    today: "今日",
    later: "後で",
    please: "お願いします",
    thank: "ありがとう",
    yes: "はい",
    no: "いいえ"
  },
  hindi: {
    what: "क्या",
    are: "हैं",
    you: "आप",
    eating: "खा रहे हो",
    going: "जा रहे हो",
    where: "कहाँ",
    do: "करते",
    is: "है",
    this: "यह",
    need: "चाहिए",
    help: "मदद",
    want: "चाहता",
    hey: "नमस्ते",
    hello: "नमस्ते",
    how: "कैसे",
    i: "मैं",
    am: "हूँ",
    nice: "अच्छा",
    to: "को",
    meet: "मिलना",
    my: "मेरा",
    phone: "फोन",
    battery: "बैटरी",
    low: "कम",
    ticket: "टिकट",
    train: "ट्रेन",
    station: "स्टेशन",
    food: "खाना",
    menu: "मेनू",
    delicious: "स्वादिष्ट",
    today: "आज",
    later: "बाद में",
    please: "कृपया",
    thank: "धन्यवाद",
    yes: "हाँ",
    no: "नहीं"
  },
  arabic: {
    what: "ما",
    are: "هل",
    you: "أنت",
    eating: "تأكل",
    going: "تذهب",
    where: "أين",
    do: "تفعل",
    is: "هو",
    this: "هذا",
    need: "بحاجة",
    help: "مساعدة",
    want: "أريد",
    hey: "مرحبا",
    hello: "مرحبا",
    how: "كيف",
    i: "أنا",
    am: "أكون",
    nice: "لطيف",
    to: "إلى",
    meet: "أقابل",
    my: "لي",
    phone: "هاتف",
    battery: "بطارية",
    low: "منخفضة",
    ticket: "تذكرة",
    train: "قطار",
    station: "محطة",
    food: "طعام",
    menu: "قائمة",
    delicious: "لذيذ",
    today: "اليوم",
    later: "لاحقًا",
    please: "من فضلك",
    thank: "شكرًا",
    yes: "نعم",
    no: "لا"
  }
};

const offlinePhraseDictionary = {
  english: {
    "hello, how are you?": {
      spanish: "hola, ¿cómo estás?",
      french: "bonjour, comment ça va?",
      german: "hallo, wie geht es dir?",
      japanese: "こんにちは、お元気ですか？",
      hindi: "नमस्ते, आप कैसे हैं?",
      arabic: "مرحبًا كيف حالك؟"
    },
    "good morning.": {
      spanish: "buenos días.",
      french: "bonjour.",
      german: "guten Morgen.",
      japanese: "おはようございます。",
      hindi: "शुभ प्रभात।",
      arabic: "صباح الخير."
    },
    "i need a ticket.": {
      spanish: "necesito un billete.",
      french: "j'ai besoin d'un billet.",
      german: "ich brauche ein Ticket.",
      japanese: "切符が必要です。",
      hindi: "मुझे एक टिकट चाहिए।",
      arabic: "أحتاج إلى تذكرة."
    },
    "where is the train station?": {
      spanish: "¿Dónde está la estación de tren?",
      french: "Où est la gare?",
      german: "Wo ist der Bahnhof?",
      japanese: "駅はどこですか？",
      hindi: "ट्रेन स्टेशन कहाँ है?",
      arabic: "أين محطة القطار؟"
    },
    "can i get the menu?": {
      spanish: "¿Puedo ver el menú?",
      french: "Puis-je voir le menu?",
      german: "Kann ich die Speisekarte haben?",
      japanese: "メニューを見せてください。",
      hindi: "क्या मुझे मेनू मिल सकता है?",
      arabic: "هل يمكنني الحصول على القائمة؟"
    },
    "this is delicious.": {
      spanish: "Esto está delicioso.",
      french: "C'est délicieux.",
      german: "Das ist lecker.",
      japanese: "これは美味しいです。",
      hindi: "यह स्वादिष्ट है।",
      arabic: "هذا لذيذ."
    },
    "my phone battery is low.": {
      spanish: "La batería de mi teléfono está baja.",
      french: "La batterie de mon téléphone est faible.",
      german: "Der Akku meines Telefons ist schwach.",
      japanese: "携帯のバッテリーが少ないです。",
      hindi: "मेरा फोन चार्ज कम है।",
      arabic: "بطارية هاتفي منخفضة."
    },
    "i will call you later.": {
      spanish: "Te llamaré más tarde.",
      french: "Je t'appellerai plus tard.",
      german: "Ich rufe dich später an.",
      japanese: "後で電話します。",
      hindi: "मैं बाद में कॉल करूंगा।",
      arabic: "سأتصل بك لاحقًا."
    }
  },
  spanish: {
    "hola, ¿cómo estás?": { english: "hello, how are you?" },
    "buenos días.": { english: "good morning." },
    "necesito un billete.": { english: "i need a ticket." },
    "¿dónde está la estación de tren?": { english: "where is the train station?" },
    "¿puedo ver el menú?": { english: "can i get the menu?" },
    "esto está delicioso.": { english: "this is delicious." },
    "la batería de mi teléfono está baja.": { english: "my phone battery is low." },
    "te llamaré más tarde.": { english: "i will call you later." }
  },
  french: {
    "bonjour, comment ça va?": { english: "hello, how are you?" },
    "bonjour.": { english: "good morning." },
    "j'ai besoin d'un billet.": { english: "i need a ticket." },
    "où est la gare?": { english: "where is the train station?" },
    "puis-je voir le menu?": { english: "can i get the menu?" },
    "c'est délicieux.": { english: "this is delicious." },
    "la batterie de mon téléphone est faible.": { english: "my phone battery is low." },
    "je t'appellerai plus tard.": { english: "i will call you later." }
  },
  german: {
    "hallo, wie geht es dir?": { english: "hello, how are you?" },
    "guten Morgen.": { english: "good morning." },
    "ich brauche ein Ticket.": { english: "i need a ticket." },
    "wo ist der Bahnhof?": { english: "where is the train station?" },
    "kann ich die Speisekarte haben?": { english: "can i get the menu?" },
    "das ist lecker.": { english: "this is delicious." },
    "der Akku meines Telefons ist schwach.": { english: "my phone battery is low." },
    "ich rufe dich später an.": { english: "i will call you later." }
  },
  japanese: {
    "こんにちは、お元気ですか？": { english: "hello, how are you?" },
    "おはようございます。": { english: "good morning." },
    "切符が必要です。": { english: "i need a ticket." },
    "駅はどこですか？": { english: "where is the train station?" },
    "メニューを見せてください。": { english: "can i get the menu?" },
    "これは美味しいです。": { english: "this is delicious." },
    "携帯のバッテリーが少ないです。": { english: "my phone battery is low." },
    "後で電話します。": { english: "i will call you later." }
  },
  hindi: {
    "नमस्ते, आप कैसे हैं?": { english: "hello, how are you?" },
    "शुभ प्रभात।": { english: "good morning." },
    "मुझे एक टिकट चाहिए।": { english: "i need a ticket." },
    "ट्रेन स्टेशन कहाँ है?": { english: "where is the train station?" },
    "क्या मुझे मेनू मिल सकता है?": { english: "can i get the menu?" },
    "यह स्वादिष्ट है।": { english: "this is delicious." },
    "मेरा फोन चार्ज कम है।": { english: "my phone battery is low." },
    "मैं बाद में कॉल करूंगा।": { english: "i will call you later." }
  },
  arabic: {
    "مرحبًا كيف حالك؟": { english: "hello, how are you?" },
    "صباح الخير.": { english: "good morning." },
    "أحتاج إلى تذكرة.": { english: "i need a ticket." },
    "أين محطة القطار؟": { english: "where is the train station?" },
    "هل يمكنني الحصول على القائمة؟": { english: "can i get the menu?" },
    "هذا لذيذ.": { english: "this is delicious." },
    "بطارية هاتفي منخفضة.": { english: "my phone battery is low." },
    "سأتصل بك لاحقًا.": { english: "i will call you later." }
  }
};

async function fetchWithCorsFallback(url, options) {
  try {
    const directResponse = await fetch(url, options);
    if (directResponse && directResponse.ok) {
      return directResponse;
    }
  } catch (error) {
    // fall through to proxy attempt
  }

  if (options && options.method && options.method.toUpperCase() === "POST") {
    return null; // no reliable GET proxy for POST translation bodies
  }

  try {
    const proxyUrl = `${translationProxyUrl}${encodeURIComponent(url)}`;
    const proxyResponse = await fetch(proxyUrl);
    if (proxyResponse && proxyResponse.ok) {
      return proxyResponse;
    }
  } catch (proxyError) {
    return null;
  }

  return null;
}

async function translateTextApi(text, sourceLang, targetLang) {
  if (sourceLang === targetLang) {
    return text;
  }
  const sourceCode = sourceLang === "auto" ? "auto" : languageCodeMap[sourceLang] || "auto";
  const targetCode = languageCodeMap[targetLang];
  if (!targetCode) {
    return null;
  }

  for (const api of translationApiUrls) {
    try {
      let response;
      let data;
      if (api.type === "libre") {
        response = await fetchWithCorsFallback(api.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q: text, source: sourceCode, target: targetCode, format: "text" })
        });
      } else if (api.type === "mymemory") {
        if (sourceCode === "auto") {
          continue;
        }
        const query = new URLSearchParams({ q: text, langpair: `${sourceCode}|${targetCode}` });
        response = await fetchWithCorsFallback(`${api.url}?${query.toString()}`);
      } else if (api.type === "google") {
        const query = new URLSearchParams({ sl: sourceCode, tl: targetCode, dt: "t", q: text });
        response = await fetchWithCorsFallback(`${api.url}&${query.toString()}`);
      } else {
        continue;
      }

      if (!response || !response.ok) {
        continue;
      }

      if (api.type === "google") {
        data = await response.json();
        const translated = Array.isArray(data[0]) ? data[0].map(item => item[0]).join("") : null;
        if (translated && normalizeText(translated) !== normalizeText(text)) {
          return translated;
        }
      } else {
        data = await response.json();
        let translation = data.translatedText || data.translation || data.responseData?.translatedText || null;
        if (translation) {
          translation = translation.toString();
          if (normalizeText(translation) !== normalizeText(text)) {
            return translation;
          }
        }
      }
    } catch (error) {
      continue;
    }
  }

  return null;
}

async function getTranslatedText(text, sourceLang, targetLang, category) {
  const apiTranslation = await translateTextApi(text, sourceLang, targetLang);
  if (apiTranslation) {
    return apiTranslation;
  }

  const localTranslation = getTranslation(sourceLang, targetLang, category, text);
  if (localTranslation && normalizeText(localTranslation) !== normalizeText(text)) {
    return localTranslation;
  }

  if (sourceLang === "english" || targetLang === "english") {
    const fallback = approximateTranslate(text, targetLang, sourceLang);
    if (fallback) {
      return fallback;
    }
  }

  return null;
}

function normalizeText(text) {
  return text.trim().toLowerCase().replace(/[.,!?;:]+/g, "");
}

function approximateTranslate(text, targetLang, sourceLang) {
  if (sourceLang === targetLang) {
    return text;
  }

  const normalized = normalizeText(text);
  const words = normalized.split(/\s+/).filter(Boolean);

  if (sourceLang === "english" && targetLang !== "english") {
    const dictionary = simpleDictionary[targetLang];
    if (!dictionary) {
      return null;
    }
    const translatedWords = words.map(word => dictionary[word] || dictionary[word.replace(/s$/, "")] || "__MISSING__");
    if (translatedWords.includes("__MISSING__")) {
      return null;
    }
    return translatedWords.join(" ");
  }

  if (targetLang === "english" && sourceLang !== "english") {
    const dictionary = simpleDictionary[sourceLang];
    if (!dictionary) {
      return null;
    }
    const reversedMap = Object.fromEntries(Object.entries(dictionary).map(([key, value]) => [value, key]));
    const translatedWords = words.map(word => reversedMap[word] || reversedMap[word.replace(/s$/, "")] || "__MISSING__");
    if (translatedWords.includes("__MISSING__")) {
      return null;
    }
    return translatedWords.join(" ");
  }

  return null;
}

function findPhraseEntry(languageKey, category, text) {
  const normalizedText = normalizeText(text);
  return languages[languageKey].phrases[category].find(item => {
    return normalizeText(item.phrase) === normalizedText || normalizeText(item.translation) === normalizedText;
  });
}

function getTranslation(sourceLang, targetLang, category, text) {
  if (sourceLang === targetLang) {
    return text;
  }

  const normalizedText = normalizeText(text);
  const phraseFallback = offlinePhraseDictionary[sourceLang]?.[normalizedText];
  if (phraseFallback && phraseFallback[targetLang]) {
    return phraseFallback[targetLang];
  }

  if (sourceLang !== "english" && targetLang !== "english") {
    const sourceToEnglish = offlinePhraseDictionary[sourceLang]?.[normalizedText]?.english;
    if (sourceToEnglish) {
      const englishKey = normalizeText(sourceToEnglish);
      const englishEntry = offlinePhraseDictionary.english?.[englishKey];
      if (englishEntry && englishEntry[targetLang]) {
        return englishEntry[targetLang];
      }
    }
  }

  const sourceEntry = findPhraseEntry(sourceLang, category, text);
  if (sourceEntry) {
    if (targetLang === "english") {
      return sourceEntry.translation;
    }
    const targetEntry = languages[targetLang].phrases[category].find(item => item.translation === sourceEntry.translation);
    return targetEntry ? targetEntry.phrase : null;
  }

  if (sourceLang !== "english" && targetLang !== "english") {
    return null;
  }

  return null;
}

function getPhraseSuggestion() {
  const category = phraseCategorySelect.value;
  const sourceData = languages[currentSourceLanguage];
  const sourceItems = sourceData.phrases[category];
  const sourceItem = sourceItems[Math.floor(Math.random() * sourceItems.length)];
  const translation = getTranslation(currentSourceLanguage, currentTargetLanguage, category, sourceItem.phrase) || sourceItem.translation;
  return { phrase: sourceItem.phrase, translation };
}

function showPhrase(item) {
  currentPhrase = item.phrase;
  currentTranslation = item.translation;
  displayPhrase.textContent = item.phrase;
  displayTranslation.textContent = item.translation;
  pronunciationText.textContent = `Hear the ${languages[currentTargetLanguage].label} phrase and repeat it aloud.`;
  lessonTipText.textContent = currentSourceLanguage === currentTargetLanguage
    ? "Try translating between different languages to practice both reading and speaking."
    : `Repeat the phrase in ${languages[currentTargetLanguage].label}, then try the next phrase from the same category.`;
}

function speakText(text, languageCode) {
  if (!window.speechSynthesis) {
    alert("Speech synthesis is unavailable in this browser.");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languageCode;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

async function handleTranslateText() {
  updateCurrentLanguages();
  const text = userText.value.trim();
  if (!text) {
    alert("Please type a phrase to practice.");
    return;
  }
  const category = phraseCategorySelect.value;
  displayTranslation.textContent = "Translating...";
  const translation = await getTranslatedText(text, currentSourceLanguage, currentTargetLanguage, category);
  displayPhrase.textContent = text;
  if (translation) {
    displayTranslation.textContent = translation;
    pronunciationText.textContent = `Listen to the ${languages[currentTargetLanguage].label} version and repeat it aloud.`;
    currentPhrase = translation;
    currentTranslation = translation;
    speakText(translation, languages[currentTargetLanguage].voice);
  } else {
    displayTranslation.textContent = "Translation unavailable for this sentence.";
    pronunciationText.textContent = `Try a shorter sentence or use one of the suggested phrases for better results.`;
    currentPhrase = text;
    currentTranslation = "";
  }
}

async function handlePickPhrase() {
  updateCurrentLanguages();
  const category = phraseCategorySelect.value;
  const sourceItems = languages[currentSourceLanguage].phrases[category];
  const chosen = sourceItems[Math.floor(Math.random() * sourceItems.length)];
  const translation = await getTranslatedText(chosen.phrase, currentSourceLanguage, currentTargetLanguage, category) || chosen.translation;
  userText.value = chosen.phrase;
  showPhrase({ phrase: chosen.phrase, translation });
  if (translation) {
    speakText(translation, languages[currentTargetLanguage].voice);
  }
}

function handlePlayPronunciation() {
  if (!currentPhrase) {
    alert("Pick a phrase or type one first.");
    return;
  }
  speakText(currentPhrase, languages[currentTargetLanguage].voice);
}

function setupVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    detectedText.textContent = "Voice recognition is not supported in this browser.";
    startVoice.disabled = true;
    stopVoice.disabled = true;
    return;
  }
  speechRecognition = new SpeechRecognition();
  speechRecognition.continuous = false;
  speechRecognition.interimResults = false;
  speechRecognition.lang = languages[currentSourceLanguage]?.voice || languages.english.voice;

  speechRecognition.onstart = () => {
    recognitionActive = true;
    startVoice.textContent = "Listening...";
  };

  speechRecognition.onend = () => {
    recognitionActive = false;
    startVoice.textContent = "Start Listening";
  };

  speechRecognition.onerror = (event) => {
    recognitionActive = false;
    startVoice.textContent = "Start Listening";
    detectedText.textContent = `Voice input error: ${event.error}`;
  };

  speechRecognition.onresult = async (event) => {
    const result = event.results[0][0].transcript;
    detectedText.textContent = result;
    const category = phraseCategorySelect.value;
    displayTranslation.textContent = "Translating...";
    const translation = await getTranslatedText(result, currentSourceLanguage, currentTargetLanguage, category);
    displayPhrase.textContent = result;
    if (translation) {
      displayTranslation.textContent = translation;
      pronunciationText.textContent = `Listen to the ${languages[currentTargetLanguage].label} version and repeat it aloud.`;
      currentPhrase = translation;
      currentTranslation = translation;
      speakText(translation, languages[currentTargetLanguage].voice);
    } else {
      displayTranslation.textContent = "Translation unavailable for this phrase.";
      pronunciationText.textContent = `This sentence is outside the built-in library and API fallback. Try a simpler phrase or use the suggestion button.`;
      currentPhrase = result;
      currentTranslation = "";
    }
  };
}

function startVoiceCapture() {
  updateCurrentLanguages();
  if (!speechRecognition) {
    setupVoiceRecognition();
    if (!speechRecognition) return;
  }
  speechRecognition.lang = languages[currentSourceLanguage].voice;
  recognitionActive = false;
  detectedText.textContent = "Listening for your voice...";
  speechRecognition.start();
}

function stopVoiceCapture() {
  if (speechRecognition && recognitionActive) {
    speechRecognition.stop();
  }
}

function bindEvents() {
  tabText.addEventListener("click", () => setMode("text"));
  tabVoice.addEventListener("click", () => setMode("voice"));
  startTextMode.addEventListener("click", () => setMode("text"));
  startVoiceMode.addEventListener("click", () => setMode("voice"));
  translateTextButton.addEventListener("click", handleTranslateText);
  pickPhraseButton.addEventListener("click", handlePickPhrase);
  playPronunciation.addEventListener("click", handlePlayPronunciation);
  startVoice.addEventListener("click", startVoiceCapture);
  stopVoice.addEventListener("click", stopVoiceCapture);
  fromLanguageSelect.addEventListener("change", () => {
    updateCurrentLanguages();
    if (speechRecognition) {
      speechRecognition.lang = languages[currentSourceLanguage]?.voice || languages.english.voice;
    }
  });
  toLanguageSelect.addEventListener("change", () => updateCurrentLanguages());
}

function init() {
  fillLanguageOptions();
  bindEvents();
  showPhrase(getPhraseSuggestion());
  setupVoiceRecognition();
}

init();
