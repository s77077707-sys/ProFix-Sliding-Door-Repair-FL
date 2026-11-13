import Link from "next/link"
import { areas, services, slug } from "./data"
import { ArrowUpRightIcon, CallButton, EstimateButton, Footer, Header, ServiceCard } from "./components"

const doorPhoto = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&crop=right&w=2200&h=1200&q=85"
const featuredServices = services.slice(0, 6)
const additionalServices = services.slice(6)
const featuredAreas = areas.slice(0, 10)

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-main">
        <section className="hero" aria-labelledby="home-title">
          <img className="hero-image" src={doorPhoto} alt="Dark-framed sliding glass patio doors opening to an outdoor terrace" fetchPriority="high" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content site-shell">
            <p className="eyebrow eyebrow-light">SLIDING DOOR REPAIR <span>MIAMI BEACH, FL</span></p>
            <h1 id="home-title">Get your sliding door <span>back on track.</span></h1>
            <p className="hero-intro">Sliding glass door repair across Miami Beach and surrounding South Florida communities. Rollers, tracks, locks, glass and screens.</p>
            <div className="hero-actions">
              <CallButton className="button button-primary" />
              <EstimateButton className="button button-outline-light" />
            </div>
            <ul className="hero-trust" aria-label="Business details">
              <li>5 years of experience</li>
              <li>1-year warranty</li>
              <li>Mobile service</li>
            </ul>
          </div>
          <div className="hero-caption">SLIDING GLASS PATIO DOOR</div>
        </section>

        <section className="service-section section-pad" id="services" aria-labelledby="services-title">
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">REPAIR SERVICES</p>
                <h2 id="services-title">The right repair for <span>the way your door moves.</span></h2>
              </div>
              <p>Choose a service to learn more. If you are unsure what is causing the problem, call to talk through the symptoms.</p>
            </div>
            <div className="service-grid">
              {featuredServices.map((service, index) => <ServiceCard key={service} service={service} index={index} />)}
            </div>
            <div className="service-more">
              <p>MORE REPAIR SERVICES</p>
              <div>
                {additionalServices.map(service => (
                  <Link key={service} href={`/services/${slug(service)}`} className="text-link">
                    {service}<ArrowUpRightIcon />
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/services" className="all-services-link">View all services <ArrowUpRightIcon /></Link>
          </div>
        </section>

        <section className="area-section section-pad" aria-labelledby="areas-title">
          <div className="site-shell area-layout">
            <div className="area-copy">
              <p className="eyebrow">SERVICE AREAS</p>
              <h2 id="areas-title">Serving Miami Beach <span>and South Florida.</span></h2>
              <p>Mobile repair service for homes and businesses in the communities below. Call to confirm availability in your area.</p>
              <Link href="/service-areas" className="text-link">See all service areas <ArrowUpRightIcon /></Link>
            </div>
            <ul className="area-list" aria-label="Featured service areas">
              {featuredAreas.map(area => <li key={area}><Link href={`/areas/${slug(area)}`}>{area}<ArrowUpRightIcon /></Link></li>)}
            </ul>
          </div>
        </section>

        <section className="contact-banner" aria-labelledby="contact-title">
          <div className="site-shell contact-banner-inner">
            <div>
              <p className="eyebrow eyebrow-light">PROFIX SLIDING DOOR REPAIR FL</p>
              <h2 id="contact-title">Ready to talk about your door?</h2>
              <p>Call to discuss the issue and check service availability.</p>
            </div>
            <div className="contact-banner-actions">
              <CallButton className="button button-light" />
              <EstimateButton className="button button-outline-light" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
