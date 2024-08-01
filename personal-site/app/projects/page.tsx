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

export default function Projects() {
  return (
    <>
      <div className="relative w-full max-w-lg -z-20">
        <div className="mix-blend-multiply fixed top-[10rem] md:top-[14rem] -left-[4rem] md:left-[10rem] w-[24rem] h-[24rem] bg-third-blue rounded-full  filter blur-2xl animate-blob opacity-80"></div>
        <div className=" mix-blend-multiply fixed top-[6rem] md:top-[8rem] right-[19rem] w-[24rem] h-[24rem] md:w-[25rem] md:h-[25rem] bg-second-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
        <div className=" mix-blend-multiply fixed top-[20rem] md:top-[19rem] left-[6rem] md:left-[30rem] w-[25rem] h-[25rem] bg-third-pink rounded-full  filter blur-2xl animate-blob animation-delay-4000 opacity-70 "></div>
      </div>

      <Link href="/art" className="absolute left-20 top-[20rem]">
        <LuChevronLeft className="h-10 w-10 hover:animate-arrow" />
      </Link>

      <Link href="/" className="absolute left-10 top-10">
        <LuHome className="h-8 w-7 hover:animate-pulse" />
      </Link>

      <div className="mx-[12rem] my-20">
        <div>
          <div className="font-bold text-4xl">personal projects</div>
          <div className="flex gap-6">
            <div id="col-1">
              <BulletPoint props="mt-10 lowercase">
                I'm a recent computer science enthusiast with specific interest
                in frontend development and UI/UX design.
              </BulletPoint>
              <BulletPoint props="lowercase">
                I switched majors in my second year - before, I studied
                psychobiology with intentions to attend medical school.
              </BulletPoint>
              <BulletPoint props="lowercase">
                I love making things and making things look good. I find myself
                working on developing games and web applications. I'm always
                looking to learn!
              </BulletPoint>
            </div>
            <div id="col-2">
              <BulletPoint props="mt-10">
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
            </div>
            <div id="col-3">
              <BulletPoint props="mt-10">
                while frontend is my forte, i'm always progressing towards
                full-stack - every stage of development offers a new problem to
                solve!
              </BulletPoint>
              <BulletPoint>
                some fun facts about me
                <ul className="list-inside">
                  <li>
                    <div className="flex items-center gap-2 mt-2">
                      <LuSprout />
                      i've lived in ny, tx, pa, and ca
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 mt-2">
                      <LuSprout />i was in hoyo's cc program
                    </div>
                  </li>
                </ul>
              </BulletPoint>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
