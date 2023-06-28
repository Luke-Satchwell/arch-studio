"use client";

import { useState, useEffect } from "react";

import PageIdentifier from "@/components/PageIdentifier";
import ProjectCard from "@/components/ProjectCard";
import { portfolio } from "@/constants/constants";

const PortfolioPage = () => {
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
    <>
      <PageIdentifier title="portfolio" />
      <main>
        <section className="pl-8 md:pl-24 lg:pl-[164px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 max-w-[1110px]">
            {portfolio.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                date={project.date}
                bgImage={project.image[screenSize]}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default PortfolioPage;
