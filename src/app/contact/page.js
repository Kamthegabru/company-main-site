// app/contact/page.jsx
"use client";

import React from "react";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.username.value?.trim() || "";
    const email = form.email.value?.trim() || "";
    const message = form.message.value?.trim() || "";

    const to = "info@seatechconsulting.com";
    const cc = "Order@seatechconsulting.com";
    const subject = `Website Contact Form — ${name || "New Inquiry"}`;
    const body = [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join("\n");

    const mailto = `mailto:${encodeURIComponent(to)}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <main className="bg-white">
      {/* ============ Top Banner ============ */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://expert-themes.com/html/globex/images/background/pattern-16.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#0b1430]/80" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:py-24">
          <h1 className="text-center text-4xl font-extrabold tracking-wide text-white sm:text-5xl">
            CONTACT US
          </h1>

          {/* Breadcrumb */}
          <div className="mt-4 flex justify-center">
            <ul className="flex items-center gap-2 text-sm font-medium text-white/80">
              <li className="capitalize">
                <a href="/" className="hover:text-white/95">
                  Home
                </a>
              </li>
              <li>:</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Contact Info ============ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* Title Box */}
          <div className="text-center">
            <div className="text-xs font-semibold tracking-widest text-[#2467ff]">
              Contact us
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0c1b3b] sm:text-4xl">
              Looking for a development services company?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-relaxed text-[#656d79]">
              <span className="font-semibold">Call - (206)571-7659</span>
              <br className="hidden sm:block" />
              <span className="block mt-2">
                Get a free consultation now. Please fill the form or send us an email
              </span>
              <br className="hidden sm:block" />
              <a className="text-[#2467ff] hover:underline" href="mailto:info@seatechconsulting.com">
                info@seatechconsulting.com
              </a>{" "}
              <span className="text-[#9aa3b2]">/</span>{" "}
              <a className="text-[#2467ff] hover:underline" href="mailto:Order@seatechconsulting.com">
                Order@seatechconsulting.com
              </a>
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {/* Address */}
            <div className="rounded-xl border border-[#eef0f6] bg-white p-6 shadow-[0_15px_40px_0_rgba(16,36,94,0.06)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e6edff] text-[#1e5eff]">
                  {/* Pin Icon */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <ul className="leading-7">
                  <li className="font-semibold text-[#0c1b3b]">Address</li>
                  <li className="text-[#656d79]">
                    3055 NW YEON AVE UNIT#271
                    <br />
                    Portland, OR 97210
                  </li>
                </ul>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-[#eef0f6] bg-white p-6 shadow-[0_15px_40px_0_rgba(16,36,94,0.06)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e6edff] text-[#1e5eff]">
                  {/* Phone Icon */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 2.12 3.6 2 2 0 0 1 4.11 1.5h2a2 2 0 0 1 2 1.72c.12.88.32 1.73.6 2.55a2 2 0 0 1-.45 2.11L7 9a16 16 0 0 0 6 6l1.12-1.26a2 2 0 0 1 2.11-.45c.82.28 1.67.48 2.55.6A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <ul className="leading-7">
                  <li className="font-semibold text-[#0c1b3b]">Phone</li>
                  <li className="text-[#656d79]">(206) 571-7659</li>
                </ul>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-[#eef0f6] bg-white p-6 shadow-[0_15px_40px_0_rgba(16,36,94,0.06)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e6edff] text-[#1e5eff]">
                  {/* Mail Icon */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </div>
                <ul className="leading-7">
                  <li className="font-semibold text-[#0c1b3b]">E-Mail</li>
                  <li className="text-[#656d79]">
                    info@seatechconsulting.com
                    <br />
                    Order@seatechconsulting.com
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-[15px] text-[#656d79]">
            We’re ready to help—get in touch for a free consultation.
          </p>
        </div>
      </section>

      {/* ============ Map (boxed iframe) — exact address ============ */}
      <section className="pb-10">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="overflow-hidden rounded-md border border-[#e9edf5] shadow-[0_10px_30px_rgba(16,36,94,0.06)]">
            <div className="relative h-[320px] w-full sm:h-[420px]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.google.com/maps?q=3055%20NW%20YEON%20AVE%20UNIT%23271%2C%20Portland%2C%20OR%2097210&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ Send Your Message (sends to info@) ============ */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* Heading row */}
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
              <div>
                <div className="text-xs font-semibold tracking-widest text-[#2467ff]">
                  SEND YOUR MESSAGE
                </div>
                <h2 className="mt-2 text-3xl font-extrabold text-[#0c1b3b]">Send Your Message</h2>
              </div>
              <p className="max-w-xl text-[15px] leading-relaxed text-[#656d79]">
                Our goal is to help our companies maintain or achieve best-in-class positions in their
                respective industries and our team works.
              </p>
            </div>
          </div>

          {/* Form — Name, Email Address, Message */}
          <form id="contact-form" className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:max-w-[50%]">
              <label className="mb-2 text-sm text-[#0c1b3b]">Name</label>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                required
                className="h-11 rounded border border-[#e7ecf5] px-3 text-[15px] text-[#0c1b3b] outline-none transition focus:border-[#2467ff]"
              />
            </div>

            <div className="flex flex-col md:max-w-[50%]">
              <label className="mb-2 text-sm text-[#0c1b3b]">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="h-11 rounded border border-[#e7ecf5] px-3 text-[15px] text-[#0c1b3b] outline-none transition focus:border-[#2467ff]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#0c1b3b]">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="7"
                required
                className="w-full rounded border border-[#e7ecf5] p-3 text-[15px] text-[#0c1b3b] outline-none transition focus:border-[#2467ff]"
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="relative inline-flex h-11 items-center justify-center rounded bg-[#0e1b3d] px-10 text-sm font-semibold text-white shadow-sm"
              >
                <span>Send Now</span>
                <span className="pointer-events-none absolute right-0 top-0 h-full w-5 -skew-x-12 bg-[#2467ff]" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
