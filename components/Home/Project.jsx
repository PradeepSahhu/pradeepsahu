"use client";

import { useState } from "react";
import { useEffect } from "react";

const ProjectItem = () => {
  const [hovered, setHovered] = useState();

  useEffect(() => {});
  return (
    <>
      <article className="w-80 h-5/6 rounded-xl px-2  border-gray-300  ">
        <div className="  text-black text-center hidden hover:block bg-black py-10">
          <p>Strategy </p>
        </div>
        <img className="object-fill" src="./Home/sc2.jpeg" />
        <p className="text-2xl font-bold">Project Name in bold</p>
        <p className="text-justify">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </article>
    </>
  );
};

export default ProjectItem;
