import Image from 'next/image';

export default function GallerySection() {
  // Using placeholders. In reality, these would be the diverse images from the Word doc
  const images = [
    { src: "/images/aboutus_header.png", className: "col-span-2 row-span-2" },
    { src: "/images/actual/hq-4.jpeg", className: "col-span-1 row-span-1" },
    { src: "/images/actual/hq-3.jpeg", className: "col-span-1 row-span-1" },
    { src: "/images/actual/hq-1.jpeg", className: "col-span-1 row-span-1" },
    { src: "/images/actual/gallery-food-1.jpg", className: "col-span-1 row-span-1" },
    { src: "/images/actual/gallery-food-2.jpg", className: "col-span-1 row-span-1" },
    { src: "/images/actual/gallery-food-3.jpg", className: "col-span-1 row-span-1" },
    { src: "/images/actual/gallery-food-4.jpg", className: "col-span-2 row-span-2" },
    { src: "/images/image_1.jpeg", className: "col-span-1 row-span-1" },
    { src: "/images/image_2.jpeg", className: "col-span-1 row-span-1" },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-3xl font-serif text-primary mb-2 uppercase tracking-wide">OUR GALLERY</h2>
          <div className="flex items-center gap-4 text-primary">
            <div className="w-12 h-[1px] bg-primary"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
          {images.map((item, index) => (
            <div key={index} className={`relative w-full h-full group overflow-hidden cursor-pointer rounded-xl ${item.className}`}>
              <Image
                src={item.src}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
