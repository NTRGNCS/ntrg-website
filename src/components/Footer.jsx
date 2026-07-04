import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { contactInfo } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer dark">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <Logo variant="light" height={32} />
          <p className="footer__tag">Your commercial property tax advisors.<br />Local expertise. National coverage.</p>
          <address className="footer__addr">
            {contactInfo.address.map((line) => <span key={line}>{line}</span>)}
          </address>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <div className="footer__col">
            <span className="footer__head">Company</span>
            <Link to="/expertise">Our Expertise</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/insights">News &amp; Insights</Link>
          </div>
          <div className="footer__col">
            <span className="footer__head">Get started</span>
            <Link to="/contact">Contact Us</Link>
            <a href="#portal">Client Portal</a>
          </div>
        </nav>
      </div>

      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} National Tax Resource Group. All rights reserved.</span>
        <span className="footer__legal">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </span>
      </div>
    </footer>
  )
}
