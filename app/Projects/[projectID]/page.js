"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";

import {
  FaGithub, // GitHub Icon
  FaReact, // React.js Icon
  FaNodeJs, // Node.js Icon
  FaDatabase, // Database Icon
  FaExternalLinkAlt, // External Link Icon
  FaDocker, // Docker Icon
  FaAws, // AWS Cloud Icon
  FaPython, // Python Icon
  FaJava, // Java Icon
} from "react-icons/fa";

import {
  SiMongodb, // MongoDB Icon
  SiExpress, // Express.js Icon
  SiNextdotjs, // Next.js Icon
  SiTailwindcss, // Tailwind CSS Icon
  SiRedux, // Redux Icon
  SiPostgresql, // PostgreSQL Icon
  SiMysql, // MySQL Icon
  SiFirebase, // Firebase Icon
  SiJest, // Jest Testing Icon
  SiSpringboot, // Spring Boot Icon
  SiRust, // Rust Language Icon
} from "react-icons/si";

import {
  TbBrandReact, // React Icon (Alternative)
  TbBrandNextjs, // Next.js Icon (Alternative)
} from "react-icons/tb";

import {
  BiBitcoin, // Bitcoin Icon
  BiCodeAlt, // Code Icon
} from "react-icons/bi";

import {
  IoIosCloud, // Cloud Icon
} from "react-icons/io";

import { IoLogoElectron } from "react-icons/io5";
import {
  RiShieldUserFill, // Security / Authentication Icon
  RiJavascriptFill, // JavaScript Icon
} from "react-icons/ri";

import {
  MdOutlineSecurity, // Security Icon (Alternative)
  MdOutlineStorage, // Storage / Database Icon
} from "react-icons/md";

import {
  GiArtificialIntelligence, // AI Icon
} from "react-icons/gi";

import { SiSolidity } from "react-icons/si";

import {
  GrGraphQl, // GraphQL Icon
} from "react-icons/gr";

import Image from "next/image";

export default function ProjectDetails({ params }) {
  console.log("############################");

  const nameIcons = (name) => {
    const lowerName = name?.toLowerCase(); // Convert name to lowercase for case-insensitive comparison

    switch (lowerName) {
      case "react":
        return <FaReact size={24} className="text-blue-500" />;
      case "node":
      case "node.js":
        return <FaNodeJs size={24} className="text-green-500" />;
      case "solidity":
        return <SiSolidity size={24} className="text-blue-700" />;
      case "github":
        return <FaGithub size={24} className="text-gray-800" />;
      case "next.js":
        return <SiNextdotjs size={24} className="text-blue-700" />;
      case "tailwind css":
      case "tailwind":
        return <SiTailwindcss size={24} className="text-blue-400" />;
      case "redux":
        return <SiRedux size={24} className="text-purple-600" />;
      case "mongodb":
        return <SiMongodb size={24} className="text-green-500" />;
      case "express.js":
      case "express":
        return <SiExpress size={24} className="text-gray-800" />;
      case "postgresql":
        return <SiPostgresql size={24} className="text-blue-500" />;
      case "mysql":
        return <SiMysql size={24} className="text-blue-600" />;
      case "firebase":
        return <SiFirebase size={24} className="text-yellow-500" />;
      case "jest":
        return <SiJest size={24} className="text-red-500" />;
      case "spring boot":
      case "spring":
        return <SiSpringboot size={24} className="text-green-600" />;
      case "rust":
        return <SiRust size={24} className="text-orange-700" />;
      case "bitcoin":
        return <BiBitcoin size={24} className="text-orange-500" />;
      case "electron.js":
      case "electron":
        return <IoLogoElectron size={24} className="text-blue-500" />;
      case "cloud":
        return <IoIosCloud size={24} className="text-gray-400" />;
      case "security":
        return <RiShieldUserFill size={24} className="text-red-600" />;
      case "javascript":
        return <RiJavascriptFill size={24} className="text-yellow-500" />;
      case "graphql":
        return <GrGraphQl size={24} className="text-pink-500" />;
      case "ai":
      case "artificial intelligence":
        return (
          <GiArtificialIntelligence size={24} className="text-purple-600" />
        );
      case "docker":
        return <FaDocker size={24} className="text-blue-500" />;
      case "aws":
      case "amazon web services":
        return <FaAws size={24} className="text-orange-500" />;
      case "python":
        return <FaPython size={24} className="text-blue-400" />;
      case "java":
        return <FaJava size={24} className="text-red-600" />;
      case "storage":
        return <MdOutlineStorage size={24} className="text-gray-700" />;
      case "code":
        return <BiCodeAlt size={24} className="text-gray-500" />;
      case "external link":
        return <FaExternalLinkAlt size={24} className="text-gray-500" />;
      default:
        return <FaDatabase size={24} className="text-blue-700" />;
    }
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [project, setProject] = useState({
    id: 1,
    name: "Awesome Project",
    description:
      "This is a full-stack web application built with React, Node.js, and PostgreSQL. It features authentication, real-time updates, and an intuitive UI.",
    technologies: [
      { name: "React", icon: <FaReact size={24} className="text-blue-500" /> },
      {
        name: "Node.js",
        icon: <FaNodeJs size={24} className="text-green-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <FaDatabase size={24} className="text-blue-700" />,
      },
    ],
    github: "https://github.com/pradeepsahu/project-repo",
    deployed: "https://awesomeproject.com",
    images: ["/Home/sc1.jpeg", "/Home/sc2.jpeg", "/Home/template.jpg"],
    date: "Feb 25, 2025",
  });
  const unwrapped = use(params);
  const projectID = unwrapped?.projectID;

  useEffect(() => {
    if (!projectID) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API}getById/${projectID}`);
        console.log("***************************");
        console.log("The response is : ", response);
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const data = await response.json();
        setProject(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!project || !project.projectImages) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.projectImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return <p>Loading...</p>;
  }

  console.table(project);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-black shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        {project.projectName}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        {project.projectDescription}
      </p>

      {/* Image Carousel */}
      <div className="relative mt-4 w-full h-64 overflow-hidden rounded-lg">
        <img
          src={project?.projectImages?.[currentImage] || "/Home/sc1.jpeg"}
          // src="/Home/sc1.jpeg"
          alt={project.name}
          // layout="fill"
          // objectfit="fit"
          className="rounded-lg object-contain w-full h-full"
        />
      </div>

      {/* Technologies */}
      <div className="mt-4 flex space-x-4">
        {project?.tags?.map((tech, index) => (
          <div key={index} className="flex items-center space-x-2">
            {nameIcons(tech)}
            {/* <FaReact size={24} className="text-blue-500" /> */}
            <span className="text-gray-700 dark:text-gray-300">{tech}</span>
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex justify-between items-center">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href={project.links}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
        >
          <FaExternalLinkAlt size={20} />
          <span>Visit Project</span>
        </a>
      </div>

      {/* Date */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Project Date: {project.date}
      </p>
    </div>
  );
}
