"use client";
import {
  FaHome,
  FaProjectDiagram,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import ThemeSwitcher from "../ThemeSwitcher";

export default function NavigationBar() {
  return (
    <div className="fixed left-0 top-0 h-full bg-gray-900 text-white flex flex-col items-center p-4 w-20">
      <a
        href="#"
        className="my-4 p-2 flex flex-col items-center space-y-2 hover:bg-gray-700 rounded"
      >
        <FaHome size={24} /> <span className="text-xs">Home</span>
      </a>
      <a
        href="#"
        className="my-4 p-2 flex flex-col items-center space-y-2 hover:bg-gray-700 rounded"
      >
        <FaProjectDiagram size={24} /> <span className="text-xs">Projects</span>
      </a>
      <a
        href="#"
        className="my-4 p-2 flex flex-col items-center space-y-2 hover:bg-gray-700 rounded"
      >
        <FaInfoCircle size={24} /> <span className="text-xs">About</span>
      </a>
      <a
        href="#"
        className="my-4 p-2 flex flex-col items-center space-y-2 hover:bg-gray-700 rounded"
      >
        <FaEnvelope size={24} /> <span className="text-xs">Contact</span>
      </a>
      <div className="mt-auto">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
