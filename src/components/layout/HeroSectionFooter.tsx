import Link from "next/link";
import Image from "next/image";

export default function HeroSectionFooter() {
  return (
    <section className="w-full bg-white flex items-center my-8">
      <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:pl-10 xl:px-0 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10">

          {/* EMAIL */}
          <a href="mailto:ashmitk070@gmail.com" className="flex items-center gap-2 group">
            <Image
              src="/assets/icons/mail-icon.svg"
              width={36}
              height={36}
              alt="email"
              className="group-hover:opacity-80 transition"
            />
            <span className="text-black text-base md:text-2xl font-bricolage hover:text-primary cursor-pointer">
              ashmitk070@gmail.com
            </span>
          </a>

          {/* PHONE */}
          <a href="tel:+91 9889517938" className="flex items-center gap-2 group">
            <Image
              src="/assets/icons/call-icon.svg"
              width={36}
              height={36}
              alt="phone"
              className="group-hover:opacity-80 transition"
            />
            <span className="text-black text-base md:text-2xl font-bricolage hover:text-primary cursor-pointer">
              +91 9889517938
            </span>
          </a>

        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex items-center gap-4 sm:gap-5">

          <a href="https://www.linkedin.com/in/ashmit-katiyar-a938771b9/" className="hover:opacity-80 transition">
            <Image
              src="/assets/icons/linkedin-icon.svg"
              width={36}
              height={36}
              alt="linkedin"
            />
          </a>

          <a href="#" className="hover:opacity-80 transition">
            <Image
              src="/assets/icons/facebook-icon.svg"
              width={36}
              height={36}
              alt="facebook"
            />
          </a>

        </div>
      </div>
    </section>
  )
}