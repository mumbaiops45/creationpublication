'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { nav, site } from '@/content/site'
import { InstagramIcon, LinkedInIcon, PhoneIcon } from './Icons'
import Logo from './Logo'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    // <Disclosure
    //   as="header"
    //   className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
    //     scrolled
    //       ? 'border-b border-hairline bg-paper-100/80 backdrop-blur-xl'
    //       : 'border-b border-transparent bg-transparent'
    //   }`}
    // >
    <Disclosure
      as="header"
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 border-b border-hairline bg-[#F8FEFF] backdrop-blur-xl`}
    >
      {({ open }) => (
        <>
          <nav
            className={`container-x flex items-center justify-between gap-4 transition-all duration-500 ${
              scrolled ? 'h-16' : 'h-20'
            }`}
            aria-label="Main"
          >
            <Logo />

            <div className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    isActive(item.href)
                      ? 'text-strong'
                      : 'text-muted hover:bg-ink-900/5 hover:text-strong'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-firozi-700" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-paper-50 transition hover:bg-ink-800 sm:inline-flex"
              >
                Enquire Now
              </Link>

              <DisclosureButton className="inline-flex items-center justify-center rounded-lg p-2 text-strong transition hover:bg-ink-900/5 lg:hidden">
                <span className="sr-only">{open ? 'Close main menu' : 'Open main menu'}</span>
                {open ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
              </DisclosureButton>
            </div>
          </nav>

          <DisclosurePanel className="border-t border-hairline bg-paper-100/95 backdrop-blur-xl lg:hidden">
            <div className="container-x space-y-1 py-4">
              {nav.map((item) => (
                <DisclosureButton
                  key={item.href}
                  as={Link}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                    isActive(item.href)
                      ? 'bg-firozi-700/10 text-strong'
                      : 'text-muted hover:bg-ink-900/5 hover:text-strong'
                  }`}
                >
                  {item.name}
                </DisclosureButton>
              ))}

              <DisclosureButton
                as={Link}
                href="/contact"
                className="mt-3 block rounded-full bg-ink-900 px-4 py-3 text-center text-base font-semibold text-paper-50"
              >
                Enquire Now
              </DisclosureButton>

              <div className="flex items-center justify-between border-t border-hairline pt-4">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-muted transition hover:text-strong"
                >
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
                <div className="flex items-center gap-4">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Creation Publicity on Instagram"
                    className="text-muted transition hover:text-strong"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Creation Publicity on LinkedIn"
                    className="text-muted transition hover:text-strong"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
