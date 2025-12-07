"use client";
import Image from "next/image";
import WaveHand from "../animation/waveHand";
import HeroSectionFooter from "../layout/HeroSectionFooter";

export default function HeroSection() {
    return (
        <>
            <section className="w-full bg-white flex items-center border-b border-[#edededeb] py-10 lg:py-10">

                {/* MAIN CONTAINER (Universal for all screens) */}
                <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:pl-10 xl:px-0 mx-auto flex flex-col lg:flex-row items-start justify-between font-bricolage">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-3/5">

                        {/* Logo + Resume Button */}
                        <div className="flex items-center gap-6 sm:gap-8 mb-10">
                                <div className="w-16 h-16 rounded-full bg-[#FF4500] flex items-center justify-center text-white text-5xl font-bricolage font-bold">
                                A
                            </div>

                    <a
  href="https://drive.google.com/uc?export=download&id=1__YQewl8cX_SBqkF6ir9okT4fzuGLLX7"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="fill-btn font-afacad 
             py-2 px-6 
             sm:py-3 sm:px-8 
             md:py-4 md:px-10 
             lg:py-5 lg:px-12"
>
  <span className="btn-text text-base md:text-xl">Download PDF Resume</span>
  <div className="fill-layer"></div>
</a>


                        </div>

                        {/* Headings + Description */}
                        <div className="pt-10 sm:pt-14 lg:pt-20">

                            <h1 className="text-5xl md:text-7xl font-bold font-bricolage text-black leading-tight">
                                I'm Ashmit{" "}
                                <span className="ml-4 inline-block align-middle">
                                    <WaveHand />
                                </span>
                            </h1>

                            <h2 className="text-5xl md:text-7xl font-bold text-black mt-5 font-bricolage">
                                Full Stack Developer
                            </h2>

                            <p className="font-bricolage text-[#8e8d8de4] font-semibold text-[18px] mt-10 max-w-lg">
                                I’m a detail-oriented Full Stack Developer who enjoys building products
                                that are fast, intuitive, and visually appealing — turning ideas into
                                functional web experiences.

                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <div className="w-full lg:w-2/5 h-[420px] sm:h-[500px] lg:h-[572px] relative mt-10 lg:mt-0 md:top-0 md:right-0 md:absolute overflow-hidden">
                        <Image
                            src="/assets/images/MainPhoto.jpeg"
                            alt="hero"
                            fill
                            className="object-contain object-top"
                            priority
                        />
                    </div>
                </div>
            </section>

            <HeroSectionFooter />
        </>
    );
}
