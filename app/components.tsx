import Link from "next/link"
import { email, name, phone, tel } from "./data"

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner section-shell">
        <Link href="/" className="brand" aria-label={`${name} home`}>
          <span className="brand-mark" aria-hidden="true">P</span>
          <span className="brand-name">ProFix <span>Sliding Door</span><small>REPAIR FLORIDA</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/services">Services</Link><Link href="/service-areas">Service areas</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
        </nav>
        <a className="header-phone" href={`tel:${tel}`}><span>Call for service</span>{phone}<b aria-hidden="true">↗</b></a>
        <details className="mobile-nav"><summary aria-label="Open navigation menu"><span /><span /><span /></summary><nav aria-label="Mobile navigation"><Link href="/services">Services</Link><Link href="/service-areas">Service areas</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><a href={`tel:${tel}`}>Call {phone}</a></nav></details>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand"><Link href="/" className="brand"><span className="brand-mark" aria-hidden="true">P</span><span className="brand-name">ProFix <span>Sliding Door</span><small>REPAIR FLORIDA</small></span></Link><p>Sliding glass door repair in Miami Beach and surrounding South Florida communities.</p></div>
        <div className="footer-links"><h2>Explore</h2><Link href="/services">Services</Link><Link href="/service-areas">Service areas</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-links"><h2>Contact</h2><a href={`tel:${tel}`}>{phone}</a><a href={`mailto:${email}`}>{email}</a><p>Mobile service · 8 AM–8 PM</p></div>
      </div>
      <div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} {name}. All rights reserved.</span><span>Miami Beach · South Florida</span></div>
    </footer>
  )
}

export function Call() {
  return <a className="button button-primary" href={`tel:${tel}`}>Call {phone}<span aria-hidden="true">↗</span></a>
}
