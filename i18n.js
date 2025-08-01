// src/i18n.js
// Internationalization configuration (future-proofing)
const translations = {
  en: {
    siteTitle: "SwissEduGuide",
    home: "Home",
    swissSystem: "Swiss System",
    universityAccess: "University Access",
    visaGuide: "Visa Guide",
    highSchoolAdvice: "High School Advice",
    tuitionComparison: "Tuition Comparison",
    consulting: "Consulting",
    authors: "Authors",
    about: "About",
    blog: "Blog"
  },
  fr: {
    siteTitle: "SwissEduGuide",
    home: "Accueil",
    swissSystem: "Système Suisse",
    universityAccess: "Accès Universitaire",
    visaGuide: "Guide des Visas",
    highSchoolAdvice: "Conseils Lycée",
    tuitionComparison: "Comparaison des Frais",
    consulting: "Conseil",
    authors: "Auteurs",
    about: "À Propos",
    blog: "Blog"
  }
};

export const defaultLanguage = 'en';
export const languages = Object.keys(translations);

export function t(key, lang = defaultLanguage) {
  return translations[lang]?.[key] || key;
}