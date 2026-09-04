import Reveal from "./Reveal"
import Section from "./Section"
import SplitLines from "./SplitLines"

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <Section
      tone="light"
      className="surface relative isolate overflow-hidden bg-[#0160AA] px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-24 lg:px-12 lg:pt-44 lg:pb-28 xl:pt-48 xl:pb-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[110px] sm:h-[32rem] sm:w-[32rem] lg:h-[40rem] lg:w-[40rem]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[24rem] w-[24rem] rounded-full bg-white/[0.06] blur-[100px] sm:-right-48 sm:-top-48 sm:h-[34rem] sm:w-[34rem]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[24rem] w-[24rem] rounded-full bg-[#003F73]/30 blur-[100px] sm:h-[32rem] sm:w-[32rem]"
        aria-hidden="true"/>
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image: linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px), linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_100%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        aria-hidden="true"
      />
      <div className="container-x relative z-10">
        <div className="max-w-6xl">
          {eyebrow && (
            <Reveal>
              <div className="mb-6 flex items-center gap-3 sm:mb-8">
                <span className="h-px w-7 bg-white/50 sm:w-10" />
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-xs
                    sm:tracking-[0.25em]
                  "
                >
                  {eyebrow}
                </span>
              </div>
            </Reveal>
          )}

          {/* Heading */}
          <SplitLines
            as="h1"
            className="
              max-w-5xl
              font-display
              text-[clamp(2.75rem,9vw,5rem)]
              font-medium
              leading-[0.94]
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            {title}
          </SplitLines>

          {/* Intro */}
          {intro && (
            <Reveal delay={0.15}>
              <p
                className="
                  mt-7
                  max-w-2xl
                  text-[15px]
                  leading-7
                  text-white/72
                  text-pretty
                  sm:mt-9
                  sm:text-lg
                  sm:leading-8
                  lg:mt-10
                  lg:text-xl
                  lg:leading-9
                "
              >
                {intro}
              </p>
            </Reveal>
          )}

          {/* Decorative divider */}
          <Reveal delay={0.3}>
            <div className="mt-10 flex items-center sm:mt-14 lg:mt-16">
              <div className="h-px w-10 bg-white/35 sm:w-16 lg:w-20" />

              <div
                className="
                  mx-3 size-2
                  rounded-full
                  border border-white/60
                  bg-white/20
                  shadow-[0_0_24px_rgba(255,255,255,0.45)]
                  sm:mx-4
                "
              />

              <div className="h-px w-5 bg-white/20 sm:w-8" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom atmospheric fade */}
      <div
        className="
          pointer-events-none absolute
          inset-x-0 bottom-0
          h-40
          bg-gradient-to-t
          from-[#014F8E]/60
          via-[#014F8E]/20
          to-transparent
        "
        aria-hidden="true"
      />

      {/* Bottom border */}
      <div
        className="
          pointer-events-none absolute
          inset-x-0 bottom-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
        "
        aria-hidden="true"
      />
    </Section>
  )
}
