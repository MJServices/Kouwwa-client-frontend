"use client";

import Link from "next/link";

export default function OrderHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between h-[90px] px-8 md:px-16 z-50 bg-transparent">
      {/* Left - Icon and Logo */}
      <Link href="/" className="flex items-center gap-4 group hover:opacity-90 transition-opacity">
        <div className="flex items-center justify-center w-[46px] h-[46px] bg-[#C63A3C] rounded-full shadow-sm group-hover:scale-105 transition-transform">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
            <path d="M7 2v20"/>
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
          </svg>
        </div>
        <span className="font-ubuntu font-bold text-[26px] text-[#C63A3C]">
          Kouwwa
        </span>
      </Link>

      {/* Center - Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <Link href="/menu" className="font-ubuntu font-semibold text-[16px] text-[#2C415B] py-2 hover:text-[#C63A3C] transition-colors">
          Menu
        </Link>
        <button className="font-ubuntu font-semibold text-[16px] text-[#2C415B] bg-transparent border-none cursor-pointer py-2 hover:opacity-80 transition-opacity">
          Orders
        </button>
      </nav>

      {/* Right - Action Icon */}
      <div className="flex items-center">
        <button className="flex items-center justify-center transition-all bg-transparent border-none cursor-pointer hover:opacity-70">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C415B" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
