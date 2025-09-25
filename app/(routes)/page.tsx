import Hero from "@/components/HeroSection";
import CountrySlider from "@/components/CountrySlider";
import PopularDestinations from "@/components/PopularDestinations";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactBanner from "@/components/ContactBanner";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CountrySlider />
      <PopularDestinations />
      <StatsCounter />
      {/* <TestimonialCarousel /> */}
      <Testimonial/>
      <ContactBanner />
    </div>
  );
}
