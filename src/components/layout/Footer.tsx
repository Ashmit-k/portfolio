"use client";

export default function FooterDivider() {
  return (
    <footer className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* DIVIDER WITH CENTER CIRCLE */}
        <div className="flex items-center justify-center w-full mb-8 md:mb-10">

          <div className="hidden sm:block flex-1 border-t border-black"></div>

          <div className="mx-4 sm:mx-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF4500] flex items-center justify-center">
            <span className="text-white font-semibold text-lg sm:text-xl font-bricolage">A</span>
          </div>

          <div className="hidden sm:block flex-1 border-t border-black"></div>
        </div>

        {/* CREDITS */}
        <p className="text-center text-gray-500 text-xs sm:text-sm font-bricolage leading-relaxed">
          Designed by{" "}
          <span className="text-[#FF4500] font-medium cursor-pointer">Ashmit Katiyar</span>{" "}
          · All rights reserved{" "}
          <span className="text-[#FF4500] font-medium cursor-pointer">Portfolio</span>
        </p>
      </div>
    </footer>
  );
}
