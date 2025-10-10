import Image from "next/image";
import TechIndexHero from "./components/TechIndexHero";
import HeroHeader from "./components/Header";
import ClientSpotlight from "./components/ClientSpotlight";
import Footer from "./components/Footer";
import HeroSlider from "./components/Hero";

export default function Home() {
  return (
    <>
       {/* --- Hero --- */}
       <HeroSlider />
   


      <section id="about" className="about-wrap py-16 bg-white lg:py-24">
  <div className="mx-auto max-w-[1200px] px-6">
    {/* Title */}
    <div className="mb-8">
      <div className="text-[13px] font-bold tracking-[.12em] text-[#0B4D8F]">
        ABOUT COMPANY 
      </div>
      <h2 className="mt-3 text-[34px] sm:text-[42px] md:text-[46px] font-bold leading-tight text-[#0A2C4A]">
        You Can not Use Up <br className="hidden sm:block" /> Creativity.
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left copy */}
      <div>
        <p className="text-[15px] leading-7 text-slate-600 max-w-[560px]">
          Does any industry face a more complex audience journey and marketing sales
          process than B2B technology? Consider the number of people who influence a sale,
          the length of the decision-making cycle, the competing interests of the people who
          purchase, implement, manage, and use the technology. It’s a lot meaningful content here.
        </p>

        {/* Features */}
        <div className="mt-8 space-y-6">
          {/* Experience */}
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              {/* medal icon */}
              <svg className="h-9 w-9 text-[#0B4D8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M8 3h8l-2 4H10L8 3Z" />
                <circle cx="12" cy="13" r="4"/>
                <path d="M9.5 17 8 21l4-2 4 2-1.5-4"/>
              </svg>
            </div>
            <div>
              <h6 className="text-[18px] font-semibold text-[#0A2C4A]">Experience</h6>
              <p className="mt-1 text-[15px] text-slate-600">
                Our great team of more than 1400 software experts.
              </p>
            </div>
          </div>

          {/* Quick Support */}
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              {/* support/gear icon */}
              <svg className="h-9 w-9 text-[#0B4D8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
              </svg>
            </div>
            <div>
              <h6 className="text-[18px] font-semibold text-[#0A2C4A]">Quick Support</h6>
              <p className="mt-1 text-[15px] text-slate-600">
                We’ll help you test bold new ideas while sharing your.
              </p>
            </div>
          </div>
        </div>

        {/* Intro Video button */}
        <div className="mt-8">
          <a
            href="/contact"
            className="btn-intro"
            target="_blank"
            rel="noreferrer"
          >
            <span className="play-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Contact Us"   "
          </a>
        </div>


      </div>

<div className="images-column">
  <div className="about-right">
    <div className="about-stack mt-6">
      <div className="about-photo ap-1">
        <img src="https://expert-themes.com/html/globex/images/resource/about-1.jpg" alt="About 1" />
      </div>
      <div className="about-photo ap-2">
        <img src="https://expert-themes.com/html/globex/images/resource/about-2.jpg" alt="About 2" />
      </div>
      <div className="about-photo ap-3">
        <img src="https://expert-themes.com/html/globex/images/resource/about-3.jpg" alt="About 3" />
      </div>
      <div className="about-photo ap-4">
        <img src="https://expert-themes.com/html/globex/images/resource/about-4.jpg" alt="About 4" />
      </div>
    </div>
  </div>
</div>



    </div>
  </div>
</section>







{/* === FEATURE BAND (half above white, half over the dark section) === */}
<section className="bg-white">
  <div className="feature-overlap">
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Card 1 */}
        <article
          className="feat-card  translate-y-1/4"
          style={{
            backgroundImage:
              'url("https://expert-themes.com/html/globex/images/resource/feature-1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-[1] h-full w-full p-8 sm:p-10 text-white">
            <div
              className="text-[42px] sm:text-[50px] font-extrabold leading-none tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              35 <span className="pl-1">+</span>
            </div>
            <h4 className="mt-2 text-[20px] sm:text-[22px] font-semibold">
              Worldwide Work Pair
            </h4>
            <p className="mt-3 max-w-[520px] text-[14px] leading-6 text-white/85">
              To succeed, every software solution must be deeply integrated
              into the existing tech environment..
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article
          className="feat-card translate-y-1/4"
          style={{
            backgroundImage:
              'url("https://expert-themes.com/html/globex/images/resource/feature-2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-[1] h-full w-full p-8 sm:p-10 text-white">
            <div
              className="text-[42px] sm:text-[50px] font-extrabold leading-none tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              40 <span className="pl-1">k</span>
            </div>
            <h4 className="mt-2 text-[20px] sm:text-[22px] font-semibold">
              Happy Clients
            </h4>
            <p className="mt-3 max-w-[520px] text-[14px] leading-6 text-white/85">
              To succeed, every software solution must be deeply integrated
              into the existing tech environment..
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>











<section id="what" className="services-section py-20 md:py-36">
  <div className="relative z-[1] mx-auto max-w-[1200px] px-6">
    {/* Title */}
    <div className="text-center">
      <div className="text-[13px] font-bold tracking-[.12em] text-white/80">
        WHO WE ARE
      </div>
      <h2
        className="mt-3 text-white text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold leading-[1.25]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        We deal with the aspects of <br className="hidden sm:block" />
        professional IT Services
      </h2>
    </div>

    {/* Cards */}
    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* Card 1 */}
      <article className="svc-card relative rounded-[8px] bg-white px-10 pt-12 pb-16 text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-[12px] bg-slate-50">
          {/* flaticon-responsive-like icon */}
          <svg width="34" height="34" viewBox="0 0 24 24" stroke="#0A2C4A" strokeWidth="1.6" fill="none">
            <rect x="3" y="4" width="12" height="9" rx="1.5"/>
            <rect x="7" y="16" width="14" height="4" rx="1.5"/>
            <path d="M9 9h4M10 18h8"/>
          </svg>
        </div>
        <h5 className="text-[18px] font-semibold text-[#0B4D8F]">
          <a href="#" className="hover:underline">IT Soluations</a>
        </h5>
        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          Sed ut perspiciatis unde omnis iste natus error volup
          validate your ideas.
        </p>
        <a href="#" className="svc-arrow" aria-label="Read more">
          {/* long arrow */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </article>

      {/* Card 2 */}
      <article className="svc-card relative rounded-[8px] bg-white px-10 pt-12 pb-16 text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-[12px] bg-slate-50">
          {/* flaticon-monitor-like icon */}
          <svg width="34" height="34" viewBox="0 0 24 24" stroke="#0A2C4A" strokeWidth="1.6" fill="none">
            <rect x="3" y="4" width="18" height="12" rx="1.8"/>
            <path d="M9 20h6M12 16v4"/>
          </svg>
        </div>
        <h5 className="text-[18px] font-semibold text-[#0B4D8F]">
          <a href="#" className="hover:underline">Security System</a>
        </h5>
        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          Sed ut perspiciatis unde omnis iste natus error volup
          validate your ideas.
        </p>
        <a href="#" className="svc-arrow" aria-label="Read more">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </article>

      {/* Card 3 */}
      <article className="svc-card relative rounded-[8px] bg-white px-10 pt-12 pb-16 text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-[12px] bg-slate-50">
          {/* flaticon-coding-like icon */}
          <svg width="34" height="34" viewBox="0 0 24 24" stroke="#0A2C4A" strokeWidth="1.6" fill="none">
            <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 7l-2 10"/>
          </svg>
        </div>
        <h5 className="text-[18px] font-semibold text-[#0B4D8F]">
          <a href="#" className="hover:underline">Web Development</a>
        </h5>
        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          Sed ut perspiciatis unde omnis iste natus error volup
          validate your ideas.
        </p>
        <a href="#" className="svc-arrow" aria-label="Read more">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </article>

      {/* Card 4 */}
      <article className="svc-card relative rounded-[8px] bg-white px-10 pt-12 pb-16 text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-[12px] bg-slate-50">
          {/* flaticon-laptop-like icon */}
          <svg width="34" height="34" viewBox="0 0 24 24" stroke="#0A2C4A" strokeWidth="1.6" fill="none">
            <rect x="4" y="6" width="16" height="10" rx="1.6"/>
            <path d="M2 18h20"/>
          </svg>
        </div>
        <h5 className="text-[18px] font-semibold text-[#0B4D8F]">
          <a href="#" className="hover:underline">App Development</a>
        </h5>
        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          Sed ut perspiciatis unde omnis iste natus error volup
          validate your ideas.
        </p>
        <a href="#" className="svc-arrow" aria-label="Read more">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </article>
    </div>
  </div>
</section>







<section className="services-two -translate-y-1/5  mt-16">
  <div className="mx-auto max-w-[1200px] px-6">
    {/* BLUE HEADER PANEL */}
    <div className="services2-head px-6 sm:px-10 py-10 sm:py-12 reveal-up">
      {/* faint shapes */}
      <div className="icon-one"></div>
      <div className="icon-two"></div>
      <div className="icon-three"></div>

      {/* title */}
      <div className="relative z-[1] text-center text-white">
        <div className="text-[12px] sm:text-[13px] font-bold tracking-[.14em] opacity-90">
         WHAT WE SERVE
        </div>
        <h2
          className="mt-3 text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-extrabold leading-snug"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          We deal with the aspects of <br className="hidden sm:block" />
          professional IT Services
        </h2>
      </div>
    </div>

    {/* CARDS (overlap the blue panel) */}
    <div className="-mt-10 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
      {/* 1. Web Development */}
      <article className="svc2-card p-7 sm:p-8 reveal-up reveal-delay-1">
        <div className="svc2-icon">
          {/* code window */}
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="14" rx="1.6"/>
            <path d="M7 10l-3 2 3 2M17 10l3 2-3 2M12 9l-2 6"/>
          </svg>
        </div>
        <h5 className="mt-4 text-[16px] sm:text-[17px] font-semibold text-[#0A2C4A]">
          Web Development
        </h5>
        <p className="mt-2 text-[14px] leading-6 text-slate-600">
          We carry more than just good coding skills. Our experience makes us stand
          out from other web development.
        </p>
      </article>

      {/* 2. Mobile Development */}
      <article className="svc2-card p-7 sm:p-8 reveal-up reveal-delay-2">
        <div className="svc2-icon">
          {/* phone/app */}
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="2" width="10" height="20" rx="2"/>
            <circle cx="12" cy="18" r="1.3"/>
            <path d="M9 6h6"/>
          </svg>
        </div>
        <h5 className="mt-4 text-[16px] sm:text-[17px] font-semibold text-[#0A2C4A]">
          Mobile Development
        </h5>
        <p className="mt-2 text-[14px] leading-6 text-slate-600">
          Create complex enterprise software, ensure reliable software integration,
          modernise your legacy system.
        </p>
      </article>

      {/* 3. UI/UX Design */}
      <article className="svc2-card p-7 sm:p-8 reveal-up reveal-delay-3">
        <div className="svc2-icon">
          {/* screen + ruler */}
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="12" rx="1.6"/>
            <path d="M7 9h10M7 13h4"/>
          </svg>
        </div>
        <h5 className="mt-4 text-[16px] sm:text-[17px] font-semibold text-[#0A2C4A]">
         Branding & identity
        </h5>
        <p className="mt-2 text-[14px] leading-6 text-slate-600">
         We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles
        </p>
      </article>

      {/* 4. QA & Testing */}
      <article className="svc2-card p-7 sm:p-8 reveal-up reveal-delay-1">
        <div className="svc2-icon">
          {/* dashboard/checks */}
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        </div>
        <h5 className="mt-4 text-[16px] sm:text-[17px] font-semibold text-[#0A2C4A]">
         Digital marketing
        </h5>
        <p className="mt-2 text-[14px] leading-6 text-slate-600">
          With a keen understanding of what's happening in the digital landscape, we leverage the power of marketing platforms to connect audiences with contagious content
        </p>
      </article>

      {/* 5. IT Consultancy */}
      <article className="svc2-card p-7 sm:p-8 reveal-up reveal-delay-2">
        <div className="svc2-icon">
          {/* monitor/ops */}
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="12" rx="1.6"/>
            <path d="M9 21h6M12 17v4"/>
          </svg>
        </div>
        <h5 className="mt-4 text-[16px] sm:text-[17px] font-semibold text-[#0A2C4A]">
          IT Consultancy
        </h5>
        <p className="mt-2 text-[14px] leading-6 text-slate-600">
          Trust our top minds to eliminate workflow pain points, implement new
          tech, and consolidate app portfolios.
        </p>
      </article>

      {/* 6. Dedicated Team */}
      <article className="svc2-card p-7 sm:p-8 reveal-up reveal-delay-3">
        <div className="svc2-icon">
          {/* team chart */}
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#0A2C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="7" r="3"/>
            <circle cx="16" cy="7" r="3"/>
            <path d="M2 20c1.2-3 3.8-5 6-5s4.8 2 6 5M14 12h4a4 4 0 0 1 4 4v4"/>
          </svg>
        </div>
        <h5 className="mt-4 text-[16px] sm:text-[17px] font-semibold text-[#0A2C4A]">
          Dedicated Team
        </h5>
        <p className="mt-2 text-[14px] leading-6 text-slate-600">
          Over the past decade, our customers succeeded by leveraging our process
          of building, motivating.
        </p>
      </article>
    </div>
  </div>
</section>


 <TechIndexHero />





<ClientSpotlight speed={28} gap={48} />

    



    </>
  );
}

