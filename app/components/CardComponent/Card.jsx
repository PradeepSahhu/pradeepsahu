"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Card({
  goto,
  title,
  description,
  githublink,
  link,
  imageSrc,
  allData,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-72 h-60 overflow-hidden rounded-xl cursor-pointer group mx-4 my-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img
        className="absolute inset-0 w-fit h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        src={imageSrc ? imageSrc : "./Home/sc2.jpeg"}
        alt="Project"
      />

      {/* Overlay with Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white px-4 text-center transition-opacity"
      >
        <h3 className="text-lg font-bold">{title ? title : "Project Name"}</h3>
        <p className="text-xs mt-2">
          {description
            ? description.split(" ").slice(0, 15).join(" ") +
              (description.split(" ").length > 15 ? "..." : "")
            : "Brief project description. Hover to explore more."}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-3">
          <a
            href={githublink ? githublink : "https://github.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 flex items-center"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={link ? link : "https://deployed-project.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-orange-700 transition"
          >
            Visit
          </a>
        </div>

        {/* "Know More" Link */}
        <div className="mt-3">
          <Link href={goto} className="text-blue-400 text-sm hover:underline">
            Know More
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
