import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-secondary px-8 py-4 flex items-center justify-between border-b border-[#1f4731]">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/images/logo.png" alt="UK Season Logo" width={80} height={80} className="w-16 h-auto cursor-pointer" />
        </Link>
      </div>
      
      <div className="hidden lg:flex items-center gap-8">
        <Link href="/" className="text-white text-sm font-semibold tracking-wider hover:text-accent transition-colors">HOME</Link>
        <Link href="/restaurant" className="text-white text-sm font-semibold tracking-wider hover:text-accent transition-colors">UK SEASON RESTAURANT</Link>
        <Link href="/rooms" className="text-white text-sm font-semibold tracking-wider hover:text-accent transition-colors">ROOMS & STAY</Link>
        <Link href="/gallery" className="text-white text-sm font-semibold tracking-wider hover:text-accent transition-colors">GALLERY</Link>
        <Link href="/about" className="text-white text-sm font-semibold tracking-wider hover:text-accent transition-colors">ABOUT US</Link>
        <Link href="/contact" className="text-white text-sm font-semibold tracking-wider hover:text-accent transition-colors">CONTACT</Link>
      </div>

      <button className="border border-accent text-accent px-6 py-2 text-sm font-semibold tracking-wider hover:bg-accent hover:text-primary transition-colors flex items-center gap-2">
        RESERVE NOW
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </nav>
  );
}
