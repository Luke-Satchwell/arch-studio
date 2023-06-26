"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { portfolio } from "@/constants/constants";
import { AiOutlineArrowRight } from "react-icons/ai";

const FeaturedProjects = () => {
  const [screenSize, setScreenSize] = useState("mobile");
  const featuredItems = portfolio.filter(
    (project) => project.featured === true
  );

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
    <section className="w-4/5 mx-auto relative">
      <h2 className="text-zinc-900 font-bold text-[48px] md:text-[72px] leading-[52px] md:leading-[64px] tracking-[-1.714px] md:tracking-[-2px] md:w-[446px] md:-mt-10">
        Featured
      </h2>
      <div className="mt-[43px] grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featuredItems.map((project, index) => {
          const imageUrl = project.image[screenSize];
          return (
            <div
              key={project.id}
              style={{
                backgroundImage: `url("${imageUrl}")`,
              }}
              className={`h-60 lg:h-[560px] bg-cover bg-center bg-no-repeat relative bg-black/40 bg-blend-overlay`}
            >
              <div className="absolute left-6 bottom-6">
                <h3 className="text-white capitalize font-bold text-32px leading-10">
                  {project.title}
                </h3>

                <Link
                  href="/portfolio"
                  className="font-medium text-white opacity-75 hover:opacity-100"
                >
                  See All Projects
                </Link>
              </div>
              <span className="text-white text-[250px] font-bold  leading-10 opacity-50 hidden md:flex absolute right-4 top-[130px] ">
                {index + 1}
              </span>
            </div>
          );
        })}
        <Link href="/portfolio" className="md:absolute md:top-0 md:right-0">
          <button className="bg-zinc-900 hover:bg-neutral-500 cursor-pointer h-[72px] w-[300px] md:w-[169px] text-white capitalize flex items-center justify-center gap-6">
            See All
            <AiOutlineArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};
export default FeaturedProjects;
