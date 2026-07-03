import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `SMS Terms | ${company.name}`,
};

export default function SmsTermsPage() {
  return (
    <>
      <PageHero eyebrow="SMS Terms" title="Text message terms for customer notifications." />
      <Section className="bg-white">
        <div className="prose prose-slate max-w-4xl">
          <p className="text-sm text-ink/60">Last updated: July 3, 2026</p>

          <h2>Program Name</h2>
          <p>{company.name} Customer Notifications</p>
          <p>{company.serviceAreaStatement}</p>

          <h2>Types of Messages</h2>
          <p>Customers who opt in may receive:</p>
          <ul>
            <li>Appointment confirmations</li>
            <li>Appointment reminders</li>
            <li>Scheduling updates</li>
            <li>Technician arrival notifications</li>
            <li>Customer support communications</li>
          </ul>

          <h2>Message Frequency</h2>
          <p>Message frequency varies depending on customer activity.</p>

          <h2>Fees</h2>
          <p>Message and data rates may apply.</p>

          <h2>Opt-Out</h2>
          <p>Reply STOP at any time to unsubscribe.</p>

          <h2>Help</h2>
          <p>
            Reply HELP for assistance. You may also contact us at {company.phone} or {company.email}.
          </p>

          <h2>Privacy</h2>
          <p>
            Your information will be handled according to our Privacy Policy.
          </p>

          <h2>Consent</h2>
          <p>
            Consent to receive SMS messages is not a condition of purchasing any products or services.
          </p>
        </div>
      </Section>
    </>
  );
}
