import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <Hero />
      <Features />
    </div>
  );
}
