import useReveal from '../components/useReveal.js'
import BrandPanel from '../components/BrandPanel.jsx'
import LeaderCard from '../components/LeaderCard.jsx'
import { ContactBand, CtaBand } from '../components/Bands.jsx'
import { leadership, clients, memorial } from '../data/content.js'

export default function About() {
  useReveal()
  return (
    <>
      <section className="phero">
        <div className="wrap phero__inner">
          <div>
            <span className="eyebrow">About us</span>
            <h1 className="phero__title display-xl">Your U.S. property tax advisors.</h1>
          </div>
          <div className="phero__meta">
            <p className="lede">
              For over two decades, NTRG has been a relentless advocate for commercial property owners seeking better tax appeal outcomes. Through real relationships with hyper-local experts, we leave no question unanswered and no savings unexplored.
            </p>
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split__body reveal">
              <span className="eyebrow">Our mission</span>
              <h2 className="display-md">Unmatched, hyper-local expertise.</h2>
              <p className="text-grey">
                At National Tax Resource Group, we bring hyper-local property tax expertise to businesses across the country, driving better appeal outcomes and maximizing savings for commercial clients.
              </p>
            </div>
            <div className="split__media reveal">
              <BrandPanel variant="mark" />
            </div>
          </div>
        </div>
      </section>

      {/* vision */}
      <section className="section dark" style={{ background: 'var(--ink)' }}>
        <div className="wrap">
          <div className="split split--rev">
            <div className="split__media reveal">
              <BrandPanel variant="quote" quote="We leave no opportunity unturned and no savings unexplored." cite="The NTRG commitment" />
            </div>
            <div className="split__body reveal">
              <span className="eyebrow eyebrow--ondark">Our vision</span>
              <h2 className="display-md">A dedicated advocate, every time.</h2>
              <p className="lede">
                Through a relentless drive to do right by our commercial clients, NTRG serves as a dedicated advocate for businesses looking to minimize their property taxes. By leaving no opportunity unturned and forming meaningful relationships with local experts, we deliver unmatched advisory and management nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* einstein quote */}
      <section className="section qband">
        <div className="wrap">
          <p className="qband__quote"><span className="mark">“</span>The important thing is not to stop questioning.<span className="mark">”</span></p>
          <div className="qband__by">Albert Einstein</div>
        </div>
      </section>

      {/* in memoriam */}
      <section className="section memoriam">
        <div className="wrap memoriam__inner">
          <div className="memoriam__portrait reveal">
            <div className="memoriam__img">
              <img src={memorial.photo} alt={memorial.name} loading="lazy" />
            </div>
          </div>
          <div className="memoriam__body reveal">
            <span className="eyebrow eyebrow--muted">In memoriam</span>
            <h2 className="memoriam__name display-md">{memorial.name}</h2>
            <div className="memoriam__role">{memorial.role}</div>
            <p className="memoriam__text">{memorial.body}</p>
            <p className="memoriam__text">{memorial.body2}</p>
          </div>
        </div>
      </section>

      {/* leadership */}
      <section className="section">
        <div className="wrap">
          <div className="shead reveal">
            <span className="eyebrow">Our leadership</span>
            <h2 className="shead__title display-lg">Led by the best in the country.</h2>
            <p className="lede">With experts in every corner of the U.S., we&apos;re led at our core by a team that champions expertise, client relationships, and NTRG&apos;s mission every day.</p>
          </div>
          <div className="leaders reveal">
            {leadership.map((p) => (
              <LeaderCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* clients */}
      <section className="section" style={{ background: 'var(--paper-warm)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="shead reveal" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Our clients</span>
            <h2 className="shead__title display-lg">Trusted by portfolios nationwide.</h2>
            <p className="lede" style={{ margin: '1rem auto 0' }}>Proud to partner with these businesses, alongside our full portfolio of clients across the country.</p>
          </div>
          <div className="logos reveal">
            {clients.map((c) => (
              <div className="logo-cell" key={c}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
      <CtaBand
        eyebrow="Meet NTRG"
        title="Learn what NTRG can do for your business."
        cta="Contact us"
      />
    </>
  )
}
