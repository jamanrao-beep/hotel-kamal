import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RestaurantSection from "@/components/RestaurantSection";
import CuisinesSection from "@/components/CuisinesSection";
import RoomsSection from "@/components/RoomsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-white">
      <Navbar />
      <Hero />
      <Features />
      <RestaurantSection />
      <CuisinesSection />
      <RoomsSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
