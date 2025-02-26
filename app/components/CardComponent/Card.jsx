"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Card({ goto }) {
  return (
    <div
      className="relative w-64 bg-white rounded-2xl overflow-hidden p-4 mx-5 my-2 
    shadow-[4px_4px_10px_rgba(0,0,0,0.5)] dark:bg-black dark:text-white 
    dark:shadow-[8px_8px_10px_rgba(255,255,255,0.2)]"
    >
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
          <Link href={goto} className="text-blue-600 hover:underline">
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}
