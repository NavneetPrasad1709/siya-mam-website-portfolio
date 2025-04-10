"use client";

import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

interface Data {
  imgSrc: string;
}

const data: Data[] = [
  { imgSrc: "/assets/carousel/financialexpress.svg" },
  { imgSrc: "/assets/carousel/fortuneindia.svg" },
  { imgSrc: "/assets/carousel/hindustantimes.svg" },
  { imgSrc: "/assets/carousel/HouseofLords.svg" },
  { imgSrc: "/assets/carousel/radiocity.svg" },
  { imgSrc: "/assets/carousel/timesofindia.svg" },
  { imgSrc: "/assets/carousel/yourstory.svg" },
];

export default class MultipleItems extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000, once: true });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 700, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    };

    return (
      <section className="py-20 bg-gradient-to-b from-white via-grey500 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-midnightblue mb-12 tracking-tight"
            data-aos="fade-up"
          >
            Trusted by Top Media & Platforms
          </h2>
          <div data-aos="fade-up" data-aos-delay="300">
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i} className="flex items-center justify-center px-4">
                  <Image
                    src={item.imgSrc}
                    alt={`logo-${i}`}
                    width={180}
                    height={100}
                    className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
