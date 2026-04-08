import Image from "next/image";

export const metadata = {
  title: "Consult Request Pages",
  description: "Choose the type of consultation request page you want to use.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex justify-center md:justify-start">
          <Image src="/huntline-logo.jpg" alt="Huntline Dental Group logo" width={340} height={110} className="h-auto w-[260px] md:w-[340px]" priority />
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Consult Marketing Pages</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Choose the path that best fits you..</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                  </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a href="/surgery-consult" className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8 shadow-xl transition hover:-translate-y-0.5 hover:border-orange-500">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Page 1</p>
            <h2 className="mt-3 text-2xl font-bold text-white">Surgery / Prosthetic Consult</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">Missing teeth, extractions, implants, dentures, and full-arch screening.</p>
          </a>

          <a href="/general-consult" className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8 shadow-xl transition hover:-translate-y-0.5 hover:border-orange-500">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            <h2 className="mt-3 text-2xl font-bold text-white">General Clinic Consult</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">Pain, broken teeth, limited treatment, general evaluation, and unsure where to start.</p>
          </a>
        </div>
      </div>
    </main>
  );
}
