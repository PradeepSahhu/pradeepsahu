"use client";
import { useState } from "react";
import { useEffect } from "react";
import ProjectItem from "@/components/Home/Project";

export default function Home() {
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position reaches a certain point (e.g., 200px)
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  return (
    <div className="bg-white h-screen">
      <div className="h-screen w-screen">
        <div className="relative h-screen w-screen">
          <img
            className="absolute inset-0 h-full w-screen object-cover brightness-50"
            src="./Home/sc2.jpeg"
            alt="Background"
          />
        </div>

        <div className="fixed  py-5  top-0 left-0 w-screen">
          <div
            className={`flex gap-x-10 justify-center overflow-hidden transition-all duration-500 ${
              scrollY ? "bg-white text-black" : "transparent"
            }`}
          >
            <div className="">
              <button className="py-5  font-extrabold text-2xl  ">
                Pradeep Sahu
              </button>
            </div>
            <div className="py-5 ">
              <button className=" font-extralight   ">Home</button>
            </div>
            <div className="py-5 ">
              <p className="font-extralight   ">Projects</p>
            </div>
            <div className="py-5 ">
              <p className="font-extralight   ">Contact</p>
            </div>
            <div className="py-5 ">
              <p className="font-extralight   ">Pradeep Sahu</p>
            </div>
            <div className="py-5 ">
              <p className="font-extralight   ">Pradeep Sahu</p>
            </div>
            <button className="py-5 ">
              <p className="font-extralight   ">Pradeep Sahu</p>
            </button>
          </div>
          <div className="flex justify-center items-center align-middle">
            <hr className="border-1 border-white w-10/12 opacity-40" />
          </div>
        </div>

        <div>
          <div className="absolute top-0 left-0 flex items-center justify-center h-screen w-screen">
            <div className="">
              <div>
                <p className="font-extrabold text-6xl">
                  Creator Designer and Developer
                </p>
              </div>

              <div className="flex justify-center my-3">
                <button className="border-[#FFFF] border-[1px] px-8 py-3 rounded-xl bg-transparent  hover:scale-90 transition-all ">
                  <span className="hover:translate-x-10 hover:transition-transform hover:translate-y-8 hover:tra">
                    Projects
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen w-screen bg-white text-black transition-all duration-300 relative">
          <div className="mx-20 ">
            <div className="flex gap-x-5"></div>

            <div>
              <ProjectItem />
            </div>
            <div>
              <ProjectItem />
            </div>
            <div>
              <ProjectItem />
            </div>
            <div>
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
