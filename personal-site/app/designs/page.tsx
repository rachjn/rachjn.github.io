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
} from "react-icons/lu";
import Link from "next/link";
import { BulletPoint, Panel } from "../components/bulletpoint";
import { Navbar } from "../components/navbar";
import { useState } from "react";

export default function Design() {
  const designTabs = [
    { label: "TFTourneys", icon: "LuTrophy" },
    { label: "Collegiate Wushu", icon: "LuSwords" },
    { label: "ACM Studio", icon: "LuGamepad2" },
  ];

  const [activeTab, setActiveTab] = useState(designTabs[0]);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab); // Update the state in the parent component
  };

  return (
    <>
      <div className="relative w-full max-w-lg -z-20">
        <div className="mix-blend-multiply fixed top-[10rem] md:top-[14rem] -left-[4rem] md:left-[10rem] w-[24rem] h-[24rem] bg-second-blue rounded-full  filter blur-2xl animate-blob opacity-80"></div>
        <div className=" mix-blend-multiply fixed top-[6rem] md:top-[8rem] right-[19rem] w-[24rem] h-[24rem] md:w-[25rem] md:h-[25rem] bg-pris-blue rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
        <div className=" mix-blend-multiply fixed top-[20rem] md:top-[19rem] left-[6rem] md:left-[30rem] w-[25rem] h-[25rem] bg-third-blue rounded-full  filter blur-2xl animate-blob animation-delay-4000 opacity-70 "></div>
      </div>

      <Link href="/art" className="absolute right-20 top-[20rem]">
        <LuChevronRight className="h-10 w-10 hover:animate-arrow" />
      </Link>

      <Link href="/about" className="absolute left-20 top-[20rem]">
        <LuChevronLeft className="h-10 w-10 hover:animate-arrow" />
      </Link>

      <Link href="/" className="absolute left-10 top-10">
        <LuHome className="h-8 w-7 hover:animate-pulse" />
      </Link>

      <div className="mx-[12rem] my-20">
        <div>
          <div className="flex items-end gap-12">
            <div className="font-bold text-4xl">recent works</div>
            <Navbar
              onTabChange={handleTabChange}
              tabs={designTabs}
              underlineColor="pris-pink"
            />
          </div>

          <div className="flex gap-6">
            {activeTab.label === "TFTourneys" && (
              <>
                <BulletPoint props="mt-10 lowercase">TFTourneys</BulletPoint>
              </>
            )}

            {activeTab.label === "Collegiate Wushu" && (
              <>
                <BulletPoint props="mt-10 lowercase">
                  Collegiate Wushu
                </BulletPoint>
              </>
            )}

            {activeTab.label === "ACM Studio" && (
              <>
                <BulletPoint props="mt-10 lowercase">ACM Studio</BulletPoint>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
