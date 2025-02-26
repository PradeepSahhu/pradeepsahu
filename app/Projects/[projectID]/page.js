"use client";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaExternalLinkAlt,
} from "react-icons/fa";

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

export default function ProjectDetails() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-black shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        {project.name}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        {project.description}
      </p>

      {/* Image Carousel */}
      <div className="relative mt-4 w-full h-64 overflow-hidden rounded-lg">
        <Image
          src={project.images[currentImage]}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Technologies */}
      <div className="mt-4 flex space-x-4">
        {project.technologies.map((tech, index) => (
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
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href={project.deployed}
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
