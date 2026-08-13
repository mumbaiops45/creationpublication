import Link from 'next/link'
import { nav, site } from '@/content/site'
import { services } from '@/content/services'
import { InstagramIcon, LinkedInIcon, PhoneIcon } from './Icons'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-firozi-400/10 bg-ink-800">
      <div className="container-x grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">{site.description}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Creation Publicity on Instagram"
              className="flex size-10 items-center justify-center rounded-lg border border-firozi-400/15 text-slate-300 transition hover:border-firozi-400/40 hover:text-firozi-300"
            >
              <InstagramIcon />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Creation Publicity on LinkedIn"
              className="flex size-10 items-center justify-center rounded-lg border border-firozi-400/15 text-slate-300 transition hover:border-firozi-400/40 hover:text-firozi-300"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-firozi-300 uppercase">
            Our Services
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-slate-400 transition hover:text-firozi-300"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-firozi-300 uppercase">
            Company
          </h3>
          <ul className="mt-5 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-400 transition hover:text-firozi-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-firozi-300 uppercase">
            Get in Touch
          </h3>
          <address className="mt-5 space-y-3 text-sm text-slate-400 not-italic">
            <p className="leading-relaxed">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} {site.address.pincode}
            </p>
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-2 transition hover:text-firozi-300"
            >
              <PhoneIcon className="size-4" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block transition hover:text-firozi-300">
              {site.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-firozi-400/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Outdoor · Transit · Retail · Print · Digital</p>
        </div>
      </div>
    </footer>
  )
}
