import { CalendarCheck, Clock, MessageSquareText } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/components/siteData";

export const metadata = {
  title: `Book Appointment | ${company.name}`,
  description:
    "Request a residential or commercial cleaning appointment with VESPER COLLECTIVE LLC.",
};

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero eyebrow="Book Appointment" title="Request a cleaning appointment.">
        <p>
          Tell us about the property, preferred timing, and cleaning needs. We will use your details to respond
          about scheduling, appointment reminders, technician arrival notifications, and customer support.
        </p>
      </PageHero>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <aside className="rounded bg-linen p-7">
            <h2 className="text-2xl font-bold text-ink">What to Include</h2>
            <div className="mt-6 space-y-5">
              {[
                {
                  icon: CalendarCheck,
                  title: "Preferred date or timing",
                  text: "Share a few appointment windows that may work for you.",
                },
                {
                  icon: Clock,
                  title: "Service frequency",
                  text: "Tell us whether this is one-time, weekly, biweekly, monthly, or another schedule.",
                },
                {
                  icon: MessageSquareText,
                  title: "Property details",
                  text: "Include the type of space, general size, and any priority cleaning areas.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon size={22} className="mt-1 shrink-0 text-harbor" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/65">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <LeadForm formType="Appointment Request" buttonText="Request Appointment" />
        </div>
      </Section>
    </>
  );
}
