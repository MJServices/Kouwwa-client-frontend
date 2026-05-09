"use client";

import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("mobile");

  return (
    <main className="min-h-screen bg-[#FDFCFB] flex flex-col">
      {/* Header */}
      <header className="h-[80px] flex items-center justify-between px-8 md:px-16 bg-white border-b border-gray-100">
        <Link href="/cart" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="font-ubuntu font-bold text-[20px] text-[#111827]">Checkout</h1>
        <div className="w-10" /> {/* Spacer */}
      </header>

      <div className="flex-1 max-w-[1240px] mx-auto w-full px-6 py-12 flex flex-col items-center">
        
        {/* Progress Stepper */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#1E2937] text-white flex items-center justify-center font-ubuntu font-bold text-[14px]">1</div>
            <span className="font-ubuntu font-bold text-[10px] text-gray-400 uppercase tracking-widest">Cart</span>
          </div>
          <div className="w-16 h-[2px] bg-gray-100 mb-6" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#C63A3C] text-white flex items-center justify-center font-ubuntu font-bold text-[14px]">2</div>
            <span className="font-ubuntu font-bold text-[10px] text-[#C63A3C] uppercase tracking-widest">Payment</span>
          </div>
          <div className="w-16 h-[2px] bg-gray-100 mb-6" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-ubuntu font-bold text-[14px]">3</div>
            <span className="font-ubuntu font-bold text-[10px] text-gray-400 uppercase tracking-widest">Review</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-ubuntu font-bold text-[36px] text-[#111827] mb-3">Choose Payment</h2>
          <p className="font-ubuntu text-[16px] text-[#6B7280]">Select how you'd like to pay for your Sensory Experience.</p>
        </div>

        {/* Payment Options */}
        <div className="w-full max-w-[600px] space-y-6 mb-12">
          {/* Mobile Money */}
          <div 
            onClick={() => setPaymentMethod("mobile")}
            className={`relative bg-white rounded-[24px] p-6 flex items-center gap-6 cursor-pointer transition-all border-2 ${
              paymentMethod === "mobile" 
                ? "border-[#C63A3C] shadow-[0_15px_30px_rgba(198,58,60,0.1)]" 
                : "border-transparent shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:border-gray-200"
            }`}
          >
            <div className="w-16 h-16 bg-[#FFEDD5] rounded-[16px] flex items-center justify-center text-[#F97316]">
              {/* Orange Mobile Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <rect x="5" y="2" width="14" height="20" rx="3" />
                <rect x="9" y="18" width="6" height="1" rx="0.5" fill="white" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-ubuntu font-bold text-[18px] text-[#111827] mb-1">Pay with Mobile Money</h3>
              <p className="font-ubuntu text-[14px] text-[#6B7280] mb-3">Orange Money & instant digital wallets</p>
              <div className="flex items-center gap-2">
                <div className="bg-[#111827] w-10 h-6 rounded-[6px] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <span className="bg-[#F3F4F6] text-[#4B5563] text-[9px] font-ubuntu font-bold px-3 py-1.5 rounded-[4px] uppercase tracking-wider">Fast & Secure</span>
              </div>
            </div>
            {paymentMethod === "mobile" && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#C63A3C] rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </div>

          {/* Cash */}
          <div 
            onClick={() => setPaymentMethod("cash")}
            className={`relative bg-white rounded-[24px] p-6 flex items-center gap-6 cursor-pointer transition-all border-2 ${
              paymentMethod === "cash" 
                ? "border-[#C63A3C] shadow-[0_15px_30px_rgba(198,58,60,0.1)]" 
                : "border-transparent shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:border-gray-200"
            }`}
          >
            <div className="w-16 h-16 bg-[#DBEAFE] rounded-[16px] flex items-center justify-center text-[#1E40AF]">
              {/* Cash Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-ubuntu font-bold text-[18px] text-[#111827] mb-1">Pay by Cash</h3>
              <p className="font-ubuntu text-[14px] text-[#6B7280]">Pay upon arrival or at the counter</p>
            </div>
            {paymentMethod === "cash" && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#C63A3C] rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Amount Summary */}
        <div className="w-full max-w-[600px] bg-[#EFF6FF] rounded-[24px] p-8 flex justify-between items-center border border-blue-50/50">
          <div>
            <div className="font-ubuntu font-bold text-[16px] text-[#2C415B] mb-1">Total Amount</div>
            <p className="font-ubuntu text-[12px] text-[#60A5FA]">Includes all taxes and sensory service fees.</p>
          </div>
          <div className="text-[36px] font-ubuntu font-bold text-[#C63A3C]">
            €42.50
          </div>
        </div>

      </div>

      {/* Footer Action */}
      <footer className="p-8 flex justify-center bg-white border-t border-gray-100">
        <Link href="/payment" className="w-full max-w-[600px] bg-[#C63A3C] hover:bg-[#B92222] text-white font-ubuntu font-bold text-[18px] py-5 rounded-[20px] flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:translate-y-0">
          Continue to Payment
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </footer>
    </main>
  );
}
