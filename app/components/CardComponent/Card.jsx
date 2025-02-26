"use client";
import { FaGithub } from "react-icons/fa";

export default function Card() {
  return (
    <div className="relative w-64 bg-white shadow-lg rounded-2xl overflow-hidden p-4 transition-transform duration-300 hover:scale-105 mx-5 my-2 dark:bg-black dark:text-white">
      <img
        className="w-full h-40 object-cover rounded-lg"
        src="./Home/sc2.jpeg"
        alt="Project"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">Project Name</h3>
        <p className="text-sm text-gray-600 mt-2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex items-center justify-between mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 flex items-center"
          >
            <FaGithub size={20} className="mr-2" />
          </a>
          <a
            href="https://deployed-project.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Visit Project
          </a>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">
            Know More
          </a>
        </div>
      </div>
    </div>
  );
}
