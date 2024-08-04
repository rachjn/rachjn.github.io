export default function Test() {
  return (
    <>
      <div className="mix-blend-overlay">
        <div className="absolute lg:top-[20vh] left-[10vw] w-[20rem] h-[20rem] bg-extra-blue rounded-full  filter blur-2xl animate-blob opacity-80"></div>
        <div className="absolute lg:top-[20vh] left-[40vw] w-[20rem] h-[20rem] bg-pris-light-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-90"></div>
        <div className="absolute lg:top-[20rem] left-[24vw] w-[20rem] h-[20rem] bg-pris-yellow rounded-full  filter blur-2xl animate-blob animation-delay-4000 opacity-80 "></div>
      </div>
      {/* <div className="">
        <div className="absolute top-[6vh] right-[12vw] w-[25rem] h-[25rem] bg-pris-blue rounded-full mix-blend-multiply filter blur-2xl animate-blob opacity-80"></div>
        <div className="absolute top-[12vh] right-[32vw] w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] mix-blend-multiply  bg-pris-light-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-70"></div>
        <div className="absolute top-[34vh] right-[16vw] w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] mix-blend-multiply  bg-pris-light-pink rounded-full  filter blur-3xl md:blur-2xl animate-blob animation-delay-2000 opacity-40"></div>
        <div className="absolute top-[42vh] right-[38vw] w-[23rem] h-[23rem] bg-extra-yellow rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
      </div> */}
    </>
  );
}
