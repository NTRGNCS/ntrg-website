import { comparisonRows } from '../data/content.js'
import { Check, Cross } from './Icons.jsx'

export default function Compare() {
  return (
    <section className="section compare">
      <div className="wrap">
        <div className="compare__head reveal">
          <span className="eyebrow eyebrow--ondark">The comparison</span>
          <h2 className="display-lg" style={{ marginTop: '1.1rem' }}>With us, there is no competition.</h2>
          <p className="lede">Four ways to handle commercial property tax: a big national firm, an in-house team, pushing it downstream, or partnering with NTRG. Here&apos;s how it stacks up.</p>
        </div>

        <div className="compare__scroll reveal">
          <table className="ctable">
            <thead>
              <tr>
                <th className="col-label" scope="col"><span className="sr-only">Capability</span></th>
                <th className="col-ntrg" scope="col"><span className="ntrg-mark"><b>N</b>TRG</span></th>
                <th scope="col">Big Nationals<br />/ Ryan</th>
                <th scope="col">Managed<br />In-House</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, r) => (
                <tr key={row.label}>
                  <td className="col-label">{row.label}</td>
                  <td className="col-ntrg">
                    <span className={`mark reveal-check ${row.ntrg ? '' : ''}`} style={{ transitionDelay: `${r * 40}ms` }}>
                      {row.ntrg ? <span className="icon-yes"><Check /></span> : <span className="icon-no"><Cross /></span>}
                    </span>
                  </td>
                  <td>
                    <span className="mark reveal-check" style={{ transitionDelay: `${r * 40 + 15}ms` }}>
                      {row.big ? <span className="icon-yes"><Check /></span> : <span className="icon-no"><Cross /></span>}
                    </span>
                  </td>
                  <td>
                    <span className="mark reveal-check" style={{ transitionDelay: `${r * 40 + 30}ms` }}>
                      {row.inhouse ? <span className="icon-yes"><Check /></span> : <span className="icon-no"><Cross /></span>}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
