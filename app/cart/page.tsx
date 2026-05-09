"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/home/Header";
import { useState } from "react";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Smoked Salmon Grain Bowl",
      price: 24.00,
      customization: "Quinoa Base, Extra Dill Sauce",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400",
      quantity: 1,
    },
    {
      id: 2,
      title: "Truffle Mushroom Risotto",
      price: 32.00,
      customization: "No Pine Nuts",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=400",
      quantity: 1,
    },
    {
      id: 3,
      title: "Garden Green Smoothie",
      price: 12.00,
      customization: "Ginger Boost, Extra Ice",
      image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&q=80&w=400",
      quantity: 1,
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const serviceFee = 4.50;
  const tax = subtotal * 0.09;
  const total = subtotal + serviceFee + tax;

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-[80px] pb-24">
      <Header />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
          
          {/* Left Column - Items */}
          <div className="space-y-8">
            <div className="mb-10">
              <h1 className="font-ubuntu font-bold text-[48px] text-[#111827] leading-none mb-3">
                Your Feast
              </h1>
              <p className="font-ubuntu text-[16px] text-[#6B7280]">
                {items.length} Items selected for your sensory experience
              </p>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-[24px] p-5 flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all group">
                  <div className="relative w-[120px] h-[120px] rounded-[20px] overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 120px, 120px"
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-ubuntu font-bold text-[20px] text-[#111827]">
                        {item.title}
                      </h3>
                      <span className="text-[#C63A3C] font-ubuntu font-bold text-[20px]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="font-ubuntu text-[14px] text-blue-500 font-medium mb-5">
                      Customization: {item.customization}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center bg-[#F3F4F6] rounded-full p-1 h-10">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-all text-[#4B5563]"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        <div className="w-8 text-center font-ubuntu font-bold text-[15px] text-[#111827]">
                          {item.quantity}
                        </div>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-all text-[#4B5563]"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                      </div>
                      
                      <button className="flex items-center gap-2 bg-[#DBEAFE] hover:bg-blue-200 text-[#1E40AF] font-ubuntu font-bold text-[13px] px-5 py-2.5 rounded-full transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                        </svg>
                        Modify
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Complete your meal section */}
            <div className="mt-16 bg-[#F3F4F6]/50 rounded-[32px] p-10 border border-gray-100">
              <h3 className="font-ubuntu font-bold text-[20px] text-[#111827] mb-8">
                Complete your meal
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { 
                    title: "House Red", 
                    price: "$12", 
                    icon: (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C63A3C" strokeWidth="2">
                        <path d="M8 22h8M12 11V22M7 3h10c.6 0 1 .4 1 1v5c0 2.8-2.2 5-5 5s-5-2.2-5-5V4c0-.6.4-1 1-1Z" />
                        <path d="M7 8h10" />
                      </svg>
                    )
                  },
                  { 
                    title: "Lava Cake", 
                    price: "$9", 
                    icon: (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C63A3C" strokeWidth="2">
                        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
                        <path d="M2 21h20" />
                        <path d="M7 8v3M12 8v3M17 8v3" />
                        <path d="M7 4h10" />
                      </svg>
                    )
                  },
                  { 
                    title: "Espresso", 
                    price: "$4", 
                    icon: (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C63A3C" strokeWidth="2">
                        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z" />
                        <line x1="6" y1="2" x2="6" y2="4" />
                        <line x1="10" y1="2" x2="10" y2="4" />
                        <line x1="14" y1="2" x2="14" y2="4" />
                      </svg>
                    )
                  }
                ].map((addon, index) => (
                  <div key={index} className="bg-white rounded-[24px] p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="mb-4 group-hover:scale-110 transition-transform">
                      {addon.icon}
                    </div>
                    <div className="font-ubuntu font-bold text-[15px] text-[#111827] mb-1">
                      {addon.title}
                    </div>
                    <div className="font-ubuntu font-bold text-[13px] text-gray-400">
                      {addon.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Summary Sidebar */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50">
              <h2 className="font-ubuntu font-bold text-[24px] text-[#111827] mb-8">
                Order Summary
              </h2>
              
              <div className="space-y-5 mb-10">
                <div className="flex justify-between font-ubuntu text-[16px] text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-ubuntu text-[16px] text-gray-500">
                  <span>Service Fee</span>
                  <span className="text-gray-900 font-bold">${serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-ubuntu text-[16px] text-gray-500">
                  <span>Tax</span>
                  <span className="text-gray-900 font-bold">${tax.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-8 mb-8">
                <div className="font-ubuntu font-bold text-[10px] text-blue-500 uppercase tracking-[0.15em] mb-2">Total Amount</div>
                <div className="flex justify-between items-end">
                  <div className="text-[44px] font-ubuntu font-bold text-[#111827] leading-none">
                    ${total.toFixed(2)}
                  </div>
                  <div className="flex items-center gap-1 text-[#059669] font-ubuntu font-bold text-[12px] pb-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    +{Math.floor(total)} Points
                  </div>
                </div>
              </div>

              <div className="bg-[#F3F4F6] rounded-[24px] p-5 flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#4B5563]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div className="font-ubuntu font-bold text-[14px] text-[#111827]">Standard Delivery</div>
                  <div className="font-ubuntu text-[12px] text-gray-500">Estimated: 25 - 35 mins</div>
                </div>
              </div>

              <Link href="/checkout" className="w-full bg-[#C63A3C] hover:bg-[#B92222] text-white font-ubuntu font-bold text-[18px] py-6 rounded-[24px] flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(198,58,60,0.35)] transition-all transform hover:-translate-y-1 active:translate-y-0 mb-6">
                Continue to Payment
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              
              <Link href="/menu" className="block text-center font-ubuntu font-bold text-[15px] text-[#4B6B8A] hover:text-[#C63A3C] transition-colors">
                Back to Menu
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
