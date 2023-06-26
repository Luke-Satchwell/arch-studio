"use client";

import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

import { showcaseItems } from "@/constants/constants";
import Link from "next/link";
import SlideShowButton from "./SlideShowButton";

const SlideShow = () => {
  const [buttonId, setButtonId] = useState(1);
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

  const handleClick = (id) => {
    setButtonId(id);
  };

  //mobile slide functionality
  const handlePrevSlide = () => {
    const currentIndex = showcaseItems.findIndex(
      (item) => item.id === buttonId
    );
    if (currentIndex > 0) {
      setButtonId(showcaseItems[currentIndex - 1].id);
    }
  };

  const handleNextSlide = () => {
    const currentIndex = showcaseItems.findIndex(
      (item) => item.id === buttonId
    );
    if (currentIndex < showcaseItems.length - 1) {
      setButtonId(showcaseItems[currentIndex + 1].id);
    }
  };

  return (
    <header className="md:mb-[89px] lg:mb-[108px]">
      {showcaseItems.map((item) => {
        if (item.id === buttonId) {
          const imageUrl = item.images[screenSize];
          return (
            <div
              key={item.id}
              className=" md:ml-24 lg:ml-[164px] w-full md:w-4/5 lg:w-3/4 xl:w-4/5 max-w-[1110px] relative"
            >
              <div
                style={{ backgroundImage: `url('${imageUrl}')` }}
                className="h-[560px] md:h-[720px] bg-black/40 bg-blend-overlay bg-no-repeat bg-cover bg-center relative"
              >
                <div className="flex flex-col justify-between w-[311px] h-[344px] absolute left-[50%] lg:left-48 translate-x-[-50%] lg:translate-x-0 top-[116px] lg:top-[186px] ">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-white font-bold text-[48px] leading-[48px] tracking-[-1.2px]">
                      {item.title}
                    </h1>
                    <p className="font-medium text-white">{item.description}</p>
                  </div>
                  <Link href="/portfolio">
                    <button className="bg-zinc-700 hover:bg-neutral-500 h-[72px] w-[252px] text-white capitalize flex items-center justify-center gap-6">
                      See our portfolio
                      <AiOutlineArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-[-80px] z-10 hidden lg:flex gap-0">
                {/* create a button for each array element to display content on desktop */}
                {showcaseItems.map((item) => (
                  <SlideShowButton
                    key={item.id}
                    id={item.id}
                    isActive={item.id === buttonId}
                    handleClick={handleClick}
                  />
                ))}
              </div>
              {/* create a button for each array element to display content on mobile */}
              <div className="absolute bottom-6 md:bottom-[50px] left-[-200px] md:left-0 right-0 flex justify-center gap-8 md:gap-14 lg:hidden">
                <button
                  className="bg-transparent text-white cursor-pointer border-white border-[1px] border-solid rounded-full hover:scale-110"
                  onClick={handlePrevSlide}
                >
                  <MdKeyboardArrowLeft size={24} />
                </button>

                <button
                  className="bg-transparent text-white cursor-pointer border-white border-[1px] border-solid rounded-full hover:scale-110"
                  onClick={handleNextSlide}
                >
                  <MdKeyboardArrowRight size={24} />
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
    </header>
  );
};

export default SlideShow;
