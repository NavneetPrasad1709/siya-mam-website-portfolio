"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const articles = [
    {
      img: "/assets/blog/blog1.jpg",
      category: "Development",
      title: "Mastering React in 2025: Best Practices & Tools",
      desc: "A deep dive into the most efficient ways to build fast, scalable apps with React this year.",
    },
    {
      img: "/assets/blog/blog2.jpg",
      category: "Design",
      title: "UI/UX Trends That Are Dominating 2025",
      desc: "From glassmorphism to neumorphism, explore the styles shaping interfaces this year.",
    },
    {
      img: "/assets/blog/blog3.jpg",
      category: "Productivity",
      title: "How Top Developers Stay Focused and Ship Faster",
      desc: "Unlock habits and techniques that elevate coding productivity to the next level.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Blog Page Heading */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight font-poppins">
          Explore Our <span className="text-indigo-600">Latest Blog Posts</span>
        </h1>
        <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
          Dive into articles crafted by passionate tech minds. Stay updated with the latest
          in development, design, and productivity — all in one place.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
              <Image
                src={article.img}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardBody className="p-6">
              <Typography variant="small" className="text-indigo-500 uppercase font-semibold mb-2 tracking-wider">
                {article.category}
              </Typography>
              <Typography variant="h5" className="mb-2 font-bold text-xl">
                {article.title}
              </Typography>
              <Typography className="text-gray-600 text-base">
                {article.desc}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
