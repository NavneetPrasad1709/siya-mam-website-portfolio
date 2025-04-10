"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutDrSiyaSeth() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-white text-midnightblue px-6 py-24 lg:px-32 overflow-hidden font-poppins">

      {/* Left Accent Strip */}
      <div className="absolute inset-y-0 left-0 w-16 bg-midnightblue z-0 hidden sm:block" />

      {/* Decorative Circles */}
      <div className="hidden lg:flex absolute top-8 left-[100px] gap-3 z-10">
        <div className="w-4 h-4 rounded-full bg-Blueviolet"></div>
        <div className="w-6 h-6 border-4 border-Blueviolet rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16" data-aos="fade-up">
        
        {/* Image Section */}
        <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-md" data-aos="fade-right">
          <Image
            src="/assets/about/aboutsectionimage.jpg"
            alt="Dr. Siya Seth"
            width={400}
            height={500}
            className="rounded-3xl shadow-2xl object-cover w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-2xl text-center lg:text-left" data-aos="fade-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-midnightblue mb-2 tracking-tight">
            Who is
          </h2>
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-Blueviolet relative z-10 leading-tight">
              Dr. Siya Seth
            </h1>
            <span className="absolute left-0 bottom-2 w-full h-2 bg-semiblueviolet z-0 rounded-lg"></span>
          </div>
          <p className="text-lg sm:text-xl text-slategray leading-relaxed tracking-tight">
            Dr. Siya Seth is a visionary leader with 20+ years of experience driving transformative change in governance. She’s collaborated with 5 central ministries, 11 state departments, and 29 major corporations through CSR innovations.
            <br /><br />
            A strategic advisor, author, and speaker — her insights have been featured in Forbes India, Fortune India, and more. Her journey embodies impact, purpose, and leadership at scale.
          </p>
        </div>
      </div>

      {/* Vertical 'ABOUT' text */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[140px] xl:text-[180px] font-extrabold text-grey500 opacity-10 pointer-events-none leading-none tracking-tighter">
        ABOUT
      </div>
    </section>
  );
}
