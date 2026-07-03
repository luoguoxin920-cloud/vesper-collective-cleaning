import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `Terms & Conditions | ${company.name}`,
  description:
    "Terms and conditions for cleaning appointments, scheduling, customer responsibilities, and SMS communications.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms & Conditions" title="Service terms for cleaning appointments and scheduling." />
      <Section className="bg-white">
        <div className="prose prose-slate max-w-4xl">
          <p className="text-sm text-ink/60">Last updated: July 3, 2026</p>

          <h2>Use of This Website</h2>
          <p>
            This website provides information about {company.name}, a residential and commercial cleaning
            services company. {company.serviceAreaStatement} By using this website, you agree
            to these Terms & Conditions.
          </p>

          <h2>Cleaning Appointment Requests</h2>
          <p>
            Customers may request cleaning appointments through our Contact Us or Book Appointment forms.
            A submitted request does not guarantee availability or create a confirmed appointment until details
            such as timing, service scope, property access, and customer needs are reviewed and confirmed.
          </p>

          <h2>Scheduling and Arrival Updates</h2>
          <p>
            We may contact customers by phone, email, or SMS when the customer has opted in to coordinate
            appointment scheduling, reminders, arrival notifications, service updates, and customer support.
          </p>

          <h2>Customer Responsibilities</h2>
          <p>
            Customers are responsible for providing accurate contact information, service addresses, access
            instructions, and information about priority areas, delicate surfaces, pets, safety concerns, or
            restrictions that may affect cleaning service.
          </p>

          <h2>SMS Communications</h2>
          <p>
            If you provide your mobile phone number and check the SMS opt-in box, you agree to receive SMS
            messages from {company.name} regarding appointment reminders, arrival updates, service updates,
            and customer support. Message frequency may vary. Message and data rates may apply. Reply STOP to
            opt out. Reply HELP for help. Consent is not a condition of purchase.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Updates will be posted on this page with
            the updated date.
          </p>

          <h2>Contact Information</h2>
          <p>
            Questions about these Terms & Conditions may be sent to {company.email}, by phone at {company.phone},
            or by mail at {company.addressLines.join(", ")}.
          </p>
        </div>
      </Section>
    </>
  );
}
