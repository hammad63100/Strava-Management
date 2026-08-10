import ToggleSwitch from "../components/ToggleSwitch";
import IntroSection from "../components/IntroSection";
import HeroSection from "../components/HeroSection";
import ApproachSection from "../components/ApproachSection";
import ExpertiseSection from "../components/ExpertiseSection";
import ProcessSection from "../components/ProcessSection";
import TeamSection from "../components/TeamSection";
import FooterSection from "../components/FooterSection";

export default function Page() {
  return (
    <>
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
            </div>

            <TeamSection />
            <FooterSection />
          </main>
        </div>
      </div>
    </>
  );
}
