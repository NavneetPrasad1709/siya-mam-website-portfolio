"use client";

import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}

const postData: DataType[] = [
  {
    heading: "Full Stack Modern",
    heading2: "JavaScript",
    name: "Colt Stelle",
    imgSrc: "/assets/courses/course1.png",
    students: 150,
    classes: 12,
    price: 20000,
    rating: 4.7,
  },
  {
    heading: "Design System",
    heading2: "with React",
    name: "Colt Stelle",
    imgSrc: "/assets/courses/course2.png",
    students: 130,
    classes: 12,
    price: 25000,
    rating: 4.7,
  },
  {
    heading: "Design Banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: "/assets/courses/course3.png",
    students: 120,
    classes: 12,
    price: 15000,
    rating: 4.7,
  },
];

export default class MultipleItems extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000, once: true });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 700,
      cssEase: "ease-in-out",
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 2, slidesToScroll: 1 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
      ],
    };

    return (
      <div
        id="courses"
        className="bg-lightkblue py-24"
        style={{ fontFamily: "'Urbanist', sans-serif" }}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Header */}
          <div
            className="sm:flex justify-between items-end mb-14"
            data-aos="fade-right"
          >
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-midnightblue leading-tight tracking-tight">
              Popular <span className="text-Blueviolet">Courses</span>
            </h3>
            <Link
              href="/courses"
              className="text-Blueviolet text-lg font-semibold mt-6 sm:mt-0 hover:underline"
            >
              Explore all courses →
            </Link>
          </div>

          {/* Slider */}
          <Slider {...settings}>
            {postData.map((item, i) => (
              <div key={i} data-aos="zoom-in-up" className="px-4">
                <div className="bg-white border border-grey500 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.imgSrc}
                      alt={item.heading}
                      width={389}
                      height={262}
                      className="w-full object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-Blueviolet text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      Consultants
                    </span>
                    <span className="absolute top-4 right-4 bg-white text-Blueviolet text-sm font-semibold px-3 py-1 rounded-full flex items-center shadow">
                      <StarIcon className="w-4 h-4 text-gold mr-1" />
                      {item.rating}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl sm:text-2xl font-bold text-midnightblue leading-snug mb-1">
                      {item.heading}
                    </h4>
                    <h5 className="text-Blueviolet text-lg font-semibold mb-3">
                      {item.heading2}
                    </h5>

                    <p className="text-sm text-slategray mb-6 leading-relaxed">
                      Structure a profitable & scalable gov. contracting business with step-by-step training.
                    </p>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium italic text-darkgray">
                        Enroll at just
                      </span>
                      <span className="text-Blueviolet text-xl font-bold">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <button className="bg-semiblueviolet text-Blueviolet px-6 py-2 rounded-full font-semibold text-sm hover:bg-Blueviolet hover:text-white transition shadow-lg">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Urbanist Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </div>
    );
  }
}
