"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MenuCardProps {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  badge?: string;
  badgeColor?: string;
  href?: string;
}

export default function MenuCard({
  title,
  price,
  description,
  imageSrc,
  badge,
  badgeColor = "bg-[#C63A3C]",
  href = "#",
}: MenuCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-[24px] p-4 flex flex-col h-full shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all group">
      <Link href={href} className="relative aspect-[4/3] rounded-[20px] overflow-hidden mb-6 block">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <div className={`absolute top-3 right-3 ${badgeColor} text-white font-ubuntu font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider`}>
            {badge}
          </div>
        )}
      </Link>

      <div className="flex-1 px-2">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-ubuntu font-bold text-[18px] text-[#111827] leading-tight">
            {title}
          </h4>
          <span className="text-[#C63A3C] font-ubuntu font-bold text-[18px]">
            ${price}
          </span>
        </div>
        <p className="font-ubuntu text-[13px] text-[#6B7280] leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
      </div>

      <button 
        onClick={handleAddToCart}
        className={`w-full font-ubuntu font-bold text-[14px] py-3 rounded-full transition-all mt-auto ${
          isAdded 
            ? "bg-[#059669] text-white shadow-[0_4px_12px_rgba(5,150,105,0.3)]" 
            : "bg-[#F3F4F6] hover:bg-gray-200 text-[#4B5563]"
        }`}
      >
        {isAdded ? (
          <span className="flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Added to Cart
          </span>
        ) : (
          "Add to Cart"
        )}
      </button>
    </div>
  );
}
