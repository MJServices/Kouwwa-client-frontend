"use client";

import Image from "next/image";
import ProductHeader from "@/components/product/ProductHeader";
import { useState } from "react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState("Mild");

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-[80px]">
      <ProductHeader />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Images */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white p-2">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000"
                  alt="Kouwwa Signature Dish"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              <div className="relative w-[120px] aspect-square rounded-[20px] overflow-hidden border-2 border-transparent hover:border-[#C63A3C] transition-all cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400"
                  alt="Detail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-[120px] aspect-square rounded-[20px] overflow-hidden border-2 border-transparent hover:border-[#C63A3C] transition-all cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400"
                  alt="Detail 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[120px] aspect-square rounded-[20px] bg-[#2C415B] flex items-center justify-center text-white font-ubuntu font-bold text-[18px] cursor-pointer hover:bg-[#1e2e42] transition-colors">
                +4 More
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#DBEAFE] text-[#1E40AF] font-ubuntu font-bold text-[12px] rounded-full tracking-wide uppercase mb-4">
                Chef's Special
              </span>
              <h1 className="font-ubuntu font-bold text-[48px] text-[#111827] leading-none mb-2">
                Kouwwa
              </h1>
              <div className="text-[#C63A3C] font-ubuntu font-bold text-[32px]">
                $24.50
              </div>
            </div>

            <p className="font-ubuntu text-[16px] text-[#6B7280] leading-relaxed">
              A sensory journey featuring oak-smoked heritage grains, flash-seared coastal harvest, and a reduction of fermented berries. A signature dish that balances umami and earth.
            </p>

            {/* Spice Level */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#4B5563] font-ubuntu font-bold text-[14px] uppercase tracking-widest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.5 4 6.5 2 2 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.5.5-3 2-4.5.5 2 1 3 1.5 4.5Z" />
                </svg>
                Spice Level
              </div>
              <div className="flex gap-4">
                {["Mild", "Medium", "Hot"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSpiceLevel(level)}
                    className={`flex-1 py-3 px-6 rounded-full font-ubuntu font-bold text-[14px] transition-all border-2 ${
                      spiceLevel === level
                        ? "bg-[#C63A3C] border-[#C63A3C] text-white shadow-lg"
                        : "bg-white border-gray-100 text-[#4B5563] hover:border-gray-200"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Add Extras */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[#4B5563] font-ubuntu font-bold text-[14px] uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                  Add Extras
                </div>
                <span className="text-[10px] text-gray-400">Optional</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-[20px] flex justify-between items-center border border-gray-50 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div>
                    <div className="font-ubuntu font-bold text-[15px] text-[#111827]">Aged Cheese</div>
                    <div className="text-[#C63A3C] font-ubuntu font-bold text-[12px]">+$2.00</div>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:border-[#C63A3C] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="3" className="group-hover:stroke-[#C63A3C]">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-[20px] flex justify-between items-center border border-gray-50 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div>
                    <div className="font-ubuntu font-bold text-[15px] text-[#111827]">Smoked Bacon</div>
                    <div className="text-[#C63A3C] font-ubuntu font-bold text-[12px]">+$3.50</div>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:border-[#C63A3C] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="3" className="group-hover:stroke-[#C63A3C]">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Remove Ingredients */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#4B5563] font-ubuntu font-bold text-[14px] uppercase tracking-widest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                Remove Ingredients
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="bg-[#F3F4F6] text-[#4B5563] font-ubuntu font-medium text-[13px] py-2 px-4 rounded-full flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition-colors">
                  Onions
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </div>
                <div className="bg-[#F3F4F6] text-[#4B5563] font-ubuntu font-medium text-[13px] py-2 px-4 rounded-full flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition-colors">
                  Micro-Cilantro
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex items-center gap-6">
              <div className="flex items-center bg-[#F3F4F6] rounded-full p-2 h-16">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-all text-[#4B5563]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="w-12 text-center font-ubuntu font-bold text-[18px] text-[#111827]">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-all text-[#4B5563]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>

              <button 
                onClick={() => {
                  alert("Added to Cart!");
                  window.location.href = "/cart";
                }}
                className="flex-1 h-16 bg-[#C63A3C] hover:bg-[#B92222] text-white rounded-[24px] flex items-center justify-center gap-4 shadow-[0_12px_24px_rgba(198,58,60,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
                <span className="font-ubuntu font-bold text-[18px]">
                  Add to Cart — ${(24.50 * quantity).toFixed(2)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
