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
        <LuHome className="h-8 w-7 hover:animate-pulse animate-fade" />
      </Link>

      <div className="my-[7rem] w-full relative overflow-x-clip">
        <div>
          <div className="mb-16 flex flex-wrap justify-center lg:justify-start items-end gap-12 mx-[14vw] opacity-0 animate-slideInTop">
            <div className="font-bold text-4xl">gallery</div>
            <div className="flex gap-6">
              <BulletPoint>wip!</BulletPoint>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="relative w-full max-w-lg -z-20">
<div className="mix-blend-multiply fixed top-[10rem] md:top-[14rem] -left-[4rem] md:left-[10rem] w-[24rem] h-[24rem] bg-pris-light-pink rounded-full  filter blur-2xl animate-blob opacity-80"></div>
<div className=" mix-blend-multiply fixed top-[6rem] md:top-[8rem] right-[19rem] w-[24rem] h-[24rem] md:w-[25rem] md:h-[25rem] bg-pris-yellow rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
<div className=" mix-blend-multiply fixed top-[20rem] md:top-[19rem] left-[6rem] md:left-[30rem] w-[25rem] h-[25rem] bg-third-pink rounded-full  filter blur-2xl animate-blob animation-delay-4000 opacity-70 "></div>
</div> */
}
