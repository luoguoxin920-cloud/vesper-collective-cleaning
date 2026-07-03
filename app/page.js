import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, Clock, Home, MessageSquareText, ShieldCheck } from "lucide-react";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

const serviceHighlights = [
  "Residential cleaning",
  "Small office cleaning",
  "Move-in and move-out cleaning",
  "Routine maintenance cleaning",
];

export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-harbor">
              Cleaning Services Across the United States
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              {company.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
              Residential and commercial cleaning services for homes, apartments, offices, and small workplaces,
              with clear appointment scheduling, reminders, arrival notifications, and customer support SMS.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="focus-ring rounded bg-harbor px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-ink"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="focus-ring rounded border border-ink/15 px-5 py-3 text-center text-sm font-semibold text-ink transition hover:border-harbor hover:text-harbor"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded shadow-soft">
            <Image
              src="/images/cleaning-hero.png"
              alt="Freshly cleaned home interior with professional cleaning supplies"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section className="bg-linen">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Home,
              title: "Practical Cleaning Plans",
              text: "Service options are matched to the property, timing, and cleaning priorities you share with us.",
            },
            {
              icon: Clock,
              title: "Clear Appointment Updates",
              text: "Customers can opt in to SMS messages for appointment reminders, arrival updates, service updates, and support.",
            },
            {
              icon: ShieldCheck,
              title: "Respectful Service",
              text: "Our work is centered on careful cleaning, professional communication, and respect for your space.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded bg-white p-6 shadow-sm">
              <item.icon size={26} className="text-harbor" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-harbor">What We Do</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Cleaning support for everyday spaces.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/70">
              VESPER COLLECTIVE LLC provides residential and commercial cleaning services across the
              {` ${company.serviceArea}`}. Customers can request service online, share cleaning priorities,
              confirm appointment details, and receive service-related SMS updates when they choose to opt in.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <div key={item} className="flex gap-3 rounded border border-ink/10 bg-linen p-4">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-harbor" aria-hidden="true" />
                <span className="text-sm font-medium text-ink/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-linen">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-harbor">Customer Workflow</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How booking and SMS updates work.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/70">
              The opt-in process is shown directly on our Contact and Book Appointment forms. Customers must
              check the SMS consent box before submitting if they want text updates. No login or external
              document is required to review the consent language.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: CalendarCheck,
                title: "1. Request Service",
                text: "Submit your name, email, phone number, and cleaning needs through our website form.",
              },
              {
                icon: CheckCircle2,
                title: "2. Confirm Details",
                text: "We review the request and coordinate appointment timing, scope, and access details.",
              },
              {
                icon: MessageSquareText,
                title: "3. Receive Updates",
                text: "If you opt in, SMS may be used for reminders, arrival notifications, and support.",
              },
            ].map((step) => (
              <div key={step.title} className="rounded bg-white p-5 shadow-sm">
                <step.icon size={24} className="text-harbor" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
