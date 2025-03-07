"use client";
import { useState } from "react";
import { useEffect } from "react";
import ProjectItem from "./components/components/Home/Project";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen bg-white dark:bg-black">
      <div className="h-screen w-screen bg-white dark:bg-black">
        <div className="relative h-screen w-screen z-0">
          <img
            className="absolute inset-0 h-full w-screen object-cover brightness-50"
            src="./Home/sc2.jpeg"
            alt="Background"
          />
        </div>

        <div className="fixed  py-5  top-0 left-0 w-screen z-10 bg-transparent ">
          <div
            className={`flex gap-x-52 justify-center overflow-hidden transition-all duration-500 ${
              scrollY ? "bg-white text-black" : "transparent"
            }`}
          >
            <div className="py-5 ">
              <Link
                href="./Admin"
                className="py-5  font-extrabold text-2xl  flex-left "
              >
                Pradeep Sahu
              </Link>
            </div>
            <div className="py-5 ">
              <button className=" font-extralight   ">Home</button>
            </div>
            <div className="py-5 cursor">
              <Link className="font-extralight" href="/Projects">
                Projects
              </Link>
            </div>
            <div className="py-5 ">
              <Link href="" className="font-extralight   ">
                Contact
              </Link>
            </div>
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
                  <Link
                    className="hover:translate-x-10 hover:transition-transform hover:translate-y-8 hover:tra"
                    href="/Projects"
                  >
                    Projects
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
