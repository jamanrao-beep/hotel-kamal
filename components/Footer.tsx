import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1f14] pt-16 pb-8 border-t border-[#1f4731]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <Image src="/images/Logo_golden_transparent.png" alt="UK Season Logo" width={300} height={300} className="w-56 xl:w-72 h-auto mb-6 drop-shadow-md" />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h5 className="text-accent text-xs font-bold tracking-widest mb-6 uppercase">QUICK LINKS</h5>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-gray-400 text-xs hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/restaurant" className="text-gray-400 text-xs hover:text-accent transition-colors">UK Season Restaurant</Link></li>
              <li><Link href="/rooms" className="text-gray-400 text-xs hover:text-accent transition-colors">Rooms & Stay</Link></li>
              <li><Link href="/gallery" className="text-gray-400 text-xs hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="text-gray-400 text-xs hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 text-xs hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <h5 className="text-accent text-xs font-bold tracking-widest mb-6 uppercase">OUR SERVICES</h5>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-400 text-xs">Multi Cuisine Restaurant</li>
              <li className="text-gray-400 text-xs">Comfortable Rooms</li>
              <li className="text-gray-400 text-xs">Rooftop Cafe</li>
              <li className="text-gray-400 text-xs">Banquet Hall</li>
              <li className="text-gray-400 text-xs">Ample Parking</li>
              <li className="text-gray-400 text-xs">Room Service</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-1">
            <h5 className="text-accent text-xs font-bold tracking-widest mb-6 uppercase">FOLLOW US</h5>
            <div className="flex gap-4">
              <Link href="#" className="w-8 h-8 rounded-full border border-[#1f4731] flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-[#1f4731] flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-[#1f4731] flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-1">
            <h5 className="text-accent text-xs font-bold tracking-widest mb-6 uppercase">GET IN TOUCH</h5>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-accent mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <p className="text-gray-400 text-xs">+91 9997877909</p>
              </div>
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-accent mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <p className="text-gray-400 text-xs">ukseason.kamalhotel@gmail.com</p>
              </div>
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-accent mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className="text-gray-400 text-xs">Arakot, Chamba, Kanatal Masoorie Road,<br/>Tehri Gharwal 249145, Uttarakhand</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1f4731] text-center flex justify-center items-center gap-4">
          <p className="text-gray-500 text-[10px]">© 2026 UK Season Restaurant by Hotel Kamal Residency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
