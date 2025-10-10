// app/components/ClientSpotlight.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, theme } from "@/app/projects/data";

/**
 * Premium Infinite Logo Slider
 * - Seamless loop (measures strip width; no "jump")
 * - GPU-accelerated, frame-perfect timing
 * - Pauses on hover and when tab inactive
 * - Auto adjusts on resize / font load
 * - Accessible (aria), reduced-motion friendly
 * - Polished visuals: glass plates, glow, subtle tilt
 */

export default function ClientSpotlight({
  speed = 28,   // seconds per loop (for the *measured* strip width)
  gap = 48,     // px between tiles
  clickable = true,
}) {
  const base = useMemo(
    () => projects.map((p) => ({ slug: p.slug, name: p.name, icon: p.icon })),
    []
  );

  // Duplicate the set to ensure continuous flow.
  const data = useMemo(() => [...base, ...base], [base]);

  const containerRef = useRef(null);
  const stripRef = useRef(null);
  const [stripWidth, setStripWidth] = useState(0);
  const [hovering, setHovering] = useState(false);

  // Measure the width of a single strip (UL) to compute perfect animation distance
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const measure = () => {
      // Total width of one strip = its scrollWidth (includes gaps)
      setStripWidth(strip.scrollWidth);
    };

    // Measure on mount, on resize, and once fonts/images settle
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(strip);
    if (containerRef.current) ro.observe(containerRef.current);

    // Some fonts/images load after first paint; re-measure shortly
    const t = setTimeout(measure, 300);
    const t2 = setTimeout(measure, 1200);

    return () => {
      ro.disconnect();
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [data.length, gap]);

  // Pause when document hidden (saves battery; avoids drift)
  useEffect(() => {
    const onVis = () => setHovering(document.hidden ? true : false);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // CSS custom props to drive animation
  const styleVars = {
    // distance per loop (px)
    ["--strip-w"]: `${stripWidth}px`,
    // overall duration per loop (s)
    ["--loop-dur"]: `${Math.max(6, Number(speed))}s`,
    // gap size
    ["--gap"]: `${gap}px`,
    // paused state
    ["--play"]: hovering ? "paused" : "running",
  };

  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-7">
          <div
            className="text-[11px] font-semibold tracking-[.2em]"
            style={{ color: theme?.accent || "#0B4D8F" }}
          >
            CLIENT SPOTLIGHT
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-[#0c1b3b]">
            Trusted by forward-thinking teams
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#656d79]">
            A continuous reel of recent brands and collaborations we’re proud of.
          </p>
        </div>

        {/* Slider shell */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl border border-[#e8eefc] bg-white shadow-[0_16px_50px_rgba(16,36,94,0.08)]"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          aria-roledescription="carousel"
          aria-label="Client logos carousel"
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          {/* Moving strips (A + B) */}
          <div className="relative">
            <div
              className="flex w-max items-center"
              style={styleVars}
            >
              {/* Strip A */}
              <ul
                ref={stripRef}
                className="spot-track flex w-max items-center will-change-transform"
                style={{ gap: "var(--gap)" }}
              >
                {data.map((item, i) => (
                  <Tile key={`${item.slug}-${i}`} item={item} clickable={clickable} />
                ))}
              </ul>

              {/* Strip B (clone) */}
              <ul
                className="spot-track flex w-max items-center will-change-transform"
                style={{ gap: "var(--gap)" }}
                aria-hidden="true"
              >
                {data.map((item, i) => (
                  <Tile key={`dup-${item.slug}-${i}`} item={item} clickable={clickable} />
                ))}
              </ul>
            </div>

            {/* Animation styles */}
            <style jsx>{`
              .spot-track {
                animation: marquee var(--loop-dur) linear infinite;
                animation-play-state: var(--play);
              }
              /* We translate exactly one strip width for a perfect loop */
              @keyframes marquee {
                from { transform: translateX(0); }
                to   { transform: translateX(calc(var(--strip-w) * -1)); }
              }

              @media (prefers-reduced-motion: reduce) {
                .spot-track { animation: none !important; transform: none !important; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Tile ------------------ */

function Tile({ item, clickable }) {
  const Node = clickable ? Link : "div";
  const href = `/projects/${item.slug}`;

  return (
    <li
      className="group relative flex h-28 w-[180px] sm:w-[200px] md:w-[220px] items-center justify-center rounded-2xl border border-[#e6ecfb] bg-[#f7faff]/90 px-4 shadow-sm transition
                 hover:-translate-y-[3px] hover:shadow-md will-change-transform"
      style={{
        // subtle glass highlight
        backgroundImage:
          "radial-gradient(120% 80% at 50% 0%, rgba(36,103,255,0.06), transparent 60%)",
      }}
    >
      {/* glow plate */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -10px 30px rgba(15,33,87,0.06)",
        }}
      />

      {/* contrast badge behind logo */}
      <div
        className="absolute h-12 w-12 rounded-full blur-[0.5px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(14,27,61,0.85) 0%, rgba(14,27,61,0.55) 60%, rgba(14,27,61,0.35) 100%)",
        }}
      />

      <Node
        href={clickable ? href : undefined}
        aria-label={item.name}
        className="relative z-[1] flex h-full w-full select-none flex-col items-center justify-center"
      >
        {/* 3D tilt on hover (subtle) */}
        <div className="transition [perspective:800px] group-hover:[transform:rotateX(4deg)_rotateY(-4deg)]">
          <div className="relative h-10 w-28 md:h-11 md:w-32">
            <Image
              src={item.icon}
              alt={`${item.name} logo`}
              fill
              className="object-contain drop-shadow-[0_0_0.6px_rgba(0,0,0,0.5)] grayscale-[18%] group-hover:grayscale-0 transition"
              sizes="128px"
            />
          </div>
        </div>

        {/* caption fade-in */}
        <span className="mt-1.5 hidden text-[11px] font-medium text-[#445066] opacity-0 transition-opacity group-hover:block group-hover:opacity-80">
          {item.name}
        </span>
      </Node>

      {/* accent ring on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition-[box-shadow] group-hover:shadow-[0_0_0_2px_rgba(11,77,143,0.45)]"
      />
    </li>
  );
}
 