"use client";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    
    <section className="relative bg-[#f0f0f0] py-10 md:py-32 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute top-0 w-full px-9 opacity-100">
        <Image
          src="/assets/images/resume-bg.svg"
          alt="resume background"
          width={1200}
          height={350}
          className="w-full"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
          <h2 className="text-4xl md:text-6xl font-bricolage text-black font-bold">About Me</h2>
          <p className="text-xl text-[#FE4300] font-bricolage">( 01 )</p>
        </div>

        {/* CONTENT ROW */}
        <div className="pt-10 xl:pt-16 flex flex-col lg:flex-row gap-10 items-center justify-between">
          
          {/* LEFT ILLUSTRATION */}
          <div className="w-[303px] h-[440px] hidden lg:flex">
            <Image
              src="/assets/images/about-banner-img.svg"
              alt="about banner"
              width={303}
              height={440}
              className="w-full h-full"
            />
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="w-full lg:max-w-2xl flex-1">

            <p className="text-lg leading-relaxed text-[#444] font-bricolage">
    With a strong foundation in Full Stack Development, I enjoy turning ideas into meaningful, well-designed digital experiences. Over the years, I’ve worked on multiple projects where I combined creativity with clean, scalable code. My goal is always to deliver solutions that are functional, user-friendly, and visually engaging.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-[#D7DCDE]">
              <div>
                <h3 className="text-4xl text-black font-bold font-bricolage">June - Now</h3>
                <p className="text-base md:text-lg text-black">Experience</p>
              </div>

              <div>
                <h3 className="text-4xl text-black font-bold font-bricolage">8+</h3>
                <p className="text-base md:text-lg text-black">Works On Projects</p>
              </div>

              <div>
                <h3 className="text-4xl text-black font-bold font-bricolage">4+</h3>
                <p className="text-base md:text-lg text-black">Projects Completed</p>
              </div>
            </div>

            {/* LANGUAGE SECTION */}
            <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
              
              <div className="flex items-center gap-3.5">
                <Image
                  src="/assets/images/lang-icon.svg"
                  alt="language icon"
                  width={30}
                  height={30}
                />
                <p className="text-base xl:text-xl text-black">Language</p>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-2.5">
                <p className="bg-white py-2 md:py-3.5 px-4 md:px-5 rounded-full text-black text-base xl:text-xl">
                  English
                </p>

                <p className="bg-white py-2 md:py-3.5 px-4 md:px-5 rounded-full text-black text-base xl:text-xl">
                  Hindi
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
