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
  TbBrandEthereum, // Ethereum Icon
  TbBrandReact, // React Icon (Alternative)
  TbBrandNextjs, // Next.js Icon (Alternative)
} from "react-icons/tb";

import {
  BiBitcoin, // Bitcoin Icon
  BiCodeAlt, // Code Icon
} from "react-icons/bi";

import {
  IoLogoElectron, // Electron.js Icon
  IoIosCloud, // Cloud Icon
} from "react-icons/io";

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

import {
  GrGraphQl, // GraphQL Icon
} from "react-icons/gr";

import Image from "next/image";

const project = {
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
};

export default function ProjectDetails({ params }) {
  console.log("############################");

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
    if (!project || !project.images) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
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
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Technologies */}
      <div className="mt-4 flex space-x-4">
        {project?.tags?.map((tech, index) => (
          <div key={index} className="flex items-center space-x-2">
            {tech.icon}
            <span className="text-gray-700 dark:text-gray-300">
              {tech.name}
            </span>
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
