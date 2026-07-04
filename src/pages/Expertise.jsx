import useReveal from '../components/useReveal.js'
import BrandPanel from '../components/BrandPanel.jsx'
import Compare from '../components/Compare.jsx'
import { ContactBand, CtaBand } from '../components/Bands.jsx'
import { differentiators, processSteps } from '../data/content.js'

export default function Expertise() {
  useReveal()
  return (
    <>
      <section className="phero">
        <div className="wrap phero__inner">
          <div>
            <span className="eyebrow">Our expertise</span>
            <h1 className="phero__title display-xl">Nationwide,<br />hyper-local.</h1>
          </div>
          <div className="phero__meta">
            <p className="lede">
              By fostering relationships with the best property tax professionals around the country, we meet your appeals with hyper-local expertise that maximizes your savings, year in and year out.
            </p>
          </div>
        </div>
      </section>

      {/* pull stat */}
      <section className="section--tight" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <p className="display-md reveal" style={{ maxWidth: '20ch' }}>
            <span className="text-red">90%</span> of the best experts work for themselves. And now, they work with us.
          </p>
        </div>
      </section>

      {/* our difference */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ marginBottom: '3.5rem' }}>
            <div className="split__body reveal">
              <span className="eyebrow">Our difference</span>
              <h2 className="display-md">Experts, process, and outcomes.</h2>
              <p className="text-grey">
                When it comes to property tax advisory, there are four options: a traditional national firm, managing your own team, pushing the decision downstream, or, our favorite, partnering with NTRG. Here&apos;s how we blow the competition out of the water.
              </p>
            </div>
            <div className="split__media reveal">
              <BrandPanel variant="stat" stat="90%" statLabel="Of the best property tax experts work for themselves. And now they work with us." />
            </div>
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

      {/* comparison */}
      <Compare />

      {/* process */}
      <section className="section process">
        <div className="wrap">
          <div className="shead reveal" style={{ maxWidth: '640px' }}>
            <span className="eyebrow eyebrow--ondark">Our process</span>
            <h2 className="shead__title display-lg">A strategic team, day one.</h2>
            <p className="lede">
              Sign on and you launch a strategic team of local experts, empowered by a proprietary model built around your business. A streamlined process led by your dedicated advisor leaves no leaf unturned.
            </p>
          </div>
          <div className="psteps reveal">
            {processSteps.map((s, i) => (
              <div className="pstep" key={s.step}>
                <div className="pstep__num">{String(i + 1).padStart(2, '0')}</div>
                <span className="pstep__label">Step {s.step}</span>
                <h3 className="pstep__title">{s.title}</h3>
                <p className="pstep__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
      <CtaBand
        eyebrow="See the difference"
        title="Meet your appeals with hyper-local expertise."
        cta="Contact us"
      />
    </>
  )
}
