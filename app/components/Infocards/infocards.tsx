"use client";

import React, { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = [
  {
    title: "Entrepreneur",
    description:
      "Dr. Siya Seth is the founder of Govt. Work Made Easy, helping businesses navigate government projects with ease and efficiency. With 26+ years of experience, she has empowered 500+ businesses ranging from startups to multi-crore enterprises to succeed in the government sector, simplifying complex processes and driving sustainable growth.",
    topImage: "/assets/infocards/author.jpg",
    icon: "/assets/infocards/logo1.png",
  },
  {
    title: "Investor",
    description:
      "Dr. Siya Seth is a strategic investor, backing innovative startups and high-impact ventures. She invests in emerging businesses across education, CSR, and technology, driving long-term value and social impact.",
    topImage: "/assets/infocards/entrepreneur.jpg",
    icon: "/assets/infocards/logo2.png",
  },
  {
    title: "Author",
    description:
      "As an acclaimed author, Dr. Siya Seth shares actionable insights and wisdom from her two-decade-long journey. Her writing simplifies complex government processes, empowering readers to access opportunities and scale with confidence.",
    topImage: "/assets/infocards/investor.jpg",
    icon: "/assets/infocards/logo3.png",
  },
];

function InfoCards() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-lightkblue py-20 px-6 lg:px-24 font-poppins">
      <div className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-midnightblue mb-4">
          Multi-Faceted Visionary
        </h2>
        <p className="text-slategray text-lg max-w-2xl mx-auto">
          Explore the powerful roles that define Dr. Siya Seth’s journey — from entrepreneurship to thought leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10" data-aos="fade-up">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {/* Top Image */}
            <div className="relative w-full h-52 sm:h-60">
              <Image
                src={card.topImage}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Icon */}
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-Blueviolet flex items-center justify-center absolute -top-8 left-6 shadow-lg ring-4 ring-white">
                <Image
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={30}
                  height={30}
                />
              </div>
            </div>

            {/* Content */}
            <div className="pt-14 pb-8 px-6 text-left">
              <h3 className="text-2xl font-bold text-midnightblue mb-2">
                {card.title}
              </h3>
              <p className="text-gunmetalgray text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoCards;
