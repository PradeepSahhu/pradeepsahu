"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Icons import grouped by category
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaExternalLinkAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiJest,
  SiSpringboot,
  SiRust,
  SiSolidity,
  SiTypescript,
  SiVuedotjs,
  SiAngular,
} from "react-icons/si";

import { TbBrandReact, TbBrandNextjs } from "react-icons/tb";
import { BiBitcoin, BiCodeAlt, BiLinkExternal } from "react-icons/bi";
import { IoIosCloud, IoMdArrowRoundBack } from "react-icons/io";
import { IoLogoElectron } from "react-icons/io5";
import { RiShieldUserFill, RiJavascriptFill } from "react-icons/ri";
import { MdOutlineSecurity, MdOutlineStorage } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrGraphQl } from "react-icons/gr";

export default function ProjectDetails({ params }) {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [project, setProject] = useState(null);
  const unwrapped = use(params);
  const projectID = unwrapped?.projectID;

  // Tech stack icon mapping function - enhanced with more options and better organization
  const getTechIcon = (name) => {
    const lowerName = name?.toLowerCase();

    // Frontend frameworks and libraries
    if (["react", "react.js"].includes(lowerName))
      return <FaReact size={24} className="text-blue-500" />;
    if (["next.js", "next", "nextjs"].includes(lowerName))
      return <SiNextdotjs size={24} className="text-black dark:text-white" />;
    if (["vue", "vue.js", "vuejs"].includes(lowerName))
      return <SiVuedotjs size={24} className="text-green-500" />;
    if (["angular"].includes(lowerName))
      return <SiAngular size={24} className="text-red-600" />;
    if (["redux"].includes(lowerName))
      return <SiRedux size={24} className="text-purple-600" />;
    if (["tailwind", "tailwind css", "tailwindcss"].includes(lowerName))
      return <SiTailwindcss size={24} className="text-blue-400" />;

    // Backend technologies
    if (["node", "node.js", "nodejs"].includes(lowerName))
      return <FaNodeJs size={24} className="text-green-500" />;
    if (["express", "express.js", "expressjs"].includes(lowerName))
      return (
        <SiExpress size={24} className="text-gray-800 dark:text-gray-200" />
      );
    if (["spring boot", "spring"].includes(lowerName))
      return <SiSpringboot size={24} className="text-green-600" />;

    // Databases
    if (["mongodb"].includes(lowerName))
      return <SiMongodb size={24} className="text-green-500" />;
    if (["postgresql", "postgres"].includes(lowerName))
      return <SiPostgresql size={24} className="text-blue-500" />;
    if (["mysql"].includes(lowerName))
      return <SiMysql size={24} className="text-blue-600" />;
    if (["firebase"].includes(lowerName))
      return <SiFirebase size={24} className="text-yellow-500" />;
    if (["database", "db"].includes(lowerName))
      return <FaDatabase size={24} className="text-blue-700" />;

    // Programming languages
    if (["javascript", "js"].includes(lowerName))
      return <RiJavascriptFill size={24} className="text-yellow-500" />;
    if (["typescript", "ts"].includes(lowerName))
      return <SiTypescript size={24} className="text-blue-600" />;
    if (["python", "py"].includes(lowerName))
      return <FaPython size={24} className="text-blue-400" />;
    if (["java"].includes(lowerName))
      return <FaJava size={24} className="text-red-600" />;
    if (["rust"].includes(lowerName))
      return <SiRust size={24} className="text-orange-700" />;
    if (["solidity"].includes(lowerName))
      return <SiSolidity size={24} className="text-gray-700" />;

    // DevOps & Cloud
    if (["docker"].includes(lowerName))
      return <FaDocker size={24} className="text-blue-500" />;
    if (["aws", "amazon web services"].includes(lowerName))
      return <FaAws size={24} className="text-orange-500" />;
    if (["cloud"].includes(lowerName))
      return <IoIosCloud size={24} className="text-gray-400" />;

    // Testing
    if (["jest"].includes(lowerName))
      return <SiJest size={24} className="text-red-500" />;

    // Blockchain
    if (["bitcoin", "blockchain"].includes(lowerName))
      return <BiBitcoin size={24} className="text-orange-500" />;

    // Misc
    if (["electron", "electron.js"].includes(lowerName))
      return <IoLogoElectron size={24} className="text-blue-500" />;
    if (["security"].includes(lowerName))
      return <RiShieldUserFill size={24} className="text-red-600" />;
    if (["graphql"].includes(lowerName))
      return <GrGraphQl size={24} className="text-pink-500" />;
    if (
      ["ai", "artificial intelligence", "machine learning", "ml"].includes(
        lowerName
      )
    )
      return <GiArtificialIntelligence size={24} className="text-purple-600" />;
    if (["github"].includes(lowerName))
      return <FaGithub size={24} className="text-gray-800 dark:text-white" />;
    if (["storage"].includes(lowerName))
      return <MdOutlineStorage size={24} className="text-gray-700" />;
    if (["code"].includes(lowerName))
      return <BiCodeAlt size={24} className="text-gray-500" />;

    // Default case
    return <FaCode size={24} className="text-gray-600" />;
  };

  useEffect(() => {
    if (!projectID) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${process.env.API}getById/${projectID}`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch project data (Status: ${response.status})`
          );
        }
        const data = await response.json();
        setProject(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [projectID]);

  useEffect(() => {
    if (!project || !project.projectImages || project.projectImages.length <= 1)
      return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.projectImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  const goBack = () => {
    router.back();
  };

  const navigateImage = (direction) => {
    if (!project?.projectImages?.length) return;

    setCurrentImage((prev) => {
      if (direction === "next") {
        return (prev + 1) % project.projectImages.length;
      } else {
        return prev === 0 ? project.projectImages.length - 1 : prev - 1;
      }
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Loading project details...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="p-6 bg-red-100 dark:bg-red-900 rounded-lg max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">
            Error Loading Project
          </h2>
          <p className="text-red-600 dark:text-red-200 mb-6">{error}</p>
          <button
            onClick={goBack}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto"
          >
            <IoMdArrowRoundBack size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Project not found
        </p>
        <button
          onClick={goBack}
          className="mt-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
        >
          <IoMdArrowRoundBack size={20} />
          <span>Go Back</span>
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-xl mt-10 mb-20"
    >
      {/* Back button */}
      <button
        onClick={goBack}
        className="mb-6 flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <IoMdArrowRoundBack size={20} className="mr-2" />
        <span>Back to Projects</span>
      </button>

      {/* Project header with title and links */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
        >
          {project.projectName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 mt-4 md:mt-0"
        >
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <FaGithub size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}

          {project.links && (
            <a
              href={project.links}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <FaExternalLinkAlt size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </motion.div>
      </div>

      {/* Project date */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6"
      >
        <FaCalendarAlt className="mr-2" />
        <span>Created: {project.date || "N/A"}</span>
      </motion.div>

      {/* Image Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative mt-4 w-full h-80 md:h-96 overflow-hidden rounded-xl mb-8 bg-gray-100 dark:bg-gray-800"
      >
        {project?.projectImages?.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={project.projectImages[currentImage] || "/Home/sc1.jpeg"}
                alt={`${project.projectName} - Screenshot ${currentImage + 1}`}
                className="rounded-xl object-contain w-full h-full bg-gray-100 dark:bg-gray-800"
              />
            </AnimatePresence>

            {/* Image navigation buttons */}
            {project.projectImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
                  aria-label="Previous image"
                >
                  <FaArrowLeft size={16} />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
                  aria-label="Next image"
                >
                  <FaArrowRight size={16} />
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage
                          ? "bg-white scale-125"
                          : "bg-white bg-opacity-50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            No images available
          </div>
        )}
      </motion.div>

      {/* Project description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          Project Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          {project.projectDescription || "No description available."}
        </p>
      </motion.div>

      {/* Technologies */}
      {project?.tags?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg"
              >
                {getTechIcon(tech)}
                <span className="text-gray-700 dark:text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Features section - optional, can be populated if available in your API */}
      {project.features && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-12 border-t pt-8 border-gray-200 dark:border-gray-700"
      >
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <FaGithub size={20} />
            <span>View Source Code</span>
          </a>
        )}

        {project.links && (
          <a
            href={project.links}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <BiLinkExternal size={20} />
            <span>Visit Live Project</span>
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
