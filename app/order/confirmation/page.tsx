"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/home/Header";

export default function OrderConfirmationPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-[80px]">
      <Header />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-16 items-center">
          
          {/* Left Column - Hero Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#F3E8E8] rounded-[48px] opacity-50 blur-2xl group-hover:opacity-70 transition-opacity"></div>
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
                alt="Your culinary journey"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="font-ubuntu font-bold text-[24px] text-white leading-tight">
                  Your culinary journey begins now.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Status Info */}
          <div className="flex flex-col">
            {/* Confirmation Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D1FAE5] text-[#065F46] px-4 py-2 rounded-full mb-8 w-fit shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="font-ubuntu font-bold text-[12px] uppercase tracking-widest">Order Confirmed</span>
            </div>

            <h1 className="font-ubuntu font-bold text-[56px] md:text-[64px] text-[#111827] leading-[1.1] mb-12">
              Thank You,<br />
              <span className="text-[#C63A3C]">Gourmet Explorer.</span>
            </h1>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50">
                <div className="font-ubuntu font-bold text-[11px] text-gray-400 uppercase tracking-[0.2em] mb-3">Order Number</div>
                <div className="font-ubuntu font-bold text-[36px] text-[#C63A3C]">#1042</div>
              </div>
              <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50">
                <div className="font-ubuntu font-bold text-[11px] text-gray-400 uppercase tracking-[0.2em] mb-3">Est. Ready Time</div>
                <div className="font-ubuntu font-bold text-[32px] text-[#111827]">
                  15—20 <span className="text-[18px] text-gray-500 font-normal">mins</span>
                </div>
              </div>
            </div>

            {/* Live Tracking Card */}
            <div className="bg-[#EFF6FF] rounded-[32px] p-8 flex items-center gap-6 mb-12 border border-blue-100/50">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#C63A3C] shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </div>
              <div>
                <h4 className="font-ubuntu font-bold text-[18px] text-[#1E3A8A] mb-1">Live Status Tracking</h4>
                <p className="font-ubuntu text-[14px] text-blue-500/80 leading-relaxed max-w-[340px]">
                  We'll notify you when your sensory experience is ready for pickup.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-6 mb-12">
              <Link href="/order/details" className="bg-[#C63A3C] hover:bg-[#B92222] text-white font-ubuntu font-bold text-[18px] px-10 py-5 rounded-[24px] shadow-[0_15px_30px_rgba(198,58,60,0.3)] transition-all transform hover:-translate-y-1 text-center">
                View Order Details
              </Link>
              <Link href="/order" className="bg-[#F3F4F6] hover:bg-gray-200 text-[#111827] font-ubuntu font-bold text-[18px] px-10 py-5 rounded-[24px] transition-all text-center">
                Start New Order
              </Link>
            </div>

            <p className="font-ubuntu text-[14px] text-gray-400">
              Having issues? <Link href="#" className="text-[#C63A3C] font-bold hover:underline">Contact the Digital Maître D'</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
