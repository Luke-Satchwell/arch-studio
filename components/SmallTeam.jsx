"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const SmallTeam = () => {
  const [screenSize, setScreenSize] = useState("mobile");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize("desktop");
      } else if (window.innerWidth >= 768) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="mb-[73px] md:mb-[200px]">
      <div className=" md:ml-24 lg:ml-[164px] w-full md:w-4/5 lg:w-3/4 xl:w-4/5 max-w-[1110px] relative">
        <div
          style={{
            backgroundImage: `url('/assets/home/${screenSize}/image-small-team.jpg')`,
          }}
          className="h-[560px] md:h-[720px] bg-black/40 bg-blend-overlay bg-no-repeat bg-cover bg-center relative"
        >
          <div className="flex flex-col items-center justify-between w-[311px] md:w-[445px] absolute left-[50%] translate-x-[-50%] md:left-[58px] md:translate-x-0 lg:left-48 top-[181px] md:top-[171px] lg:top-[167px] ">
            <div className="flex flex-col gap-6">
              <h2 className="text-white font-bold text-[48px] md:text-[72px] leading-[48px] md:leading-[64px] tracking-[-1.2px] md:tracking-[-2px]">
                Small team, big ideas
              </h2>
              <Link href="/about-us">
                <button className="bg-zinc-700 h-[72px] w-[252px] text-white capitalize flex items-center justify-center gap-6">
                  About Us
                  <AiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SmallTeam;
