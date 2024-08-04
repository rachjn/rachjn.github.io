"use client";
import {
  LuGraduationCap,
  LuLinkedin,
  LuGithub,
  LuHeart,
  LuGamepad2,
  LuChevronRight,
  LuChevronLeft,
  LuSprout,
  LuHome,
  LuStar,
} from "react-icons/lu";
import Link from "next/link";
import { BulletPoint, Panel } from "../components/bulletpoint";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../components/sliding";
import Image from "next/image";
import { Navbar } from "../components/navbar";
import { useState } from "react";

export default function Projects() {
  const designTabs = [
    { label: "TFTourneys", icon: "LuTrophy" },
    { label: "Collegiate Wushu", icon: "LuSwords" },
  ];

  const [activeTab, setActiveTab] = useState(designTabs[0]);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab); // Update the state in the parent component
  };

  return (
    <>
      <div className="overflow-x-clip relative w-full animate-fade">
        <div className="mix-blend-multiply fixed top-[10rem] md:top-[14rem] -left-[4rem] md:left-[10rem] w-[24rem] h-[24rem] bg-third-blue rounded-full  filter blur-2xl animate-blob opacity-80"></div>
        <div className=" mix-blend-multiply fixed top-[6rem] md:top-[8rem] right-[19rem] w-[24rem] h-[24rem] md:w-[25rem] md:h-[25rem] bg-second-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
        <div className=" mix-blend-multiply fixed top-[20rem] md:top-[19rem] left-[6rem] md:left-[30rem] w-[25rem] h-[25rem] bg-third-pink rounded-full  filter blur-2xl animate-blob animation-delay-4000 opacity-70 "></div>
      </div>

      <Link href="/art" className="absolute right-[10vw] top-10">
        <LuChevronLeft className="h-10 w-10 hover:animate-arrow" />
      </Link>

      <Link href="/" className="absolute left-10 top-10">
        <LuHome className="h-8 w-7 hover:animate-pulse animate-fade" />
      </Link>

      <div className="my-[7rem] w-full relative overflow-x-clip">
        <div className="flex items-end gap-12">
          <div className="mb-16 flex flex-wrap justify-center lg:justify-start items-end gap-12 mx-0 sm:mx-[14vw] opacity-0 animate-slideInTop">
            <div className="font-bold text-4xl">personal projects</div>
            <Navbar
              onTabChange={handleTabChange}
              tabs={designTabs}
              underlineColor="border-pris-pink"
            />
          </div>
        </div>

        <div className="-mt-6 mx-[12vw] flex gap-6 flex-wrap items-center justify-center">
          {activeTab.label === "TFTourneys" && (
            <>
              <BulletPoint props=" lowercase">TFTourneys</BulletPoint>
            </>
          )}

          {activeTab.label === "Collegiate Wushu" && (
            <>
              <BulletPoint props="lowercase">Collegiate Wushu</BulletPoint>
            </>
          )}
        </div>
      </div>
    </>
  );
}
