import Image from "next/image"
import Link from "next/link"
import { email, name, phone, services, slug, tel } from "./data"
import { getServicePhoto } from "./photos"

export function ArrowUpRightIcon() {
  return <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="icon"><path d="M7 17 17 7M7 7h10v10" /></svg>
}

export function ChevronRightIcon() {
  return <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="icon"><path d="m9 18 6-6-6-6" /></svg>
}

function PhoneIcon() {
  return <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L9.1 10.65a16 16 0 0 0 4.24 4.24l1.2-1.2a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92Z" /></svg>
}

function MenuIcon() {
  return <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="icon menu-icon"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
}

export const serviceDescriptions: Record<string, string> = {
  "Sliding Glass Door Repair": "Repair options for sliding doors that stick, drag, or do not close smoothly.",
  "Roller Replacement": "For worn rollers that make a sliding door difficult to move.",
  "Track Repair": "For worn or damaged tracks that affect the door's travel.",
  "Lock & Handle Repair": "Repair options for sliding door locks, handles, and latches.",
  "Patio Door Repair": "Repair options for sliding patio doors in homes and businesses.",
  "Door Adjustment": "For sliding doors that need alignment or adjustment.",
  "Sliding Door Glass Replacement": "For cracked or damaged sliding door glass.",
  "Screen Door Repair": "For sliding screens that snag, tear, or no longer roll correctly.",
  "Commercial Sliding Door Repair": "Sliding door repair options for commercial properties.",
}

export function ServicePhoto({ title, className = "", sizes = "(max-width: 720px) calc(100vw - 38px), (max-width: 980px) 50vw, 33vw" }: { title: string; className?: string; sizes?: string }) {
  const photo = getServicePhoto(title)
  return (
    <figure className={`service-photo ${className}`}>
      <div className="service-photo-frame">
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} style={{ objectPosition: photo.objectPosition ?? "center" }} className="service-photo-image" />
      </div>
      <figcaption className="service-photo-caption">{photo.caption}</figcaption>
    </figure>
  )
}

export function PhotoCredit({ title }: { title: string }) {
  const photo = getServicePhoto(title)
  return (
    <div className="service-photo-credit">
      <span>Photo</span>
      <a href={photo.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Open source photo by ${photo.credit} in a new tab`}>{photo.credit}</a>
      <span aria-hidden="true">·</span>
      <a href={photo.licenseUrl} target="_blank" rel="noreferrer" aria-label={`View the ${photo.licenseLabel} license in a new tab`}>{photo.licenseLabel}</a>
    </div>
  )
}

export function CallButton({ className = "button button-primary" }: { className?: string }) {
  return <a className={className} href={`tel:${tel}`} aria-label={`Call ProFix at ${phone}`}><PhoneIcon /><span>Call Now</span><small>{phone}</small></a>
}

const estimateHref = `mailto:${email}?subject=${encodeURIComponent("Request a free sliding door estimate")}`

export function EstimateButton({ className = "button button-outline" }: { className?: string }) {
  return <a className={className} href={estimateHref}>Free Estimate<ArrowUpRightIcon /></a>
}

export function Header() {
  return (
    <>
      <div className="utility-bar"><div className="site-shell utility-inner"><span>MIAMI BEACH + SOUTH FLORIDA</span><span>8 AM–8 PM</span></div></div>
      <header className="site-header">
        <div className="site-shell header-inner">
          <Link href="/" className="brand" aria-label={`${name} home`}>
            <span className="brand-name">ProFix</span>
            <span className="brand-subtitle">SLIDING DOOR REPAIR · FLORIDA</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/services">Services</Link>
            <Link href="/service-areas">Service Areas</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <CallButton className="header-call" />
          <details className="mobile-nav">
            <summary aria-label="Open navigation menu"><MenuIcon /><span className="sr-only">Menu</span></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/services">Services</Link>
              <Link href="/service-areas">Service Areas</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  )
}

export function ServiceCard({ service, index }: { service: string; index: number }) {
  return (
    <article className="service-card">
      <Link href={`/services/${slug(service)}`} className="service-card-link">
        <ServicePhoto title={service} className="service-card-photo" />
        <div className="service-card-copy">
          <div className="service-card-heading"><span className="service-index">{String(index + 1).padStart(2, "0")}</span><ArrowUpRightIcon /></div>
          <h3>{service}</h3>
          <p>{serviceDescriptions[service]}</p>
        </div>
      </Link>
      <PhotoCredit title={service} />
    </article>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div className="footer-company">
          <Link href="/" className="brand brand-footer" aria-label={`${name} home`}>
            <span className="brand-name">ProFix</span>
            <span className="brand-subtitle">SLIDING DOOR REPAIR · FLORIDA</span>
          </Link>
          <p>Sliding glass door repair in Miami Beach and surrounding South Florida communities.</p>
          <a className="footer-license" href="https://unsplash.com/license" target="_blank" rel="noreferrer">Hero photograph: Unsplash License · Service photo credits and licenses appear with each card</a>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          {services.map(service => <Link key={service} href={`/services/${slug(service)}`}>{service}</Link>)}
          <Link href="/services" className="footer-overview">All services</Link>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <a href={`tel:${tel}`}>{phone}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <p>8 AM–8 PM</p>
          <Link href="/service-areas">Service areas</Link>
          <Link href="/about">About ProFix</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="site-shell footer-bottom"><span>Copyright {new Date().getFullYear()} {name}. All rights reserved.</span><span>Miami Beach · South Florida</span></div>
    </footer>
  )
}
