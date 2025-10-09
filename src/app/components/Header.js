"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companies } from "@/app/companies/data";
import { projects } from "@/app/projects/data";

export default function HeroHeader() {
  const [open, setOpen] = useState(false);
  const [openCompanies, setOpenCompanies] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const closeBtnRef = useRef(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    if (!pathname) return;
    setOpen(false);
    setOpenCompanies(false);
    setOpenProjects(false);
  }, [pathname]);

  // ESC + body scroll lock
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => closeBtnRef.current?.focus());
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const Chevron = ({ open }) => (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
    </svg>
  );

  return (
    <main className="bg-white text-[#0A2C4A] font-[Poppins,sans-serif]">
      {/* Top Info Bar */}
      <div className="w-full bg-[#0B4D8F] text-white text-sm">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex h-10 flex-col items-center justify-between md:flex-row">
            <div className="flex items-center gap-4">
              <a href="tel:+12065717659" className="opacity-90 hover:opacity-100">
                (206)571-7659
              </a>
              <span className="hidden h-3 w-px bg-white/30 md:inline" />
              <a
                href="mailto:info@seatechconsulting.com"
                className="hidden opacity-90 hover:opacity-100 md:inline"
              >
                info@seatechconsulting.com
              </a>
            </div>
            <div className="hidden items-center gap-4 opacity-90 md:flex">
              <span>3055 NW YEON AVE UNTT#271 Portland, OR 97210</span>
              <span className="h-3 w-px bg-white/30" />
              <span>order@seatechconsulting.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex h-20 items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex w-[140px] select-none items-center gap-3">
              <img
                src="https://seatechconsulting.com/Images/logo.png"
                alt="SeaTech Consulting"
                className="h-auto w-full"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-7 text-[15px] font-[Open_Sans,sans-serif]">
                <li>
                  <Link
                    href="/"
                    className="relative font-semibold text-[#0B4D8F] after:absolute after:left-0 after:-bottom-[14px] after:h-[3px] after:w-full after:rounded after:bg-[#0B4D8F]"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <a
                    href="#about"
                    className="flex items-center gap-1 text-[#0A2C4A]/80 transition-colors hover:text-[#0B4D8F]"
                  >
                    ABOUT
                  </a>
                </li>

                {/* COMPANIES */}
                <li className="relative group">
                  <Link
                    href="/companies"
                    className="flex items-center gap-1 text-[#0A2C4A]/80 transition-colors hover:text-[#0B4D8F]"
                  >
                    COMPANIES
                    <svg
                      className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                    </svg>
                  </Link>
                  <div className="invisible pointer-events-none opacity-0 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 absolute left-1/2 top-full mt-5 -translate-x-1/2 w-[300px] rounded-xl border border-gray-100 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-200">
                    <div className="h-[3px] w-full rounded-t-xl bg-[#0B4D8F]" />
                    <ul className="py-2">
                      {(companies || []).map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/companies/${c.slug}`}
                            className="relative block px-6 py-3 text-[14px] text-[#203245] border-b border-gray-100 last:border-0 hover:bg-[#f7f9fb] hover:text-[#0B4D8F] transition-all before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#0B4D8F] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* PROJECTS */}
                <li className="relative group">
                  <Link
                    href="/projects"
                    className="flex items-center gap-1 text-[#0A2C4A]/80 transition-colors hover:text-[#0B4D8F]"
                  >
                    PROJECTS
                    <svg
                      className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                    </svg>
                  </Link>
                  <div className="invisible pointer-events-none opacity-0 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 absolute left-1/2 top-full mt-5 -translate-x-1/2 w-[300px] rounded-xl border border-gray-100 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-200">
                    <div className="h-[3px] w-full rounded-t-xl bg-[#0B4D8F]" />
                    <ul className="py-2">
                      {(projects || []).map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/projects/${p.slug}`}
                            className="relative block px-6 py-3 text-[14px] text-[#203245] border-b border-gray-100 last:border-0 hover:bg-[#f7f9fb] hover:text-[#0B4D8F] transition-all before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#0B4D8F] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li>
                  <a
                    href="#what"
                    className="flex items-center gap-1 text-[#0A2C4A]/80 transition-colors hover:text-[#0B4D8F]"
                  >
                    WHAT WE DO
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/[0.06] lg:hidden"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0A2C4A]">
                  <path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                </svg>
              </button>

              <Link
                href="/contact"
                className="hidden items-center rounded-md bg-[#0B4D8F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110 sm:inline-flex"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Drawer (mounted outside any pointer-events-none) */}
        <div className="lg:hidden">
          {/* Overlay */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-hidden={!open}
            className={`fixed inset-0 z-[49] bg-black/40 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
          />
          {/* Panel */}
          <aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className={`fixed right-0 top-0 z-[50] h-screen w-[86vw] max-w-[380px] bg-white shadow-2xl border-l border-gray-100 transition-transform duration-300 ease-out overscroll-contain ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b">
              <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <img
                  src="https://seatechconsulting.com/Images/logo.png"
                  alt="SeaTech Consulting"
                  className="h-auto w-[140px]"
                />
              </Link>
              <button
                type="button"
                ref={closeBtnRef}
                onClick={() => setOpen(false)}
                className="rounded-full p-2 hover:bg-black/[0.06]"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </button>
            </div>

            {/* Drawer Body */}
            <nav className="px-4 py-4 overflow-y-auto h-[calc(100vh-64px)]">
              <ul className="space-y-1 text-[15px] font-[Open_Sans,sans-serif]">
                <li>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-3 font-semibold text-[#0B4D8F] bg-[#0B4D8F]/5"
                  >
                    HOME
                  </Link>
                </li>

                <li>
                  <a
                    href="#about"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-[#0A2C4A]/90 hover:bg-gray-50"
                  >
                    ABOUT
                  </a>
                </li>

                {/* COMPANIES */}
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenCompanies(!openCompanies)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[#0A2C4A]/90 hover:bg-gray-50"
                    aria-expanded={openCompanies}
                    aria-controls="mobile-companies"
                  >
                    <span className="flex items-center gap-2">COMPANIES</span>
                    <Chevron open={openCompanies} />
                  </button>
                  <div
                    id="mobile-companies"
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      openCompanies ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="mt-1 overflow-hidden rounded-lg border border-gray-100 bg-white">
                      {(companies || []).map((c) => (
                        <li key={c.slug} className="border-b last:border-b-0">
                          <Link
                            href={`/companies/${c.slug}`}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-3 text-[14px] hover:bg-[#f7f9fb] hover:text-[#0B4D8F]"
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                      <li className="border-t">
                        <Link
                          href="/companies"
                          onClick={() => setOpen(false)}
                          className="block px-4 py-3 text-[14px] font-medium text-[#0B4D8F]"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* PROJECTS */}
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenProjects(!openProjects)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[#0A2C4A]/90 hover:bg-gray-50"
                    aria-expanded={openProjects}
                    aria-controls="mobile-projects"
                  >
                    <span className="flex items-center gap-2">PROJECTS</span>
                    <Chevron open={openProjects} />
                  </button>
                  <div
                    id="mobile-projects"
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      openProjects ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="mt-1 overflow-hidden rounded-lg border border-gray-100 bg-white">
                      {(projects || []).map((p) => (
                        <li key={p.slug} className="border-b last:border-b-0">
                          <Link
                            href={`/projects/${p.slug}`}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-3 text-[14px] hover:bg-[#f7f9fb] hover:text-[#0B4D8F]"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                      <li className="border-t">
                        <Link
                          href="/projects"
                          onClick={() => setOpen(false)}
                          className="block px-4 py-3 text-[14px] font-medium text-[#0B4D8F]"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a
                    href="#what"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-[#0A2C4A]/90 hover:bg-gray-50"
                  >
                    WHAT WE DO
                  </a>
                </li>

                {/* CTA */}
                <li className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[#0B4D8F] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-110"
                  >
                    Contact Us
                  </Link>
                </li>

                {/* Meta */}
                <li className="pt-3">
                  <div className="rounded-lg border border-gray-100 p-3 text-[13px] text-[#0A2C4A]/70">
                    <p className="font-semibold text-[#0B4D8F]">SeaTech Consulting</p>
                    <p>3055 NW YEON AVE UNTT#271</p>
                    <p>Portland, OR 97210</p>
                    <div className="mt-2 flex items-center gap-3">
                      <a href="tel:+12065717659" className="underline decoration-dotted hover:text-[#0B4D8F]">
                        (206)571-7659
                      </a>
                      <span className="h-3 w-px bg-gray-200" />
                      <a
                        className="underline decoration-dotted hover:text-[#0B4D8F]"
                        href="mailto:info@seatechconsulting.com"
                      >
                        info@seatechconsulting.com
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </header>
    </main>
  );
}
