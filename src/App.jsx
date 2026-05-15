import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './App.css'
import Nav from './Nav.jsx'
import Photos from './pages/Photos.jsx'

const LANGUAGES = [
  { code: 'ja',    label: '日本語' },
  { code: 'zh',    label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'en',    label: 'English' },
]

function normalizeLanguage(code) {
  if (!code) {
    return 'ja'
  }

  const lower = code.toLowerCase()

  if (lower === 'zh-cn' || lower === 'zh-sg' || lower === 'zh-hans') {
    return 'zh'
  }

  if (lower === 'zh-tw' || lower === 'zh-hk' || lower === 'zh-mo' || lower === 'zh-hant') {
    return 'zh-TW'
  }

  if (lower.startsWith('ja')) {
    return 'ja'
  }

  if (lower.startsWith('en')) {
    return 'en'
  }

  return code
}

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = normalizeLanguage(i18n.resolvedLanguage || i18n.language)

  return (
    <div className="lang-switcher">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn${current === lang.code ? ' active' : ''}`}
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}

function App() {
  const { t } = useTranslation()

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={
          <main className="page">
            <section className="hero">
              <div className="hero-copy">
                <p className="tag">{t('tag')}</p>
                <h1>{t('title')}</h1>
                <p className="lead">{t('lead1')}</p>
                <p className="lead">{t('lead2')}</p>
                <p className="contact">
                  {t('contact')}
                  <a href="mailto:joyonic.tokyo@gmail.com">joyonic.tokyo@gmail.com</a>
                </p>
              </div>
              <div className="photo-wrap">
                <img
                  src="/groupPhoto.JPG"
                  alt={t('photoAlt')}
                  className="group-photo"
                />
              </div>
            </section>

            <section className="coming-soon">
              <h2>{t('comingSoonTitle')}</h2>
              <p>{t('comingSoonText')}</p>
            </section>
          </main>
        } />
        <Route path="/photos" element={<Photos />} />
      </Routes>

      <div className="floating-lang">
        <LanguageSwitcher />
      </div>
    </>
  )
}

export default App
