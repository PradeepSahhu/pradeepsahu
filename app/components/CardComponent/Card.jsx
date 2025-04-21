"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Card({
  goto,
  title,
  description,
  githublink,
  link,
  imageSrc,
  tags = [],
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-72 h-72 overflow-hidden rounded-xl cursor-pointer mx-4 my-4 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10" />

      <motion.img
        className="absolute inset-0 w-full h-full object-cover"
        src={imageSrc || "./Home/sc2.jpeg"}
        alt={title || "Project"}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Always visible title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
        <motion.h3
          className="text-xl font-bold tracking-wide"
          animate={{
            y: isHovered ? -40 : 0,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {title || "Project Name"}
        </motion.h3>
      </div>

      {/* Content on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/70 flex flex-col justify-between p-6 text-white z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <motion.h3
            className="text-xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {title || "Project Name"}
          </motion.h3>

          <motion.p
            className="text-sm text-gray-300 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {description
              ? description.length > 100
                ? `${description.substring(0, 100)}...`
                : description
              : "Brief project description. Click to explore more."}
          </motion.p>

          {/* Tags */}
          {tags.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-orange-600/80 px-2 py-1 rounded-full text-white"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <Link
              href={goto || "#"}
              className="text-white text-sm font-medium hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            <div className="flex items-center gap-3">
              {githublink && (
                <a
                  href={githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition-colors p-2 rounded-full bg-black/30"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={16} />
                </a>
              )}

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition-colors p-2 rounded-full bg-black/30"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt size={14} />
                </a>
              )}
            </div>
          </div>

          <Link
            href={goto || "#"}
            className="bg-orange-600 hover:bg-orange-700 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors w-full"
          >
            View Project
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
