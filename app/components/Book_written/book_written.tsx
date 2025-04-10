"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export function BooksWritten() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-lightkblue to-[#b5d8f7] py-28 overflow-hidden font-poppins">
      {/* Vertical Text */}
      <div className="absolute opacity-10 tracking-tighter left-[-260px] top-1/2 -translate-y-1/2 rotate-[-90deg] text-[140px] font-extrabold uppercase z-0 hidden lg:block">
        Siya Seth
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        {/* Book Image */}
        <div className="relative flex justify-center md:justify-start" data-aos="fade-right">
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:scale-[1.04] transition-transform duration-500 ease-in-out">
            <Image
              src="/assets/bookwritten/book1.png"
              alt="Smooth Sailing Through Government Projects"
              width={400}
              height={520}
              className="w-full object-cover rounded-3xl"
            />
            {/* Decorative Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-Blueviolet via-transparent to-transparent opacity-20 pointer-events-none rounded-3xl" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left" data-aos="fade-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold \ s leading-tight mb-6">
            Smooth Sailing <br className="hidden md:block" />
            Through Government Projects
          </h2>
          <p className="text-slategray text-lg sm:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
            Your ultimate guide to simplifying complex government processes and unlocking multi-crore opportunities.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <button className="relative px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-Blueviolet to-midnightblue shadow-xl hover:from-[#6c3ce8] hover:to-[#131f56] transition-all duration-300">
              <span className="relative z-10">GET YOUR COPY</span>
              <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BooksWritten;
