"use client";
import {
  FaHome,
  FaProjectDiagram,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="fixed left-0 top-0 h-full bg-gray-900 text-white flex flex-col items-center p-4 w-20">
      <Link
        href="./"
        className="my-4 p-2 flex flex-col items-center space-y-2 hover:bg-gray-700 rounded"
      >
        <FaHome size={24} /> <span className="text-xs">Home</span>
      </Link>

      <Link
        href="./Contact"
        className="my-4 p-2 flex flex-col items-center space-y-2 hover:bg-gray-700 rounded"
      >
        <FaEnvelope size={24} /> <span className="text-xs">Contact</span>
      </Link>
      <div className="mt-auto">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
