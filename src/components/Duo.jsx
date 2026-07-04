// Image slot with optional duotone treatment.
// Pass `img` (a filename in /images/) or `src` (a URL).
// By default applies the site's red/charcoal duotone via CSS.
// Pass `raw` to show the image as-is (e.g. a photo that's already been duotoned).
import { useState } from 'react'

export default function Duo({ src, img, alt = '', label = 'Imagery', className = '', style, raw = false }) {
  const [failed, setFailed] = useState(false)
  const resolved = src || (img ? `/images/${img}` : null)

  if (resolved && !failed) {
    return (
      <div className={`${raw ? 'duo-raw' : 'duo'} ${className}`} style={style}>
        <img src={resolved} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      </div>
    )
  }
  return (
    <div className={`duo duo--placeholder ${className}`} style={style} role="img" aria-label={`${label} placeholder`}>
      <span>{label}</span>
    </div>
  )
}
