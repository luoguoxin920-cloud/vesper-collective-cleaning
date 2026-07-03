"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/components/siteData";

const smsConsentText =
  "I agree to receive SMS messages from VESPER COLLECTIVE LLC at the phone number provided regarding appointment reminders, scheduling updates, technician arrival notifications, and customer support. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.";
const successMessage = [
  `Thank you for contacting ${company.name}.`,
  "Your request has been received successfully.",
  "If you opted in for SMS notifications, you may receive appointment confirmations, scheduling updates, technician arrival notifications, and customer support messages.",
  "Reply STOP to opt out or HELP for assistance.",
];

export default function LeadForm({ formType = "Contact Request", buttonText = "Submit Request" }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

    if (!data.get("smsOptIn")) {
      setStatus("error");
      setMessage("Please agree to the SMS terms before submitting.");
      return;
    }

    if (!accessKey) {
      setStatus("error");
      setMessage("Form service is not configured yet. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    data.append("access_key", accessKey);
    data.append("subject", `${formType} - ${company.name}`);
    data.append("from_name", company.name);
    data.append("sms_consent_text", smsConsentText);
    data.append("company_email", company.email);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit the form.");
      }

      form.reset();
      setStatus("success");
      setMessage(successMessage.join("\n"));
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded border border-ink/10 bg-linen p-6 sm:p-8">
      <input type="hidden" name="form_type" value={formType} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

      <label className="block">
        <span className="text-sm font-semibold text-ink">Full Name</span>
        <input
          className="focus-ring mt-2 w-full rounded border border-ink/15 bg-white px-4 py-3 text-sm"
          type="text"
          name="full_name"
          autoComplete="name"
          required
        />
      </label>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-ink">Email</span>
          <input
            className="focus-ring mt-2 w-full rounded border border-ink/15 bg-white px-4 py-3 text-sm"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Phone Number</span>
          <input
            className="focus-ring mt-2 w-full rounded border border-ink/15 bg-white px-4 py-3 text-sm"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            required
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-ink">Message</span>
        <textarea
          className="focus-ring mt-2 min-h-36 w-full rounded border border-ink/15 bg-white px-4 py-3 text-sm"
          name="message"
          required
        />
      </label>

      <div className="mt-4 rounded border border-ink/10 bg-white p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="smsOptIn"
            value="I agree"
            required
            className="focus-ring mt-1 h-4 w-4 rounded border-ink/30 text-harbor"
          />
          <span className="text-sm leading-6 text-ink/75">{smsConsentText}</span>
        </label>
        <p className="mt-3 pl-7 text-sm leading-6 text-ink/70">
          View our{" "}
          <Link href="/terms" className="font-semibold text-harbor underline underline-offset-4">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-semibold text-harbor underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-6 rounded bg-harbor px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : buttonText}
      </button>

      {message ? (
        <div
          className={`mt-4 rounded px-4 py-3 text-sm ${
            status === "success" ? "bg-mint text-ink" : "bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {message.split("\n").map((line) => (
            <p key={line} className="leading-6">
              {line}
            </p>
          ))}
        </div>
      ) : null}
    </form>
  );
}
