"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

import Header from "@/components/Header";
import { contactDetails } from "@/constants/constants";
import Form from "@/components/Form";

const ContactPage = () => {
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
    <div>
      <Header
        image={`/assets/contact/${screenSize}/image-hero.jpg`}
        title="Tell us about your project"
        description="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
        page="Contact"
      />
      <main>
        <section className="mt-[100px] w-[80%] md:ml-[97px] lg:ml-[164px] flex flex-col mx-auto ">
          <div className="flex flex-col xl:flex-row gap-[22px] lg:w-[446px] ">
            <div className="xl:w-[350px]">
              <div className="h-[1px] w-[65px] bg-gray-300 mb-[33px] flex" />
              <h2 className="w-[311px] md:w-[456px] font-bold text-[48px] md:text-[72px] leading-[52px] md:leading-[64px] tracking-[-1.714px] md:tracking-[-2px] text-zinc-900">
                Contact <br /> Details
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30px] pt-[42px]">
              {contactDetails.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-[14px] xl:w-[350px]"
                >
                  <h3 className="font-bold text-[18px] leading-[35px] text-gray-500">
                    {item.office}
                  </h3>
                  <div>
                    <p className="font-medium text-gray-500">
                      Mail : {item.email}
                    </p>
                    <p className="font-medium text-gray-500">
                      Address : {item.address}
                    </p>
                    <p className="font-medium text-gray-500">
                      Phone : {item.phone}
                    </p>
                  </div>
                  <a
                    href="#map"
                    className="flex items-center gap-6 font-bold text-[18px] leading-[25px]"
                  >
                    View on Map <AiOutlineArrowRight />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="map">
          <div className="mt-[71px] lg:mt-[80px]">
            <Image
              src={`/assets/contact/${screenSize}/image-map.png`}
              alt="map"
              width={375}
              height={290}
              className="mx-auto md:pl-[97px] lg:pl-[164px] md:mx-0 object-contain md:w-[573px] md:h-[580px] lg:h-[600px] lg:w-[900px] xl:w-[1110px]"
            />
          </div>
        </section>
        <section className="mt-[50px] md:mt-[100px] md:pl-[97px] lg:pl-[164px] w-4/5 mx-auto md:mx-0">
          <Form />
        </section>
      </main>
    </div>
  );
};
export default ContactPage;
