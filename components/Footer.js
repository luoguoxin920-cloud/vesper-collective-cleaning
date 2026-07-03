import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/components/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-bold">{company.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Residential and commercial cleaning services with appointment scheduling, reminders, arrival updates,
            and customer support communications.
          </p>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <p className="flex gap-3">
              <Phone size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="hover:text-white">
                {company.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                {company.email}
              </a>
            </p>
            <p className="flex gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{company.addressLines.join(", ")}</span>
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold">Legal Pages</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/sms-terms" className="hover:text-white">
              SMS Terms
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
