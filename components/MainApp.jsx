"use client";

import { useView } from "./ViewContext";
import ToggleSwitch from "./ToggleSwitch";
import IntroSection from "./IntroSection";
import HeroSection from "./HeroSection";
import ApproachSection from "./ApproachSection";
import ExpertiseSection from "./ExpertiseSection";
import ProcessSection from "./ProcessSection";
import SolutionsSection from "./SolutionsSection";
import TeamSection from "./TeamSection";
import FooterSection from "./FooterSection";
import BrandsSection from "./BrandsSection";

export default function MainApp() {
  const { activeView, mounted } = useView();

  if (!mounted) {
    return <div className="min-h-screen bg-[#E6DEC8]" />;
  }

  return (
    <>
      <ToggleSwitch />

      <div
        className="transition-opacity duration-700 ease-in-out"
        style={{
          opacity: activeView === "agency" ? 1 : 0,
          pointerEvents: activeView === "agency" ? "auto" : "none",
          display: activeView === "agency" ? "block" : "none",
        }}
      >
        <div id="__nuxt">
          <div>
            <IntroSection />
            <main>
              <div id="agence" className="relative w-full">
                <div className="agenceMain bg-[var(--orange)]">
                  <HeroSection />
                  <ApproachSection />
                  <ExpertiseSection />
                </div>
                <ProcessSection />
                <SolutionsSection />
              </div>
              <TeamSection />
            </main>
          </div>
        </div>
      </div>

      <div
        className="transition-opacity duration-700 ease-in-out"
        style={{
          opacity: activeView === "brands" ? 1 : 0,
          pointerEvents: activeView === "brands" ? "auto" : "none",
          display: activeView === "brands" ? "block" : "none",
        }}
      >
        <BrandsSection />
      </div>

      <FooterSection />
    </>
  );
}
