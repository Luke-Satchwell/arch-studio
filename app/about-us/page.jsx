"use client";

import Header from "@/components/Header";
import { leaders } from "@/constants/constants";
import PageIdentifier from "@/components/PageIdentifier";
import { useState, useEffect } from "react";
import Image from "next/image";

const AboutUsPage = () => {
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
      <PageIdentifier title="about us" />
      <Header
        image={`/assets/about/${screenSize}/image-hero.jpg`}
        title="Your team of professionals"
        description="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
        page="About"
      />
      <main>
        <section className="pt-[76px] w-[80%] mx-auto flex flex-col lg:flex-row lg:gap-[50px] xl:gap-[170px]">
          <div className="flex flex-col gap-[22px] lg:w-[446px] ">
            <div className="h-[1px] w-[65px] bg-gray-300 mb-[33px] flex" />
            <h2 className="w-[311px] md:w-[456px] font-bold text-[48px] md:text-[72px] leading-[52px] md:leading-[64px] tracking-[-1.714px] md:tracking-[-2px] text-zinc-900">
              Our <br /> Heritage
            </h2>
            <div className="flex flex-col gap-6">
              <p>
                Founded in 2007, we started as a trio of architects. Our
                complimentary skills and relentless attention to detail turned
                Arch into one of the most sought after boutique firms in the
                country.
              </p>
              <p>
                Speciliazing in Urban Design allowed us to focus on creating
                exceptional structures that live in harmony with their
                surroundings. We consider every detail from every surrounding
                element to inform our designs.
              </p>

              <p>
                Our small team of world-class professionals provides input on
                every project.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <Image
              src="/assets/about/desktop/image-heritage.jpg"
              alt="picture of a building"
              width={540}
              height={568}
            />
          </div>
        </section>
        <section className="pt-[112px] w-[80%] mx-auto flex flex-col xl:flex-row">
          <h2 className="w-[311px] md:w-[456px] font-bold text-[48px] md:text-[72px] leading-[52px] md:leading-[64px] tracking-[-1.714px] md:tracking-[-2px] text-zinc-900 pb-[55px]">
            The <br />
            Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-[30px]">
            {leaders.map((leader) => (
              <div key={leader.name} className="relative">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={280}
                  height={256}
                  className="lg:w-[350px] lg:h-[320px]"
                />
                <h3 className="text-[32px] font-bold leading-10 text-zinc-900 pt-[15px]">
                  {leader.name}
                </h3>
                <p className="font-medium opacity-75">{leader.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default AboutUsPage;
