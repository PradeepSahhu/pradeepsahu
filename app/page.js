"use client";
import { useState } from "react";
import { useEffect } from "react";
import ProjectItem from "./components/components/Home/Project";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navigation = [
    {
      name: "Home",
      route: "./",
    },
    {
      name: "Tech Stack",
      route: "./techStacks",
    },
    {
      name: "Projects",
      route: "./Projects",
    },
    {
      name: "Achievement and Awards",
      route: "./Achievement",
    },
    {
      name: "Contact",
      route: "./Contact",
    },
  ];

  const containerVariants = {
    hide: {
      x: 0,
      y: -100,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hide: {
      x: 0,
      y: -200,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const headingVariant = {
    hide: {
      opacity: 0,
      x: 0,
      y: -200,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="h-screen bg-white dark:bg-black">
      <div className="h-screen w-screen bg-white dark:bg-black">
        <div className="relative h-screen w-screen z-0">
          <img
            className="absolute inset-0 h-full w-screen object-cover brightness-50"
            src="./Home/sc2.jpeg"
            alt="Background"
          />
        </div>

        <motion.div
          className="fixed py-3 md:py-5 top-0 left-0 w-screen z-10 bg-transparent"
          variants={containerVariants}
          initial="hide"
          animate="show"
        >
          <div className="flex justify-between items-center px-4 md:px-8 lg:justify-center lg:gap-x-20">
            <div className="py-2 md:py-5">
              <Link
                href="./Admin"
                className="font-extrabold text-lg md:text-xl lg:text-2xl"
              >
                Pradeep Sahu
              </Link>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-20">
              {Navigation.map((navigate, index) => (
                <motion.div
                  key={index}
                  className="py-5"
                  variants={childVariants}
                >
                  <button className="font-extralight">
                    <Link href={navigate.route}>{navigate.name}</Link>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            className="lg:hidden w-full bg-black bg-opacity-70"
            variants={mobileMenuVariants}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
          >
            {isMenuOpen && (
              <div className="flex flex-col items-center py-2">
                {Navigation.map((navigate, index) => (
                  <div key={index} className="py-3 w-full text-center">
                    <Link
                      href={navigate.route}
                      className="font-extralight text-lg block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {navigate.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <div className="flex justify-center items-center align-middle">
            <hr className="border-1 border-white w-10/12 opacity-40" />
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hide" animate="show">
          <div className="absolute top-0 left-0 flex items-center justify-center h-screen w-screen px-4 md:px-8">
            <div className="text-center">
              <motion.div variants={headingVariant}>
                <p className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Creator Designer and Developer
                </p>
              </motion.div>

              <div className="flex justify-center my-3 mt-6">
                <button className="border-white border px-6 py-2 md:px-8 md:py-3 rounded-xl bg-transparent hover:scale-90 transition-all">
                  <Link href="/Projects">Projects</Link>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
