"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const MediaCoverage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#f8fafc] to-[#eef2f7]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight font-poppins"
          data-aos="fade-up"
        >
          <span className="text-blue-700">Featured In</span> the Nation’s Most{" "}
          <span className="text-blue-700">Trusted Publications</span>
        </h2>

        <p
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our impact is making headlines. Discover where our story has been told
          and who’s talking about us.
        </p>

        {/* Logo Image Grid */}
        <div
          className="mt-14"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Image
            src="/assets/Companyimage/publications.jpg"
            alt="Media Logos"
            width={1500}
            height={800}
            className="mx-auto w-full max-w-5xl h-auto rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
