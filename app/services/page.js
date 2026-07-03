import Link from "next/link";
import { Building2, CheckCircle2, DoorOpen, Home, SprayCan } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `Services | ${company.name}`,
};

const services = [
  {
    icon: Home,
    title: "Standard Cleaning",
    description:
      "Routine cleaning for homes, apartments, and small residential spaces that need dependable upkeep.",
    included: [
      "Kitchen and bathroom surface cleaning",
      "Dusting common surfaces",
      "Floor vacuuming or mopping",
      "Trash removal and general room tidying",
    ],
    appointment:
      "A typical appointment is scheduled after we review the property details, cleaning priorities, and access instructions.",
  },
  {
    icon: SprayCan,
    title: "Deep Cleaning",
    description:
      "More detailed cleaning for spaces that need extra attention beyond routine maintenance.",
    included: [
      "Detailed cleaning of high-use surfaces",
      "Additional attention to bathrooms and kitchens",
      "Baseboards, corners, and buildup-prone areas when requested",
      "Priority areas discussed before service",
    ],
    appointment:
      "Deep cleaning appointments are planned around the size and condition of the space so timing can be coordinated clearly.",
  },
  {
    icon: DoorOpen,
    title: "Move-In / Move-Out Cleaning",
    description:
      "Cleaning support for empty or transitioning spaces before move-in, after move-out, or between occupants.",
    included: [
      "General surface cleaning in empty rooms",
      "Kitchen and bathroom cleaning",
      "Floor cleaning where accessible",
      "Final touch-up cleaning for transition needs",
    ],
    appointment:
      "Move-related appointments are scheduled based on property access, move timing, and the areas needing attention.",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description:
      "Cleaning for small offices and light commercial spaces that need a consistent, professional environment.",
    included: [
      "Work area and shared surface cleaning",
      "Break area and restroom cleaning",
      "Entryway and common area upkeep",
      "Trash removal and floor care",
    ],
    appointment:
      "Office cleaning appointments can be coordinated around business hours, access instructions, and recurring needs.",
  },
  {
    icon: CheckCircle2,
    title: "Recurring Cleaning",
    description:
      "Scheduled cleaning for customers who want ongoing upkeep on a weekly, biweekly, monthly, or custom cadence.",
    included: [
      "Recurring service plan based on your priorities",
      "Consistent appointment scheduling",
      "SMS confirmations and scheduling updates when you opt in",
      "Customer support for appointment changes",
    ],
    appointment:
      "Recurring appointments are confirmed after we understand the property, frequency, and preferred scheduling windows.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Cleaning services planned around your space and schedule.">
        <p>
          We provide cleaning support for homes and light commercial spaces in {company.serviceArea}.
          Service details can be discussed directly when you contact us.
        </p>
        <p>{company.serviceAreaStatement}</p>
      </PageHero>

      <Section className="bg-white">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded border border-ink/10 bg-linen p-6">
              <service.icon size={28} className="text-harbor" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-semibold text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/70">{service.description}</p>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-harbor">
                What is included
              </h3>
              <ul className="mt-3 space-y-2">
                {service.included.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-ink/70">
                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-harbor" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-harbor">
                Typical appointment
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">{service.appointment}</p>
              <Link
                href="/book-appointment"
                className="focus-ring mt-5 inline-flex rounded bg-harbor px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink"
              >
                Request Appointment
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
