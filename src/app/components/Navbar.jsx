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
        //     as="header"
        //     className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled
        //             ? 'border-b border-firozi-400/10 bg-ink-900/85 backdrop-blur-xl'
        //             : 'border-b border-transparent bg-transparent'
        //         }`}
        // >
         <Disclosure
            as="header"
            className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 border-b border-firozi-400/10 bg-ink-900/85 backdrop-blur-xl`}
        >
            {({ open }) => (
                <>
                    <div
                        className={`hidden overflow-hidden border-b border-firozi-400/10 transition-all duration-300 lg:block ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
                            }`}
                    >
                    </div>
                    <nav className="container-x flex h-18 items-center justify-between gap-4" aria-label="Main">
                        <Logo />

                        <div className="hidden items-center gap-1 lg:flex">
                            {nav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={isActive(item.href) ? 'page' : undefined}
                                    className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition ${isActive(item.href)
                                            ? 'text-firozi-300'
                                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                    {isActive(item.href) && (
                                        <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-linear-to-r from-transparent via-firozi-400 to-transparent" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <Link
                                href="/contact"
                                className="hidden rounded-lg bg-firozi-500 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-lg shadow-firozi-500/20 transition hover:bg-firozi-400 hover:shadow-firozi-400/30 sm:inline-flex"
                            >
                                Enquire Now
                            </Link>

                            <DisclosureButton className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-white/5 hover:text-white lg:hidden">
                                <span className="sr-only">{open ? 'Close main menu' : 'Open main menu'}</span>
                                {open ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
                            </DisclosureButton>
                        </div>
                    </nav>
                    <DisclosurePanel className="border-t border-firozi-400/10 bg-ink-900/95 backdrop-blur-xl lg:hidden">
                        <div className="container-x space-y-1 py-4">
                            {nav.map((item) => (
                                <DisclosureButton
                                    key={item.href}
                                    as={Link}
                                    href={item.href}
                                    aria-current={isActive(item.href) ? 'page' : undefined}
                                    className={`block rounded-lg px-4 py-3 text-base font-medium transition ${isActive(item.href)
                                            ? 'bg-firozi-500/10 text-firozi-300'
                                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}

                            <DisclosureButton
                                as={Link}
                                href="/contact"
                                className="mt-3 block rounded-lg bg-firozi-500 px-4 py-3 text-center text-base font-semibold text-ink-900"
                            >
                                Enquire Now
                            </DisclosureButton>

                            <div className="flex items-center justify-between border-t border-firozi-400/10 pt-4">
                                <a
                                    href={`tel:${site.phoneRaw}`}
                                    className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-firozi-300"
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
                                        className="text-slate-300 transition hover:text-firozi-300"
                                    >
                                        <InstagramIcon />
                                    </a>
                                    <a
                                        href={site.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Creation Publicity on LinkedIn"
                                        className="text-slate-300 transition hover:text-firozi-300"
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
