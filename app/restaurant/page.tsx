import RestaurantSection from "@/components/RestaurantSection";
import CuisinesSection from "@/components/CuisinesSection";

export default function RestaurantPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <RestaurantSection />
      <CuisinesSection />
    </div>
  );
}
