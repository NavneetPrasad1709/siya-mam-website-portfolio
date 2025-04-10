"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-Blueviolet text-white p-4 rounded-full shadow-xl hover:bg-ultramarine transition-all duration-300"
        onClick={() => setShowPopup(true)}
        aria-label="Open Contact Form"
      >
        💬
      </button>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-60 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="backdrop-blur-xl bg-white/90 w-full max-w-4xl rounded-2xl overflow-hidden relative shadow-2xl border border-grey500"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-darkgray text-3xl font-bold hover:text-red transition-all"
                onClick={() => setShowPopup(false)}
              >
                ×
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Contact Form */}
                <div className="p-8 flex-1 bg-lightkblue">
                  <h3 className="text-3xl font-bold mb-4 text-Blueviolet">
                    Let’s Connect & Grow Together!
                  </h3>
                  <p className="text-slategray mb-6 font-medium">
                    Have questions? Want to collaborate? Drop me a message!
                  </p>
                  <form className="space-y-5">
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 border border-grey500 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-Blueviolet"
                    />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-grey500 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-Blueviolet"
                    />
                    <textarea
                      rows={4}
                      placeholder="Write your message"
                      className="w-full px-4 py-3 border border-grey500 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-Blueviolet"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-Blueviolet text-white px-6 py-3 rounded-xl hover:bg-ultramarine transition-all duration-300"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="bg-midnightblue text-white p-8 flex-1">
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

                  <div className="mb-6 flex items-start gap-4">
                    <Image
                      src="/assets/icons/mail.png"
                      alt="Email Icon"
                      width={24}
                      height={24}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-medium mb-1">Reach Me at</p>
                      <p className="text-cornflowerblue text-lg">
                        support@drsiyaseth.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Image
                      src="/assets/icons/phone.png"
                      alt="Phone Icon"
                      width={24}
                      height={24}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-medium mb-1">Call Me</p>
                      <p className="text-cornflowerblue text-lg">
                        +91 90824 90370
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButton;
