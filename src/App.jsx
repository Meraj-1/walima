import { useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Heart,
  MapPin,
  Navigation,
  Sparkles,
} from 'lucide-react'

const event = {
  date: '8 December 2026',
  time: '8:00 PM onwards',
  venue: 'Raza Marriage Hall',
  venueAddress:
    'P.L. Lokhande Marg Road, Gautam Nagar, Near Freeway Bridge, Raza Compound, Govandi, Mumbai – 400043.',
  residence:
    'Room No. 406, Wing A, Shivaji Nagar, Bhimwadi Building, Near Karbala Masjid, Gautam Nagar, Govandi – 400043.',
}

const mapUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`${event.venue}, ${event.venueAddress}`)

const calendarUrl = new URL('https://calendar.google.com/calendar/render')
calendarUrl.search = new URLSearchParams({
  action: 'TEMPLATE',
  text: `Walima of Tuba Mujawar & Mahafuz Khan`,
  dates: '20261208T200000/20261208T200000',
  ctz: 'Asia/Kolkata',
  details: `Walima dinner at ${event.time}.\n\nWith the blessings of Allah (SWT), join us to celebrate the Walima of Tuba Mujawar and Mahafuz Khan.`,
  location: `${event.venue}, ${event.venueAddress}`,
}).toString()

const shareText =
  'Assalamu Alaikum Wa Rahmatullahi Wa Barakatuhu. With the blessings of Allah (SWT), you are warmly invited to the Walima of Tuba Mujawar and Mahafuz Khan on 8 December 2026, dinner at 8:00 PM onwards, at Raza Marriage Hall, Govandi, Mumbai.'
