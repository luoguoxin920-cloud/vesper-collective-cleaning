import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `About Us | ${company.name}`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Straightforward cleaning services with professional communication.">
        <p>
          {company.name} is a cleaning services business serving customers across the {company.serviceArea}.
          We focus on practical cleaning support, clear scheduling, and respectful service.
        </p>
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
    </>
  );
}
