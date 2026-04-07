import Image from "next/image";

export default function ThankYouGeneralPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl rounded-3xl border border-zinc-700 bg-zinc-900 p-10 text-center shadow-xl">
        <div className="mb-6 flex justify-center">
          <Image src="/huntline-logo.jpg" alt="Huntline Dental Group logo" width={300} height={100} className="h-auto w-[240px]" priority />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">Thank you</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Your request was submitted.</h1>
        <p className="mt-4 text-base leading-7 text-zinc-300">
          Our team will review your information and contact you if general care looks like the right place to start.
        </p>
        <a href="/general-consult" className="mt-8 inline-block rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black hover:bg-orange-600">
          Return to the page
        </a>
      </div>
    </main>
  );
}
