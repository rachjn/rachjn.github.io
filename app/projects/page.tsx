"use client";
import {
  LuChevronRight,
  LuChevronLeft,
  LuSprout,
  LuHome,
  LuStar,
  LuExternalLink,
} from "react-icons/lu";
import { RxDiscordLogo } from "react-icons/rx";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import { BulletPoint, GrowablePanel, Panel } from "../components/bulletpoint";
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
        <LuHome className="h-8 w-7 hover:animate-pulse" />
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
              <SlideRight delay={0}>
                <Panel>
                  <div className="flex gap-2 items-center justify-between">
                    <Link
                      href="https://tftourneys.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className=""
                    >
                      <LuExternalLink className="h-7 w-7" />
                    </Link>
                    <Link
                      href="https://discord.gg/gPvXy4Nxt4"
                      rel="noopener noreferrer"
                      target="_blank"
                      className=""
                    >
                      <RxDiscordLogo className="h-8 w-8" />
                    </Link>
                    <Link
                      href="https://x.com/tftourneys_"
                      rel="noopener noreferrer"
                      target="_blank"
                      className=""
                    >
                      <RiTwitterXFill className="h-7 w-7" />
                    </Link>
                  </div>
                </Panel>
                <BulletPoint props=" lowercase">
                  {" "}
                  <Link
                    href="https://tftourneys.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-bold hover:underline"
                  >
                    TFTourneys{" "}
                  </Link>
                  provides tournament data, player statistics, and live updates
                  for competitive teamfight tactics.
                  <div className="mt-2">
                    it started as a simple passion project born out of my team
                    and i's love for games, but it has become so much more!
                  </div>
                </BulletPoint>
              </SlideRight>

              <div>
                <SlideLeft delay={0.1}>
                  <BulletPoint props="lowercase">
                    made with: Next.js, tailwind css, PostgreSQL, Flask, nginx,
                    and Cloudflare
                  </BulletPoint>
                </SlideLeft>
                <SlideLeft delay={0.2}>
                  <BulletPoint props="lowercase">
                    on launch weekend, the site reached over a thousand users,
                    even gaining feedback from legendary figures in the
                    community like frodan and dishsoap!
                  </BulletPoint>
                </SlideLeft>
              </div>

              <div>
                <SlideLeft delay={0.3}>
                  <BulletPoint props="lowercase">
                    my team was motivated to improve the disorganization within
                    tft esports & alleviate the frustrations we noticed from pro
                    players and fans alike.
                  </BulletPoint>
                </SlideLeft>
                <SlideLeft delay={0.4}>
                  <BulletPoint props="lowercase">
                    we plan to continue adding new features over time, and we
                    are so grateful to be able to enhance the viewer experience.
                  </BulletPoint>
                </SlideLeft>
              </div>

              <SlideLeft delay={0}>
                <GrowablePanel props="flex-shrink-0 max-w-[40rem]">
                  <Image
                    src="/tfthomegif.gif"
                    height={220}
                    width={220}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                </GrowablePanel>
              </SlideLeft>

              <SlideLeft delay={0.2}>
                <GrowablePanel props="flex-shrink-0 max-w-[45rem]">
                  <Image
                    src="/tft_about_info.png"
                    height={800}
                    width={800}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                </GrowablePanel>
              </SlideLeft>
            </>
          )}

          {activeTab.label === "Collegiate Wushu" && (
            <>
              <BulletPoint props="lowercase">Collegiate Wushu</BulletPoint>
              <BulletPoint props=" lowercase">
                this section is still a work in progress!
              </BulletPoint>
            </>
          )}
        </div>
      </div>
    </>
  );
}
