import Image from "next/image";

export const metadata = {
  title: "Surgery & Prosthetic Consultation Request",
  description:
    "A consultation request page for patients exploring missing teeth, extractions, implants, dentures, or complex restorative cases.",
};

const questions = [
  "Are you currently missing 6 or more teeth?",
  "Are you mainly looking for a long-term solution for missing, failing, or severely damaged teeth?",
  "Are you considering removing teeth and replacing them with a full-arch solution?",
  "Do you have a budget in mind for treatment?",
  "Would you like our team to call you to discuss your options and next steps?",
];

function WebsiteButton() {
  return (
    <a
      href="https://huntlinedentalgroup.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
    >
      Visit Our Website
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
      {children}
    </p>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-zinc-700 bg-zinc-900 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function SurgeryProstheticConsultLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            
            {/* 🔥 LOGO + WEBSITE BUTTON */}
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <Image
                src="/huntline-logo.jpg"
                alt="Huntline Dental Group logo"
                width={340}
                height={110}
                className="h-auto w-[260px] md:w-[340px]"
                priority
              />

              <WebsiteButton />
            </div>

            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              Surgery & Prosthetic Consultation
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Missing teeth, failing teeth, or wondering if full-arch is right for you?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Answer a few quick questions so our team can understand your situation and call you to discuss whether a surgery/prosthetic consultation is the right next step.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
              This page is designed for patients exploring implants, dentures, extractions, full arch or complex restorative solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#consult-form"
                className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Answer the Questions
              </a>
            </div>
          </div>

          <Card className="p-8 lg:p-10">
            <SectionLabel>What happens next</SectionLabel>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-sm font-semibold text-white">1. Complete the short form</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">
                  Tell us about missing teeth, full-arch interest, and budget range.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">2. We review your answers</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">
                  Our team looks at your goals and helps determine the right next step.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">3. We call you</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">
                  If it looks like a fit, we will contact you to schedule your consultation.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="consult-form">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          <Card className="p-8 lg:p-10">
            <SectionLabel>Who this page is for</SectionLabel>
            <h2 className="mt-4 text-2xl font-bold text-white">
              A simple first step for bigger treatment conversations.
            </h2>
          </Card>

          <Card className="p-8 lg:p-10">
            <SectionLabel>Request a call</SectionLabel>

            <form
              className="mt-8 grid gap-6"
              action="https://formspree.io/f/mqegnjvg"
              method="POST"
            >
              {/* 🔥 THANK YOU REDIRECT */}
              <input
                type="hidden"
                name="_redirect"
                value="https://yourdomain.com/thank-you"
              />

              <div className="grid gap-6">
                {questions.map((question, index) => (
                  <div key={question} className="rounded-2xl border border-zinc-700 p-5">
                    <p className="text-sm font-semibold text-white">
                      {index + 1}. {question}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <label className="flex items-center gap-3">
                        <input type="radio" name={`q${index + 1}`} value="Yes" required /> Yes
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="radio" name={`q${index + 1}`} value="No" required /> No
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <input name="name" required placeholder="Full Name" className="p-3 rounded bg-black border border-zinc-700" />
              <input name="phone" required placeholder="Phone" className="p-3 rounded bg-black border border-zinc-700" />

              <button
                type="submit"
                className="rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-black"
              >
                Request My Consultation Call
              </button>
            </form>
          </Card>

        </div>
      </section>
    </main>
  );
}
