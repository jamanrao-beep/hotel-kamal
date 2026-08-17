import Image from 'next/image';

export default function RestaurantSection() {
  const features = [
    {
      title: "FRESH INGREDIENTS",
      desc: "Handpicked for quality & taste",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1f4731] mx-auto mb-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    },
    {
      title: "EXPERT CHEFS",
      desc: "Experienced culinary professionals",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1f4731] mx-auto mb-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      title: "HYGIENIC KITCHEN",
      desc: "Maintaining the highest standards",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1f4731] mx-auto mb-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      title: "EXCELLENT SERVICE",
      desc: "Hospitality that makes you feel at home",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1f4731] mx-auto mb-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-primary flex flex-col md:flex-row relative">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
        <h4 className="text-accent text-sm font-semibold tracking-widest mb-2 uppercase">OUR RESTAURANT</h4>
        <h2 className="text-white text-5xl font-serif mb-6">UK SEASON<br/>RESTAURANT</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-16 max-w-md">
          A culinary journey like no other. From authentic Indian flavors to global favorites, our multi-cuisine menu is crafted to satisfy every palate.
        </p>
        
        {/* White background features grid at the bottom of the text */}
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/actual/img-7.jpg"
          alt="UK Season Restaurant Food"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Features overlap at the bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-white hidden md:block">
        <div className="grid grid-cols-4 max-w-7xl mx-auto py-8 px-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-4">
              {feature.icon}
              <h3 className="text-primary text-xs font-semibold tracking-widest mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-[10px] leading-relaxed max-w-[150px] mx-auto">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile features (stacked) */}
      <div className="w-full bg-white block md:hidden">
        <div className="grid grid-cols-2 gap-4 py-8 px-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4">
              {feature.icon}
              <h3 className="text-primary text-xs font-semibold tracking-widest mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-[10px] leading-relaxed mx-auto">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
