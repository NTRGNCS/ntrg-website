import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal.js'
import Duo from '../components/Duo.jsx'
import BrandPanel from '../components/BrandPanel.jsx'
import Compare from '../components/Compare.jsx'
import Testimonials from '../components/Testimonials.jsx'
import { ContactBand, CtaBand } from '../components/Bands.jsx'
import { primaryServices, differentiators, posts } from '../data/content.js'
import { Check } from '../components/Icons.jsx'

// ─── HERO IMAGE ───────────────────────────────────────────────────────────
// PREVIEW PLACEHOLDER: Bent Tree Tower (NTRG's office building).
// This image is from a commercial listing service and is watermarked.
// REPLACE before launch with NTRG's own photo or a licensed original.
// To change: paste a new image URL between the quotes, or drop a file in
// public/images/ and reference it as '/images/your-file.jpg'.
const HERO_IMAGE = '/images/bent-tree-tower.png'
// ──────────────────────────────────────────────────────────────────────────

export default function Home() {
  useReveal()
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap-wide hero__grid">
          <div className="hero__copy">
            <div className="hero__kicker eyebrow">Commercial property tax advisors</div>
            <h1 className="hero__title display-xl">
              <span className="line">Local expertise.</span>
              <span className="line accent">National coverage.</span>
            </h1>
            <p className="hero__sub lede">
              The one-stop property tax firm that large commercial portfolios turn to, with hyper-local experts, a proprietary technology model, and a client-first approach that maximizes every appeal.
            </p>
            <div className="hero__actions">
              <Link to="/services" className="btn btn--primary">See our services <span className="arrow">→</span></Link>
              <Link to="/expertise" className="btn btn--ghost">Why NTRG</Link>
            </div>
          </div>
          <div className="hero__side">
            <Duo src={HERO_IMAGE} raw label="Bent Tree Tower" />
          </div>
        </div>
      </section>

      {/* STAT RAIL */}
      <div className="statrail">
        <div className="wrap-wide statrail__inner">
          <div className="stat">
            <div className="stat__num">50<span className="unit">/50</span></div>
            <div className="stat__label">One-stop coverage in every U.S. state</div>
          </div>
          <div className="stat">
            <div className="stat__num">25<span className="unit">+</span></div>
            <div className="stat__label">Years advocating for commercial owners</div>
          </div>
          <div className="stat">
            <div className="stat__num">90<span className="unit">%</span></div>
            <div className="stat__label">Of the best experts work for themselves. Now they work with us</div>
          </div>
          <div className="stat">
            <div className="stat__num">1</div>
            <div className="stat__label">Contract for your entire portfolio</div>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split__body reveal">
              <span className="eyebrow">We are NTRG</span>
              <h2 className="display-md">The one-stop property tax shop, built around your business.</h2>
              <p className="text-grey">
                Empowered by hyper-local expertise, a premier technology-driven model, and a client-first philosophy, we maximize appeal outcomes through diligence, clear communication, and strategic insight, across your entire commercial real estate portfolio.
              </p>
              <ul className="wca-list">
                {['One-stop shop in all 50 states', 'Comprehensive property tax management', 'Hyper-local expertise', 'Premier, technology-driven model', 'Diligence and strategic insight on every result'].map((x) => (
                  <li key={x}><span className="tick"><Check size={18} /></span>{x}</li>
                ))}
              </ul>
              <div className="split__actions">
                <Link to="/expertise" className="btn btn--ghost">Our expertise <span className="arrow">→</span></Link>
              </div>
            </div>
            <div className="split__media reveal">
              <BrandPanel variant="stat" stat="50" statLabel="One-stop property tax coverage in every U.S. state." style={{ aspectRatio: '4 / 4.4' }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY SERVICES */}
      <section className="section" style={{ background: 'var(--paper-warm)', borderBlock: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Our premier services</span>
            <h2 className="shead__title display-lg">Real, valuable results, every day.</h2>
            <p className="lede">The core services driving outcomes for our clients, from tax management and advisory to appeals and forecasting.</p>
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
          <div style={{ marginTop: '2.25rem' }}>
            <Link to="/services" className="btn btn--primary">See all services <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Our difference</span>
            <h2 className="shead__title display-lg">Why owners choose NTRG.</h2>
            <p className="lede">There are a few ways to handle property tax. Here&apos;s how we blow the competition out of the water through our experts, process, and outcomes.</p>
          </div>
          <div className="diffs reveal">
            {differentiators.map((d, i) => (
              <div className="diff" key={d.k}>
                <div className="diff__k">
                  <span className="diff__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="diff__title">{d.k}</span>
                </div>
                <p className="diff__v">{d.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON: signature */}
      <Compare />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* INSIGHTS PREVIEW */}
      <section className="section" style={{ background: 'var(--paper-warm)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="shead shead--split reveal">
            <div>
              <span className="eyebrow">News &amp; insights</span>
              <h2 className="shead__title display-lg">Forecasts &amp; thought pieces.</h2>
            </div>
            <Link to="/insights" className="btn btn--ghost">View all posts <span className="arrow">→</span></Link>
          </div>
          <div className="posts reveal">
            {posts.map((p) => (
              <article className="post" key={p.title}>
                <div className="post__media post__media--brand" aria-hidden="true">
                  <span className="post__media-tag">{p.tag}</span>
                </div>
                <div className="post__body">
                  <div className="post__meta">
                    <span className="post__tag">{p.tag}</span>
                    <span className="post__date">{p.date}</span>
                  </div>
                  <h3 className="post__title">{p.title}</h3>
                  <p className="post__excerpt">{p.excerpt}</p>
                  <span className="post__more">Read more →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
      <CtaBand
        title="Ready to lower your property tax burden?"
        body="Partner with the firm built around your portfolio."
        cta="Talk to an advisor"
      />
    </>
  )
}
