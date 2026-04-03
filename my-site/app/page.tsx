export default function WebsiteLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tight">YourBrand</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#features" className="hover:text-slate-600">Features</a>
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
          <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
            Get Started
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Modern website template
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              A clean website you can customize for almost anything
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              This starter site gives you a polished homepage with a hero section, feature cards,
              an about section, testimonials, and a contact call-to-action.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5">
                Launch Project
              </button>
              <button className="rounded-2xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-50">
                Learn More
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-100">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">Fast setup</div>
                <div className="mt-2 text-2xl font-semibold">Ready in minutes</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-sm text-slate-500">Responsive</div>
                  <div className="mt-2 font-semibold">Looks great on mobile and desktop</div>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-sm text-slate-500">Flexible</div>
                  <div className="mt-2 font-semibold">Easy to adapt to your brand</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Everything you need for a modern first impression.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ["Professional Design", "A minimal layout with clear sections and strong visual hierarchy."],
                ["Customizable Content", "Swap in your own brand name, copy, images, and calls to action."],
                ["Mobile Friendly", "Built with responsive styling so it adapts across screen sizes."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">About</h2>
              <p className="mt-4 text-slate-600">
                Use this section to explain who you are, what you do, and why visitors should care.
                It works well for portfolios, startups, personal brands, agencies, and small businesses.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Why this works</p>
              <p className="mt-4 text-xl leading-8">
                Clear messaging, strong calls to action, and simple structure help visitors understand
                your value quickly.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">What people say</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "This template gave us a professional online presence right away.",
                "Clean, simple, and easy to customize for our business.",
                "A great starting point for launching a brand website quickly.",
              ].map((quote, index) => (
                <div key={index} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <p className="text-slate-700">“{quote}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-[2rem] bg-slate-900 px-8 py-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to make it yours?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Replace the placeholder text and branding with your own content, then publish.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:opacity-90">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 YourBrand. All rights reserved.
      </footer>
    </div>
  );
}


