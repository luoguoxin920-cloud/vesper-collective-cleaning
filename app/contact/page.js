import { Mail, MapPin, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `Contact Us | ${company.name}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Request service or ask a question.">
        <p>
          Send us your contact information and service details. We may follow up by phone, email, or SMS if you
          choose to opt in to text messages.
        </p>
      </PageHero>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <LeadForm formType="Contact Request" buttonText="Submit Request" />

          <aside className="rounded bg-ink p-7 text-white">
            <h2 className="text-2xl font-bold">Contact Details</h2>
            <div className="mt-6 space-y-5 text-sm text-white/75">
              <p className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="hover:text-white">
                  {company.phone}
                </a>
              </p>
              <p className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                  {company.email}
                </a>
              </p>
              <p className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{company.addressLines.join(", ")}</span>
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
