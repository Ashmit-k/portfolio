"use client";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 font-bricolage">

        {/* HEADING */}
        <div className="relative mb-10 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            Contact Me
          </h2>
          <p className="absolute right-0 top-1 sm:top-2 text-[#FF4500] font-semibold text-sm sm:text-base">
            ( 04 )
          </p>
        </div>

        <div className="border-b border-black mb-12 sm:mb-16"></div>

        {/* RESPONSIVE GRID → STACKS ON MOBILE */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">

          {/* LEFT → FORM */}
          <form className="w-full md:w-3/5 space-y-8 sm:space-y-10">

            {/* NAME + PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-500 text-sm mb-1">Name *</label>
                <input
                  type="text"
                  required
                  className="text-black w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-gray-500 text-sm mb-1">Phone *</label>
                <input
                  type="text"
                  required
                  className="text-black w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-gray-500 text-sm mb-1">Email *</label>
              <input
                type="email"
                required
                className="text-black w-full border-b border-gray-300 focus:border-black outline-none py-2"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-gray-500 text-sm mb-1">Message *</label>
              <textarea
                required
                className="text-black w-full border-b border-gray-300 focus:border-black outline-none py-2 h-24 sm:h-28 resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                fill-btn font-afacad 
                py-2 px-6 
                sm:py-3 sm:px-8 
                md:py-4 md:px-10 
                lg:py-5 lg:px-12 
                text-base md:text-xl
              "
            >
              <span className="btn-text">Send Now</span>
              <div className="fill-layer"></div>
            </button>
          </form>

          {/* RIGHT → SOCIAL + CONTACT */}
          <div className="w-full md:w-2/5 flex flex-col justify-between items-start md:items-end">

            {/* SOCIAL LINKS */}
            <div className="space-y-4 sm:space-y-6 text-left md:text-right mb-10 md:mb-0">
              <p className="text-gray-500 hover:text-black cursor-pointer transition">LinkedIn</p>
              <p className="text-gray-500 hover:text-black cursor-pointer transition">Facebook</p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="space-y-10 md:flex md:flex-row md:gap-10 mt-6 md:mt-16">

              <div>
                <p className="text-gray-500">Email</p>
                <p className="border-b border-gray-400 w-fit pb-1 text-black font-medium">
                  ashmitk070@gmail.com
                </p>
              </div>

              <div>
                <p className="text-gray-500">Phone</p>
                <p className="border-b border-gray-400 w-fit pb-1 text-black font-medium">
                  +91 9889517938
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
