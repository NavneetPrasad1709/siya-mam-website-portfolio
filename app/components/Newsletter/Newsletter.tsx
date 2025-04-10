"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-24 bg-gradient-to-tr from-blue-900 via-blue-800 to-indigo-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          <div
            className="md:col-span-7 text-center md:text-left"
            data-aos="fade-up"
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4 font-poppins">
              Stay in the Loop with <span className="text-blue-300">Latest Blog Insights</span>
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-xl">
              Get fresh articles, stories, and resources delivered straight to your inbox.
              No spam — just valuable content on design, dev, and innovation.
            </p>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full py-4 px-6 pr-16 rounded-full bg-white text-gray-900 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="absolute top-1/2 transform -translate-y-1/2 right-2 p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300">
                <Image
                  src="/assets/newsletter/send.svg"
                  alt="Send"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          <div
            className="md:col-span-5 flex justify-center"
            data-aos="fade-left"
          >
            <Image
              src="/assets/blogs/blog-newsletter-placeholder.jpg" // Replace with your image later
              alt="Newsletter Illustration"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
