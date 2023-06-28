"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";

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
    </div>
  );
};
export default ContactPage;
