// app/components/ClientSpotlight.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { projects, theme } from "@/app/projects/data";

export default function ClientSpotlight({
  speed = 28,   // seconds per loop
  gap = 48,     // px between tiles
  clickable = true,
}) {
  const logos = projects.map((p) => ({ slug: p.slug, name: p.name, icon: p.icon }));
  const strip = [...logos, ...logos]; // seamless loop

  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-6">
          <div className="text-xs font-semibold tracking-widest" style={{ color: theme.accent }}>
            CLIENT SPOTLIGHT
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-[#0c1b3b]">CLIENT SPOTLIGHT</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#656d79]">
            {/* A quick scroll through some of our recent collaborations. */}
          </p>
        </div>

        {/* Track container */}
        <div className="relative overflow-hidden rounded-2xl border border-[#e8eefc] bg-white shadow-[0_16px_50px_rgba(16,36,94,0.08)]">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          {/* Moving strip */}
          <div className="group relative">
            <div
              className="flex w-max items-center"
              style={{ gap: `${gap}px`, ["--loop-duration"]: `${speed}s` }}
            >
              {/* Track A */}
              <ul className="track flex w-max items-center will-change-transform">
                {strip.map((item, i) => renderTile(item, i, clickable))}
              </ul>
              {/* Track B */}
              <ul className="track flex w-max items-center will-change-transform">
                {strip.map((item, i) => renderTile(item, `dup-${i}`, clickable))}
              </ul>
            </div>

            {/* Animation */}
            <style jsx>{`
              .track { animation: marquee var(--loop-duration) linear infinite; }
              .group:hover .track { animation-play-state: paused; }
              @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              @media (prefers-reduced-motion: reduce) {
                .track { animation: none !important; }
              }
            `}</style>
          </div>
        </div>

       
      </div>
    </section>
  );
}

/** Renders a single logo tile with contrast-safe badge & glow */
function renderTile(item, key, clickable) {
  const Node = clickable ? Link : "div";
  const href = `/projects/${item.slug}`;

  return (
    <li
      key={`${item.slug}-${key}`}
      className="relative flex h-28 w-48 items-center justify-center rounded-2xl border border-[#e6ecfb] bg-[#f7faff] px-4 shadow-sm transition
                 hover:-translate-y-[2px] hover:shadow-md"
    >
      {/* subtle plate vignette */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,rgba(36,103,255,0.07),transparent_60%)]" />

      {/* contrast badge behind the logo (ensures white marks show) */}
      <div
        className="absolute h-12 w-12 rounded-full blur-[0.5px]"
        style={{
          background: `radial-gradient(60% 60% at 50% 40%, rgba(14,27,61,0.85) 0%, rgba(14,27,61,0.55) 60%, rgba(14,27,61,0.35) 100%)`,
        }}
      />

      <Node
        href={clickable ? href : undefined}
        className="relative z-[1] flex h-full w-full flex-col items-center justify-center"
        aria-label={item.name}
      >
        {/* LOGO with subtle outline glow so light marks pop */}
        <div className="relative h-10 w-28">
          <Image
            src={item.icon}
            alt={`${item.name} logo`}
            fill
            className="object-contain drop-shadow-[0_0_0.75px_rgba(0,0,0,0.5)]"
            sizes="112px"
          />
        </div>
        {/* optional caption on hover for clarity */}
        <span className="mt-1.5 hidden text-[11px] font-medium text-[#445066] opacity-80 group-hover:block">
          {item.name}
        </span>
      </Node>

      {/* hover ring accent */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition group-hover:ring-2"
        style={{ boxShadow: `inset 0 0 0 0 ${theme.accent}` }}
      />
    </li>
  );
}
