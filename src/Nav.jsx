import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Nav() {
  const { t } = useTranslation()

  return (
    <nav className="site-nav">
      <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
        {t('navHome')}
      </NavLink>
      <NavLink to="/photos" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
        {t('navPhotos')}
      </NavLink>
    </nav>
  )
}
