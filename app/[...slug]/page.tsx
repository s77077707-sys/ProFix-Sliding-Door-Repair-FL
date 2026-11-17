import type { Metadata } from "next"
import Link from "next/link"
import { address, areas, email, phone, services, slug, tel } from "../data"
import { ArrowUpRightIcon, CallButton, ChevronRightIcon, EstimateButton, Footer, Header, PhotoCredit, ServiceCard, ServicePhoto, serviceDescriptions } from "../components"

export function generateStaticParams() {
  return [
    { slug: ["services"] },
    { slug: ["service-areas"] },
    { slug: ["about"] },
    { slug: ["contact"] },
    { slug: ["faq"] },
    ...services.map(service => ({ slug: ["services", slug(service)] })),
    ...areas.map(area => ({ slug: ["areas", slug(area)] })),
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const path = (await params).slug
  const service = services.find(item => slug(item) === path[1])
  const area = areas.find(item => slug(item) === path[1])
  return {
    title: service ? service + " Miami Beach, FL" : area ? "Sliding Door Repair " + area + ", FL" : path[0] === "faq" ? "Frequently Asked Questions" : path[0] === "contact" ? "Contact Us" : path[0] === "about" ? "About Us" : path[0] === "services" ? "Sliding Door Repair Services" : "Service Areas",
    description: (service || area ? "ProFix Sliding Door Repair FL provides sliding door repair services in " + (area || "Miami Beach") + ". " : "Mobile sliding door repair in South Florida. ") + "Call " + phone + " for availability.",
    alternates: { canonical: "/" + path.join("/") },
  }
}

function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item, index) => <span className="breadcrumb-item" key={`${item}-${index}`}>{<ChevronRightIcon />}{index === items.length - 1 ? <span aria-current="page">{item}</span> : <Link href={index === 0 ? `/${slug(item)}` : "#"}>{item}</Link>}</span>)}
    </nav>
  )
}

