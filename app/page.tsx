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
      <div className="relative w-full max-w-lg">
        <div className="mix-blend-overlay absolute top-[10rem] md:top-[8rem] -left-[4rem] md:left-[8rem] w-[20rem] h-[20rem] bg-extra-blue rounded-full  filter blur-2xl animate-blob opacity-80"></div>
        <div className="mix-blend-overlay absolute top-[10rem] md:top-[9rem] -right-[10rem] md:-right-[9rem] w-[20rem] h-[20rem] md:w-[12rem] md:h-[12rem] bg-pris-light-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-90"></div>
        <div className="mix-blend-overlay absolute top-[20rem] md:top-[14rem] left-[6rem] md:left-[19rem] w-[20rem] h-[20rem] bg-pris-yellow rounded-full  filter blur-2xl animate-blob animation-delay-4000 opacity-80 "></div>
      </div>
      <div className="relative w-screen max-w-lg">
        <div className="absolute top-[10rem] md:top-[0rem] -left-[4rem] md:left-[60rem] w-[25rem] h-[25rem] bg-pris-blue rounded-full mix-blend-multiply filter blur-2xl animate-blob opacity-80"></div>
        <div className="absolute top-[10rem] md:top-[2rem] -right-[10rem] md:-right-[36rem] w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] mix-blend-multiply  bg-pris-light-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
        <div className="absolute top-[10rem] md:top-[11rem] -right-[10rem] md:-right-[50rem] w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] mix-blend-multiply  bg-pris-light-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-40"></div>
        <div className="absolute top-[20rem] md:top-[14rem] left-[6rem] md:left-[40rem] w-[23rem] h-[23rem] bg-extra-yellow rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex items-center mx-[12rem] my-[6rem] justify-between">
        <div className="font-bold text-8xl">rachel jin</div>
        <div className="h-[35rem] w-[40rem] rounded-lg">
          <div className="flex mt-8">
            <Link href="/about" className="relative">
              <FloatingEffect
                delay={0}
                height="h-[14rem]"
                width="w-[22rem]"
                shadowColor="hover:shadow-pris-yellow/40"
              >
                <div className="absolute font-bold text-3xl bottom-4 left-5">
                  about
                </div>
              </FloatingEffect>
            </Link>
            {/* <Link
              href="/designs"
              className="animate-float2 hover:animate-none transition ease-in duration-200 hover:scale-[101%] hover:shadow-xl hover:shadow-second-blue/40 relative h-[14rem] w-[14rem] bg-lightest rounded-lg mt-3"
            >
              <div className="absolute top-4 left-5 font-bold text-3xl">
                designs
              </div>
            </Link> */}

            <Link href="/art" className="relative">
              <FloatingEffect
                delay={0.8}
                height="h-[14rem]"
                width="w-[14rem]"
                shadowColor="hover:shadow-second-blue/40"
              >
                <div className="absolute font-bold text-3xl top-4 right-5">
                  designs
                </div>
              </FloatingEffect>
            </Link>
          </div>
          <div className="flex">
            {/* <Link
              href="/art"
              className="animate-float4 hover:animate-none transition ease-in-out duration-200 hover:scale-[101%] hover:shadow-xl hover:shadow-third-pink/40 relative h-[14rem] w-[14rem] bg-lightest rounded-lg mx-3"
            >
              <div className="absolute bottom-4 right-5 font-bold text-3xl">
                digital art
              </div>
            </Link> */}

            <Link href="/art" className="relative">
              <FloatingEffect
                delay={1.2}
                height="h-[14rem]"
                width="w-[14rem]"
                shadowColor="hover:shadow-third-pink/40"
              >
                <div className="absolute font-bold text-3xl top-4 right-5">
                  digital art
                </div>
              </FloatingEffect>
            </Link>
            {/* <Link
              href="/projects"
              className="animate-float3 hover:animate-none transition ease-in-out duration-200 hover:scale-[101%] hover:shadow-xl hover:shadow-pris-light-pink/40 relative h-[14rem] w-[22rem] bg-lightest rounded-lg"
            >
              <div className="absolute top-4 right-5 font-bold text-3xl">
                projects
              </div>
            </Link> */}

            <Link href="/projects" className="relative">
              <FloatingEffect
                delay={0.6}
                height="h-[14rem]"
                width="w-[22rem]"
                shadowColor="hover:shadow-pris-light-pink/40"
              >
                <div className="absolute font-bold text-3xl top-4 right-5">
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
