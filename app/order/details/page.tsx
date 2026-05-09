"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OrderDetailsPage() {
  const [activeStep, setActiveStep] = useState(0); // 0: Preparing, 1: Ready, 2: Collected

  return (
    <main className="min-h-screen bg-[#FDFCFB] pb-32">
      {/* Minimal Header */}
      <header className="h-[80px] flex items-center justify-between px-8 md:px-16 bg-white">
        <Link href="/order/confirmation" className="font-ubuntu font-bold text-[24px] text-[#C63A3C] tracking-wider">KOUWWA</Link>
        <button className="flex items-center justify-center w-[44px] h-[44px] rounded-full hover:bg-gray-50 transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F2937" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </header>

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          
          {/* Left Column */}
          <div className="space-y-10">
            {/* Order Tracking Header */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-white rounded-[32px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C63A3C]/[0.02] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="font-ubuntu font-bold text-[11px] text-[#C63A3C] uppercase tracking-[0.2em] mb-3">Live Order Tracking</div>
                <h1 className="font-ubuntu font-bold text-[44px] text-[#111827] mb-2">Order #1042</h1>
                <p className="font-ubuntu text-[15px] text-gray-500 mb-6">Estimated collection at <span className="font-bold text-gray-900">19:45 PM</span></p>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#C63A3C] rounded-full animate-pulse shadow-[0_0_10px_rgba(198,58,60,0.5)]"></div>
                  <span className="font-ubuntu font-medium text-[14px] text-gray-600">Chef is finalizing your culinary journey</span>
                </div>
              </div>
              <div className="w-full md:w-[240px] bg-[#4A6B8A] rounded-[32px] p-8 flex flex-col items-center justify-center text-center text-white shadow-[0_15px_40px_rgba(74,107,138,0.2)] group hover:scale-[1.02] transition-transform">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="font-ubuntu text-[13px] text-white/70 mb-1">Wait time</div>
                <div className="font-ubuntu font-bold text-[32px]">12 Mins</div>
              </div>
            </div>

            {/* Horizontal Progress Stepper */}
            <div className="bg-white rounded-[32px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-50">
              <div className="relative flex justify-between items-center mb-8 px-8">
                {/* Connector Line */}
                <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-[2px] bg-gray-100">
                  <div className="h-full bg-[#C63A3C] transition-all duration-1000" style={{ width: '0%' }}></div>
                </div>
                
                {/* Step 1: Preparing */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#C63A3C] shadow-[0_10px_20px_rgba(198,58,60,0.3)] flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                      <path d="M7 2v20" />
                      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="font-ubuntu font-bold text-[16px] text-[#111827]">Preparing</div>
                    <div className="font-ubuntu text-[12px] text-[#C63A3C] font-medium">In the kitchen</div>
                  </div>
                </div>

                {/* Step 2: Ready */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-gray-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="font-ubuntu font-bold text-[16px] text-gray-400">Ready</div>
                    <div className="font-ubuntu text-[12px] text-gray-400">Almost there</div>
                  </div>
                </div>

                {/* Step 3: Collected */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-gray-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="font-ubuntu font-bold text-[16px] text-gray-400">Collected</div>
                    <div className="font-ubuntu text-[12px] text-gray-400">Enjoy your meal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-6">
              <h2 className="font-ubuntu font-bold text-[24px] text-[#111827]">Order Items</h2>
              <div className="space-y-4">
                {[
                  { 
                    title: "Glazed Black Cod", 
                    price: "$38.00", 
                    desc: "Miso-marinated, charred bok choy, ginger-infused dashi broth.",
                    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400"
                  },
                  { 
                    title: "Smoked Salmon Grain Bowl", 
                    price: "$24.00", 
                    desc: "Quinoa base, avocado rosettes, pickled heirloom carrots, yuzu dressing.",
                    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-[24px] p-5 flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50">
                    <div className="relative w-[100px] h-[100px] rounded-[18px] overflow-hidden shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        sizes="100px"
                        className="object-cover" 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-ubuntu font-bold text-[18px] text-[#111827]">{item.title}</h3>
                        <span className="font-ubuntu font-bold text-[18px] text-[#C63A3C]">{item.price}</span>
                      </div>
                      <p className="font-ubuntu text-[14px] text-blue-500/80 line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Pickup Instructions */}
            <div className="bg-[#F3F4F6] rounded-[32px] p-8 shadow-sm">
              <h3 className="font-ubuntu font-bold text-[20px] text-[#111827] mb-6">Pickup Instructions</h3>
              
              <div className="flex gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#C63A3C] flex items-center justify-center text-white shrink-0 shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="font-ubuntu font-bold text-[16px] text-[#111827]">Main Atrium, Kiosk B</div>
                  <div className="font-ubuntu text-[13px] text-blue-500/80">Level 2, Gastronomy Plaza</div>
                </div>
              </div>

              {/* Map Illustration */}
              <div className="relative aspect-square rounded-[24px] overflow-hidden mb-8 border-4 border-white shadow-inner">
                <Image 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" 
                  alt="Pickup Map" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-[#2C415B]/40 mix-blend-multiply"></div>
                {/* Marker Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                     <div className="absolute -inset-4 bg-[#C63A3C]/30 rounded-full animate-ping"></div>
                     <div className="relative w-10 h-10 bg-[#C63A3C] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                          <path d="M7 2v20" />
                        </svg>
                     </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-5 border border-white shadow-sm">
                <p className="font-ubuntu text-[13px] text-gray-500 leading-relaxed text-center">
                  Please present your Order QR code at the pick-up counter when you arrive.
                </p>
              </div>
            </div>

            {/* Support Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-[#4A6B8A] hover:bg-[#3D5A75] text-white font-ubuntu font-bold text-[16px] py-4 rounded-[20px] flex items-center justify-center gap-3 transition-all shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                Contact Support
              </button>
              <button className="w-full bg-[#E5E7EB] hover:bg-gray-300 text-[#4B5563] font-ubuntu font-bold text-[16px] py-4 rounded-[20px] flex items-center justify-center gap-3 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                Help Center
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[32px] px-8 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-12 z-50">
        <Link href="/menu" className="flex flex-col items-center gap-1 group text-gray-400 hover:text-gray-900 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
          </svg>
          <span className="text-[10px] font-ubuntu font-bold uppercase tracking-wider">Menu</span>
        </Link>
        <Link href="/order" className="flex flex-col items-center gap-1 group text-[#C63A3C]">
          <div className="bg-[#FEF2F2] rounded-2xl p-3 shadow-sm border border-red-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <span className="text-[10px] font-ubuntu font-bold uppercase tracking-wider">Orders</span>
        </Link>
        <Link href="/reservations" className="flex flex-col items-center gap-1 group text-gray-400 hover:text-gray-900 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-[10px] font-ubuntu font-bold uppercase tracking-wider">Reservations</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 group text-gray-400 hover:text-gray-900 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-[10px] font-ubuntu font-bold uppercase tracking-wider">Profile</span>
        </Link>
      </nav>
    </main>
  );
}
