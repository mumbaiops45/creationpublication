import { clients } from "@/content/clients"
import PageHeader from "../components/PageHeader"
import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import Testimonials from "../components/Testimonials"
import Reveal from "../components/Reveal"
import CTASection from "../components/CTASection"


const page = () => {
  const firstRow = clients.filter((_, index) => index % 2 === 0)
  const secondRow = clients.filter((_, index) => index % 2 === 1)
  return (
    <>
      <PageHeader
        eyebrow="Clients & Testimonials"
        title="Brands that keep coming back"
        intro="Six hundred and fifty clients, and a 98% year-on-year retention rate. The work speaks, but so do the people who commission it."
        breadcrumbs={[{ name: 'Clients' }]}
        art="retail"
      />

      <Section tone="light" className="overflow-hidden py-20 sm:py-24">
        <div className="w-full">
          <div className="space-y-6">

            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-marquee gap-4">
                {firstRow.map((client) => (
                  <div key={client.name}
                    className="card flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl p-6 transition duration-300 hover:border-firozi-500/50"
                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        width={160}
                        height={64}
                        className="h-full w-full object-contain opacity-75 transition hover:opacity-100"
                      />
                    ) : (
                      <span className="font-display text-center text-base font-bold tracking-tight text-fg">
                        {client.name}
                      </span>
                    )}

                  </div>
                ))}
                {firstRow.map((client) => (
                  <div
                    key={`${client.name}-duplicate`}
                    className="card flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl p-6"
                    aria-hidden="true"
                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt=""
                        width={160}
                        height={64}
                        className="h-full w-full object-contain opacity-75"
                      />
                    ) : (
                      <span className="font-display text-center text-base font-bold tracking-tight text-fg">
                        {client.name}
                      </span>
                    )}

                  </div>
                ))}

              </div>

            </div>

            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-marquee-reverse gap-4">
                {secondRow.map((client) => (
                  <div
                    key={client.name}
                    className="card flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-firozi-500/50"

                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        width={160}
                        height={64}
                        className="h-full w-full object-contain opacity-75 transition hover:opacity-100"

                      />
                    ) : (
                      <span className="font-display text-center text-base font-bold tracking-tight text-fg">{client.name}</span>
                    )}
                  </div>
                ))}
                {secondRow.map((client) => (
                  <div key={`${client.name}-duplicate`}
                    className="card flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl p-6"
                    aria-hidden="true">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt=""
                        width={160}
                        height={64}
                        className="h-full w-full object-contain opacity-75"

                      />
                    ) : (
                      <span className="font-display text-center text-base font-bold tracking-tight text-fg">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <section tone="tint" className="border-hairline border-y py-24">
        <div className="container-x">
          <SectionHeading eyebrow="In Their Words"
            title="What it is actually like to work with us"
            intro="Unedited feedback from marketing leads, brand managers and communications teams."
          />

          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      <CTASection
        title="Join the brands we deliver for"
        body="Tell us what you are launching. We will show you comparable compaigns we have run and what they achieved."
      />
    </>
  )
}

export default page
