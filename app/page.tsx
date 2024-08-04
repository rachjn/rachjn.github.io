"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingEffect from "./components/float";

export default function Home() {
  // const floatAnimation = {
  //   initial: { y: 0 },
  //   animate: {
  //     y: [0, -10, 10, -5, 5, -2, 2, 0], // Random vertical motion
  //     transition: {
  //       y: {
  //         repeat: Infinity, // Infinite loop
  //         repeatType: "loop", // Repeat in a loop
  //         duration: 4, // Duration of one complete loop
  //         ease: "easeInOut", // Smooth easing
  //       },
  //     },
  //   },
  // };

  return (
    <>
      <div className="overflow-x-clip relative w-full">
        <div className="mix-blend-overlay absolute -left-[18vh] -top-20">
          <div className="absolute lg:top-[20vh] left-[10vw] w-[20rem] h-[20rem] bg-extra-blue rounded-full  filter blur-2xl animate-blob opacity-80"></div>
          <div className="absolute lg:top-[20vh] left-[40vw] w-[20rem] h-[20rem] bg-pris-light-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-90"></div>
          <div className="absolute lg:top-[20rem] left-[24vw] w-[20rem] h-[20rem] bg-pris-yellow rounded-full  filter blur-2xl animate-blob animation-delay-4000 opacity-80 "></div>
        </div>

        <div className="absolute -right-[4rem] top-[20vh] lg:right-0 lg:top-0">
          <div className="absolute top-0 right-[60vw] lg:right-[10vw] w-[14rem] h-[14rem] md:w-[25rem] md:h-[25rem] bg-pris-blue rounded-full mix-blend-multiply filter blur-2xl animate-blob opacity-80"></div>
          <div className="absolute top-0 right-[28vw] w-[14rem] h-[14rem] md:w-[25rem] md:h-[25rem] mix-blend-multiply  bg-pris-light-pink rounded-full filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
          <div className="absolute top-[26vh] md:top-[26vh] right-[40vw] md:right-[14vw] w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] md:w-[25rem] md:h-[25rem] mix-blend-multiply  bg-pris-light-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-40"></div>
          <div className="absolute top-[24vh] right-[12vw] md:right-[34vw] w-[18rem] h-[18rem] md:w-[23rem] md:h-[23rem] bg-extra-yellow rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="flex flex-wrap items-center mx-[2vw] my-[6rem] justify-center gap-14 animate-fade">
        <div className="font-bold text-6xl sm:text-8xl">rachel jin</div>
        <div className="">
          <div>
            <div className="flex mt-8">
              <Link href="/about" className="relative">
                <FloatingEffect
                  delay={0}
                  height="h-[30vh]"
                  width="w-[34vw] lg:w-[24vw]"
                  shadowColor="hover:shadow-pris-yellow/40"
                >
                  <div className="absolute font-bold text-3xl bottom-4 left-5">
                    about
                  </div>
                </FloatingEffect>
              </Link>

              <Link href="/designs" className="relative">
                <FloatingEffect
                  delay={0.8}
                  height="h-[30vh]"
                  width="w-[34vw] lg:w-[15vw]"
                  shadowColor="hover:shadow-second-blue/40"
                >
                  <div className="absolute font-bold text-3xl top-4 right-5">
                    designs
                  </div>
                </FloatingEffect>
              </Link>
            </div>
          </div>

          <div className="flex">
            <Link href="/art" className="relative">
              <FloatingEffect
                delay={1.2}
                height="h-[30vh]"
                width="w-[34vw] lg:w-[15vw]"
                shadowColor="hover:shadow-third-pink/40"
              >
                <div className="hidden sm:block absolute font-bold text-3xl top-4 right-5">
                  digital art
                </div>
                <div className="sm:hidden absolute font-bold text-3xl top-4 left-4">
                  digital art
                </div>
              </FloatingEffect>
            </Link>

            <Link href="/projects" className="relative">
              <FloatingEffect
                delay={0.6}
                height="h-[30vh]"
                width="w-[34vw] lg:w-[24vw]"
                shadowColor="hover:shadow-pris-light-pink/40"
              >
                <div className="hidden sm:block absolute font-bold text-3xl bottom-4 right-5">
                  projects
                </div>
                <div className="sm:hidden absolute font-bold text-3xl bottom-4 left-2">
                  projects
                </div>
              </FloatingEffect>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
