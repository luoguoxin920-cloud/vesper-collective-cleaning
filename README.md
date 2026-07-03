# VESPER COLLECTIVE LLC Website

Professional Next.js + Tailwind CSS website for VESPER COLLECTIVE LLC, a cleaning services business serving customers in the United States.

## Pages

- Home
- About Us
- Services
- Contact Us
- Privacy Policy
- Terms & Conditions
- SMS Terms / Messaging Policy

## Local Development

Create a Web3Forms access key at:

```text
https://web3forms.com/
```

Then copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Log in to Vercel.
3. Click "Add New Project".
4. Import the repository.
5. Add the environment variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
6. Keep the default Next.js settings.
7. Click "Deploy".

Vercel will automatically run `npm install` and `npm run build`.

## SMS Compliance Notes

The Contact Us and Book Appointment pages include a mobile phone field and a required, unchecked SMS opt-in checkbox.

The Privacy Policy states that personal information and mobile phone numbers are not sold, rented, or shared with third parties for marketing purposes.

The Terms & Conditions and SMS Terms include message frequency, message and data rates, STOP opt-out, HELP support, and consent-not-required language.
