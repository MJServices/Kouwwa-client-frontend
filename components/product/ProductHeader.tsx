"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] flex items-center justify-between px-8 md:px-16 z-50 bg-white border-b border-gray-100">
      {/* Left - Back and Logo */}
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-4 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="font-ubuntu font-bold text-[24px] text-[#C63A3C] tracking-wider uppercase">
            KOUWWA
          </span>
        </Link>
      </div>

      {/* Center - Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <div className="relative flex flex-col items-center">
          <Link href="/menu" className="font-ubuntu font-semibold text-[15px] text-[#C63A3C] py-2">
            Menu
          </Link>
          <div className="absolute bottom-0 w-full h-[2px] bg-[#C63A3C]"></div>
        </div>
        <Link 
          href="/cart" 
          className={`font-ubuntu font-medium text-[15px] py-2 transition-colors relative ${
            pathname === '/cart' 
              ? "text-[#C63A3C] font-bold" 
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
              ? "text-[#C63A3C] font-bold" 
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Orders
          {pathname?.startsWith('/order') && (
            <div className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#C63A3C]"></div>
          )}
        </Link>
      </nav>

      {/* Right - Icons */}
      <div className="flex items-center gap-6">
        <button className="flex items-center justify-center hover:opacity-70 transition-all">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </button>
        <button className="relative flex items-center justify-center hover:opacity-70 transition-all">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#C63A3C] rounded-full border-2 border-white"></div>
        </button>
      </div>
    </header>
  );
}
