"use client"
import FooterDivider from "@/components/layout/Footer";
import AboutMeSection from "@/components/sections/AboutMeSection";
import ContactSection from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import HeroSection from "@/components/sections/HeroSection";
import LatestWorks from "@/components/sections/LatestWorks";
import { motion, useScroll } from "framer-motion";
export default function Home() {

  const  scrollYProgress  = useScroll().scrollYProgress;
  return <>
    <motion.div
      style={
        {
          scaleX: scrollYProgress
        }
      }
      className="bg-[#FF4500] origin-left w-full h-[6px] z-100 top-0 left-0 fixed"
    ></motion.div>
    <HeroSection />
    <Experience />
    <LatestWorks />
    <AboutMeSection />
    <ContactSection />
    <FooterDivider />

  </>
}