const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`

function FloralMark({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 120 60"
    >
      <path d="M60 4c4 11 8 16 19 20-11 4-15 9-19 20-4-11-8-16-19-20 11-4 15-9 19-20Z" />
      <path d="M21 21c7 3 11 7 14 14-7-3-11-7-14-14Zm78 0c-7 3-11 7-14 14 7-3 11-7 14-14ZM60 49v7M13 20l5 2m89-2-5 2" />
      <circle cx="60" cy="24" r="2" />
    </svg>
  )
}

function Ornament({ className = '' }) {
  return (
    <span className={`ornament ${className}`} aria-hidden="true">
      <span />
      <i>✦</i>
      <span />
    </span>
  )
}

function App() {
  const [opened, setOpened] = useState(false)
  const invitationRef = useRef(null)

  function openInvitation() {
    setOpened(true)
    window.setTimeout(() => {
      invitationRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 850)
  }

  return (
    <div className="site-shell">
      <div
        className={`opening ${opened ? 'opening--opened' : ''}`}
        aria-hidden={opened}
      >
        <div className="opening-halo" />
        <div className="opening-brand">
          <div className="brand-seal" aria-hidden="true">
            <span>R</span>
            <i>✦</i>
          </div>
          <span>Raza Marriage Hall</span>
        </div>

        <div className="envelope-scene">
          <div className="envelope-shadow" />
          <div className="envelope">
            <div className="envelope-letter">
              <p className="arabic-small">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <span className="letter-rule" />
              <p className="letter-kicker">A Walima celebration</p>
              <p className="letter-names">Tuba &amp; Mahafuz</p>
              <span className="letter-date">8 · 12 · 2026</span>
            </div>
            <div className="envelope-back" />
            <div className="envelope-flap" />
            <div className="envelope-front" />
            <div className="wax-seal" aria-hidden="true">✦</div>
          </div>
        </div>

        <p className="opening-copy">A gathering of gratitude, family &amp; love</p>
        <button className="open-button" onClick={openInvitation} type="button">
          Open your invitation
          <ArrowDown size={16} strokeWidth={1.5} />
        </button>
        <p className="opening-hint">A little note, opened with love</p>
      </div>

      <main
        id="invitation"
        ref={invitationRef}
        className={`invitation ${opened ? 'invitation--visible' : ''}`}
        aria-hidden={!opened}
      >
        <header className="site-header">
          <a className="header-brand" href="#top" aria-label="Invitation home">
            <span className="header-seal">R</span>
            <span>Raza Marriage Hall</span>
          </a>
          <nav aria-label="Invitation sections">
            <a href="#celebration">The celebration</a>
            <a href="#venue">Venue</a>
            <a href="#family">Family address</a>
          </nav>
          <a className="header-share" href={whatsappUrl} target="_blank" rel="noreferrer">
            Share <ArrowUpRight size={14} />
          </a>
        </header>

        <section className="hero" id="top">
          <div className="hero-pattern" aria-hidden="true" />
          <div className="hero-inner paper-frame">
            <span className="corner corner--tl" aria-hidden="true" />
            <span className="corner corner--tr" aria-hidden="true" />
            <span className="corner corner--bl" aria-hidden="true" />
            <span className="corner corner--br" aria-hidden="true" />
            <div className="hero-brand">
              <div className="brand-seal brand-seal--small" aria-hidden="true">
                <span>R</span><i>✦</i>
              </div>
              <span>Raza Marriage Hall</span>
            </div>
            <p className="arabic bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <Ornament />
            <p className="eyebrow">With the blessings of Allah &amp; our families</p>
            <p className="greeting">Assalamu Alaikum Wa Rahmatullahi Wa Barakatuhu</p>
            <h1 className="hero-title">A Walima celebration</h1>
            <p className="hero-intro">
              By the grace of Allah (SWT), we invite you to join us in
              celebrating the Walima of
            </p>In the warmth of family
            <div className="couple-names">
              <span>Mahafuz Khan</span>
              <i>&amp;</i>
              <span>Tuba Mujawar</span>
            </div>
            <p className="arabic blessing">بَارَكَ اللهُ لَكُمَا</p>
            <p className="blessing-translation">May Allah bless you both</p>
            <Ornament className="ornament--lower" />
            <p className="hero-invitation">
              We would be honoured by your presence and prayers.
            </p>
            <a className="text-link" href="#celebration">
              Read the invitation <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-side-note hero-side-note--left">A blessed gathering</div>
          <div className="hero-side-note hero-side-note--right">Mumbai · 2026</div>
        </section>

        <section className="family-section section-pad" aria-labelledby="family-title">
          <div className="section-heading">
            <p className="eyebrow">Together with their families</p>
            <h2 id="family-title">In the warmth of family</h2>
            <Ornament />
            <p className="section-intro">
              With love and duas, we gather to celebrate this beautiful new
              chapter.
            </p>
          </div>
          <div className="family-grid">
            <article className="family-card">
              <FloralMark className="floral-mark" />
              <p className="family-label">The Groom</p>
              <h3>Mahafuz Khan</h3>
              <span className="family-divider" />
              <p className="family-caption">Son of</p>
              <p className="family-parent">Raza Khan</p>
              <span className="family-ampersand">&amp;</span>
              <p className="family-parent">Shahanabano Khan</p>
              <p className="family-dua">With love and duas</p>
            </article>
            <article className="family-card">
              <FloralMark className="floral-mark" />
              <p className="family-label">The Bride</p>
              <h3>Tuba Mujawar</h3>
              <span className="family-divider" />
              <p className="family-caption">Daughter of</p>
              <p className="family-parent">Sajid Mujawar</p>
              <span className="family-ampersand">&amp;</span>
              <p className="family-parent">Shabana Mujawar</p>
              <p className="family-dua arabic">بَارَكَ اللهُ لَهَا وَعَلَيْهَا</p>
            </article>
            
          </div>
        </section>

        <section className="celebration-section" id="celebration">
          <div className="celebration-inner">
            <div className="section-heading section-heading--light">
              <p className="eyebrow">Please join us</p>
              <h2>The Walima</h2>
              <Ornament />
              <p className="section-intro">
                We look forward to sharing this joyful evening with you.
              </p>
            </div>
            <div className="event-details">
              <article className="detail-item">
                <span className="detail-icon"><CalendarDays size={21} /></span>
                <p className="detail-label">The date</p>
                <h3>8 December 2026</h3>
              </article>
              <span className="detail-rule" aria-hidden="true" />
              <article className="detail-item">
                <span className="detail-icon"><Clock3 size={21} /></span>
                <p className="detail-label">Dinner</p>
                <h3>8:00 PM onwards</h3>
              </article>
            </div>
            <a
              className="calendar-button"
              href={calendarUrl.toString()}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarDays size={16} />
              Add to Google Calendar
              <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        <section className="venue-section section-pad" id="venue">
          <div className="venue-card paper-frame">
            <span className="corner corner--tl" aria-hidden="true" />
            <span className="corner corner--tr" aria-hidden="true" />
            <span className="corner corner--bl" aria-hidden="true" />
            <span className="corner corner--br" aria-hidden="true" />
            <div className="venue-emblem"><MapPin size={22} strokeWidth={1.2} /></div>
            <p className="eyebrow">We will gather at</p>
            <h2>Raza Marriage Hall</h2>
            <Ornament />
            <p className="venue-address">{event.venueAddress}</p>
            <a className="map-button" href={mapUrl} target="_blank" rel="noreferrer">
              <Navigation size={15} />
              Get directions
              <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        <section className="residence-section" id="family">
          <div className="residence-inner">
            <div className="residence-mark"><Heart size={19} strokeWidth={1.25} /></div>
            <p className="eyebrow">With love from</p>
            <h2>Raza Khan</h2>
            <p className="residence-address">{event.residence}</p>
          </div>
        </section>

        <section className="closing-section">
          <p className="arabic closing-dua">بَارَكَ اللهُ لَكُمَا</p>
          <p className="closing-message">
            Your presence will make our celebration all the more special.
          </p>
          <a className="share-button" href={whatsappUrl} target="_blank" rel="noreferrer">
            <Heart size={15} />
            Share this invitation
            <ArrowUpRight size={14} />
          </a>
          <Ornament />
          {/* <p className="closing-names">Tuba &amp; MaAssalamu Alaikum Wa Rahmatullahi Wa Barakatuhuhafuz</p> */}
          <p className="closing-footer">With duas and love, always</p>
        </section>

        <footer className="site-footer">
          <span>RAZA MARRIAGE HALL</span>
          <i>✦</i>
          <span>GOVANDI · MUMBAI</span>
        </footer>
      </main>
      <div className="ambient-flower ambient-flower--one" aria-hidden="true">✿</div>
      <div className="ambient-flower ambient-flower--two" aria-hidden="true">✿</div>
      <Sparkles className="ambient-sparkle" aria-hidden="true" size={17} />
    </div>
  )
}

export default App
