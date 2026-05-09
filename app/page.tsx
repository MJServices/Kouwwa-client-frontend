/**
 * Home Page
 * KOUWWA homepage with header, hero, feature cards, and experience section
 */

import KioskScreen from "@/components/home/KioskScreen";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import FeatureCards from "@/components/home/FeatureCards";
import ExperienceSection from "@/components/home/ExperienceSection";

export default function Home() {
  return (
    <KioskScreen>
      <Header />
      <HeroSection />
      <FeatureCards />
      <ExperienceSection />
    </KioskScreen>
  );
}
