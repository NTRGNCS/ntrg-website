import useReveal from '../components/useReveal.js'
import BrandPanel from '../components/BrandPanel.jsx'
import Testimonials from '../components/Testimonials.jsx'
import { ContactBand, CtaBand } from '../components/Bands.jsx'
import { primaryServices, additionalServices } from '../data/content.js'
import { Tick } from '../components/Icons.jsx'

export default function Services() {
  useReveal()
  return (
    <>
      <section className="phero">
        <div className="wrap phero__inner">
          <div>
            <span className="eyebrow">Our services</span>
            <h1 className="phero__title display-xl">Services that make owning property less taxing.</h1>
          </div>
          <div className="phero__meta">
            <p className="lede">
              Working with the best property tax professionals across the country, NTRG gives commercial clients comprehensive services that save time and, most importantly, money.
            </p>
          </div>
        </div>
      </section>

      {/* primary services */}
      <section className="section">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Core offerings</span>
            <h2 className="shead__title display-lg">Where we drive the most value.</h2>
          </div>
          <div className="svc-grid reveal">
            {primaryServices.map((s, i) => (
              <article className="svc-card" key={s.id}>
                <span className="svc-card__line" />
                <div className="svc-card__idx">S/{String(i + 1).padStart(2, '0')}</div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* additional services */}
      <section className="section" style={{ background: 'var(--paper-warm)', borderBlock: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="split split--rev">
            <div className="split__media reveal">
              <BrandPanel variant="stat" stat="1" statLabel="One contract, one dedicated team, for your entire commercial portfolio." style={{ aspectRatio: '4 / 4.2' }} />
            </div>
            <div className="split__body reveal">
              <span className="eyebrow">We truly do it all</span>
              <h2 className="display-md">End-to-end commercial property tax.</h2>
              <p className="text-grey" style={{ marginBottom: '1.5rem' }}>
                Beyond the core, NTRG covers the full lifecycle, from acquisition through disposition.
              </p>
              <div className="morelist">
                {additionalServices.map((s) => (
                  <div className="moreitem" key={s}>
                    <span className="tick"><Tick size={19} /></span>{s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <ContactBand />
      <CtaBand
        eyebrow="Full-service, one contract"
        title="One firm for your entire portfolio."
        cta="Get started"
      />
    </>
  )
}
