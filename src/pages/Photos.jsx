import { useTranslation } from 'react-i18next'

/**
 * To add event photos, place image files in /public/photos/ and add
 * entries to the PHOTOS array below:
 *
 * { src: '/photos/event-2025.jpg', captionKey: 'photos.caption.event2025' }
 *
 * For captions without i18n, you can also use a plain `caption` string field.
 */
const PHOTOS = [
  // Example (uncomment and replace with real paths):
  // { src: '/groupPhoto.JPG', caption: 'Joyonic' },
]

export default function Photos() {
  const { t } = useTranslation()

  return (
    <main className="page">
      <h2 className="photos-page-title">{t('photosTitle')}</h2>

      {PHOTOS.length === 0 ? (
        <div className="photos-empty">
          <p>{t('photosEmpty')}</p>
        </div>
      ) : (
        <div className="photos-grid">
          {PHOTOS.map((photo, i) => (
            <figure key={i} className="photo-item">
              <img src={photo.src} alt={photo.caption ?? ''} loading="lazy" />
              {photo.caption && <figcaption>{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </main>
  )
}
