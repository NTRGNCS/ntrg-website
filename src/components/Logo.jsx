// NTRG wordmark: clean vector SVG (Option E: red diagonal accent on the N).
// Horizontal lockup, scales crisply at any size.
// variant="light" uses white lettering for dark backgrounds (footer).
export default function Logo({ height = 34, variant = 'dark' }) {
  const src = variant === 'light' ? '/ntrg-logo-light.svg' : '/ntrg-logo.svg'
  return (
    <img
      src={src}
      alt="NTRG, National Tax Resource Group"
      className="logo-img"
      style={{ height }}
    />
  )
}
