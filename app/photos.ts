export type ServicePhotoDetails = {
  src: string
  alt: string
  caption: string
  objectPosition?: string
  credit: string
  sourceUrl: string
  licenseLabel: string
  licenseUrl: string
}

const flickrLicense = "https://creativecommons.org/licenses/by/2.0/deed.en"

export const servicePhotos: Record<string, ServicePhotoDetails> = {
  "Sliding Glass Door Repair": {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&crop=right&w=2200&h=1200&q=85",
    alt: "Black-framed sliding glass patio doors open onto a sunlit terrace.",
    caption: "Illustrative: sliding glass patio door; repair work is not shown.",
    credit: "Unsplash",
    sourceUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&crop=right&w=2200&h=1200&q=85",
    licenseLabel: "Unsplash license",
    licenseUrl: "https://unsplash.com/license",
  },
  "Roller Replacement": {
    src: "https://live.staticflickr.com/418/19100028372_be0cbf36de_z.jpg",
    alt: "Close-up of a roller on a curved glass shower door.",
    caption: "Illustrative: glass-door roller detail from a shower door.",
    objectPosition: "50% 0%",
    credit: "Thank You (25 Millions) views",
    sourceUrl: "https://www.flickr.com/photos/prayitnophotography/19100028372/",
    licenseLabel: "CC BY 2.0",
    licenseUrl: flickrLicense,
  },
  "Track Repair": {
    src: "https://live.staticflickr.com/4131/5057518600_11fe91a170_b.jpg",
    alt: "Close view of tracks for sliding doors.",
    caption: "Illustrative: sliding-door track detail.",
    objectPosition: "50% 18%",
    credit: "LakeMartinVoice",
    sourceUrl: "https://www.flickr.com/photos/lakemartinvoice/5057518600/",
    licenseLabel: "CC BY 2.0",
    licenseUrl: flickrLicense,
  },
  "Lock & Handle Repair": {
    src: "https://live.staticflickr.com/1288/970367879_a63078c7ce_b.jpg",
    alt: "Close-up of a handle on a painted wooden door.",
    caption: "Illustrative: door-handle hardware detail.",
    credit: "Julian Burgess / aubergene",
    sourceUrl: "https://www.flickr.com/photos/aubergene/970367879/",
    licenseLabel: "CC BY 2.0",
    licenseUrl: flickrLicense,
  },
  "Patio Door Repair": {
    src: "https://live.staticflickr.com/7311/16444900212_d007745e5a_b.jpg",
    alt: "A wide sliding glass patio door opens to a deck.",
    caption: "Illustrative: installed sliding patio door; repair work is not shown.",
    credit: "David Cedrone / NLT Construction",
    sourceUrl: "https://www.flickr.com/photos/nltconstruction/16444900212/",
    licenseLabel: "CC BY 2.0",
    licenseUrl: flickrLicense,
  },
  "Door Adjustment": {
    src: "https://live.staticflickr.com/7361/9303669490_ff03b344b0_b.jpg",
    alt: "Sliding glass doors frame a view from a cabin to the deck.",
    caption: "Illustrative: sliding glass door in place; adjustment work is not shown.",
    credit: "Wonderlane",
    sourceUrl: "https://www.flickr.com/photos/wonderlane/9303669490/",
    licenseLabel: "CC BY 2.0",
    licenseUrl: flickrLicense,
  },
  "Sliding Door Glass Replacement": {
    src: "https://live.staticflickr.com/65535/52495472655_da6df14db6.jpg",
    alt: "A glass worker handles a window pane during replacement work.",
    caption: "Illustrative: window-glass replacement; patio-door glass is not shown.",
    credit: "SD Emergency Window Glass Replacement",
    sourceUrl: "https://www.flickr.com/photos/196917527@N02/52495472655/",
    licenseLabel: "CC BY 2.0",
    licenseUrl: flickrLicense,
  },
  "Screen Door Repair": {
    src: "https://burst.shopifycdn.com/photos/family-room-with-large-screen-doors.jpg?width=1200&format=pjpg&exif=0&iptc=0",
    alt: "A sliding screen door with mesh panels opens from a living room to a patio.",
    caption: "Illustrative: sliding screen door; repair work is not shown.",
    credit: "Shopify Burst",
    sourceUrl: "https://www.shopify.com/stock-photos/photos/family-room-with-large-screen-doors",
    licenseLabel: "Burst free stock license",
    licenseUrl: "https://burst.shopify.com/license",
  },
  "Commercial Sliding Door Repair": {
    src: "https://live.staticflickr.com/2468/5759732971_6872944808_b.jpg",
    alt: "Frosted commercial glass door with automatic-door and two-way-traffic signs.",
    caption: "Illustrative: commercial automatic glass entrance; repair work is not shown.",
    credit: "Wonderlane",
    sourceUrl: "https://www.flickr.com/photos/wonderlane/5759732971/",
    licenseLabel: "CC BY 2.0",
    licenseUrl: flickrLicense,
  },
}

export function getServicePhoto(service: string): ServicePhotoDetails {
  const photo = servicePhotos[service]
  if (!photo) throw new Error(`Missing service photo for ${service}`)
  return photo
}
