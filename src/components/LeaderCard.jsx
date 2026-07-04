import { useState } from 'react'
import Duo from './Duo.jsx'

export default function LeaderCard({ person }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="leader">
      <div className="leader__photo">
        {person.photo ? (
          <div className="leader__img-wrap">
            <img src={person.photo} alt={person.name} loading="lazy" />
          </div>
        ) : (
          <Duo label="" style={{ aspectRatio: '1 / 1', width: '100%', height: '100%' }} />
        )}
      </div>
      <div className="leader__content">
        <h3 className="leader__name">{person.name}</h3>
        <div className="leader__role">{person.role}</div>
        <p className="leader__bio">{person.bio}</p>

        {person.fullBio && (
          <>
            <button
              className="leader__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
            >
              {open ? 'Show less' : 'Read full bio'}
              <span className={`leader__toggle-arrow ${open ? 'is-open' : ''}`}>↓</span>
            </button>
            {open && (
              <div className="leader__full">
                {person.fullBio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </article>
  )
}
