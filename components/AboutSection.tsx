import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full flex flex-col lg:flex-row bg-[#F8F6F0]">
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
          <h4 className="text-accent text-sm font-bold tracking-widest mb-4 uppercase">ABOUT US</h4>
          <h2 className="text-primary text-4xl lg:text-5xl font-serif mb-6 leading-tight">HOSPITALITY ROOTED<br/>IN PASSION</h2>
          
          <div className="w-16 h-[1px] bg-accent mb-8"></div>

          <p className="text-gray-700 text-sm leading-relaxed mb-10 max-w-lg">
            Hotel Kamal Residency by UK Season is more than just a place to stay & dine. It&apos;s a commitment to quality, comfort and unforgettable experiences. From our warm hospitality to our delicious cuisine, we ensure every moment of your stay with us is exceptional.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <div>
                <h5 className="text-primary text-xs font-bold tracking-widest mb-1">QUALITY HOSPITALITY</h5>
                <p className="text-gray-500 text-[10px]">Your comfort is our priority</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <div>
                <h5 className="text-primary text-xs font-bold tracking-widest mb-1">MEMORABLE EXPERIENCES</h5>
                <p className="text-gray-500 text-[10px]">Creating moments you&apos;ll cherish</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h5 className="text-primary text-xs font-bold tracking-widest mb-1">BEST LOCATION</h5>
                <p className="text-gray-500 text-[10px]">Scenic beauty all around</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h5 className="text-primary text-xs font-bold tracking-widest mb-1">TRUST & COMMITMENT</h5>
                <p className="text-gray-500 text-[10px]">We care for our guests</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative min-h-[500px]">
          <Image
            src="/images/image8.png"
            alt="Hotel Exterior"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#113120] py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1f4731]">
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <h3 className="text-accent text-4xl lg:text-5xl font-serif mb-2">5+</h3>
              <p className="text-white text-[10px] font-bold tracking-widest uppercase">YEARS OF<br/>EXCELLENCE</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <h3 className="text-accent text-4xl lg:text-5xl font-serif mb-2">10K+</h3>
              <p className="text-white text-[10px] font-bold tracking-widest uppercase">HAPPY<br/>GUESTS</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <h3 className="text-accent text-4xl lg:text-5xl font-serif mb-2">20+</h3>
              <p className="text-white text-[10px] font-bold tracking-widest uppercase">DELICIOUS<br/>CUISINES</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <h3 className="text-accent text-4xl lg:text-5xl font-serif mb-2">4.7</h3>
              <p className="text-white text-[10px] font-bold tracking-widest uppercase">GOOGLE<br/>RATING</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
