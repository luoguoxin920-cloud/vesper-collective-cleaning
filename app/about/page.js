import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `About Us | ${company.name}`,
};

export default function AboutPage() {
  const values = [
    {
      title: "Company Mission",
      text: "Our mission is to provide straightforward residential and commercial cleaning services that help local customers maintain clean, orderly, and usable spaces.",
    },
    {
      title: "Customer-First Approach",
      text: "We start by listening to the customer's priorities, property details, access needs, and preferred appointment timing before confirming service details.",
    },
    {
      title: "Reliable Scheduling",
      text: "Customers can request appointments online, receive scheduling confirmations, and opt in to SMS notifications for reminders, updates, and technician arrival notifications.",
    },
    {
      title: "Professional Cleaning Standards",
      text: "Our cleaning work is organized around clear scope, respectful communication, careful attention to common surfaces, and follow-up support when customers have questions.",
    },
    {
      title: "Local Service Commitment",
      text: `${company.serviceAreaStatement} We focus on serving nearby homes, apartments, offices, and light commercial spaces with practical cleaning support.`,
    },
  ];

  return (
    <>
      <PageHero eyebrow="About Us" title="Straightforward cleaning services with professional communication.">
        <p>
          {company.name} is a cleaning services business serving customers in {company.serviceArea}.
          We focus on practical cleaning support, clear scheduling, and respectful service.
        </p>
        <p>{company.serviceAreaStatement}</p>
      </PageHero>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">Our Approach</h2>
            <p className="mt-4 leading-7 text-ink/70">
              Cleaning needs are different from one home or workplace to another. Our process begins with
              understanding the space, the timing, and the customer&apos;s priorities so service can be planned
              clearly before work begins.
            </p>
            <p className="mt-4 leading-7 text-ink/70">
              We keep communication direct for appointment reminders, service updates, and customer support.
              Customers may contact us by phone or email for questions about scheduling or service details.
            </p>
          </div>
          <div className="rounded bg-linen p-7">
            <h2 className="text-2xl font-bold text-ink">Company Information</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink">Company Name</dt>
                <dd className="mt-1 text-ink/70">{company.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Business Type</dt>
                <dd className="mt-1 text-ink/70">{company.type}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Service Area</dt>
                <dd className="mt-1 text-ink/70">{company.serviceArea}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Address</dt>
                <dd className="mt-1 text-ink/70">{company.addressLines.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section className="bg-linen">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-harbor">How We Work</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Local cleaning service with clear customer communication.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {values.map((item) => (
              <article key={item.title} className="rounded bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
