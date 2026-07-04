import useReveal from '../components/useReveal.js'
import { ContactBand } from '../components/Bands.jsx'
import { posts } from '../data/content.js'

// A couple of extra items so the archive feels populated in the preview.
const archive = [
  ...posts,
  { date: 'April 30, 2025', title: 'Budgeting for Property Tax in a Volatile Market', excerpt: 'How uniform forecasting across jurisdictions protects your bottom line when assessments swing.', tag: 'Guide' },
  { date: 'April 12, 2025', title: 'What the Dual Review System Actually Catches', excerpt: 'A look inside the second-set-of-eyes process that consistently surfaces savings other firms miss.', tag: 'Process' },
  { date: 'March 25, 2025', title: 'Pre-Acquisition Tax Diligence, Done Right', excerpt: 'Why the tax indication on a deal can make or break your underwriting, and how we turn it around fast.', tag: 'Advisory' },
]

export default function Insights() {
  useReveal()
  return (
    <>
      <section className="phero">
        <div className="wrap phero__inner">
          <div>
            <span className="eyebrow">News &amp; insights</span>
            <h1 className="phero__title display-xl">The latest from NTRG.</h1>
          </div>
          <div className="phero__meta">
            <p className="lede">Industry forecasts, policy breakdowns, and thought pieces from the team that lives and breathes commercial property tax.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="posts reveal">
            {archive.map((p) => (
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
    </>
  )
}
