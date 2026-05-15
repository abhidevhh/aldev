import { Link } from 'react-router'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            AI Engineer • Full Stack Developer • ML Researcher
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Hi, I’m AbhiDev.
          </h1>

          <p className="mt-3 text-xl text-slate-300 font-medium">
            Enlighten Me
          </p>

          <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-8">
            I design intelligent AI systems, scalable full-stack applications,
            and immersive digital experiences that combine performance,
            aesthetics, and real-world impact.
          </p>

          <div className="mt-10">
            <Link
              to="/blog"
              className="rounded-xl bg-white text-black px-6 py-3 font-semibold inline-block"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/abhidev-profile.jpg"
            alt="AbhiDev"
            className="w-[320px] md:w-[420px] rounded-3xl shadow-2xl border border-slate-800"
          />
        </div>
      </section>
    </main>
  )
}