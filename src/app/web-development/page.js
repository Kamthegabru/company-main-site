"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Database,
  Layers,
  Layout,
  Rocket,
  Server,
  ShieldCheck,
  TerminalSquare,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const tech = [
  {
    slug: "nodejs",
    title: "Node.js",
    subtitle: "Development",
    summary:
      "Event-driven, non-blocking architecture for fast, scalable apps — perfect for APIs, realtime, and high-throughput services.",
    bullets: [
      "REST/GraphQL APIs",
      "WebSockets & realtime",
      "Microservices & queues",
      "SQL/NoSQL integrations",
    ],
    banner:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  },
  {
    slug: "angular",
    title: "Angular",
    subtitle: "Development",
    summary:
      "Enterprise-grade front-ends with robust tooling, RxJS, and powerful state architecture for complex apps.",
    bullets: [
      "SPA & SSR builds",
      "NgRx state management",
      "Design systems",
      "Performance budgets",
    ],
    banner:
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    image:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  },
  {
    slug: "python",
    title: "Python",
    subtitle: "Development",
    summary:
      "APIs, data workflows, and ML-backed apps using Python’s rich ecosystem — fast to prototype, strong in production.",
    bullets: [
      "FastAPI/Django/Flask",
      "ETL & data pipelines",
      "ML model serving",
      "Task queues & workers",
    ],
    banner:
      "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    image:
      "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  },
  {
    slug: "laravel",
    title: "Laravel",
    subtitle: "Development",
    summary:
      "Elegant PHP with batteries included — expressive, secure, and fast delivery for content and commerce.",
    bullets: [
      "RESTful backends",
      "Blade/Livewire stacks",
      "Queue & cache layers",
      "Payments & billing",
    ],
    banner:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    image:
      "https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  },
  {
    slug: "dotnet",
    title: ".NET",
    subtitle: "Development",
    summary:
      "High-performance APIs and enterprise solutions on ASP.NET Core with excellent tooling and security.",
    bullets: [
      "ASP.NET Core APIs",
      "Identity & auth",
      "Cloud-native on Azure",
      "Enterprise integrations",
    ],
    banner:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    image:
      "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  },
  {
    slug: "ror",
    title: "Ruby on Rails",
    subtitle: "Development",
    summary:
      "Battle-tested Rails for product velocity — conventions, security, and a huge ecosystem for shipping fast.",
    bullets: [
      "API & full-stack Rails",
      "Hotwire/Turbo",
      "Background jobs",
      "Postgres/Redis setups",
    ],
    banner:
      "https://images.pexels.com/photos/3861948/pexels-photo-3861948.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    image:
      "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  },
  {
    slug: "lamp",
    title: "LAMP (PHP/MySQL)",
    subtitle: "Solutions",
    summary:
      "Proven LAMP stacks for content-heavy sites and e-commerce. Stable, scalable, and cost-efficient.",
    bullets: [
      "Custom CMS & portals",
      "E-commerce builds",
      "Caching & scaling",
      "DevOps & CI/CD",
    ],
    banner:
      "https://images.pexels.com/photos/3862383/pexels-photo-3862383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
    image:
      "https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  },
];

/** Enhanced accordion: can be controlled from parent via active/onChange */
function Accordion({ items, active, onChange }) {
  const [internalOpen, setInternalOpen] = useState(items[0]?.slug ?? null);
  const open = active ?? internalOpen;
  const setOpen = onChange ?? setInternalOpen;

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="space-y-4">
        {items.map((t) => (
          <div
            key={t.slug}
            className="overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white/95 backdrop-blur-sm shadow-sm dark:bg-slate-950/80 dark:ring-slate-800"
          >
            <button
              onClick={() => setOpen(open === t.slug ? null : t.slug)}
              className="w-full px-5 py-4 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 grid place-items-center rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                  <TerminalSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">{t.title}</div>
                  <div className="-mt-0.5 text-sm font-extrabold tracking-tight">
                    {t.subtitle}
                  </div>
                </div>
              </div>
              <span className="text-slate-400">{open === t.slug ? "–" : "+"}</span>
            </button>

            {open === t.slug && (
              <div className="border-t border-slate-200 dark:border-slate-800 px-5 pb-5">
                <p className="mt-3 text-slate-600 dark:text-slate-300">{t.summary}</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="mt-0.5 w-4 h-4 text-sky-600" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative hidden lg:block">
        {items.map((t) => (
          <div
            key={t.slug}
            className={`absolute inset-0 transition-opacity duration-300 ${
              open === t.slug ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
              <Image
                src={t.image}
                alt={`${t.title} example`}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WebDevelopmentPage() {
  const [activeStack, setActiveStack] = useState(tech[0].slug);

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HERO (more relevant bg) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000"
            alt="Developer workstation with code on screen"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-900/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <Rocket className="w-3.5 h-3.5" />
              Website Development
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Driven to deliver —{" "}
              <span className="text-sky-300">web development that ships on time</span>.
            </h1>
            <p className="mt-4 text-white/80">
              High-end engineering without missing the basics: on time, on budget, and in scope.
              We’ve been launching reliable, conversion-ready websites and apps for over a decade.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition hover:from-sky-500 hover:to-blue-600"
              >
                Explore services <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#stacks"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                View stacks
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 text-white/80">
              {[
                ["10+ yrs", "Delivery track record"],
                ["99.9%", "Uptime targets"],
                ["ISO", "Security practices"],
                ["A/B", "Conversion-first"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-xl font-bold">{k}</div>
                  <div className="text-sm">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-50/50 to-transparent dark:via-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                <BadgeCheck className="w-3.5 h-3.5" />
                Web development services
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Strategy → engineering → outcomes
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                The web is your most visible channel. We start with business goals, user needs,
                and competitive context — then architect fast, accessible, and maintainable systems
                that build trust and drive conversions.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
                {[
                  "Discovery → IA → wireframes → high-fidelity UI → production",
                  "Performance, accessibility, SEO baked into the pipeline",
                  "Usability & UX research to humanize every interaction",
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
                  src="https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200"
                  alt="Team prototyping and reviewing UI"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden md:block">
                <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 p-[2px]">
                  <div className="rounded-2xl bg-white/80 px-4 py-3 backdrop-blur dark:bg-slate-900/70">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <ShieldCheck className="w-4 h-4 text-sky-600" />
                      Secure • Performant • Accessible
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300">
                      CI/CD, audits, and monitoring included.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">
              Innovation & excellence powered by the latest tech
            </p>
            <h3 className="mt-1 text-3xl font-bold">Full-stack capabilities, end-to-end</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                k1: "Architecture",
                k2: "Design",
                icon: <Layers className="w-5 h-5" />,
                body:
                  "From monolith to microservices — we select the right architecture for your scale and roadmap.",
              },
              {
                k1: "Frontend",
                k2: "Engineering",
                icon: <Layout className="w-5 h-5" />,
                body:
                  "SPA/SSR, design systems, and performance budgets to ship delightful, fast interfaces.",
              },
              {
                k1: "Backend",
                k2: "APIs",
                icon: <Server className="w-5 h-5" />,
                body:
                  "Secure REST/GraphQL APIs, queues, and background workers built for reliability.",
              },
              {
                k1: "Databases",
                k2: "Scaling",
                icon: <Database className="w-5 h-5" />,
                body:
                  "Postgres, MySQL, Redis — tuned indexing, caching, and observability.",
              },
              {
                k1: "Quality",
                k2: "Automation",
                icon: <Wrench className="w-5 h-5" />,
                body:
                  "CI/CD, unit & E2E tests, linting, and preview environments to keep velocity high.",
              },
              {
                k1: "Security",
                k2: "Readiness",
                icon: <ShieldCheck className="w-5 h-5" />,
                body:
                  "Best practices for auth, secrets, and dependencies — audited and monitored.",
              },
            ].map((s) => (
              <div
                key={s.k1}
                className="group relative rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-950 dark:ring-slate-800"
              >
                <div className="absolute inset-x-0 -top-[1px] h-[2px] bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{s.k1}</div>
                    <div className="-mt-0.5 text-lg font-extrabold tracking-tight">{s.k2}</div>
                  </div>
                </div>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SELECTOR + ACCORDION (more prominent) */}
      <section id="stacks" className="relative py-24">
        {/* decorative backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200 dark:bg-slate-900 dark:text-sky-300 dark:ring-slate-700">
              Stacks we excel at
            </span>
            <h3 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Choose your stack — we’ll make it sing
              </span>
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              We align technology with your goals, team, and time-to-market — then engineer for
              performance, security, and scale.
            </p>
          </div>

          {/* chip selector */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex max-w-5xl flex-wrap items-center justify-center gap-2">
              {tech.map((t) => {
                const active = t.slug === activeStack;
                return (
                  <button
                    key={t.slug}
                    onClick={() => setActiveStack(t.slug)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ring-1 ${
                      active
                        ? "bg-gradient-to-r from-sky-600 to-blue-700 text-white ring-white/10 shadow-sm"
                        : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700"
                    }`}
                  >
                    {t.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* elevated container with accordion */}
          <div className="mt-10 rounded-3xl bg-white/70 p-6 ring-1 ring-slate-200 shadow-xl backdrop-blur dark:bg-slate-950/60 dark:ring-slate-800">
            <Accordion items={tech} active={activeStack} onChange={setActiveStack} />
          </div>
        </div>
      </section>
    </main>
  );
}
