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
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 lg:w-1/2 text-left">
        <p className="text-white text-lg tracking-widest font-semibold mb-4 uppercase">
          HOTEL KAMAL RESIDENCY<br/>
          BY UK SEASON
        </p>
        
        <h1 className="text-white text-6xl md:text-7xl font-serif leading-tight mb-4">
          EXPERIENCE<br />
          HOSPITALITY<br />
          <span className="font-script text-accent font-normal text-8xl inline-block mt-2">Like No Other</span>
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

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="border border-accent text-white px-8 py-3 text-sm font-semibold tracking-wider hover:bg-accent hover:text-primary transition-colors flex items-center justify-center gap-3">
            EXPLORE RESTAURANT
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          <button className="border border-[#1f4731] bg-primary text-white px-8 py-3 text-sm font-semibold tracking-wider hover:bg-[#1f4731] transition-colors flex items-center justify-center gap-3">
            EXPLORE ROOMS
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
