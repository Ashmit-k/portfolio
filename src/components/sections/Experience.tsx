"use client";
import Image from "next/image";

export default function ExperienceSection() {
  const skills = [
    // Languages
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },

    // Web Basics
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },

    // UI Frameworks
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },

    // ⭐ FIXED TAILWIND ICON (Stable SVG)
    { icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },

    // Mobile App Dev
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },

    // Backend & Cloud
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

    // JS Ecosystem
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

    // DevOps + Tools
    { icon: "https://www.svgrepo.com/show/327408/logo-vercel.svg" }, // Vercel stable SVG
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"}
  ];

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="flex items-center justify-between border-b border-black pb-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bricolage font-bold text-black">
            Experience
          </h2>
          <p className="text-xl font-bold text-[#FF4500]">( 02 )</p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT EXPERIENCE TIMELINE */}
          <div className="flex flex-col gap-10 items-center justify-center">

            {/* JOB 1 */}
            <div className="flex gap-4 items-start">
              <span className="text-black text-xl">◎</span>
              <div>
                <h3 className="text-xl font-semibold font-bricolage text-black">
                  Full Stack Developer — UDEA Solutions LLP
                </h3>
                <p className="text-[#FF4500] font-semibold mt-1">
                  June 2024 — Present
                </p>
                <p className="text-[#666] mt-3 leading-relaxed">
                  Worked across complete product lifecycle — UI/UX, frontend engineering,
                  backend API development, cloud deployments, system optimization &
                  real-world scalable architecture.
                </p>
              </div>
            </div>

            {/* JOB 2 */}
            <div className="flex gap-4 items-start">
              <span className="text-black text-xl">◎</span>
              <div>
                <h3 className="text-xl font-semibold font-bricolage text-black">
                  Master's of Computer Applications
                </h3>
                <p className="text-[#FF4500] font-semibold mt-1">2023 — 2025</p>
                <p className="text-[#666] mt-3 leading-relaxed">
                  Delivered dashboards, e-commerce sites, portfolio systems, API services,
                  and business automation tools using React, Node, Express, Tailwind, and SQL/NoSQL.
                </p>
              </div>
            </div>

            {/* JOB 2 */}
            <div className="flex gap-4 items-start">
              <span className="text-black text-xl">◎</span>
              <div>
                <h3 className="text-xl font-semibold font-bricolage text-black">
                  Bachelor's of Science
                </h3>
                <p className="text-[#FF4500] font-semibold mt-1">2020 — 2023</p>
                <p className="text-[#666] mt-3 leading-relaxed">
                  Delivered dashboards, e-commerce sites, portfolio systems, API services,
                  and business automation tools using React, Node, Express, Tailwind, and SQL/NoSQL.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE SKILL CIRCLE */}
          <div className="flex justify-center">
            <div className="relative w-[600px] h-[700px] rounded-full flex items-center justify-center">

              <div className="absolute w-full h-full grid grid-cols-5 gap-5 p-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition"
                  >
                    <Image
                      src={skill.icon}
                      width={50}
                      height={50}
                      alt="skill"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
