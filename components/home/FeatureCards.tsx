"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeatureCards() {
  return (
    <section className="bg-transparent relative z-20 px-6 md:px-6 pt-8 pb-18 max-w-full mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 w-full">
        {/* Large Card - Seasonal Tasting Menu */}
        <div className="relative overflow-hidden group rounded-[24px] min-h-[520px] flex flex-col justify-end p-10 lg:p-12 shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1200"
              alt="Seasonal Tasting Menu"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#111827]/90 via-[#111827]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full max-w-[380px]">
            <span className="font-ubuntu font-bold text-[9px] text-white bg-[#D33131] px-3 py-1.5 rounded-[4px] tracking-[0.1em] uppercase mb-4 inline-block">
              CHEF'S SIGNATURE
            </span>
            <h3 className="font-ubuntu font-bold text-[32px] lg:text-[38px] text-white leading-[1.15] mb-4">
              Seasonal Tasting
              <br />
              Menu
            </h3>
            <p className="font-ubuntu font-normal text-[14px] text-gray-200 mb-8 leading-relaxed">
              Experience a curated 5-course journey of the senses, featuring fresh arrivals from our coastal suppliers.
            </p>
            <Link href="/product" className="font-ubuntu font-bold text-[16px] text-zinc-600 bg-white hover:bg-gray-100 rounded-[26px] py-3 px-6 transition-colors inline-block">
              Explore Menu
            </Link>
          </div>
        </div>

        {/* Right Column - Two Smaller Cards */}
        <div className="flex flex-col gap-8">
          {/* Morning Glow Card */}
          <div className="relative overflow-hidden rounded-[20px] bg-sky-200 p-8 lg:p-8 min-h-[240px] flex flex-col justify-center shadow-[0_10px_20px_rgba(188,224,253,0.3)]">
            <div className="relative z-10 w-[65%]">
              <h4 className="font-ubuntu font-bold text-[28px] text-[#2C415B] mb-2">
                Morning Glow
              </h4>
              <p className="font-ubuntu font-normal text-[18px] text-[#4B6B8A] leading-relaxed mb-5">
                Artisanal coffees & fresh patisserie available from 7AM.
              </p>
              <div className="text-[#2C415B]">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
            </div>
            
            {/* Coffee Image overlaying right side */}
            <div className="absolute -right-12 -bottom-45 -translate-y-1/2 w-[240px] h-[240px] rounded-full overflow-hidden border-[4px] border-[#D1E8FD] shadow-xl">
               <Image
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400"
                  alt="Coffee"
                  fill
                  className="object-cover"
                />
            </div>
          </div>

          {/* Group Events Card */}
          <div className="relative overflow-hidden rounded-[20px] bg-[#11694A] p-8 lg:p-8 min-h-[240px] flex flex-col justify-center shadow-[0_10px_20px_rgba(17,105,74,0.2)]">
            {/* Background pattern/image overlay */}
            <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay">
               <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
                  alt="Dining Table"
                  fill
                  className="object-cover"
                />
            </div>

            <div className="relative z-10 w-[80%]">
              <h4 className="font-ubuntu font-bold text-[32px] text-white mb-2">
                Group Events
              </h4>
              <p className="font-ubuntu font-normal text-[20px] text-[#A7F3D0] leading-relaxed mb-5">
                Host your sensory celebration in our private lounge.
              </p>
              <div className="text-white">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                  <path d="M4 22C4 22 9 17 14 17"></path>
                  <path d="M15.8 8.2 22 2l-3.79 10.7"></path>
                  <path d="M22 2C22 2 17 7 17 12"></path>
                  <path d="m14 14 2 2"></path>
                  <path d="m8 8 2 2"></path>
                  <circle cx="21" cy="21" r="1"></circle>
                  <circle cx="3" cy="3" r="1"></circle>
                  <circle cx="21" cy="3" r="1"></circle>
                  <circle cx="3" cy="21" r="1"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
