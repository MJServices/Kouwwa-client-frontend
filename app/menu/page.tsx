"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/home/Header";
import MenuCard from "@/components/menu/MenuCard";

export default function MenuPage() {
  const categories = [
    { name: "Starters", active: true },
    { name: "Mains", active: false },
    { name: "Drinks", active: false },
    { name: "Desserts", active: false },
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-[80px] pb-24">
      <Header />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="font-ubuntu font-bold text-[48px] md:text-[64px] text-[#111827] leading-none mb-4">
            Kouwwa <span className="text-[#C63A3C] italic font-medium">Menu</span>
          </h1>
          <p className="font-ubuntu text-[18px] text-[#6B7280] max-w-2xl leading-relaxed">
            Experience a symphony of flavors curated for the senses. Every dish is a masterpiece of modern gastronomy.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`px-8 py-3 rounded-full font-ubuntu font-bold text-[15px] transition-all ${
                cat.active
                  ? "bg-[#C63A3C] text-white shadow-lg"
                  : "bg-[#DBEAFE] text-[#1E40AF] hover:bg-blue-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Item */}
        <div className="mb-12">
          <div className="bg-white rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-[0_15px_40px_rgba(0,0,0,0.06)] group">
            <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-block px-3 py-1.5 bg-[#DCFCE7] text-[#166534] font-ubuntu font-bold text-[10px] rounded-[4px] tracking-widest uppercase mb-4 w-fit">
                Chef's Signature
              </span>
              <h2 className="font-ubuntu font-bold text-[36px] lg:text-[44px] text-[#111827] leading-tight mb-6">
                Glazed Black Cod with Miso
              </h2>
              <p className="font-ubuntu text-[16px] text-[#6B7280] mb-8 leading-relaxed max-w-md">
                Alaskan black cod marinated for 48 hours in house-made white miso, charred over binchotan charcoal for a buttery, caramelize...
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[#C63A3C] font-ubuntu font-bold text-[32px]">$42.00</span>
                <Link href="/product" className="bg-[#C63A3C] hover:bg-[#B92222] text-white font-ubuntu font-bold text-[15px] px-8 py-4 rounded-full flex items-center gap-3 transition-all shadow-lg hover:-translate-y-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  Add to Order
                </Link>
              </div>
            </div>
            <div className="relative flex-1 min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1200"
                alt="Glazed Black Cod"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuCard 
            title="Heirloom Beet Salad"
            price="18"
            description="Roasted heirloom beets, whipped goat cheese, candied walnuts, and citrus vinaigrette."
            imageSrc="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
            badge="Popular"
            badgeColor="bg-[#FEF3C7] !text-[#92400E]"
          />
          <MenuCard 
            title="Wagyu Sliders"
            price="26"
            description="Grade A5 Wagyu, truffle aioli, caramelized onions on toasted brioche."
            imageSrc="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800"
          />
          <MenuCard 
            title="Grilled Octopus"
            price="32"
            description="Charred Spanish octopus, smokey romesco sauce, fingerling potatoes."
            imageSrc="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800"
          />
          <MenuCard 
            title="Zen Harvest Bowl"
            price="21"
            description="Quinoa, avocado, heirloom tomatoes, kale, and a tahini-lemon dressing."
            imageSrc="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
            badge="Vegan"
            badgeColor="bg-[#DCFCE7] !text-[#166534]"
          />
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <Link href="/cart" className="bg-[#C63A3C] hover:bg-[#B92222] text-white px-8 py-5 rounded-[24px] flex items-center gap-4 shadow-[0_15px_30px_rgba(198,58,60,0.35)] transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <div className="text-left">
            <div className="font-ubuntu font-bold text-[18px] leading-none mb-1">VIEW ORDER</div>
            <div className="font-ubuntu text-[14px] opacity-90">$138.00</div>
          </div>
        </Link>
      </div>
    </main>
  );
}
