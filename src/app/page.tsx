export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-soft-grid opacity-50" />
        <div className="absolute -top-40 right-[-15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,168,0.35),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.32),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.7),rgba(255,255,255,0))]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col px-6 pb-24 pt-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            <span className="font-display text-lg">SaaS Kit</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="opacity-70 transition hover:opacity-100" href="#features">
              Features
            </a>
            <a className="opacity-70 transition hover:opacity-100" href="#how">
              How it works
            </a>
            <a className="opacity-70 transition hover:opacity-100" href="#pricing">
              Pricing
            </a>
            <a className="opacity-70 transition hover:opacity-100" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
            href="#pricing"
          >
            Get the pack
          </a>
        </header>

        <section className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.18em]">
              Notion + Stripe ready
            </span>
            <h1 className="font-display mt-6 text-4xl leading-tight md:text-6xl">
              Build a clean SaaS landing and payment flow in days.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-black/70">
              A reusable starter pack for founders who want a strong landing,
              Notion auth, and Stripe billing without rebuilding the same stack
              every time.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
                href="/api/auth/notion"
              >
                Connect Notion
              </a>
              <a
                className="rounded-full border border-black/20 bg-white/60 px-5 py-3 text-sm font-semibold transition hover:border-black/40"
                href="#features"
              >
                See what is inside
              </a>
            </div>
            <div className="mt-8 grid gap-4 text-xs text-black/70 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                <p className="text-sm font-semibold text-black">Stack</p>
                <p className="mt-2">
                  Next.js 15, Prisma, Postgres, Stripe, Notion OAuth
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                <p className="text-sm font-semibold text-black">Reusable</p>
                <p className="mt-2">
                  Landing, auth, billing, dashboards, and copy blocks
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-black/50">
                <span>Checkout preview</span>
                <span className="rounded-full bg-[var(--accent)]/20 px-3 py-1 font-semibold text-black">
                  Pro plan
                </span>
              </div>
              <div className="mt-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-black/60">Monthly</p>
                    <p className="font-display text-3xl">$19</p>
                  </div>
                  <span className="text-xs text-black/50">Stripe ready</span>
                </div>
                <div className="mt-6 space-y-3 text-sm text-black/70">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    Checkout + webhook templates
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    Subscription table in Prisma
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    Dashboard gate by plan
                  </div>
                </div>
                <button className="mt-6 w-full rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white">
                  Start checkout
                </button>
              </div>
            </div>
            <div className="mt-6 grid gap-3 text-xs text-black/70 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                Notion OAuth flow
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                User + provider accounts
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                Inside the pack
              </p>
              <h2 className="font-display mt-3 text-3xl">
                Everything you need to ship
              </h2>
            </div>
            <a className="text-sm underline" href="/api/auth/notion">
              Try the Notion flow
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Landing blocks",
                body: "Hero, benefits, pricing, and CTA sections built to convert.",
              },
              {
                title: "Auth + session",
                body: "Notion OAuth and a signed cookie session ready to extend.",
              },
              {
                title: "Billing rails",
                body: "Stripe primitives, webhook scaffolding, subscription models.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-black/70">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="mt-24">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              How it works
            </p>
            <h2 className="font-display mt-3 text-3xl">
              Ship faster without the chaos
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Clone the starter",
                body: "Copy the repo and fill in the env variables.",
              },
              {
                step: "02",
                title: "Pick your offer",
                body: "Template one-time, subscription, or usage based plans.",
              },
              {
                step: "03",
                title: "Launch the product",
                body: "Hook Notion, plug Stripe, and open the landing.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-black/10 bg-white/70 p-6"
              >
                <p className="text-xs font-semibold text-black/50">
                  {item.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-black/70">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                Pricing
              </p>
              <h2 className="font-display mt-3 text-3xl">
                Two paths, same foundation
              </h2>
            </div>
            <span className="text-sm text-black/60">
              Use the pack for templates or SaaS apps.
            </span>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                Template pack
              </p>
              <h3 className="font-display mt-4 text-3xl">$149</h3>
              <p className="mt-2 text-sm text-black/70">
                One-time purchase for launching Notion templates with a clean
                landing and payment.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-black/70">
                <li>Checkout-ready landing</li>
                <li>Starter documentation</li>
                <li>Notion auth optional</li>
              </ul>
              <a
                className="mt-6 inline-flex rounded-full border border-black/20 bg-white px-5 py-3 text-sm font-semibold"
                href="#cta"
              >
                Sell your template
              </a>
            </div>
            <div className="rounded-3xl border border-black/10 bg-black p-8 text-white shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                SaaS subscription
              </p>
              <h3 className="font-display mt-4 text-3xl">$29 / mo</h3>
              <p className="mt-2 text-sm text-white/80">
                For recurring revenue products like Notion + data automation.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li>Stripe subscriptions + webhooks</li>
                <li>Plan gated dashboard</li>
                <li>Ready for usage tracking</li>
              </ul>
              <a
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
                href="/api/auth/notion"
              >
                Start with Notion
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-24">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              FAQ
            </p>
            <h2 className="font-display mt-3 text-3xl">Quick answers</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Can I sell templates only?",
                body: "Yes. Use the landing and one-time checkout flow and ignore subscriptions.",
              },
              {
                title: "Does it support Notion OAuth?",
                body: "Yes. The flow is wired and ready for scope and state updates.",
              },
              {
                title: "Can I add LLM pipelines?",
                body: "Yes. The pack is designed to host your own Node or API flows.",
              },
              {
                title: "Is deployment included?",
                body: "It is ready for Vercel or Render with Postgres and webhooks.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/10 bg-white/70 p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-black/70">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="mt-24">
          <div className="rounded-[32px] border border-black/10 bg-[linear-gradient(120deg,rgba(14,165,168,0.25),rgba(255,255,255,0.9))] p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                  Ready to launch
                </p>
                <h2 className="font-display mt-3 text-3xl">
                  Turn your idea into a paid product
                </h2>
                <p className="mt-3 text-sm text-black/70">
                  Use this pack as your foundation, then plug your Notion + LLM
                  MVP on top.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
                  href="/api/auth/notion"
                >
                  Start the flow
                </a>
                <a
                  className="rounded-full border border-black/20 bg-white/70 px-5 py-3 text-sm font-semibold"
                  href="mailto:hello@wilonweb.com"
                >
                  Talk about custom setup
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-black/60">
          <span>Built for Notion-first SaaS builders.</span>
          <span>Starter SaaS Kit</span>
        </footer>
      </div>
    </main>
  );
}
