import Image from 'next/image';

export default function RoomsSection() {
  const rooms = [
    {
      title: "DELUXE ROOM",
      desc: "Comfort & elegance\nwith mountain view",
      img: "/images/actual/img-4.jpg"
    },
    {
      title: "SUPER DELUXE ROOM",
      desc: "Spacious room with\npremium amenities",
      img: "/images/actual/img-4.jpg"
    },
    {
      title: "FAMILY ROOM",
      desc: "Perfect for families\n& long stays",
      img: "/images/actual/img-4.jpg"
    },
    {
      title: "PREMIUM SUITE",
      desc: "Luxury redefined with\nscenic balcony",
      img: "/images/actual/img-4.jpg"
    }
  ];

  return (
    <section className="w-full flex flex-col">
      {/* Rooms Hero */}
      <div className="w-full flex flex-col md:flex-row bg-[#F8F6F0]">
        <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-gradient-to-r from-[#F8F6F0] to-[#EBE7DF]">
          <h4 className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">ROOMS & STAY</h4>
          <h2 className="text-primary text-5xl font-serif mb-6 leading-tight">STAY COMFORTABLE<br/>STAY RELAXED</h2>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-primary"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>

          <p className="text-primary text-sm leading-relaxed mb-10 max-w-md">
            Well-appointed rooms with modern amenities and scenic views for a relaxing stay.
          </p>
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 max-w-sm">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.106-.53-.106a.75.75 0 0 1 .106-1.492l.424.085.424-.085a.75.75 0 0 1 .106 1.492Z" />
              </svg>
              <span className="text-primary text-xs font-semibold">Free WiFi</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>
              <span className="text-primary text-xs font-semibold">Hot Water</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.866 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
              </svg>
              <span className="text-primary text-xs font-semibold">Rooftop Cafe</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-primary text-xs font-semibold">CCTV Security</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <Image
            src="/images/actual/img-6.jpg"
            alt="Room View"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Rooms Cards */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-3xl font-serif text-primary mb-2 uppercase tracking-wide">OUR ROOMS</h2>
            <div className="flex items-center gap-4 text-primary">
              <div className="w-12 h-[1px] bg-primary"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div className="w-12 h-[1px] bg-primary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <div key={index} className="flex flex-col border border-gray-200 rounded-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.img}
                    alt={room.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-grow bg-[#F8F6F0]">
                  <h3 className="text-primary text-sm font-bold tracking-widest mb-3 uppercase">{room.title}</h3>
                  <p className="text-gray-500 text-xs whitespace-pre-line leading-relaxed mb-6 flex-grow">
                    {room.desc}
                  </p>
                  <a 
                    href="https://wa.me/919997877909?text=Hello%20UK%20Season%20by%20Hotel%20Kamal%20Residency,%20I%20would%20like%20to%20book%20a%20room." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-primary text-primary px-4 py-3 md:px-6 md:py-2 text-xs md:text-sm font-semibold tracking-widest hover:bg-primary hover:text-white transition-colors w-full text-center block"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
