import { Link } from 'react-router-dom'
import ContactForm from './ContactForm.jsx'
import BrandPanel from './BrandPanel.jsx'

export function ContactBand() {
  return (
    <section className="section contactband" id="contact">
      <div className="wrap contactband__inner">
        <div className="contactband__lead">
          <span className="eyebrow">Get in touch</span>
          <h2 className="display-lg">Let&apos;s make owning property less taxing.</h2>
          <p className="lede">Tell us about your portfolio and a dedicated advisor will show you exactly where the savings are.</p>
          <div className="contactband__media">
            <BrandPanel variant="quote" quote="Local expertise. National coverage." cite="Your property tax advocates" style={{ aspectRatio: '4 / 3' }} />
          </div>
        </div>
        <div className="contactband__form">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export function CtaBand({ eyebrow = 'Ready when you are', title, body, to = '/contact', cta = 'Contact Us' }) {
  return (
    <section className="section ctaband dark">
      <div className="wrap ctaband__inner">
        <div>
          <span className="eyebrow eyebrow--ondark">{eyebrow}</span>
          <h2 className="display-lg">{title}</h2>
          {body && <p className="lede">{body}</p>}
        </div>
        <Link to={to} className="btn btn--primary ctaband__btn">{cta} <span className="arrow">→</span></Link>
      </div>
    </section>
  )
}
