"use client";
import Image from "next/image";
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
import { BulletPoint, GrowablePanel, Panel } from "../components/bulletpoint";
import { Navbar } from "../components/navbar";
import { useState } from "react";
import { LuStar } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../components/sliding";

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

      {/* <Link href="/art" className="absolute right-[2vw] top-[20rem] z-20">
        <LuChevronRight className="h-10 w-10 hover:animate-arrow animate-fade" />
      </Link>

      <Link href="/about" className="fixed left-[2vw] top-[20rem] z-20">
        <LuChevronLeft className="h-10 w-10 hover:animate-arrow animate-fade" />
      </Link> */}

      <Link href="/" className="absolute left-10 top-10">
        <LuHome className="h-8 w-7 hover:animate-pulse" />
      </Link>

      <Link href="/about" className="absolute right-[30vw] top-10">
        <LuChevronLeft className="h-10 w-10 hover:animate-arrow" />
      </Link>

      <Link href="/art" className="absolute right-[10vw] top-10">
        <LuChevronRight className="h-10 w-10 hover:animate-arrow" />
      </Link>

      <div className="my-[7rem] w-full relative overflow-x-clip">
        <div className="flex items-end gap-12">
          <div className="mb-16 flex flex-wrap justify-center lg:justify-start items-end gap-12 mx-0 sm:mx-[14vw] opacity-0 animate-slideInTop">
            <div className="font-bold text-4xl">recent works</div>
            <Navbar
              onTabChange={handleTabChange}
              tabs={designTabs}
              underlineColor="border-pris-pink"
            />
          </div>
        </div>

        <div className="-mt-6 mx-[12vw] flex gap-6 flex-wrap items-start justify-center gap-y-0">
          {activeTab.label === "TFTourneys" && (
            <>
              {/* <BulletPoint props="lowercase">TFTourneys</BulletPoint> */}

              <div>
                <SlideRight delay={0}>
                  <BulletPoint>
                    more info about this project can be found under{" "}
                    <Link
                      href="/projects"
                      className="font-bold hover:underline"
                    >
                      projects.
                    </Link>
                  </BulletPoint>
                </SlideRight>

                <SlideRight delay={0.1}>
                  <BulletPoint>
                    i designed & implemented the site&apos;s visual interface.
                  </BulletPoint>
                </SlideRight>
                <SlideRight delay={0.2}>
                  <BulletPoint>
                    initially, i envisioned a sleek b&w theme with minimal
                    colors.
                  </BulletPoint>
                </SlideRight>
                <SlideRight delay={0.3}>
                  <BulletPoint>
                    working with colors scared me - i always felt my past work
                    lead to tacky designs.
                  </BulletPoint>
                </SlideRight>
              </div>

              <SlideLeft delay={0.2}>
                <Panel props="flex-shrink-0">
                  <Image
                    src="/tft_logo_evo.png"
                    height={400}
                    width={400}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    logo iteration & evolution
                  </div>
                </Panel>
              </SlideLeft>

              <div>
                <SlideLeft delay={0}>
                  <BulletPoint>
                    however, discussing with the team & gathering feedback, we
                    pinpointed a need for change.
                    <br></br>
                    it was clear we needed to bring more life to the site, and
                    pure b&w strains the eye.
                  </BulletPoint>
                </SlideLeft>

                <SlideLeft delay={0.2}>
                  <BulletPoint>
                    with some constructive criticism, i redesigned the overall
                    theming for the site.
                  </BulletPoint>
                </SlideLeft>

                <SlideLeft delay={0.4}>
                  <BulletPoint>
                    i pulled inspiration from tft&apos;s prismatic themes - from
                    there, everything fell into place!
                  </BulletPoint>
                </SlideLeft>
              </div>

              <div>
                <SlideLeft delay={0}>
                  <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                    <Image
                      src="/tft_ui_old.png"
                      height={500}
                      width={500}
                      alt="tft-ui"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      old homepage
                    </div>
                  </GrowablePanel>
                </SlideLeft>

                <SlideLeft delay={0.3}>
                  <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                    <Image
                      src="/tft_tourney_ui_old.png"
                      height={500}
                      width={500}
                      alt="tft-ui"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      old tournaments page
                    </div>
                  </GrowablePanel>
                </SlideLeft>
              </div>

              <div>
                <SlideLeft delay={0.2}>
                  <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                    <Image
                      src="/tft_title_new.png"
                      height={500}
                      width={500}
                      alt="tft-ui"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      new homepage
                    </div>
                  </GrowablePanel>
                </SlideLeft>

                <SlideLeft delay={0.4}>
                  <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                    <Image
                      src="/tft_FINAL_tourneypage.png"
                      height={500}
                      width={500}
                      alt="tft-ui"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      new tournaments page
                    </div>
                  </GrowablePanel>
                </SlideLeft>
              </div>

              <SlideRight delay={0.3}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/tft_ui_planning2.png"
                    height={500}
                    width={500}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    figma concept | tournament page
                  </div>
                </GrowablePanel>
              </SlideRight>

              <SlideRight delay={0.5}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/tft_FINAL_individ_tourneypage.png"
                    height={500}
                    width={500}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    final design, implemented | tournament page
                  </div>
                </GrowablePanel>
              </SlideRight>

              <SlideLeft delay={0}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/tft_playermodal_idea.png"
                    height={500}
                    width={500}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    initial idea | player modal | drawn by jeffrey tan
                  </div>
                </GrowablePanel>
              </SlideLeft>

              <SlideLeft delay={0.2}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/tft_playermodal_implemented.png"
                    height={500}
                    width={500}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    final design, implemented | player modal
                  </div>
                </GrowablePanel>
              </SlideLeft>

              <SlideRight delay={0}>
                <Panel props="flex-shrink-0">
                  <Image
                    src="/tft_mobile.png"
                    height={500}
                    width={500}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    mobile view | tournament page
                  </div>
                </Panel>
              </SlideRight>

              <SlideRight delay={0.2}>
                <Panel props="flex-shrink-0">
                  <Image
                    src="/tft_home_mobile.png"
                    height={500}
                    width={500}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    mobile view | homepage section
                  </div>
                </Panel>
              </SlideRight>

              <SlideRight delay={0.4}>
                <Panel props="flex-shrink-0">
                  <Image
                    src="/tft_about_mobile.png"
                    height={500}
                    width={500}
                    alt="tft-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    mobile view | about page
                  </div>
                </Panel>
              </SlideRight>
            </>
          )}

          {activeTab.label === "Collegiate Wushu" && (
            <>
              <SlideRight delay={0}>
                <BulletPoint props="lowercase">
                  more info about this project can be found under{" "}
                  <Link href="/projects" className="font-bold hover:underline">
                    projects.
                  </Link>
                </BulletPoint>
              </SlideRight>
              <SlideRight delay={0.1}>
                <BulletPoint props=" lowercase">
                  i was tasked with redesigning the visual interface of the{" "}
                  <Link
                    href="http://collegiatewushu.org/home.php"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-bold hover:underline"
                  >
                    existing site.
                  </Link>
                </BulletPoint>
              </SlideRight>
              <SlideRight delay={0.2}>
                <BulletPoint props=" lowercase">
                  one key task was reorganizing the pages to improve
                  accessibility to information.
                </BulletPoint>
              </SlideRight>

              <SlideRight delay={0}>
                <GrowablePanel props="flex-shrink-0 max-w-[24.5rem]">
                  <Image
                    src="/cwc_home_old.png"
                    height={500}
                    width={500}
                    alt="cwc-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    early home page concept
                  </div>
                </GrowablePanel>
              </SlideRight>

              <div>
                <SlideLeft delay={0.1}>
                  <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                    <Image
                      src="/cwc_old_home2.png"
                      height={500}
                      width={500}
                      alt="cwc-ui"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      early home page concept
                    </div>
                  </GrowablePanel>
                </SlideLeft>

                <SlideLeft delay={0.2}>
                  <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                    <Image
                      src="/cwc_home.png"
                      height={500}
                      width={500}
                      alt="cwc-ui"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      final home page
                    </div>
                  </GrowablePanel>
                </SlideLeft>
              </div>

              <div>
                <SlideRight delay={0}>
                  <BulletPoint props=" lowercase">
                    one early design choice was switching to a lightmode theme.
                  </BulletPoint>
                </SlideRight>
                <SlideRight delay={0.1}>
                  <BulletPoint props=" lowercase">
                    the navy theming made the site look too heavy, and my
                    lightmode designs were more cohesive. i brought visual
                    interest by illustrating the blue &quot;swoosh&quot;.
                  </BulletPoint>
                </SlideRight>
              </div>

              <div>
                <SlideRight delay={0.2}>
                  <BulletPoint props=" lowercase">
                    another important decision was deciding between top vs. side
                    navigation bars for various pages.
                  </BulletPoint>
                </SlideRight>

                <SlideRight delay={0.3}>
                  <BulletPoint props=" lowercase">
                    after doing some research, i learned that navigation
                    alignment can be critical to a smooth user experience.
                  </BulletPoint>
                </SlideRight>
              </div>

              <div>
                <SlideLeft delay={0}>
                  <BulletPoint props=" lowercase">
                    top navigation bars are clean for fewer items, while side
                    navigation takes more space but is ideal for more items.
                  </BulletPoint>
                </SlideLeft>

                <SlideLeft delay={0.1}>
                  <BulletPoint props=" lowercase">
                    using these general rules, i combined top and side
                    navigation bars throughout the application to simplify user
                    flow.
                  </BulletPoint>
                </SlideLeft>
              </div>

              <SlideLeft delay={0}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/cwc_rules_old.png"
                    height={500}
                    width={500}
                    alt="cwc-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    early rules page - top nav
                  </div>
                </GrowablePanel>
              </SlideLeft>

              <SlideLeft delay={0.2}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/cwc_rules.png"
                    height={500}
                    width={500}
                    alt="cwc-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    final rules page - side nav
                  </div>
                </GrowablePanel>
              </SlideLeft>

              <SlideRight delay={0}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/cwc_about.png"
                    height={500}
                    width={500}
                    alt="cwc-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    about page - wip
                  </div>
                </GrowablePanel>
              </SlideRight>

              <SlideRight delay={0.2}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/cwc_registration.png"
                    height={500}
                    width={500}
                    alt="cwc-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    user registration
                  </div>
                </GrowablePanel>
              </SlideRight>

              <SlideLeft delay={0}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/cwc_overview.png"
                    height={500}
                    width={500}
                    alt="cwc-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    user page
                  </div>
                </GrowablePanel>
              </SlideLeft>

              <SlideLeft delay={0.2}>
                <GrowablePanel props="flex-shrink-0 max-w-[32rem]">
                  <Image
                    src="/cwc_events.png"
                    height={500}
                    width={500}
                    alt="cwc-ui"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    event registration
                  </div>
                </GrowablePanel>
              </SlideLeft>
            </>
          )}

          {activeTab.label === "ACM Studio" && (
            <>
              {/* <div className="flex gap-6 flex-wrap"> */}
              {/* <div> */}
              <div className="flex justify-center flex-wrap gap-6 gap-y-0">
                <div id="sec1">
                  <SlideRight delay={0}>
                    <BulletPoint props="lowercase">
                      as marketing and engagement chair for acm studio,
                      i&apos;ve designed graphics and merchandise for the club.
                    </BulletPoint>
                  </SlideRight>
                  <SlideRight delay={0.2}>
                    <BulletPoint props="lowercase">
                      this year, i iterated through early sketches and
                      compositions for our hoodies. the final design was
                      composed by derek jiang!
                    </BulletPoint>
                  </SlideRight>
                </div>

                <SlideLeft delay={0}>
                  <Panel props="flex-shrink-0">
                    <Image
                      src="/hoodie1.png"
                      height={400}
                      width={400}
                      alt="hoodie"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      initial concept
                    </div>
                  </Panel>
                </SlideLeft>

                <SlideLeft delay={0.2}>
                  <Panel props="flex-shrink-0">
                    <Image
                      src="/hoodie2.png"
                      height={400}
                      width={400}
                      alt="hoodie"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      rough sketch
                    </div>
                  </Panel>
                </SlideLeft>

                <SlideRight delay={0}>
                  <Panel props="flex-shrink-0">
                    <Image
                      src="/hoodie3.png"
                      height={400}
                      width={400}
                      alt="hoodie"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      refined sketch
                    </div>
                  </Panel>
                </SlideRight>

                <SlideRight delay={0.2}>
                  <Panel props="flex-shrink-0">
                    <Image
                      src="/hoodie4.png"
                      height={400}
                      width={400}
                      alt="hoodie"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      final design
                    </div>
                  </Panel>
                </SlideRight>

                <SlideRight delay={0.4}>
                  <Panel props="flex-shrink-0">
                    <Image
                      src="/hoodie5.png"
                      height={400}
                      width={400}
                      alt="hoodie"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      finished product!
                    </div>
                  </Panel>
                </SlideRight>

                <div id="sec2">
                  <SlideRight delay={0}>
                    <BulletPoint>
                      here are some graphics i created for our weekly workshops!
                      we display these on our instagram and in club
                      announcements.
                    </BulletPoint>
                  </SlideRight>

                  <SlideRight delay={0.2}>
                    <BulletPoint>
                      the axolotl, named sooper, is our club mascot. it makes an
                      appearance in almost all of our graphics!
                    </BulletPoint>
                  </SlideRight>
                </div>

                <SlideLeft delay={0}>
                  <Panel props="flex-shrink-0">
                    <Image
                      src="/workshop1.png"
                      height={400}
                      width={400}
                      alt="hoodie"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      worldbuilding workshop
                    </div>
                  </Panel>
                </SlideLeft>

                <SlideLeft delay={0.2}>
                  <Panel props="flex-shrink-0">
                    <Image
                      src="/workshop2.png"
                      height={400}
                      width={400}
                      alt="hoodie"
                      className="rounded-lg"
                    />
                    <div className="text-sm mt-4 flex gap-2 items-center">
                      <LuStar />
                      exporting a project workshop
                    </div>
                  </Panel>
                </SlideLeft>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
