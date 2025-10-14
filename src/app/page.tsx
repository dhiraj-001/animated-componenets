"use client";

import { motion } from "framer-motion";
import Navbar from "@/ui/navbar";
import LightRays from "@/ui/lightraysBG";

export default function Home() {
  const items = [
    {
      label: "About",
      bgColor: "rgba(13, 7, 22, 0.8)",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#", ariaLabel: "About Company" },
        { label: "Careers", href: "#", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "rgba(23, 13, 39, 0.8)",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "rgba(39, 30, 55, 0.8)",
      textColor: "#fff",
      links: [
        { label: "Email", href: "#", ariaLabel: "Email us" },
        { label: "Twitter", href: "#", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <>
      <Navbar
        logo="/icon.png"
        logoAlt="Company Logo"
        items={items}
        baseColor="rgba(0, 0, 0, 0.3)"
        menuColor="#fff"
        buttonBgColor="rgba(255, 255, 255, 0.1)"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black font-[Poppins,sans-serif]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />

        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full filter blur-3xl opacity-20 mix-blend-screen"
          animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full filter blur-3xl opacity-15 mix-blend-screen"
          animate={{ x: [100, -80, 100], y: [-60, 60, -60] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundSize: "200% auto",
                backgroundImage:
                  "linear-gradient(to right, #00ffff, #007bff, #ff00ff, #ff0066)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Welcome to <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                Animated UI
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Experience the future of web interfaces with stunning animations and
              interactive elements. Built with cutting-edge technology for
              unparalleled user experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
