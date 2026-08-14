import Image from 'next/image';

export default function CuisinesSection() {
  const cuisines = [
    {
      title: "INDIAN",
      desc: "Rich & authentic\nflavors from across India",
      img: "/images/image2.png" // using placeholders, assuming image2 is a food grid
    },
    {
      title: "TANDOOR",
      desc: "Sizzling tandoori delights\ncooked to perfection",
      img: "/images/image4.png"
    },
    {
      title: "CHINESE",
      desc: "A perfect blend of spices\nand asian ingredients",
      img: "/images/image7.png"
    },
    {
      title: "CONTINENTAL",
      desc: "Global flavors with a touch\nof perfection",
      img: "/images/image9.png"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-serif text-primary mb-2 uppercase tracking-wide">EXPLORE OUR CUISINES</h2>
          <div className="flex items-center gap-4 text-primary">
            <div className="w-12 h-[1px] bg-primary"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cuisines.map((cuisine, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full aspect-square md:aspect-[4/3] mb-4 overflow-hidden rounded-t-full rounded-b-md shadow-sm">
                <Image
                  src={cuisine.img}
                  alt={cuisine.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-primary text-sm font-bold tracking-widest mb-2 mt-4 uppercase">{cuisine.title}</h3>
              <p className="text-gray-500 text-xs text-center whitespace-pre-line leading-relaxed max-w-[200px]">
                {cuisine.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-primary text-white border-2 border-primary px-8 py-3 text-xs font-semibold tracking-widest hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2">
            VIEW FULL MENU
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
