import { Building2, DoorOpen, Home, SprayCan } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `Services | ${company.name}`,
};

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    text: "General cleaning for kitchens, bathrooms, living areas, bedrooms, floors, and common household surfaces.",
  },
  {
    icon: Building2,
    title: "Small Office Cleaning",
    text: "Routine cleaning for work areas, break areas, restrooms, entryways, and shared surfaces.",
  },
  {
    icon: DoorOpen,
    title: "Move-In / Move-Out Cleaning",
    text: "Cleaning support for empty or transitioning spaces before move-in, after move-out, or between occupants.",
  },
  {
    icon: SprayCan,
    title: "Maintenance Cleaning",
    text: "Recurring cleaning plans for customers who want consistent upkeep on a weekly, biweekly, or custom schedule.",
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
              <p className="mt-3 text-sm leading-6 text-ink/65">{service.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
