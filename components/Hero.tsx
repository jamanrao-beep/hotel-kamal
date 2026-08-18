import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image3.png"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f14]/90 via-[#0a1f14]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 pt-32 lg:w-1/2 text-left">
        <p className="text-white text-lg tracking-widest font-semibold mb-4 uppercase">
          HOTEL KAMAL RESIDENCY<br/>
          BY UK SEASON
        </p>
        
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-4">
          EXPERIENCE<br />
          HOSPITALITY<br />
          <span className="font-script text-accent font-normal text-6xl md:text-7xl lg:text-8xl inline-block mt-2">Like No Other</span>
        </h1>

        <div className="flex items-center gap-4 mb-8 text-accent">
          <div className="w-16 h-[1px] bg-accent"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1h3a2 2 0 012 2v7l-1 1-1-1v-7a1 1 0 00-1-1h-3v1a1 1 0 11-2 0V6H6a1 1 0 00-1 1v7l-1 1-1-1V6a2 2 0 012-2h3V3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <div className="w-16 h-[1px] bg-accent"></div>
        </div>

        <p className="text-gray-200 text-lg md:text-xl font-sans mb-10 max-w-lg leading-relaxed">
          Where fine dining, luxurious stays and warm hospitality come together to create unforgettable memories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <a 
            href="https://wa.me/919997877909?text=Hello%20UK%20Season%20by%20Hotel%20Kamal%20Residency,%20I%20would%20like%20to%20book%20a%20room." 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-accent bg-accent text-primary px-6 py-3 md:px-8 md:py-3 text-xs md:text-sm font-semibold tracking-wider hover:bg-transparent hover:text-white transition-colors flex items-center justify-center gap-3 w-full sm:w-max whitespace-nowrap"
          >
            BOOK ROOM
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
