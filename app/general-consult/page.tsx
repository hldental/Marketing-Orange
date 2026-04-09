import Image from "next/image";

export const metadata = {
  title: "General Dental Consultation Request",
  description: "A consultation request page for patients needing general dental care, pain relief, limited treatment, or help knowing where to start.",
};

const questions = [
  "Are you dealing with current pain, swelling, or a dental problem that needs attention soon?",
  "Are you missing 6 or more teeth?",
  "Are you mainly looking for general dental care rather than full-arch replacement or major restorative treatment?",
  "Would you like help understanding what treatment you may need before committing to anything bigger?",
  "Do you want our team to call you to discuss the best next step?",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">{children}</p>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-zinc-700 bg-zinc-900 shadow-xl ${className}`}>{children}</div>;
}

export default function GeneralClinicConsultLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-8">
              <Image src="/huntline-logo.jpg" alt="Huntline Dental Group logo" width={340} height={110} className="h-auto w-[260px] md:w-[340px]" priority />
            </div>
            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              General Dental Consultation
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              In pain, not sure what you need, or just ready to get started?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Answer a few quick questions so our team can understand what is going on and call you to help schedule the right next step.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
              This page is designed for patients who may need general dental care, limited treatment, pain relief, or an initial evaluation before deciding on anything more advanced.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#consult-form" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600">
                Answer the Questions
              </a>
            </div>
          </div>

          <Card className="p-8 lg:p-10">
            <SectionLabel>What happens next</SectionLabel>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-sm font-semibold text-white">1. Complete the short form</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">Tell us about your symptoms, goals, and what kind of help you are looking for.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">2. We review your answers</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">Our team looks at your information and determines the best place to start.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">3. We call you</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">If it looks like we can help, we will contact you to schedule your visit.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="consult-form">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8 lg:p-10">
            <SectionLabel>Who this page is for</SectionLabel>
            <h2 className="mt-4 text-2xl font-bold text-white">A clear first step for general care.</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              This page is intended for patients who may need pain relief, limited treatment, a comprehensive exam, or guidance on where to begin.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                <p className="text-sm font-semibold text-white">Pain or urgent issues</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">Tooth pain, swelling, broken teeth, or problems that should be looked at soon.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                <p className="text-sm font-semibold text-white">General care and evaluation</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">People who need an exam, diagnosis, or help understanding what treatment may be needed.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">
                <p className="text-sm font-semibold text-white">Not sure where to start</p>
                <p className="mt-1 text-sm leading-6 text-zinc-300">A simple way to let our team guide you into the right appointment.</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 lg:p-10">
            <SectionLabel>Request a call</SectionLabel>
            <h2 className="mt-4 text-2xl font-bold text-white">Answer a few questions below.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
              If it looks like general care is the right place to start, our team will call you to discuss your situation and help schedule your visit.
            </p>

            <form className="mt-8 grid gap-6" action="https://formspree.io/f/mykbovqo" method="POST">
              <div className="grid gap-6">
                {questions.map((question, index) => (
                  <div key={question} className="rounded-2xl border border-zinc-700 p-5">
                    <p className="text-sm font-semibold text-white">{index + 1}. {question}</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-700 px-4 py-3 text-sm text-zinc-300 hover:border-orange-500">
                        <input type="radio" name={`q${index + 1}`} value="Yes" required className="accent-orange-500" /> Yes
                      </label>
                      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-700 px-4 py-3 text-sm text-zinc-300 hover:border-orange-500">
                        <input type="radio" name={`q${index + 1}`} value="No" required className="accent-orange-500" /> No
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-zinc-200">
                  Full Name
                  <input name="name" type="text" required className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-zinc-100 outline-none transition focus:border-orange-500" placeholder="Jane Smith" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-zinc-200">
                  Phone
                  <input name="phone" type="tel" required className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-zinc-100 outline-none transition focus:border-orange-500" placeholder="(555) 555-5555" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-zinc-200">
                  Email
                  <input name="email" type="email" className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-zinc-100 outline-none transition focus:border-orange-500" placeholder="jane@example.com" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-zinc-200">
                  Best Time to Call
                  <select name="best_time" className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-zinc-100 outline-none transition focus:border-orange-500" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Tell us a little about what is going on
                <textarea name="notes" rows={4} className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-zinc-100 outline-none transition focus:border-orange-500" placeholder="Pain, broken tooth, swelling, general exam, not sure what you need, etc." />
              </label>

              <button type="submit" className="rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600">
                Request My Call
              </button>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}
