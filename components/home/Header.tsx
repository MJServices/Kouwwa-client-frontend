"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Header
 * Top navigation bar with logo, menu items, and action icons
 */

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between h-[80px] px-8 md:px-16 z-50 bg-white">
      {/* Left - KOUWWA Logo with white block */}
      <Link href="/" className="flex items-center h-full bg-white px-8 -ml-8 md:-ml-16 pr-14 ">
        <span className="font-ubuntu font-bold text-[24px] text-[#C63A3C] tracking-wider">
          KOUWWA
        </span>
      </Link>

      {/* Center - Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <div className="relative flex flex-col items-center">
          <Link href="/menu" className="font-ubuntu font-semibold text-[15px] text-gray-900 py-2 hover:text-[#C63A3C] transition-colors">
            Menu
          </Link>
          <div className="absolute bottom-0 w-8 h-[2px] bg-[#C63A3C]"></div>
        </div>
        <Link 
          href="/cart" 
          className={`font-ubuntu font-medium text-[15px] py-2 transition-colors relative ${
            pathname === '/cart' 
              ? "text-gray-900 font-bold" 
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Cart
          {pathname === '/cart' && (
            <div className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#C63A3C]"></div>
          )}
        </Link>
        <Link 
          href="/order" 
          className={`font-ubuntu font-medium text-[15px] py-2 transition-colors relative ${
            pathname?.startsWith('/order') 
              ? "text-gray-900 font-bold" 
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Orders
          {pathname?.startsWith('/order') && (
            <div className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#C63A3C]"></div>
          )}
        </Link>
      </nav>

      {/* Right - Action Icons */}
      <div className="flex items-center gap-6">
        {/* Language/Globe Icon */}
        <button className="flex items-center justify-center transition-all bg-transparent border-none cursor-pointer hover:opacity-70">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </button>

        {/* Cart Icon */}
        <button className="flex items-center justify-center transition-all bg-transparent border-none cursor-pointer hover:opacity-70">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </button>

        {/* Profile Icon */}
        <button className="flex items-center justify-center transition-all w-[38px] h-[38px] rounded-full bg-[#1F2937] border-none cursor-pointer hover:bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
