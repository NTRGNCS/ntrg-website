import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/expertise', label: 'Our Expertise' },
  { to: '/services', label: 'Our Services' },
  { to: '/about', label: 'About Us' },
  { to: '/insights', label: 'News & Insights' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner wrap-wide">
        <Link to="/" className="nav__logo" aria-label="NTRG home">
          <Logo height={34} />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__portal" href="#portal">Client Portal</a>
          <Link className="btn btn--primary nav__cta" to="/contact">Contact Us</Link>
        </div>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className="nav__mobile-link">{l.label}</NavLink>
        ))}
        <a className="nav__mobile-link" href="#portal">Client Portal</a>
        <Link className="btn btn--primary" to="/contact" style={{ marginTop: '0.5rem' }}>Contact Us</Link>
      </div>
    </header>
  )
}
