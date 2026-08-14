import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row gap-16">
        {/* Left Side: Contact Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h4 className="text-accent text-sm font-bold tracking-widest mb-4 uppercase">CONTACT US</h4>
          <h2 className="text-primary text-4xl lg:text-5xl font-serif mb-6 leading-tight">WE&apos;D LOVE TO<br/>HEAR FROM YOU</h2>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-primary"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-10 max-w-md">
            Have a question or need assistance? Reach out to us, we&apos;re here to help!
          </p>
          
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <div>
                <h5 className="text-primary text-xs font-bold tracking-widest mb-1">LOCATION</h5>
                <p className="text-gray-500 text-sm">Aradot, Mussoorie Road,<br/>Chamba, Tehri, Uttarakhand</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <div>
                <h5 className="text-primary text-xs font-bold tracking-widest mb-1">PHONE</h5>
                <p className="text-gray-500 text-sm">+91 9897877909<br/>+91 6316861348</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <div>
                <h5 className="text-primary text-xs font-bold tracking-widest mb-1">EMAIL</h5>
                <p className="text-gray-500 text-sm">ukseason.kamalhotel@gmail.com</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div>
                <h5 className="text-primary text-xs font-bold tracking-widest mb-1">TIMINGS</h5>
                <p className="text-gray-500 text-sm">07:00 AM - 11:00 PM<br/>(Open All Days)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form and Map */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div className="bg-[#F8F6F0] p-10 rounded-sm mb-8 relative">
            <h3 className="text-primary text-sm font-bold tracking-widest mb-8 uppercase">SEND US A MESSAGE</h3>
            
            <form className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:border-primary" />
                <input type="email" placeholder="Your Email" className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:border-primary" />
              </div>
              <input type="tel" placeholder="Your Phone" className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:border-primary" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:border-primary resize-none"></textarea>
              
              <button type="button" className="bg-primary text-white py-4 mt-2 text-xs font-semibold tracking-widest hover:bg-[#1f4731] transition-colors flex items-center justify-center gap-2">
                SEND MESSAGE
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>

          <div className="relative w-full h-[150px] bg-[#f0eee6] rounded-sm overflow-hidden flex items-center justify-center">
            {/* Map Placeholder Graphic */}
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-600 mx-auto mb-2">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">UK SEASON RESTAURANT</span>
            </div>
            
            {/* Simple road line decoration */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white transform -rotate-6"></div>
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white transform rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
