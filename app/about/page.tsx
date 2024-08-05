"use client";
import {
  LuGraduationCap,
  LuLinkedin,
  LuGithub,
  LuHeart,
  LuGamepad2,
  LuChevronRight,
  LuSprout,
  LuHome,
} from "react-icons/lu";
import Link from "next/link";
import { BulletPoint, Panel } from "../components/bulletpoint";

import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="overflow-x-clip relative w-full animate-fade">
        <div className="mix-blend-multiply fixed top-[10rem] md:top-[14rem] -left-[4rem] md:left-[10rem] w-[24rem] h-[24rem] bg-third-pink rounded-full  filter blur-2xl animate-blob opacity-80"></div>
        <div className="mix-blend-multiply fixed top-[6rem] md:top-[8rem] right-[19rem] w-[24rem] h-[24rem] md:w-[25rem] md:h-[25rem] bg-pris-light-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
        <div className="mix-blend-multiply fixed top-[20rem] md:top-[19rem] left-[6rem] md:left-[30rem] w-[25rem] h-[25rem] bg-pris-pink rounded-full  filter blur-2xl animate-blob animation-delay-4000 opacity-70 "></div>
      </div>

      <Link href="/designs" className="absolute right-[10vw] top-10">
        <LuChevronRight className="h-10 w-10 hover:animate-arrow" />
      </Link>

      <Link href="/" className="absolute left-10 top-10">
        <LuHome className="h-8 w-7 hover:animate-pulse" />
      </Link>

      <div className="my-[7rem] w-full relative overflow-x-clip">
        <div>
          <div className="mb-16 flex flex-wrap justify-center lg:justify-start items-end gap-12 mx-[14vw] opacity-0 animate-slideInTop">
            <div className="font-bold text-4xl">hi, i&apos;m rachel!</div>
            <div className="flex flex-wrap justify-center items-end gap-12">
              <div className="flex items-center gap-2 text-lg">
                <LuGraduationCap />
                UCLA 2026
              </div>
              <Link
                href="https://github.com/rachjn"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2 text-lg"
              >
                <LuGithub />
                rachjn
              </Link>
              <Link
                href="https://www.linkedin.com/in/rachjn/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2 text-lg"
              >
                <LuLinkedin />
                rachjn
              </Link>
            </div>
          </div>

          <div className=" mx-0 sm:mx-[12vw] flex gap-6 flex-wrap items-center justify-center">
            <div id="col-1">
              <motion.div
                initial={{ opacity: 0, x: "-100px" }} // Start position
                whileInView={{ opacity: 1, x: 0 }} // End position
                transition={{ duration: 0.5, ease: "easeOut" }} // Animation settings
                viewport={{ once: false }} // Animation occurs once when the element comes into view
              >
                <BulletPoint props="lowercase -mt-6">
                  I&apos;m a recent computer science enthusiast with specific
                  interest in frontend development and UI/UX design.
                </BulletPoint>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100px" }} // Start position
                whileInView={{ opacity: 1, x: 0 }} // End position
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Animation settings
                viewport={{ once: false }} // Animation occurs once when the element comes into view
              >
                <BulletPoint props="lowercase">
                  I switched majors in my second year - before, I studied
                  psychobiology with intentions to attend medical school.
                </BulletPoint>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100px" }} // Start position
                whileInView={{ opacity: 1, x: 0 }} // End position
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }} // Animation settings
                viewport={{ once: false }} // Animation occurs once when the element comes into view
              >
                <BulletPoint props="lowercase ">
                  I love making things and making things look good. I find
                  myself working on developing games and web applications.
                  I&apos;m always looking to learn!
                </BulletPoint>
              </motion.div>
            </div>

            <div id="col-2">
              <motion.div
                initial={{ opacity: 0, x: "100px" }} // Start position
                whileInView={{ opacity: 1, x: 0 }} // End position
                transition={{ duration: 0.5, ease: "easeOut" }} // Animation settings
                viewport={{ once: false }} // Animation occurs once when the element comes into view
              >
                <BulletPoint props="-mt-6">
                  outside of programming, i enjoy
                  <ul className="list-inside">
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuHeart />
                        digital art and design
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuHeart />
                        wushu
                      </div>
                    </li>{" "}
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuHeart />
                        gymnastics
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuHeart />
                        video games
                      </div>
                      <ul className="list-inside ml-6">
                        <li>
                          <div className="flex items-center gap-2 mt-2">
                            <LuGamepad2 />
                            tft
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2 mt-2">
                            <LuGamepad2 />
                            disco elysium
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2 mt-2">
                            <LuGamepad2 />
                            stardew valley
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2 mt-2">
                            <LuGamepad2 />
                            hi3
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuHeart />
                        watching anime & vct
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuHeart />
                        playing set with friends
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuHeart />
                        cafe hopping
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuHeart />
                        making spotify playlists
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuHeart />
                        <div>
                          my
                          <Link
                            href="https://www.instagram.com/acmstudio.ucla/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="font-bold"
                          >
                            {" "}
                            acm studio{" "}
                          </Link>
                          fam!
                        </div>
                      </div>
                    </li>
                  </ul>
                </BulletPoint>
              </motion.div>
            </div>
            <div id="col-3">
              <motion.div
                initial={{ opacity: 0, x: "100px" }} // Start position
                whileInView={{ opacity: 1, x: 0 }} // End position
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Animation settings
                viewport={{ once: false }} // Animation occurs once when the element comes into view
              >
                <BulletPoint props="-mt-6">
                  while frontend is my forte, i&apos;m always progressing
                  towards full-stack - every stage of development offers a new
                  problem to solve!
                </BulletPoint>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "100px" }} // Start position
                whileInView={{ opacity: 1, x: 0 }} // End position
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }} // Animation settings
                viewport={{ once: false }} // Animation occurs once when the element comes into view
              >
                <BulletPoint>
                  some fun facts about me
                  <ul className="list-inside">
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuSprout />
                        i&apos;ve lived in ny, tx, pa, and ca
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 mt-2">
                        <LuSprout />
                        i&apos;m a licensed phlebotomist
                      </div>
                    </li>
                  </ul>
                </BulletPoint>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "100px" }} // Start position
                whileInView={{ opacity: 1, x: 0 }} // End position
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }} // Animation settings
                viewport={{ once: false }} // Animation occurs once when the element comes into view
              >
                <BulletPoint>
                  some fun facts in general
                  <ul className="list-inside">
                    <li>
                      <div className="flex items-start gap-2 mt-2">
                        <LuSprout className="flex-shrink-0 mt-1" />
                        git became self-hosting in a day
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-2 mt-2">
                        <LuSprout className="flex-shrink-0 mt-1" />
                        php is a recursive acronym
                      </div>
                    </li>
                  </ul>
                </BulletPoint>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
