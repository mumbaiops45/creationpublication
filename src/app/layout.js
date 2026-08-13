import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { site } from '@/content/site'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import SmoothScroll from './components/SmoothScroll'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    'advertising agency India',
    'hoarding advertising',
    'outdoor advertising Mumbai',
    'mall branding',
    'transit media',
    'bus shelter advertising',
    'retail signage',
    'corporate gifting',
    'newspaper advertising agency',
    'OOH media',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport = {
  themeColor: '#04121a',
  colorScheme: 'dark',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AdvertisingAgency',
  name: site.name,
  url: site.url,
  description: site.description,
  telephone: site.phoneRaw,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pincode,
    addressCountry: 'IN',
  },
  sameAs: [site.social.instagram, site.social.linkedin],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${sora.variable} ${inter.variable}`}>
      <head>
       
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-ready')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-firozi-500 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink-900"
        >
          Skip to content
        </a>

        <SmoothScroll />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
