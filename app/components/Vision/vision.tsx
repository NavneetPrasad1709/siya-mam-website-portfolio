"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export function VisionSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      icon: "/assets/vision/1.png",
      text: "Dr. Siya Seth is a strategist and execution powerhouse with 26+ years of experience, helping businesses build, grow, and scale with government projects.",
    },
    {
      icon: "/assets/vision/2.png",
      text: "She has worked with major ministries and government bodies across India and globally, helping businesses secure and execute ₹500+ crore worth of projects.",
    },
    {
      icon: "/assets/vision/3.png",
      text: "She has trained entrepreneurs and business owners, equipping them with execution frameworks, financial strategies, and bidding techniques that actually work in the government sector.",
    },
  ];

  return (
    <section className="relative bg-[#F9FAFB] text-[#111827] py-36 px-6 md:px-16 overflow-hidden font-poppins">
      {/* Background Text */}
      <div className="absolute left-[-160px] top-1/2 -translate-y-1/2 rotate-[-90deg] text-[120px] font-extrabold text-gray-300 opacity-10 pointer-events-none hidden lg:block z-0">
        Vision
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#111827]"
          data-aos="fade-down"
        >
          The Vision
        </h2>
        <p
          className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-600 mb-20 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          Transforming Government Contracting with Strategy, Execution & Growth
        </p>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="bg-indigo-100 p-6 rounded-full mb-6 shadow-md">
                <Image src={card.icon} alt="Vision Icon" width={60} height={60} />
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
