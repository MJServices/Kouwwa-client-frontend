"use client";

import OrderHeader from "@/components/order/OrderHeader";
import ExperienceCard from "@/components/order/ExperienceCard";

export default function OrderPage() {
  return (
    <main className="min-h-screen flex flex-col relative bg-[#FDFCFB] overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle at 70% 30%, #FFE4E6 0%, transparent 40%), radial-gradient(circle at 20% 60%, #E0F2FE 0%, transparent 40%)"
        }}
      />

      <OrderHeader />

      <div className="flex-1 flex flex-col items-center justify-center w-full px-6 pt-32 pb-20 relative z-10">
        
        {/* Welcome Text */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="font-ubuntu font-bold text-[56px] md:text-[64px] leading-[1.1] text-[#111827] tracking-tight">
            Welcome to
            <br />
            <span className="text-[#C63A3C]">Kouwwa</span>
          </h1>
          <p className="font-ubuntu text-[18px] md:text-[20px] text-[#4B6B8A] mt-6 leading-relaxed max-w-xl mx-auto">
            Experience artisanal flavors curated for your moment. How would you like to enjoy your meal today?
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center mb-20">
          <ExperienceCard 
            title="Eat In"
            description="Relax in our sensory dining space with full table service."
            linkText="SELECT EXPERIENCE"
            linkColor="#C63A3C"
            linkHref="/menu"
            imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400"
            circleColor="#FFF1F2"
            iconBgColor="#BFDBFE"
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                <path d="M7 2v20"/>
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
              </svg>
            }
          />

          <ExperienceCard 
            title="Take Out"
            description="Quick, sustainable packaging for flavor on the move."
            linkText="ORDER NOW"
            linkColor="#4B6B8A"
            linkHref="/menu"
            imageSrc="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&q=80&w=400"
            circleColor="#F3F4F6"
            iconBgColor="#BFDBFE"
            icon={
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            }
          />
        </div>

        {/* Prep Time Indicator */}
        <div className="flex items-center gap-3 bg-[#E5E7EB] rounded-full py-3 px-6 shadow-sm mb-12">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#4B5563" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span className="font-ubuntu font-medium text-[15px] text-[#374151]">
            Estimated prep time: 15-20 mins
          </span>
        </div>
      </div>

      {/* Footer Area */}
      <div className="h-[120px] w-full bg-[#D1D5DB] shrink-0 mt-auto" />
    </main>
  );
}
