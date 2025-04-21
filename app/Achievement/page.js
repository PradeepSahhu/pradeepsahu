"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCalendarAlt,
  FaBriefcase,
  FaMedal,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Achievement = () => {
  const certificates = [
    {
      name: "IIT-BHU Technex",
      position: "3rd Position",
      offer: "Internship at NTPC",
      date: "28 Feb - 2nd March",
      link: "https://drive.google.com/file/d/181D_9egZWHWGUbnpgXD87jLbEpnaM4Xt/view?usp=sharing",
      icon: "trophy",
    },
    {
      name: "ICP Hackerhouse 48 Hour Hackathon",
      position: "Top-10",
      offer: "",
      date: "20 Mar - 22 March",
      link: "",
      icon: "medal",
    },
    {
      name: "code Rush competition",
      position: "Top-4",
      offer: "",
      date: "23 Jan 2025",
      link: "https://drive.google.com/file/d/1vxR48jhth5ObMNkOQGH7-pwtlYslh8wm/view?usp=sharing",
      icon: "medal",
    },
    {
      name: "Code Vista Hackathon",
      position: "Best Design Award",
      offer: "",
      date: "Sept 2023",
      link: "https://drive.google.com/file/d/1QZEU3FwNX5KluR-sZGcHmVg7UPAgko1n/view?usp=sharing",
      icon: "design",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to get appropriate icon for each achievement
  const getIcon = (iconType) => {
    switch (iconType) {
      case "trophy":
        return <FaTrophy size={20} className="text-yellow-500" />;
      case "medal":
        return <FaMedal size={20} className="text-blue-500" />;
      case "design":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-500"
          >
            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            <path d="M12 2v2"></path>
            <path d="M12 22v-2"></path>
            <path d="M20 12h-2"></path>
            <path d="M4 12h2"></path>
            <path d="M19.07 4.93l-1.41 1.41"></path>
            <path d="M6.34 17.66l-1.41 1.41"></path>
            <path d="M4.93 4.93l1.41 1.41"></path>
            <path d="M17.66 17.66l1.41 1.41"></path>
          </svg>
        );
      default:
        return <FaTrophy size={20} className="text-yellow-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8 max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-between mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center"
        >
          <FaTrophy className="mr-3 text-yellow-500" />
          Achievements & Awards
        </motion.h2>
      </div>

      <div className="space-y-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="relative border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow-md bg-white dark:bg-gray-800 overflow-hidden"
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            {/* Accent color line on the left */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 ${
                index === 0
                  ? "bg-yellow-500"
                  : index === 1
                  ? "bg-blue-500"
                  : "bg-purple-500"
              }`}
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className="mr-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {getIcon(cert.icon)}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                    {cert.name}
                  </h3>
                </div>

                <div className="ml-12">
                  <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                    <FaMedal className="mr-2 text-blue-500" />
                    <span className="font-medium">{cert.position}</span>
                  </div>

                  {cert.offer && (
                    <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                      <FaBriefcase className="mr-2 text-green-600" />
                      <span>{cert.offer}</span>
                    </div>
                  )}

                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="mr-1">View Certificate</span>
                  <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>

            {/* Expandable content can be added here */}
            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              >
                <p>
                  Additional details about this achievement can be displayed
                  here when expanded.
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Add achievement button - can be implemented if needed */}
      {certificates.length === 0 && (
        <div className="text-center py-10 text-gray-500 dark:text-gray-400">
          No achievements to display yet.
        </div>
      )}
    </motion.div>
  );
};

export default Achievement;
