"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface QuickLink {
  label: string;
  href: string;
}

interface FollowLink {
  label: string;
  href: string;
  iconSrc: string;
}

const quickLinks: QuickLink[] = [
  { label: "About", href: "/" },
  { label: "Courses", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/" },
];

const followLinks: FollowLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    iconSrc: "/assets/icons/fb.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    iconSrc: "/assets/icons/insta.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    iconSrc: "/assets/icons/linkedin.png",
  },
];

const FooterWithContactForm = () => {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer-bg font-poppins text-white pt-24 pb-12 relative">
      <div className="bg-black bg-opacity-80 py-20 px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let’s Connect & Grow Together!
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Have questions? Want to collaborate? Drop me a message!
          </p>
        </div>

        {/* Form & Contact Info */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gap-10">
          {/* Contact Form */}
          <div
            className="bg-white text-black rounded-2xl shadow-lg flex-1 p-8"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold mb-4">
              Send a <span className="text-Blueviolet">Message</span>
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-Blueviolet"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-Blueviolet"
              />
              <textarea
                rows={4}
                placeholder="Write your message"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-Blueviolet"
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-Blueviolet to-cornflowerblue text-white px-6 py-3 rounded-xl shadow-md hover:from-[#4d3fff] hover:to-[#5d8cfb] hover:scale-105 transition-all duration-300 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="bg-gray-900 rounded-2xl shadow-lg flex-1 p-8 text-white"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

            {/* Email */}
            <div className="mb-6 flex items-start gap-4">
              <Image
                src="/assets/icons/mail.png"
                alt="Email Icon"
                width={24}
                height={24}
                className="mt-1"
              />
              <div>
                <p className="font-medium text-white mb-1">Reach Me at</p>
                <p className="text-cornflowerblue text-lg">support@drsiyaseth.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Image
                src="/assets/icons/phone.png"
                alt="Phone Icon"
                width={24}
                height={24}
                className="mt-1"
              />
              <div>
                <p className="font-medium text-white mb-1">Call Me</p>
                <p className="text-cornflowerblue text-lg">+91 90824 90370</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-cornflowerblue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Short */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <p className="text-gray-300 mb-1">Email: support@drsiyaseth.com</p>
            <p className="text-gray-300">Phone: +91 90824 90370</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {followLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={link.iconSrc}
                    alt={link.label}
                    width={28}
                    height={28}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center mt-16 text-sm text-gray-400">
          © 2025 Dr. Siya Seth | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterWithContactForm;
