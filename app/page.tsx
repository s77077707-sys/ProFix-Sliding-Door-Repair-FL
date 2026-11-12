import Link from "next/link"
import { areas, email, name, phone, services, slug, tel } from "./data"
import { Footer, Header } from "./components"

const slidingDoorPhoto = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
const featuredServices = services.slice(0, 4)

export default function Home() {
  return (
    <>
      <div className="announcement">MIAMI BEACH & SOUTH FLORIDA <span>·</span> 8 AM–8 PM</div>
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> LOCAL SLIDING DOOR SPECIALISTS</p>
            <h1 id="hero-title">A smoother<br /><em>way outside.</em></h1>
            <p className="hero-intro">Sliding glass door repair in Miami Beach, FL. From worn rollers and damaged tracks to locks, glass and screens, ProFix helps restore a smooth, secure slide.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`tel:${tel}`}>Call {phone}<span aria-hidden="true">↗</span></a>
              <Link className="quiet-link" href="/services">Explore services <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-details"><span>5 years of experience</span><span>1-year warranty</span><span>Mobile service</span></div>
          </div>
          <figure className="hero-visual">
            <img src={slidingDoorPhoto} alt="Sliding glass door opening to an outdoor patio" fetchPriority="high" />
            <figcaption><span>SLIDING DOOR REPAIR</span><span>MIAMI BEACH, FLORIDA</span></figcaption>
          </figure>
          <span className="hero-side-label" aria-hidden="true">PROFIX / SOUTH FLORIDA</span>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="section-shell">
            <div className="section-heading">
              <div><p className="eyebrow">WHAT WE REPAIR</p><h2 id="services-title">Small details.<br /><em>Big difference.</em></h2></div>
              <p>Repair options for the parts that keep your sliding door moving, closing and feeling right.</p>
            </div>
            <div className="service-grid">
              {featuredServices.map((service, index) => (
                <Link className="service-card" href={`/services/${slug(service)}`} key={service}>
                  <div className={`service-image service-image-${index + 1}`}>
                    <img src={slidingDoorPhoto} alt="" loading="lazy" />
                    <span className="service-number">0{index + 1}</span>
                    <span className="service-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="service-card-copy"><h3>{service}</h3><p>Learn more about this service</p></div>
                </Link>
              ))}
            </div>
            <div className="more-services"><span>MORE SERVICES</span><div>{services.slice(4).map(service => <Link key={service} href={`/services/${slug(service)}`}>{service}<span aria-hidden="true">↗</span></Link>)}</div></div>
          </div>
        </section>

        <section className="local-section" aria-labelledby="areas-title">
          <div className="local-copy"><p className="eyebrow">SERVICE AREAS</p><h2 id="areas-title">Rooted in Miami Beach.<br /><em>Here for South Florida.</em></h2><p>Mobile repair service for homes and businesses in the communities below. Call to confirm availability in your area.</p><Link className="quiet-link" href="/service-areas">Explore service areas <span aria-hidden="true">→</span></Link></div>
          <div className="area-list">{areas.map(area => <Link href={`/areas/${slug(area)}`} key={area}>{area}<span aria-hidden="true">↗</span></Link>)}</div>
        </section>

        <section className="contact-section">
          <div className="contact-inner"><div><p className="eyebrow">LET&apos;S GET IT MOVING</p><h2>Ready for an easier slide?</h2><p>Talk with ProFix about your door and check appointment availability.</p></div><div className="contact-actions"><a className="button button-light" href={`tel:${tel}`}>Call {phone}<span aria-hidden="true">↗</span></a><a className="email-link" href={`mailto:${email}`}>{email}</a></div></div>
        </section>
      </main>
      <Footer />
    </>
  )
}
