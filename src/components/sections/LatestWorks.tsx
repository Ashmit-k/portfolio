"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type WorkType = "web" | "mobile";

// --------------------------------------
// ⭐ WORKS DATA
// --------------------------------------
const works: {
  title: string;
  image: string;
  link: string;
  type: WorkType;
}[] = [
  {
    title: "Milopure Website",
    image: "/assets/images/Milopure.png",
    link: "https://milopure.com/",
    type: "web",
  },
  {
    title: "SatyShiv",
    image: "/assets/images/Satyshiv.png",
    link: "https://satyshiv.com/",
    type: "web",
  },
  {
    title: "Sellit Logistics - Mobile First App",
    image: "/assets/images/Logistics.png",
    link: "",
    type: "mobile",
  },
  {
    title: "Scan-Eat",
    image: "/assets/images/ScanEat.png",
    link: "https://scan-eat-flame.vercel.app/customer",
    type: "mobile",
  },
];

// --------------------------------------
// ⭐ CARD COMPONENT
// --------------------------------------
function LatestWorkCard({
  title,
  image,
  link,
  type = "web",
}: {
  title: string;
  image: string;
  link: string;
  type: WorkType;
}) {
  return (
    <Link href={link || "#"} target="_blank" className="group cursor-pointer block">

      {/* IMAGE CONTAINER */}
      <div
        className={`
          relative overflow-hidden rounded-2xl transition-all duration-500 shadow-md
          ${type === "mobile" ? "h-[520px]" : "h-[330px]"}
        `}
      >
        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 
          group-hover:scale-110 group-hover:blur-sm"
        />

        {/* CENTER HOVER ROUND ICON */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 
          group-hover:opacity-100 transition-all duration-500">
          <div className="w-16 h-16 bg-[#FF4500] rounded-full flex items-center justify-center 
            text-white text-3xl shadow-xl">
            <FiArrowUpRight />
          </div>
        </div>
      </div>

      {/* TITLE + SMALL ARROW */}
      <div className="flex items-center justify-between mt-4">
        <h3 className="text-xl font-bricolage font-semibold text-black">{title}</h3>
        <FiArrowUpRight className="text-2xl text-black group-hover:text-[#FF4500] transition" />
      </div>
    </Link>
  );
}

// --------------------------------------
// ⭐ MAIN SECTION COMPONENT
// --------------------------------------
export default function LatestWorksSection() {
  return (
    <section className="w-full bg-[#fafafa] py-20 md:py-28 border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-black pb-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bricolage font-bold text-black">
            Latest Works
          </h2>
          <p className="text-xl font-semibold text-[#FF4500]">( 03 )</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((item, index) => (
            <LatestWorkCard
              key={index}
              title={item.title}
              image={item.image}
              link={item.link}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
