import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `SMS Terms / Messaging Policy | ${company.name}`,
};

export default function SmsTermsPage() {
  return (
    <>
      <PageHero eyebrow="SMS Terms / Messaging Policy" title="Text message terms for service communications." />
      <Section className="bg-white">
        <div className="prose prose-slate max-w-4xl">
          <p className="text-sm text-ink/60">Last updated: July 3, 2026</p>

          <h2>Business and Service Area</h2>
          <p>
            {company.name} provides residential and commercial cleaning services. {company.serviceAreaStatement}
          </p>

          <h2>Program Description</h2>
          <p>
            When you opt in to SMS messages from {company.name}, you may receive text messages related to
            appointment reminders, arrival updates, and customer support for cleaning services.
          </p>

          <h2>Opt-In Consent</h2>
          <p>
            You may opt in by checking the SMS consent checkbox on our Contact Us form or by otherwise
            providing express consent. Consent is not a condition of purchase.
          </p>

          <h2>Message Frequency</h2>
          <p>
            Message frequency may vary depending on your appointments, service requests, and support needs.
          </p>

          <h2>Rates</h2>
          <p>
            Message and data rates may apply. Charges are determined by your mobile carrier and plan.
          </p>

          <h2>Opt-Out Instructions</h2>
          <p>
            Reply STOP to opt out of SMS messages from {company.name}. After you reply STOP, you may receive
            a confirmation message, and no further SMS messages will be sent unless you opt in again.
          </p>

          <h2>Help Instructions</h2>
          <p>
            Reply HELP for help. You may also contact us at {company.phone} or {company.email}.
          </p>

          <h2>Privacy</h2>
          <p>
            We do not sell, rent, or share your personal information or mobile phone number with third parties
            for marketing purposes. Please review our Privacy Policy for additional information.
          </p>
        </div>
      </Section>
    </>
  );
}
