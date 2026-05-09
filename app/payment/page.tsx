"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PaymentPendingPage() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      mins: mins.toString().padStart(2, '0'),
      secs: secs.toString().padStart(2, '0')
    };
  };

  const { mins, secs } = formatTime(timeLeft);

  return (
    <main className="min-h-screen bg-[#FDFCFB] flex flex-col">
      {/* Header */}
      <header className="h-[80px] flex items-center justify-between px-8 md:px-16 bg-white">
        <Link href="/checkout" className="flex items-center gap-4 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C63A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="font-ubuntu font-bold text-[24px] text-[#C63A3C] tracking-wider">Kouwwa</span>
        </Link>
        <div className="flex items-center gap-6">
          <button className="flex items-center justify-center hover:opacity-70 transition-all">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </button>
          <button className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#1F2937] hover:bg-black transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center px-6 py-10 max-w-[600px] mx-auto w-full">
        
        {/* Status Badge */}
        <div className="bg-[#DBEAFE] text-[#1E40AF] px-6 py-2 rounded-full flex items-center gap-3 mb-10 shadow-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="font-ubuntu font-bold text-[13px] tracking-wide">Pending Payment...</span>
        </div>

        {/* Amount Card */}
        <div className="w-full bg-white rounded-[32px] p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,0.04)] mb-8 relative overflow-hidden border border-gray-50">
          <div className="font-ubuntu font-bold text-[12px] text-[#4B6B8A] uppercase tracking-[0.2em] mb-4">Total Amount</div>
          <div className="font-ubuntu font-bold text-[48px] text-[#111827] leading-none mb-2">45.000 GNF</div>
          <div className="font-ubuntu text-[14px] text-gray-400">Order ID: #KW-892341</div>
          
          {/* Subtle icon in corner */}
          <div className="absolute top-6 right-8 text-gray-100">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="w-full bg-[#F3F4F6]/50 rounded-[40px] p-10 flex flex-col items-center mb-12 border border-gray-50">
          <div className="bg-white p-6 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] mb-10 relative">
            <div className="relative w-[200px] h-[200px] bg-gray-50 rounded-[20px] overflow-hidden flex items-center justify-center p-2">
              <Image 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=KOUWWA-892341"
                alt="Payment QR Code"
                width={200}
                height={200}
                className="opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-2 rounded-[12px] shadow-lg border border-gray-100">
                  <div className="w-8 h-8 bg-[#F97316] rounded-[6px] flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                       <div className="w-2 h-2 bg-[#F97316] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div className="bg-white px-3 py-2 rounded-[12px] shadow-sm font-ubuntu font-bold text-[24px] text-[#C63A3C]">{mins}</div>
            <div className="font-ubuntu font-bold text-[24px] text-[#C63A3C]">:</div>
            <div className="bg-white px-3 py-2 rounded-[12px] shadow-sm font-ubuntu font-bold text-[24px] text-[#C63A3C]">{secs}</div>
          </div>
          <div className="font-ubuntu font-bold text-[11px] text-gray-400 uppercase tracking-[0.2em]">Payment Expires In</div>
        </div>

        {/* Instructions */}
        <div className="w-full space-y-8 mb-16">
          <div className="flex items-center gap-3 text-[#111827]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C63A3C" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <h3 className="font-ubuntu font-bold text-[18px]">How to pay</h3>
          </div>

          <div className="space-y-6">
            <div className="flex gap-5">
              <div className="w-8 h-8 rounded-full bg-[#DBEAFE] text-[#1E40AF] shrink-0 flex items-center justify-center font-ubuntu font-bold text-[14px]">1</div>
              <p className="font-ubuntu text-[15px] text-[#4B5563] leading-relaxed pt-1">
                Open your <span className="font-bold text-gray-900">Orange Money</span> app or dial <span className="font-bold text-gray-900">*144#</span> on your mobile phone.
              </p>
            </div>
            <div className="flex gap-5">
              <div className="w-8 h-8 rounded-full bg-[#DBEAFE] text-[#1E40AF] shrink-0 flex items-center justify-center font-ubuntu font-bold text-[14px]">2</div>
              <p className="font-ubuntu text-[15px] text-[#4B5563] leading-relaxed pt-1">
                Select <span className="font-bold text-gray-900">"Payment"</span> then scan the QR code above or enter the merchant code <span className="font-bold text-gray-900">89201</span>.
              </p>
            </div>
            <div className="flex gap-5">
              <div className="w-8 h-8 rounded-full bg-[#DBEAFE] text-[#1E40AF] shrink-0 flex items-center justify-center font-ubuntu font-bold text-[14px]">3</div>
              <p className="font-ubuntu text-[15px] text-[#4B5563] leading-relaxed pt-1">
                Confirm the payment of <span className="font-bold text-gray-900">45.000 GNF</span> and click the button below.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full space-y-4">
          <Link href="/order/confirmation" className="block w-full bg-[#C63A3C] hover:bg-[#B92222] text-white font-ubuntu font-bold text-[18px] py-5 rounded-[20px] shadow-[0_15px_30px_rgba(198,58,60,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0 text-center">
            I have paid
          </Link>
          <Link href="/checkout" className="block w-full bg-[#F3F4F6] hover:bg-gray-200 text-[#4B5563] font-ubuntu font-bold text-[18px] py-5 rounded-[20px] text-center transition-all">
            Cancel
          </Link>
        </div>

      </div>
    </main>
  );
}
