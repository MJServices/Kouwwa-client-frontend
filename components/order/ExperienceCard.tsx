"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkText: string;
  linkColor: string;
  linkHref: string;
  imageSrc: string;
  circleColor: string;
  iconBgColor: string;
}

export default function ExperienceCard({
  title,
  description,
  icon,
  linkText,
  linkColor,
  linkHref,
  imageSrc,
  circleColor,
  iconBgColor,
}: ExperienceCardProps) {
  return (
    <Link href={linkHref} className="block group">
      <div className="relative overflow-hidden bg-white rounded-[32px] w-full max-w-[460px] h-[380px] p-10 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-300">
        
        {/* Top Right Faint Circle Background */}
        <div 
          className="absolute -top-16 -right-16 w-[240px] h-[240px] rounded-full z-0 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: circleColor }}
        />

        {/* Bottom Right Image Circle */}
        <div className="absolute -bottom-12 -right-12 w-[280px] h-[280px] rounded-full overflow-hidden z-0 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:-translate-x-2">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="280px"
            className="object-cover"
          />
        </div>

        {/* Top Left Icon */}
        <div 
          className="relative z-10 flex items-center justify-center w-[84px] h-[84px] rounded-[24px] mb-6 shadow-sm"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </div>

        {/* Bottom Left Content */}
        <div className="relative z-10 flex flex-col mt-auto w-[65%]">
          <h3 className="font-ubuntu font-bold text-[36px] text-gray-900 mb-2 leading-none">
            {title}
          </h3>
          <p className="font-ubuntu font-normal text-[15px] text-gray-600 mb-6 leading-snug">
            {description}
          </p>
          <div 
            className="font-ubuntu font-bold text-[12px] tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all"
            style={{ color: linkColor }}
          >
            {linkText}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
