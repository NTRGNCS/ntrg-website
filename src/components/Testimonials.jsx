import { useState } from 'react'
import { testimonials } from '../data/content.js'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  return (
    <section className="section">
      <div className="wrap tstory">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>Client voices</span>
        <blockquote className="tstory__quote">
          <span className="mark">“</span>{t.quote}<span className="mark">”</span>
        </blockquote>
        <div className="tstory__cite">{t.name} <span>{t.title}</span></div>
        <div className="tstory__dots" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`tdot ${idx === i ? 'is-active' : ''}`}
              aria-label={`Testimonial ${idx + 1}`}
              aria-selected={idx === i}
              role="tab"
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
