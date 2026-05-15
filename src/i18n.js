import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ja from './locales/ja.json'
import zh from './locales/zh.json'
import zhTW from './locales/zh-TW.json'
import en from './locales/en.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ja:    { translation: ja },
      zh:    { translation: zh },
      'zh-TW': { translation: zhTW },
      en:    { translation: en },
    },
    // Priority: browser language → fallback to Japanese
    fallbackLng: 'ja',
    supportedLngs: ['ja', 'zh', 'zh-TW', 'en'],
    // Map browser locale variants (e.g. zh-CN → zh, zh-HK → zh-TW)
    load: 'languageOnly',
    nonExplicitSupportedLngs: false,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
