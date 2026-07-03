import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `Terms & Conditions | ${company.name}`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms & Conditions" title="Website and service terms." />
      <Section className="bg-white">
        <div className="prose prose-slate max-w-4xl">
          <p className="text-sm text-ink/60">Last updated: July 3, 2026</p>

          <h2>Use of This Website</h2>
          <p>
            By using this website, you agree to these Terms & Conditions. This website provides general
            information about {company.name} and our residential and commercial cleaning services.
            {` ${company.serviceAreaStatement}`} Website content may be updated at any time without notice.
          </p>

          <h2>Service Requests</h2>
          <p>
            Submitting a request through this website does not guarantee service availability or create a
            binding service agreement. Service details, timing, scope, and pricing may be confirmed separately
            through direct communication.
          </p>

          <h2>SMS Communications</h2>
          <p>
            If you provide your mobile phone number and opt in, you agree to receive SMS messages from
            {company.name} at the phone number provided regarding appointment reminders, scheduling updates,
            technician arrival notifications, and customer support. Message frequency may vary. Message and
            data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of
            purchase.
          </p>

          <h2>Customer Responsibilities</h2>
          <p>
            Customers are responsible for providing accurate contact information, service details, and access
            instructions. Please tell us about any special surfaces, materials, safety concerns, or access
            restrictions before service begins.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {company.name} is not liable for indirect, incidental,
            special, or consequential damages arising from use of this website or services.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms & Conditions, contact us at {company.email}, {company.phone},
            or {company.addressLines.join(", ")}.
          </p>
        </div>
      </Section>
    </>
  );
}
