import Image from "next/image";

import LargeHeading from "./LargeHeading";

const Header = ({ image, title, description, page }) => {
  return (
    <header className="w-[375px] md:w-[573px] md:h-[720px] md:pl-24 lg:pl-[164px] mx-auto md:mx-0">
      <div
        style={{ backgroundImage: `url("${image}")` }}
        className="bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat h-[240px] w-full md:h-[720px] md:w-[573px] xl:w-[635px] relative"
      >
        <div className="bg-white w-[90%] h-[45px] absolute  bottom-0 left-0 md:hidden" />
      </div>
      <div className="bg-white pt-[20px] md:pt-0 pl-8 md:pl-[60px] xl:pl-[182px] md:mt-[88px] flex flex-col justify-end gap-[21px] md:gap-[38px] lg:gap-[49px] md:top-[354px] xl:top-[281px] md:absolute md:left-[160px] bottom-0 md:w-[572px] md:h-[431px]  xl:w-[793px] xl:h-[503px] lg:left-[400px] xl:left-[482px]">
        <div className="h-[1px] w-[65px] bg-gray-300 mb-[33px] hidden md:flex" />
        <h2 className="w-[311px] md:w-[456px] font-bold text-[48px] md:text-[72px] leading-[52px] md:leading-[64px] tracking-[-1.2px] md:tracking-[-2px] text-zinc-900 flex flex-col items-center justify-center">
          {title}
        </h2>
        <p className="font-medium w-[311px] md:w-[445px]">{description}</p>
      </div>
      <div className="hidden md:flex absolute top-[350px] right-[100px] xl:right-[165px] xl:top-[282px]">
        <LargeHeading title={page} />
      </div>
    </header>
  );
};
export default Header;
