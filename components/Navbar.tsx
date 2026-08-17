"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/restaurant', label: 'UK SEASON RESTAURANT' },
    { href: '/rooms', label: 'ROOMS & STAY' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-secondary px-8 py-4 flex items-center justify-between border-b border-[#1f4731]">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/images/Logo_final.png" alt="UK Season Logo" width={100} height={100} className="w-20 xl:w-24 h-auto cursor-pointer invert mix-blend-screen sepia saturate-200 brightness-125 transform scale-[1.7] origin-left" />
        </Link>
      </div>
      
      <div className="hidden lg:flex items-center gap-4 xl:gap-8">
        {navLinks.map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className={`whitespace-nowrap text-xs xl:text-sm font-semibold tracking-wider transition-colors relative py-1 ${
              pathname === link.href ? 'text-accent' : 'text-white hover:text-accent'
            }`}
          >
            {link.label}
            {pathname === link.href && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent" />
            )}
          </Link>
        ))}
      </div>

      <a 
        href="https://wa.me/919897877909?text=Hello%20UK%20Season%20by%20Hotel%20Kamal%20Residency,%20I%20would%20like%20to%20book%20a%20room." 
        target="_blank" 
        rel="noopener noreferrer"
        className="whitespace-nowrap border border-accent text-accent px-4 py-2 xl:px-6 text-xs xl:text-sm font-semibold tracking-wider hover:bg-accent hover:text-primary transition-colors flex items-center gap-2"
      >
        RESERVE NOW
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </nav>
  );
}
