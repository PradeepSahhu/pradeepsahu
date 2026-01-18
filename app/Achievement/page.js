"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrophy,
  FaCalendarAlt,
  FaBriefcase,
  FaMedal,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Achievement = () => {
  const achievements = [
    {
      name: "IIT-BHU Technex",
      position: "3rd Position",
      offer: "Internship at NTPC",
      date: "28 Feb – 2 March",
      link: "https://drive.google.com/file/d/181D_9egZWHWGUbnpgXD87jLbEpnaM4Xt/view",
      type: "trophy",
    },
    {
      name: "ICP Hackerhouse 48 Hour Hackathon",
      position: "Top 10",
      offer: "",
      date: "20 – 22 March",
      link: "",
      type: "medal",
    },
    {
      name: "Code Rush Competition",
      position: "4th Place",
      offer: "",
      date: "23 Jan 2025",
      link: "https://drive.google.com/file/d/1vxR48jhth5ObMNkOQGH7-pwtlYslh8wm/view",
      type: "medal",
    },
    {
      name: "Code Vista Hackathon",
      position: "Best Design Award",
      offer: "",
      date: "Sept 2023",
      link: "https://drive.google.com/file/d/1QZEU3FwNX5KluR-sZGcHmVg7UPAgko1n/view",
      type: "design",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const iconMap = {
    trophy: <FaTrophy className="text-yellow-500" />,
    medal: <FaMedal className="text-blue-500" />,
    design: <FaMedal className="text-purple-500" />,
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3">
          <FaTrophy className="text-yellow-500" />
          Achievements & Awards
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Competitions, hackathons, and recognitions
        </p>
      </motion.div>

      {/* List */}
      <div className="space-y-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.015 }}
            className="relative rounded-2xl border border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-900 shadow-md overflow-hidden"
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            {/* Accent bar */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-500 via-blue-500 to-purple-500" />

            {/* Content */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                    {iconMap[item.type]}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.name}
                  </h3>
                </div>

                <div className="ml-11 space-y-1 text-sm">
                  <div className="flex items-center gap-2 font-medium">
                    <FaMedal className="text-blue-500" />
                    {item.position}
                  </div>

                  {item.offer && (
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-green-500" />
                      {item.offer}
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-gray-500">
                    <FaCalendarAlt />
                    {item.date}
                  </div>
                </div>
              </div>

              {/* CTA */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-medium 
                             text-blue-600 dark:text-blue-400 
                             hover:underline"
                >
                  View Certificate
                  <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>

            {/* Expandable */}
            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-400"
                >
                  This achievement highlights competitive performance, teamwork,
                  and problem-solving under real-world constraints.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
