"use client";

import Image from "next/image";
import {
  LuGraduationCap,
  LuLinkedin,
  LuGithub,
  LuInstagram,
  LuTwitter,
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
import { SlideLeft, SlideRight } from "../components/sliding";
import { LiaItchIo } from "react-icons/lia";

export default function Art() {
  return (
    <>
      <div className="overflow-x-clip relative w-full animate-fade">
        <div className="mix-blend-multiply fixed top-[10rem] md:top-[14rem] -left-[4rem] md:left-[10rem] w-[24rem] h-[24rem] bg-pris-light-pink rounded-full  filter blur-2xl animate-blob opacity-80"></div>
        <div className=" mix-blend-multiply fixed top-[6rem] md:top-[8rem] right-[19rem] w-[24rem] h-[24rem] md:w-[25rem] md:h-[25rem] bg-pris-yellow rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
        <div className=" mix-blend-multiply fixed top-[20rem] md:top-[19rem] left-[6rem] md:left-[30rem] w-[25rem] h-[25rem] bg-third-pink rounded-full  filter blur-2xl animate-blob animation-delay-4000 opacity-70 "></div>
      </div>

      <Link href="/projects" className="absolute right-[10vw] top-10">
        <LuChevronRight className="h-10 w-10 hover:animate-arrow" />
      </Link>

      <Link href="/designs" className="absolute right-[30vw] top-10">
        <LuChevronLeft className="h-10 w-10 hover:animate-arrow" />
      </Link>

      <Link href="/" className="absolute left-10 top-10">
        <LuHome className="h-8 w-7 hover:animate-pulse" />
      </Link>

      <div className="my-[7rem] w-full relative overflow-x-clip">
        <div>
          <div className="mb-16 flex flex-wrap justify-center lg:justify-start items-end gap-12 mx-[14vw] opacity-0 animate-slideInTop">
            <div className="font-bold text-4xl">gallery</div>
            <div className="flex flex-wrap justify-center items-end gap-12">
              <Link
                href="https://www.instagram.com/flubstered"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2 text-lg"
              >
                <LuInstagram />
                flubstered
              </Link>
              <Link
                href="https://twitter.com/flubstered"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2 text-lg"
              >
                <LuTwitter />
                flubstered
              </Link>
              <Link
                href="https://rychie.itch.io/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2 text-lg"
              >
                <LiaItchIo className="h-6 w-6" />
                rychie
              </Link>
            </div>
          </div>

          <div className="mx-0 sm:mx-[12vw] flex gap-6 flex-wrap items-start justify-center">
            <div id="left-side">
              {/* <div id="sec1">
                <SlideRight delay={0}>
                  <BulletPoint props="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia, sunt!
                  </BulletPoint>
                </SlideRight>
                <SlideRight delay={0.2}>
                  <BulletPoint props="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia ut explicabo autem neque obcaecati rem eos
                    repellat! Maiores, sit dicta.
                  </BulletPoint>
                </SlideRight>
              </div> */}

              <SlideRight delay={0}>
                <Panel props="flex-shrink-0">
                  <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                    <LuStar />
                    2023
                  </div>
                  <Image
                    src="/SS_animation.gif"
                    height={400}
                    width={400}
                    alt="ss-animated"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    animation sketch | studio squared
                  </div>
                </Panel>
              </SlideRight>

              <SlideRight delay={0.2}>
                <Panel props="flex-shrink-0">
                  <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                    <LuStar />
                    2023
                  </div>
                  <Image
                    src="/ss_concept_art2.png"
                    height={400}
                    width={400}
                    alt="ss-concepts"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    initial concepts | studio squared
                  </div>
                </Panel>
              </SlideRight>
            </div>

            <SlideLeft delay={0}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2023
                </div>
                <Image
                  src="/SS_concepts.png"
                  height={220}
                  width={220}
                  alt="ss-concepts"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  character concepts | studio squared
                </div>
              </Panel>
            </SlideLeft>
            <div>
              <SlideLeft delay={0.2}>
                <Panel props="flex-shrink-0">
                  <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                    <LuStar />
                    2023
                  </div>
                  <Image
                    src="/SS_titlescreen.png"
                    height={400}
                    width={400}
                    alt="ss-titlescreen"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    title screen | studio squared
                  </div>
                </Panel>
              </SlideLeft>

              <SlideLeft delay={0.4}>
                <Panel props="flex-shrink-0">
                  <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                    <LuStar />
                    2023
                  </div>
                  <Image
                    src="/ss_concept_art.png"
                    height={400}
                    width={400}
                    alt="ss-concepts"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    initial concepts | studio squared
                  </div>
                </Panel>
              </SlideLeft>
            </div>

            <div id="sec1">
              <SlideRight delay={0}>
                <BulletPoint>
                  studio squared was a summer-long game development team working
                  on a 2d platformer in unity.
                </BulletPoint>
              </SlideRight>
              <SlideRight delay={0.2}>
                <BulletPoint>
                  <Link
                    className="font-bold"
                    href="https://austinlaw8.itch.io/untitled-gacha-game"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ugg{" "}
                  </Link>
                  was a 2-quarter long game development team working on a rhythm
                  gacha mobile game.
                </BulletPoint>
              </SlideRight>
            </div>

            <SlideLeft delay={0}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2023
                </div>
                <Image
                  src="/ugg_splash.png"
                  height={400}
                  width={400}
                  alt="ss-splash"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  splash art | ugg
                </div>
              </Panel>
            </SlideLeft>

            <SlideLeft delay={0.2}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2023
                </div>
                <Image
                  src="/UGG_titlescreen.png"
                  height={400}
                  width={400}
                  alt="ugg-titlescreen"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  title screen | ugg
                </div>
              </Panel>
            </SlideLeft>

            <SlideRight delay={0}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2023
                </div>
                <Image
                  src="/ugg_first_concept.png"
                  height={380}
                  width={380}
                  alt="ugg-concept"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  initial character concept | ugg
                </div>
              </Panel>
            </SlideRight>

            <SlideRight delay={0.2}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2023
                </div>
                <Image
                  src="/ugg_concept_art.png"
                  height={380}
                  width={380}
                  alt="ugg-concept"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  character concept art | ugg
                </div>
              </Panel>
            </SlideRight>

            <SlideRight delay={0.4}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2023
                </div>
                <Image
                  src="/ugg_art.png"
                  height={400}
                  width={400}
                  alt="ugg-art"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  character card arts | ugg
                </div>
              </Panel>
            </SlideRight>

            <div id="sec1">
              <SlideRight delay={0}>
                <BulletPoint>
                  <Link
                    className="font-bold"
                    href="https://michaelkho.itch.io/all-card-memories"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    shill issue{" "}
                  </Link>
                  was a 2-quarter long game development team working on a
                  story-heavy deckbuilder game.
                </BulletPoint>
              </SlideRight>
              <SlideRight delay={0.2}>
                <BulletPoint>
                  the final pieces are fanart i created for various hoyoverse
                  games!
                </BulletPoint>
              </SlideRight>

              <SlideRight delay={0.4}>
                <Panel props="flex-shrink-0">
                  <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                    <LuStar />
                    2024
                  </div>
                  <Image
                    src="/shill_char_sheet.png"
                    height={400}
                    width={400}
                    alt="shill-char"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    character sprites | shill
                  </div>
                </Panel>
              </SlideRight>
            </div>

            <SlideLeft delay={0}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2024
                </div>
                <Image
                  src="/shill_cards.png"
                  height={240}
                  width={240}
                  alt="shill-cards"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  character card arts | shill
                </div>
              </Panel>
            </SlideLeft>

            <div>
              <SlideLeft delay={0.2}>
                <Panel props="flex-shrink-0">
                  <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                    <LuStar />
                    2024
                  </div>
                  <Image
                    src="/shill_title.png"
                    height={400}
                    width={400}
                    alt="shill-title"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    title screen | shill
                  </div>
                </Panel>
              </SlideLeft>

              <SlideLeft delay={0.4}>
                <Panel props="flex-shrink-0">
                  <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                    <LuStar />
                    2024
                  </div>
                  <Image
                    src="/shill_stylesheet.png"
                    height={400}
                    width={400}
                    alt="shill-stylesheet"
                    className="rounded-lg"
                  />
                  <div className="text-sm mt-4 flex gap-2 items-center">
                    <LuStar />
                    card art style sheet | shill
                  </div>
                </Panel>
              </SlideLeft>
            </div>

            <SlideLeft delay={0}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2021
                </div>
                <Image
                  src="/hos.png"
                  height={400}
                  width={400}
                  alt="hos"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  hos from hi3 | personal fanart
                </div>
              </Panel>
            </SlideLeft>

            <SlideLeft delay={0.2}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2021
                </div>
                <Image
                  src="/fuhua.jpeg"
                  height={400}
                  width={400}
                  alt="fuhua"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  fu hua from hi3 | personal fanart
                </div>
              </Panel>
            </SlideLeft>
            <SlideLeft delay={0.4}>
              <Panel props="flex-shrink-0">
                <div className="text-sm mb-4 flex gap-2 items-center justify-end">
                  <LuStar />
                  2021
                </div>
                <Image
                  src="/yoi.jpeg"
                  height={400}
                  width={400}
                  alt="yoimiya"
                  className="rounded-lg"
                />
                <div className="text-sm mt-4 flex gap-2 items-center">
                  <LuStar />
                  yoimiya from genshin | personal fanart
                </div>
              </Panel>
            </SlideLeft>
          </div>
        </div>
      </div>
    </>
  );
}
