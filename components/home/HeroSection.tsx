"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-start w-full min-h-[750px] overflow-hidden bg-[#F5F5F5]">
      
      <div className="relative z-10 flex flex-col items-center w-full px-4 pt-[70px] pb-[40px]">
        {/* Central White Box with Logo - Sits below header */}
        <div className="bg-white shadow-[0_5px_20px_rgba(0,0,0,0.03)] w-[400px] h-[400px] flex items-center justify-center mb-4 mx-auto">
          <div className="relative w-[360px] h-[360px]">
            <Image
              src="/images/logo.png"
              alt="KOUWWA Display"
              fill
              sizes="360px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="font-ubuntu text-[20px] text-zinc-600 font-medium text-center max-w-[500px] leading-[1.6] mb-6 mx-auto">
          A multi-sensory journey through refined global flavors,
          <br className="hidden sm:block" />
          served with digital precision.
        </p>

        {/* Segmented Language Selector */}
        <div className="flex items-center justify-center bg-[#F1F3F5] rounded-full p-[6px] mb-8 mx-auto border border-white/60 shadow-sm">
          <button className="font-ubuntu font-bold text-[14px] text-[#C63A3C] bg-white rounded-full py-2.5 px-10 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            English
          </button>
          <button className="font-ubuntu font-medium text-[14px] text-[#6B7280] hover:text-[#4B5563] rounded-full py-2.5 px-10">
            Français
          </button>
        </div>

        {/* CTA Button */}
        <Link href="/order" className="group h-18 flex items-center justify-center gap-3 font-ubuntu font-thin text-[18px] text-white bg-red-700 hover:bg-[#B92222] rounded-[26px] py-4 px-12 tracking-wide transition-all shadow-[0_10px_25px_rgba(198,58,60,0.25)] hover:shadow-[0_15px_30px_rgba(198,58,60,0.35)] hover:-translate-y-0.5 mx-auto">
          TAP TO ORDER
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
