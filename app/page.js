import Image from "next/image";

import SlideShow from "@/components/SlideShow";
import PageIdentifier from "@/components/PageIdentifier";
import LargeHeading from "@/components/LargeHeading";
import SmallTeam from "@/components/SmallTeam";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <>
      <PageIdentifier title="home" />
      <SlideShow />
      <main>
        <section className="pt-[73px] md:pt-0 pb-[113px] relative ">
          <div className="w-4/5 mx-auto">
            <div className="w-[65px] h-[1px] bg-gray-300 md:hidden mb-[68px]" />
            <div className="hidden md:block absolute md:left-[97px] lg:left-[165px] z-10">
              <LargeHeading title="Welcome" />
            </div>
            <div className="relative md:top-[160px] md:mb-[233px] lg:mb-[211px] md:left-5 lg:left-[63px] xl:left-[210px] lg:bg-white xl:bg-transparent lg:z-10 lg:w-[446px] lg:top-[142px] xl:top-[150px]">
              <h2 className="text-zinc-900 font-bold text-[48px] md:text-[72px] leading-[52px] md:leading-[64px] tracking-[-1.714px] md:tracking-[-2px] md:w-[446px] md:-mt-10">
                Welcome to Arch Studio
              </h2>
              <div className="flex flex-col gap-6 text-neutral-700 mt-[22px] md:mt-[43px] md:w-[572px] lg:w-[445px]">
                <p>
                  We have a unique network and skillset to help bring your
                  projects to life. Our small team of highly skilled individuals
                  combined with our large network put us in a strong position to
                  deliver exceptional results.
                </p>
                <p>
                  Over the past 10 years, we have worked on all kinds of
                  projects. From stations to high-rise buildings, we create
                  spaces that inspire and delight.
                </p>
                <p>
                  We work closely with our clients so that we understand the
                  intricacies of each project. This allows us to work in harmony
                  the surrounding area to create truly stunning projects that
                  will stand the test of time.
                </p>
              </div>
            </div>

            <Image
              src="/assets/home/desktop/image-welcome.jpg"
              width={350}
              height={568}
              alt="welcome image"
              className="object-contain absolute right-[90px] xl:right-[10%] top-[90px] xl:top-[90px] z-0 hidden lg:block"
            />
          </div>
        </section>
        <SmallTeam />
        {/* featured section */}
        <FeaturedProjects />
      </main>
    </>
  );
}
