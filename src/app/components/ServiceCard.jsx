// 'use client'

// import { useEffect, useRef } from 'react'
// import Link from 'next/link'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import ServiceIcon from './ServiceIcon'
// import { ArrowIcon } from './Icons'

// export default function ServiceCard({ service, index }) {
//   const root = useRef(null)
//   const frame = useRef(null)
//   const img = useRef(null)

//   useEffect(() => {
//     const el = root.current
//     if (!el) return
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

//     gsap.registerPlugin(ScrollTrigger)
//     const delay = (index % 3) * 0.08

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         delay,
//         scrollTrigger: { trigger: el, start: 'top 88%', once: true },
//       })
//       tl.from(frame.current, {
//         clipPath: 'inset(100% 0% 0% 0%)',
//         duration: 0.95,
//         ease: 'power4.inOut',
//       })
//         .from(img.current, { scale: 1.3, duration: 1.2, ease: 'power3.out' }, 0)
//         .from(
//           el.querySelectorAll('[data-card-fade]'),
//           { opacity: 0, y: 18, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
//           '-=0.5',
//         )
//     }, el)

//     return () => ctx.revert()
//   }, [index])

//   return (
//     <Link
//       ref={root}
//       href={`/services/${service.slug}`}
//       className="group flex flex-col"
//     >
//       <div
//         ref={frame}
//         className="figure-clip aspect-[4/3] w-full rounded-lg"
//         style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
//       >
//         <img
//           ref={img}
//           src={service.image}
//           alt={`${service.title} advertising by Creation Publicity`}
//           loading="lazy"
//           decoding="async"
//           className="h-full w-full scale-[1.05] object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.1]"
//         />
//         <span
//           className="font-display absolute top-4 right-5 text-sm font-medium text-paper-50/90 mix-blend-difference"
//           aria-hidden="true"
//         >
//           {String(index + 1).padStart(2, '0')}
//         </span>
//       </div>

//       <div className="mt-5 flex grow flex-col">
//         <div data-card-fade className="flex items-center gap-3">
//           <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
//             <ServiceIcon name={service.icon} className="size-5" />
//           </span>
//           <h3 className="font-display text-h3 font-medium text-strong transition group-hover:text-accent">
//             {service.title}
//           </h3>
//         </div>

//         <p data-card-fade className="mt-3 grow text-sm leading-relaxed text-muted">
//           {service.short}
//         </p>

//         <span
//           data-card-fade
//           className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-strong"
//         >
//           <span className="border-b border-ink-900/20 pb-0.5 transition-colors group-hover:border-firozi-700">
//             View details &amp; enquire
//           </span>
//           <ArrowIcon className="size-3.5 text-accent transition-transform group-hover:translate-x-1" />
//         </span>
//       </div>
//     </Link>
//   )
// }


'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServiceIcon from './ServiceIcon'
import { ArrowIcon } from './Icons'

export default function ServiceCard({ service, index }) {
  const root = useRef(null)
  const frame = useRef(null)
  const img = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)

    const delay = (index % 3) * 0.08

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      })

      tl.from(frame.current, {
        clipPath: 'inset(0% 100% 0% 0%)',
        duration: 0.95,
        ease: 'power4.inOut',
      })
        .from(
          img.current,
          {
            scale: 1.3,
            duration: 1.2,
            ease: 'power3.out',
          },
          0,
        )
        .from(
          el.querySelectorAll('[data-card-fade]'),
          {
            opacity: 0,
            x: 20,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.5',
        )
    }, el)

    return () => ctx.revert()
  }, [index])

  return (
    <Link
      ref={root}
      href={`/services/${service.slug}`}
      className="group grid grid-cols-1 overflow-hidden rounded-xl border border-ink-900/10 bg-paper-50 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl md:grid-cols-[42%_58%]"
    >
      <div ref={frame} 
      // className="figure-clip relative h-full min-h-[260px] overflow-hidden md:min-h-[320px]"
      className={`figure-clip relative h-full min-h-[260px] overflow-hidden md:min-h-[320px] ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}
        style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      >
        <img
          ref={img}
          src={service.image}
          alt={`${service.title} advertising by Creation Publicity`}
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-[1.05] object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"/>
        <span className="font-display absolute right-5 top-4 text-sm font-medium text-paper-50/90 mix-blend-difference"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>


      {/* <div className="flex min-h-[320px] flex-col justify-center p-6 md:p-8 lg:p-10"> */}
       <div className={`flex min-h-[320px] flex-col justify-center p-6 md:p-8 lg:p-10 ${ index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
        <div data-card-fade className="flex items-center gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
            <ServiceIcon name={service.icon} className="size-5"/>
          </span>

          <h3 className="font-display text-h3 font-medium text-strong transition-colors duration-300 group-hover:text-accent">
            {service.title}
          </h3>
        </div>
        <p data-card-fade className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {service.short}
        </p>

        <span data-card-fade className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-strong">
          <span className="border-b border-ink-900/20 pb-1 transition-colors group-hover:border-firozi-700">
            View details &amp; enquire
          </span>

          <ArrowIcon className="size-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1.5"/>
        </span>
      </div>
    </Link>
  )
}
