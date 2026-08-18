"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/restaurant', label: 'UK SEASON RESTAURANT' },
    { href: '/rooms', label: 'ROOMS & STAY' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-secondary px-4 lg:px-8 py-2 flex items-center justify-between border-b border-[#1f4731]">
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src="/images/Logo_golden_transparent.png" alt="UK Season Logo" width={160} height={160} className="w-20 md:w-24 xl:w-28 h-auto cursor-pointer drop-shadow-md" />
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-4 xl:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`whitespace-nowrap text-xs xl:text-sm font-semibold tracking-wider transition-colors relative py-1 ${pathname === link.href ? 'text-accent' : 'text-white hover:text-accent'
              }`}
          >
            {link.label}
            {pathname === link.href && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent" />
            )}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex">
        <a
          href="https://wa.me/919997877909?text=Hello%20UK%20Season%20by%20Hotel%20Kamal%20Residency,%20I%20would%20like%20to%20book%20a%20room."
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap border border-accent text-accent px-4 py-2 xl:px-6 text-xs xl:text-sm font-semibold tracking-wider hover:bg-accent hover:text-primary transition-colors flex items-center gap-2"
        >
          RESERVE NOW
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Hamburger Icon */}
      <button 
        className="lg:hidden text-white hover:text-accent transition-colors p-2"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-secondary z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col border-l border-[#1f4731] shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#1f4731]">
          <span className="text-accent font-semibold tracking-widest text-sm">MENU</span>
          <button 
            className="text-white hover:text-accent transition-colors p-2"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col py-6 px-4 gap-6 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`text-sm font-semibold tracking-wider transition-colors ${
                pathname === link.href ? 'text-accent' : 'text-white hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="mt-8 pt-6 border-t border-[#1f4731]">
            <a
              href="https://wa.me/919997877909?text=Hello%20UK%20Season%20by%20Hotel%20Kamal%20Residency,%20I%20would%20like%20to%20book%20a%20room."
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="w-full justify-center whitespace-nowrap border border-accent bg-accent text-primary px-4 py-3 text-sm font-semibold tracking-wider hover:bg-transparent hover:text-white transition-colors flex items-center gap-2"
            >
              RESERVE NOW
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
