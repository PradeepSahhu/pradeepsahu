"use client";
import { useState } from "react";
import { useEffect } from "react";
import ProjectItem from "./components/components/Home/Project";
import Link from "next/link";
import { delay, motion } from "framer-motion";

export default function Home() {
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
  return (
    <div className=" h-screen bg-white dark:bg-black">
      <div className="h-screen w-screen bg-white dark:bg-black">
        <div className="relative h-screen w-screen z-0">
          <img
            className="absolute inset-0 h-full w-screen object-cover brightness-50"
            src="./Home/sc2.jpeg"
            alt="Background"
          />
        </div>

        <motion.div
          className="fixed  py-5  top-0 left-0 w-screen z-10 bg-transparent "
          variants={containerVariants}
          initial="hide"
          animate="show"
        >
          <div
            className={`flex gap-x-20 justify-center overflow-hidden transition-all duration-500 `}
          >
            <div className="py-5 ">
              <Link
                href="./Admin"
                className="py-5  font-extrabold text-2xl  flex-left "
              >
                Pradeep Sahu
              </Link>
            </div>
            {/* <div className="py-5 ">
              <button className=" font-extralight   ">Home</button>
            </div> */}

            {Navigation.map((navigate) => (
              <motion.div className="py-5 " variants={childVariants}>
                <button className=" font-extralight   ">
                  <Link href={`${navigate.route}`}>{`${navigate.name}`}</Link>
                </button>
              </motion.div>
            ))}
            {/* <div className="py-5 ">
              <button className=" font-extralight   ">
                <Link href="/techStacks">Tech Stack</Link>
              </button>
            </div> */}
            {/* <div className="py-5 cursor">
              <Link className="font-extralight" href="/Projects">
                Projects
              </Link>
            </div>
            <div className="py-5 ">
              <Link href="./Contact" className="font-extralight   ">
                Contact
              </Link>
            </div> */}
          </div>
          <div className="flex justify-center items-center align-middle">
            <hr className="border-1 border-white w-10/12 opacity-40" />
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hide" animate="show">
          <div className="absolute top-0 left-0 flex items-center justify-center h-screen w-screen">
            <div className="">
              <motion.div variants={headingVariant}>
                <p className="font-extrabold text-6xl">
                  Creator Designer and Developer
                </p>
              </motion.div>

              <div className="flex justify-center my-3">
                <button className="border-[#FFFF] border-[1px] px-8 py-3 rounded-xl bg-transparent  hover:scale-90 transition-all ">
                  <Link
                    className="hover:translate-x-10 hover:transition-transform hover:translate-y-8 hover:tra"
                    href="/Projects"
                  >
                    Projects
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
