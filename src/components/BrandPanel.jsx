// A designed brand panel used where a photo would otherwise sit.
// Keeps the layout balanced and premium without generic stock imagery.
// Variants: 'stat' (big number + label), 'mark' (logo + tagline), 'quote'.

export default function BrandPanel({ variant = 'mark', stat, statLabel, quote, cite, style, className = '' }) {
  if (variant === 'stat') {
    return (
      <div className={`bpanel bpanel--stat ${className}`} style={style}>
        <div className="bpanel__grid" aria-hidden="true" />
        <div className="bpanel__stat-num">{stat}</div>
        <div className="bpanel__stat-label">{statLabel}</div>
        <div className="bpanel__rule" />
      </div>
    )
  }

  if (variant === 'quote') {
    return (
      <div className={`bpanel bpanel--quote ${className}`} style={style}>
        <div className="bpanel__grid" aria-hidden="true" />
        <blockquote className="bpanel__quote">{quote}</blockquote>
        {cite && <div className="bpanel__cite">{cite}</div>}
      </div>
    )
  }

  // 'mark' variant: logo lockup on a tinted panel
  return (
    <div className={`bpanel bpanel--mark ${className}`} style={style}>
      <div className="bpanel__grid" aria-hidden="true" />
      <div className="bpanel__mark-inner">
        <img src="/ntrg-logo.svg" alt="" className="bpanel__logo" />
      </div>
    </div>
  )
}
