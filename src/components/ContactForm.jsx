import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    first: '', last: '', email: '', phone: '', message: '', agree: false,
  })

  const update = (key) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: val }))
  }

  const submit = (e) => {
    e.preventDefault()
    // Preview build: no backend. Wire to Supabase / form endpoint at launch.
    setSent(true)
  }

  if (sent) {
    return (
      <div className="cform cform--sent" role="status">
        <span className="eyebrow">Message received</span>
        <h3 className="display-md">Thanks, we&apos;ll be in touch.</h3>
        <p className="text-grey">A member of the NTRG team will reach out shortly to talk through your portfolio.</p>
        <button className="btn btn--ghost" onClick={() => { setSent(false); setForm({ first:'', last:'', email:'', phone:'', message:'', agree:false }) }}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="cform" onSubmit={submit} noValidate>
      <div className="cform__row">
        <label className="field">
          <span>First name <b>*</b></span>
          <input required value={form.first} onChange={update('first')} placeholder="First name" autoComplete="given-name" />
        </label>
        <label className="field">
          <span>Last name <b>*</b></span>
          <input required value={form.last} onChange={update('last')} placeholder="Last name" autoComplete="family-name" />
        </label>
      </div>

      <label className="field">
        <span>Email <b>*</b></span>
        <input required type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" autoComplete="email" />
      </label>

      <label className="field">
        <span>Phone number</span>
        <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+1 (555) 000-0000" autoComplete="tel" />
      </label>

      <label className="field">
        <span>How can we help? <b>*</b></span>
        <textarea required rows={4} value={form.message} onChange={update('message')} placeholder="Tell us about your portfolio…" />
      </label>

      <label className="field field--check">
        <input type="checkbox" required checked={form.agree} onChange={update('agree')} />
        <span>I agree to NTRG&apos;s <a href="#privacy">privacy policy</a>.</span>
      </label>

      <button className="btn btn--primary cform__submit" type="submit">
        Send message <span className="arrow">→</span>
      </button>
    </form>
  )
}
