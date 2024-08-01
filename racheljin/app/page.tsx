import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <Link
              href="/about"
              className="transition ease-in-out delay-50 hover:scale-[101%] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-xl hover:shadow-white/40 relative h-[14rem] w-[22rem] bg-lightest rounded-lg m-3"
            >
              <div className="absolute bottom-4 left-5 font-bold text-3xl">
                about
              </div>
            </Link>
            <Link
              href="/designs"
              className="transition ease-in-out delay-50 hover:scale-[101%] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-xl hover:shadow-white/40 relative h-[14rem] w-[14rem] bg-lightest rounded-lg mt-3"
            >
              <div className="absolute top-4 left-5 font-bold text-3xl">
                designs
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link
              href="/art"
              className="transition ease-in-out delay-50 hover:scale-[101%] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-xl hover:shadow-white/40 relative h-[14rem] w-[14rem] bg-lightest rounded-lg mx-3"
            >
              <div className="absolute bottom-4 right-5 font-bold text-3xl">
                digital art
              </div>
            </Link>
            <Link
              href="/projects"
              className="transition ease-in-out delay-50 hover:scale-[101%] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-xl hover:shadow-white/40 relative h-[14rem] w-[22rem] bg-lightest rounded-lg"
            >
              <div className="absolute top-4 right-5 font-bold text-3xl">
                projects
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
