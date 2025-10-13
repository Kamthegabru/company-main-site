"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, CheckCircle2, Palette, PenTool, MonitorSmartphone, RefreshCcw } from "lucide-react";
import { useRef } from "react";

/* Simple horizontal scroller without Swiper */
function SnapScroller({ items }) {
  const ref = useRef(null);
  return (
    <div className="relative">
      <div
        ref={ref}
        className="mt-6 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
        {items.map((card) => (
          <div
            key={card.title}
            className="snap-start min-w-[300px] sm:min-w-[360px] rounded-2xl bg-white ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800"
          >
            <div className="p-5">
              <p className="text-xl font-bold">{card.title}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-r from-white via-transparent to-white dark:from-slate-950 dark:to-slate-950" aria-hidden />
    </div>
  );
}

export default function DigitalMarketingPage() {
  const heroBg =
    "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000"; // creative workspace

  const overviewImg =
    "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200";

  const whatWeDo = [
    {
      title: "Web / App Design",
      body:
        "Nearly 22 years designing for web & mobile. We pair research, systems thinking, and current tech to craft interfaces that convert and scale.",
    },
    {
      title: "Website Redesign",
      body:
        "Give your site a contemporary look without disrupting its core flows. Fresh, clean, and appealing—aligned to your brand and KPIs.",
    },
    {
      title: "Graphic Design",
      body:
        "Infographics, illustration, and sophisticated layouts that communicate your strategy with clarity and impact.",
    },
    {
      title: "Logo & Identity",
      body:
        "Distinctive identities and brand toolkits that stay consistent across every touchpoint—from web to product to campaigns.",
    },
  ];

  const servicesCards = [
    {
      k1: "User experience",
      k2: "design",
      body:
        "22 years crafting UX that feels natural and performs. We deliver pixel-perfect UI and thoughtful flows grounded in how the web really works.",
      icon: PenTool,
    },
    {
      k1: "Landing page",
      k2: "design",
      body:
        "Research-driven pages engineered for conversions. Messaging, hierarchy, and friction-free UX aligned with your marketing goals.",
      icon: MonitorSmartphone,
    },
    {
      k1: "Responsive web",
      k2: "design",
      body:
        "Modern, device-agnostic layouts and components. Refresh your site with a clean, appealing look that preserves your core functionality.",
      icon: RefreshCcw,
    },
  ];

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Design & brand hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <Palette className="w-3.5 h-3.5" />
              Design & Branding
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              We design the trend
            </h1>
            <p className="mt-3 text-white/85">
              Simplifying web experience with design since 2000.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition hover:from-sky-500 hover:to-blue-600"
              >
                Explore design services <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                What we do
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW: Design that works! */}
      <section id="overview" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-50/50 to-transparent dark:via-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                <BadgeCheck className="w-3.5 h-3.5" />
                Design that works!
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Beautiful, useful, and unmistakably you
              </h2>
              <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <p>
                  Good design isn’t just how it looks—it’s how it works. We create sites that invite,
                  inform, and convert.
                </p>
                <p>
                  We start with your visual and brand objectives, then blend them with audience
                  insights to deliver that just-right balance of form and function.
                </p>
                <p>
                  The outcome: attentive service, inspirational ideas, and measurable results.
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
                {[
                  "Brand discovery → mood boards → design system → high-fidelity UI → handoff",
                  "Accessibility, performance, and SEO-conscious markup",
                  "Component libraries that scale across pages and campaigns",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckCircle2 className="mt-1 w-5 h-5 text-sky-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <Image
                  src={overviewImg}
                  alt="Design collaboration"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO (carousel style) */}
      <section id="what-we-do" className="py-20 bg-slate-50 dark:bg-slate-900 border-y-4 border-slate-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-3xl font-bold">What we do</h3>
          <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600 dark:text-slate-300">
            We take ideas and convert them into extraordinary visuals. With nearly 22 years of
            web/app and graphic design, we know what works—and what doesn’t. From brochure sites to
            complex e-commerce, we’ve got you covered.
          </p>

          <SnapScroller items={whatWeDo} />
        </div>
      </section>

      {/* SERVICES: Web design services to augment your online presence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold">
              Web design services to augment your online presence
            </h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesCards.map((c) => (
              <div
                key={c.k1}
                className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-950 dark:ring-slate-800"
              >
                <div className="absolute inset-x-0 -top-[1px] h-[2px] bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{c.k1}</div>
                    <div className="-mt-0.5 text-lg font-extrabold tracking-tight">{c.k2}</div>
                  </div>
                </div>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
