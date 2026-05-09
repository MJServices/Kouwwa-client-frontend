"use client";

import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="py-28 px-6 md:px-12 w-full">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20 items-center">
        {/* Left - Kitchen Image */}
        <div className="relative w-full max-w-[500px] mx-auto lg:ml-0">
          {/* Faint circle behind top-left */}
          <div className="absolute -top-12 -left-12 w-[240px] h-[240px] bg-[#F3E8E8] rounded-full opacity-60 z-0 mix-blend-multiply"></div>
          
          {/* Grey background shape */}
          <div className="absolute -bottom-6 -right-6 w-full h-[90%] bg-[#E5E7EB] rounded-[32px] z-0"></div>
          
          <div className="relative z-10 rounded-[24px] overflow-hidden aspect-[4/4.5] shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
              alt="Chef cooking"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex flex-col">
          <span className="font-ubuntu font-bold text-[18px] text-[#C63A3C] tracking-[0.15em] uppercase mb-5">
            THE EXPERIENCE
          </span>
          
          <h2 className="font-ubuntu font-bold text-[36px] md:text-[45px] text-[#111827] leading-[1.15] mb-6">
            Digital Ease, Human Excellence
          </h2>
          
          <p className="font-ubuntu font-normal text-[18px] text-[#6B7280] leading-relaxed mb-12 max-w-[520px]">
            Kouwwa bridges the gap between futuristic efficiency and traditional hospitality. Order at your pace, and let our digital maître d' handle the rest while you immerse yourself in the atmosphere.
          </p>

          {/* Features - Side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#C63A3C] rounded-md">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h4 className="font-ubuntu font-bold text-[14px] text-[#111827]">
                  Fast Ordering
                </h4>
              </div>
              <p className="font-ubuntu font-normal text-[12px] text-[#9CA3AF] ml-[32px]">
                Average time under 2 mins
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#C63A3C] rounded-full">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="none">
                    <path d="M17.43 5.34c-1.39-1.39-3.69-1.92-5.43-1.34-1.74-.58-4.04-.05-5.43 1.34C4.84 7.07 4.19 9.9 5.56 12.59l4.58 8.87c.39.75 1.48.75 1.86 0l4.58-8.87c1.37-2.69.72-5.52-1.02-7.25zM12 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
                <h4 className="font-ubuntu font-bold text-[14px] text-[#111827]">
                  Sustainably Sourced
                </h4>
              </div>
              <p className="font-ubuntu font-normal text-[12px] text-[#9CA3AF] ml-[32px]">
                100% Traceable ingredients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
