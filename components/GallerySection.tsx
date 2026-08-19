import Image from 'next/image';

export default function GallerySection() {
  // Using placeholders. In reality, these would be the diverse images from the Word doc
  const images = [
    "/images/actual/hq-2.jpeg",
    "/images/actual/hq-4.jpeg",
    "/images/actual/hq-3.jpeg",
    "/images/actual/hq-1.jpeg",
    "/images/actual/gallery-food-1.jpg",
    "/images/actual/gallery-food-2.jpg",
    "/images/actual/gallery-food-3.jpg",
    "/images/actual/gallery-food-4.jpg",
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative w-full aspect-square group overflow-hidden cursor-pointer">
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
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
