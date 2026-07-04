import useReveal from '../components/useReveal.js'
import ContactForm from '../components/ContactForm.jsx'
import BrandPanel from '../components/BrandPanel.jsx'
import { contactInfo } from '../data/content.js'

export default function Contact() {
  useReveal()
  return (
    <>
      <section className="phero" style={{ borderBottom: 'none' }}>
        <div className="wrap phero__inner">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="phero__title display-xl">Get in touch.</h1>
          </div>
          <div className="phero__meta">
            <p className="lede">Contact us to make owning property less taxing. Tell us about your portfolio and a dedicated advisor will reach out.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="wrap contact-page">
          <div className="contact-page__form reveal">
            <ContactForm />
          </div>
          <aside className="contact-page__aside reveal">
            <BrandPanel variant="mark" style={{ aspectRatio: '4 / 5' }} />
            <div className="contact-page__info">
              <div className="cinfo">
                <span className="cinfo__label">Prefer to talk?</span>
                <a className="cinfo__value" href="tel:+18005550100">+1 (800) 555-0100</a>
              </div>
              <div className="cinfo">
                <span className="cinfo__label">Email</span>
                <a className="cinfo__value" href="mailto:hello@ntrg.com">hello@ntrg.com</a>
              </div>
              <div className="cinfo">
                <span className="cinfo__label">Office</span>
                <address className="cinfo__addr">
                  {contactInfo.address.map((line) => <span key={line}>{line}</span>)}
                </address>
              </div>
              <div className="cinfo">
                <span className="cinfo__label">Existing client?</span>
                <a className="cinfo__value" href="#portal">Sign in to the Client Portal →</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
