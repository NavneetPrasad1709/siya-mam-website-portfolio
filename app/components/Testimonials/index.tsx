"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// DATA
interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    imgSrc: "/assets/testimonial/user.svg",
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    imgSrc: "/assets/mentor/user2.png",
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    imgSrc: "/assets/mentor/user3.png",
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    imgSrc: "/assets/mentor/user1.png",
  },
];

export default class MultipleItems extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000, once: true });
  }

  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 600,
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 2, slidesToScroll: 1, dots: false },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1, dots: false },
        },
      ],
    };

    return (
      <section
        id="testimonial"
        className="bg-gradient-to-br from-[#f5f7fa] to-[#e8f0f9] py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading Section */}
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight font-poppins">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our clients love the impact our work has made. Here's what they
              have to say about partnering with us.
            </p>
          </div>

          {/* Carousel Section */}
          <Slider {...settings}>
            {postData.map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white mx-4 p-6 rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                  {/* Image */}
                  <div className="flex items-center space-x-4 mb-5">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.profession}</p>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    “{item.comment}”
                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                    <StarIcon className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}
