"use client";

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden "
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Background Image */}
      <Image
        src="/assets/banner/mainimage.jpg"
        alt="Dr. Siya Seth"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl" data-aos="fade-up">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
          Empowering <span className="text-blue-400">Lives</span><br />
          Through <span className="text-pink-400">Wellness</span>
        </h1>

        <p
          className="text-white text-lg sm:text-xl mt-6 italic font-light leading-relaxed max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Transforming health and mindset with a holistic approach to life, healing, and self-growth.
        </p>

        <div data-aos="zoom-in" data-aos-delay="500">
          <button className="mt-8 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-lg font-medium transition duration-300 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Google Fonts: Outfit */}
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default HeroSection;
