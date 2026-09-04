import { clients } from "@/content/clients"
import PageHeader from "../components/PageHeader"
import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import Testimonials from "../components/Testimonials"
import CTASection from "../components/CTASection"

const page = () => {
  const firstRow = clients.filter((_, index) => index % 2 === 0)
  const secondRow = clients.filter((_, index) => index % 2 === 1)

  const LogoCell = ({ client, hidden }) => (
    <div
      className="flex h-24 w-52 shrink-0 items-center justify-center border border-hairline"
      aria-hidden={hidden ? 'true' : undefined}
    >
      {client.logo ? (
        <img
          src={client.logo}
          alt={hidden ? '' : client.name}
          width={160}
          height={64}
          loading="lazy"
          decoding="async"
          className="h-10 w-auto object-contain opacity-50 mix-blend-multiply grayscale transition duration-500 hover:opacity-90 hover:grayscale-0"
        />
      ) : (
        <span className="font-display text-center text-base font-medium tracking-tight text-fg">
          {client.name}
        </span>
      )}
    </div>
  )

  return (
    <>
      <PageHeader
        eyebrow="Clients & Testimonials"
        title="Brands that keep coming back"
        intro="Six hundred and fifty clients, and a 98% year-on-year retention rate. The work speaks, but so do the people who commission it."
      />

      <Section tone="light" className="overflow-hidden py-16 sm:py-20">
        <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...firstRow, ...firstRow].map((client, i) => (
              <LogoCell key={`a-${client.name}-${i}`} client={client} hidden={i >= firstRow.length} />
            ))}
          </div>
          <div className="flex w-max animate-marquee-reverse gap-4">
            {[...secondRow, ...secondRow].map((client, i) => (
              <LogoCell key={`b-${client.name}-${i}`} client={client} hidden={i >= secondRow.length} />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="tint" className="border-hairline border-y py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            align="left"
            eyebrow="In Their Words"
            title="What it is actually like to work with us"
            intro="Unedited feedback from marketing leads, brand managers and communications teams."
          />

          <div className="mt-16">
            <Testimonials />
          </div>
        </div>
      </Section>

      <CTASection
        title="Join the brands we deliver for"
        body="Tell us what you are launching. We will show you comparable compaigns we have run and what they achieved."
      />
    </>
  )
}

export default page
