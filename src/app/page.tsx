import FooterDivider from "@/components/layout/Footer";
import AboutMeSection from "@/components/sections/AboutMeSection";
import ContactSection from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import HeroSection from "@/components/sections/HeroSection";
import LatestWorks from "@/components/sections/LatestWorks";
export default function Home() {
  return <><HeroSection />
  <Experience />
  <LatestWorks />
  <AboutMeSection />
  <ContactSection />
  <FooterDivider/>
  </>;
}