function PageCta() {
  return (
    <section className="route-cta">
      <div><h2>Talk about your sliding door.</h2><p>Call to discuss the issue and check service availability.</p></div>
      <div className="route-cta-actions"><CallButton /><EstimateButton /></div>
    </section>
  )
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const path = (await params).slug
  const service = services.find(item => slug(item) === path[1])
  const area = areas.find(item => slug(item) === path[1])
  const isServicesIndex = path[0] === "services" && !service
  const isAreasIndex = path[0] === "service-areas"
  const isAbout = path[0] === "about"
  const isContact = path[0] === "contact"
  const isFaq = path[0] === "faq"
  const title = service ? service + " in Miami Beach, FL" : area ? "Sliding Door Repair in " + area + ", FL" : isServicesIndex ? "Sliding Door Repair Services" : isAreasIndex ? "Areas We Serve" : isAbout ? "About ProFix Sliding Door Repair FL" : isFaq ? "Sliding Door Repair FAQ" : "Contact Us"
  const description = service ? "We assess sliding door problems and discuss " + service.toLowerCase() + " options based on the condition of your door." : area ? "Mobile sliding glass door repair in " + area + " and surrounding communities. Call to check availability." : isAbout ? "ProFix provides sliding door repair with 5 years of experience and a 1-year warranty. Ask about terms." : isContact ? "Contact ProFix Sliding Door Repair FL to discuss repairs and scheduling." : isAreasIndex ? "Mobile sliding door repair across Miami Beach and South Florida communities." : "Choose a sliding door repair service and contact ProFix to discuss availability."
  const breadcrumbItems = service ? ["Services", service] : area ? ["Service Areas", area] : [isServicesIndex ? "Services" : isAreasIndex ? "Service Areas" : isAbout ? "About" : isFaq ? "FAQ" : "Contact"]

  return (
    <>
      <Header />
      <main className="route-main">
        <section className="route-hero">
          <div className="route-shell">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="eyebrow eyebrow-light">{service ? "SLIDING DOOR SERVICE" : area ? "LOCAL SERVICE AREA" : isAbout ? "ABOUT PROFIX" : isFaq ? "COMMON QUESTIONS" : isContact ? "GET IN TOUCH" : isAreasIndex ? "SERVICE AREAS" : "OUR SERVICES"}</p>
            <h1>{title}</h1>
            <p className="route-hero-description">{description}</p>
            <div className="route-hero-actions"><CallButton /><EstimateButton /></div>
          </div>
        </section>

        <div className="route-content">
          {service ? (
            <>
              <section className="service-detail-layout" aria-labelledby="service-detail-title">
                <div className="service-detail-copy">
                  <p className="eyebrow">SERVICE DETAILS</p>
                  <h2 id="service-detail-title">{service}</h2>
                  <p>{serviceDescriptions[service]}</p>
                  <p className="detail-note">Describe what the door is doing when you call. ProFix can discuss repair options based on the condition of the door.</p>
                  <div className="related-services">
                    <h3>Related repair services</h3>
                    <div className="related-service-list">{services.filter(item => item !== service).slice(0, 4).map(item => <Link key={item} href={`/services/${slug(item)}`}>{item}<ArrowUpRightIcon /></Link>)}</div>
                  </div>
                </div>
                <div className="service-detail-visual">
                  <ServicePhoto title={service} className="service-detail-photo" sizes="(max-width: 720px) calc(100vw - 38px), 50vw" />
                  <PhotoCredit title={service} />
                </div>
              </section>
              <PageCta />
            </>
          ) : null}

          {isServicesIndex ? (
            <>
              <p className="eyebrow">ALL REPAIR SERVICES</p>
              <h2 className="directory-heading">Choose a service to learn more.</h2>
              <div className="route-service-grid">{services.map((item, index) => <ServiceCard key={item} service={item} index={index} />)}</div>
              <PageCta />
            </>
          ) : null}

          {isAreasIndex ? (
            <>
              <p className="eyebrow">COMMUNITIES SERVED</p>
              <h2 className="directory-heading">South Florida service areas.</h2>
              <ul className="area-directory">{areas.map(item => <li key={item}><Link href={`/areas/${slug(item)}`}>{item}<ArrowUpRightIcon /></Link></li>)}</ul>
              <PageCta />
            </>
          ) : null}

          {area ? (
            <>
              <section className="area-detail-copy">
                <p className="eyebrow">MOBILE REPAIR SERVICE</p>
                <h2>Sliding door repair in {area}.</h2>
                <p>ProFix provides mobile sliding glass door repair in {area} and surrounding communities. Call to check availability.</p>
                <h3>Repair services</h3>
                <div className="related-service-list">{services.map(item => <Link key={item} href={`/services/${slug(item)}`}>{item}<ArrowUpRightIcon /></Link>)}</div>
              </section>
              <PageCta />
            </>
          ) : null}

          {isAbout ? (
            <>
              <section className="about-copy">
                <p className="eyebrow">ABOUT THE BUSINESS</p>
                <h2>Sliding door repair in Miami Beach and South Florida.</h2>
                <p>ProFix Sliding Door Repair FL provides mobile repair for sliding glass doors, rollers, tracks, locks, glass, and screens.</p>
                <p>Existing business details include 5 years of experience and a 1-year warranty. Ask ProFix about warranty terms.</p>
                <div className="business-facts"><div><strong>5 years</strong><span>Experience</span></div><div><strong>1-year</strong><span>Warranty</span></div><div><strong>Mobile</strong><span>Service</span></div></div>
              </section>
              <PageCta />
            </>
          ) : null}

          {isFaq ? <section className="about-copy"><h2>Frequently asked questions</h2>{[["Why is my sliding glass door hard to open?","Worn rollers, debris in the track, alignment issues, or corrosion can cause resistance. A technician can inspect the door to identify the cause."],["Can salt air damage sliding doors?","Coastal salt and moisture can contribute to corrosion of metal components. Regular cleaning and maintenance can help."],["Do you provide mobile service?","Yes. ProFix offers mobile sliding door repair in Miami Beach and surrounding South Florida communities. Call to confirm coverage."],["Is same-day service available?","Same-day appointments may be available depending on scheduling and the repair needed. Call to check."],["How much does sliding door repair cost?","Pricing depends on the condition of the door, parts needed, access, and scope of work. Request an estimate before authorizing repairs."],["Can a damaged sliding door track be repaired?","Some tracks can be cleaned, adjusted, or repaired; severe damage may require replacement. An inspection helps determine the appropriate option."],["Should I force a stuck sliding door?","No. Forcing a stuck door can worsen damage to rollers, tracks, locks, or glass. Stop using it until the issue is assessed."]].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}<p><Link href="/services">Explore repair services</Link></p></section> : null}
          {isContact ? (
            <>
              <p className="eyebrow">CONTACT INFORMATION</p>
              <h2 className="directory-heading">Contact ProFix.</h2>
              <div className="contact-details">
                <section className="contact-detail"><h2>Call</h2><p><a href={`tel:${tel}`}>{phone}</a></p></section>
                <section className="contact-detail"><h2>Email</h2><p><a href={`mailto:${email}`}>{email}</a></p></section>
                <section className="contact-detail"><h2>Business address</h2><p>{address}</p></section>
                <section className="contact-detail"><h2>Hours</h2><p>8 AM–8 PM</p></section>
                <section className="contact-detail"><h2>Service area</h2><p>Miami Beach and South Florida communities</p><Link href="/service-areas">View service areas <ArrowUpRightIcon /></Link></section>
              </div>
              <PageCta />
            </>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  )
}
