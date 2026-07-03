import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `Privacy Policy | ${company.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="How we collect, use, and protect information." />
      <Section className="bg-white">
        <div className="prose prose-slate max-w-4xl">
          <p className="text-sm text-ink/60">Last updated: July 3, 2026</p>

          <h2>Information We Collect</h2>
          <p>
            {company.name} may collect information you provide through our website, phone calls, email,
            and service communications. This may include your name, email address, mobile phone number,
            service address, requested cleaning services, appointment preferences, and messages you send to us.
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use personal information to respond to inquiries, schedule and provide cleaning services,
            send appointment reminders, provide service updates, offer customer support, maintain records,
            and operate our business.
          </p>

          <h2>Mobile Information and Marketing Restrictions</h2>
          <p>
            We do not sell, rent, or share your personal information or mobile phone number with third parties
            for marketing purposes.
          </p>
          <p>
            We do not sell or share mobile numbers, SMS opt-in consent, or SMS message data with third parties
            or affiliates for their marketing or promotional purposes. We may share this information only with
            service providers when necessary to operate our SMS program and provide customer communications.
          </p>
          <p>
            If you opt in to receive SMS messages, we use your mobile number to send appointment reminders,
            arrival updates, and customer support messages. You may opt out by replying STOP or request help
            by replying HELP.
          </p>

          <h2>Service Providers</h2>
          <p>
            We may use vendors or service providers to help operate our website, communications, scheduling,
            and business systems. These providers are permitted to use information only as needed to provide
            services to us and are not authorized to use mobile information for their own marketing purposes.
          </p>

          <h2>Data Security</h2>
          <p>
            We use reasonable administrative, technical, and organizational measures designed to protect
            personal information. No method of transmission or storage is completely secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may contact us to request access, correction, or deletion of information where applicable.
            To stop SMS messages, reply STOP to any message. For help with SMS messages, reply HELP or
            contact us directly.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this Privacy Policy may be sent to {company.email} or by phone at {company.phone}.
            Our mailing address is {company.addressLines.join(", ")}.
          </p>
        </div>
      </Section>
    </>
  );
}
