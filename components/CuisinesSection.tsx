import Image from 'next/image';

export default function CuisinesSection() {
  const cuisines = [
    {
      title: "INDIAN",
      desc: "Rich & authentic\nflavors from across India",
      img: "/images/actual/cuisine-hd-1.jpg"
    },
    {
      title: "TANDOOR",
      desc: "Sizzling tandoori delights\ncooked to perfection",
      img: "/images/actual/cuisine-hd-2.jpg"
    },
    {
      title: "CHINESE",
      desc: "A perfect blend of spices\nand asian ingredients",
      img: "/images/actual/cuisine-hd-3.jpg"
    },
    {
      title: "CONTINENTAL",
      desc: "Global flavors with a touch\nof perfection",
      img: "/images/actual/cuisine-hd-4.jpg"
    },
    {
      title: "SOUTH INDIAN",
      desc: "Authentic dosas, idlis\nand flavorful chutneys",
      img: "/images/actual/gallery-food-1.jpg"
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

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {cuisines.map((cuisine, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)] max-w-[320px]">
              <div className="relative w-full aspect-square md:aspect-[4/3] mb-4 overflow-hidden rounded-t-full rounded-b-md shadow-sm">
                <Image
                  src={cuisine.img}
                  alt={cuisine.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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


      </div>
    </section>
  );
}
