"use client";

import Heading from "@/components/Heading/Heading.jsx";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      <div className={`grid grid-cols-4 bg-black text-white z-0`}>
        <div className="col-start-2 col-span-2 mt-8">
          <Heading />
        </div>
      </div>

      {showOptions && (
        <div
          className={`absolute z-10 w-10/12 ${
            showOptions ? "backdrop-blur-sm" : ""
          }`}
        >
          <div className="relative w-[600px] h-[900px] mx-auto my-2">
            <div className="absolute transform translate-x-[400px] translate-y-[280px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 px-3 py-2 rounded-xl shadow-md"
              >
                View Profile
              </motion.button>
            </div>

            <div className="absolute transform translate-x-[450px] translate-y-[350px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 px-3 py-2 rounded-xl shadow-md"
              >
                View Projects
              </motion.button>
            </div>

            <div className="absolute transform translate-x-[500px] translate-y-[220px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 px-3 py-2 rounded-xl shadow-md"
              >
                View Certifications
              </motion.button>
            </div>

            <div className="absolute transform translate-x-[650px] translate-y-[290px]">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black px-3 py-2 rounded-xl shadow-md text-5xl"
                onClick={() => setShowOptions(!showOptions)}
              >
                X
              </motion.button>
            </div>

            <div className="absolute transform translate-x-[600px] translate-y-[400px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 px-3 py-2 rounded-xl shadow-md"
              >
                Contact Me
              </motion.button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16">
        <div
          className={`grid grid-cols-4 bg-black text-white z-0 ${
            showOptions ? "backdrop-blur-3xl" : ""
          }`}
        >
          <div className="col-start-2 col-span-2 mt-16">
            <div>
              <p className="font-bold text-xl">
                Hi, my name is{" "}
                <span className="text-blue-600">Pradeep Sahu.</span>
                <p className="from-blue-600 to-green-600 bg-clip-text text-transparent bg-gradient-to-br">
                  プラディープ・サフ
                </p>
              </p>

              <p>
                I m a final-year Computer Science Engineering student with a
                deep passion for technology, coding, and solving real-world
                problems through impactful software.
              </p>
            </div>
          </div>

          <div className="grid col-start-2 col-span-2">
            <div className="flex">
              <div className="pt-10">
                <p>
                  I love working on challenging projects that blend creativity
                  with logic—from backend systems and automation to user-focused
                  features.
                </p>
              </div>

              <div>
                <img
                  className="w-60 cursor-pointer"
                  src="./photo.jpeg"
                  onClick={() => setShowOptions(!showOptions)}
                />
                <div>
                  <p className="text-gray-500 text-[10px]">
                    click on the photo to View
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-start-2 col-span-2 mt-16">
            <div>
              <p>
                I m constantly learning and building, with a focus on clean
                code, efficient systems, and meaningful digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 mt-10">
          <div className="col-start-2 col-end-3">
            <p className="font-bold">Contact me : </p>
            <div className="flex flex-col">
              <span className="text-blue-600">
                official.pradeepsahu@gmail.com
              </span>
              <span className="text-blue-600">+91-9599369647</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
