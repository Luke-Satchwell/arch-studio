"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { navLinks } from "@/constants/constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (toggleMenu && window.matchMedia("(min-width: 768px)").matches) {
        setToggleMenu(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggleMenu]);

  return (
    <nav>
      <div className="flex items-center justify-between md:justify-start gap-[81px] pl-8 md:pl-24 lg:pl-[164px] py-8 md:py-14 pr-8 md:pr-0">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={97}
            height={40}
            className="object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center gap-[61px]">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.to}
              className="uppercase font-bold text-gray-500 hover:text-zinc-900 cursor-pointer"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex md:hidden">
          {toggleMenu ? (
            <AiOutlineClose size={25} onClick={() => setToggleMenu(false)} />
          ) : (
            <AiOutlineMenu size={25} onClick={() => setToggleMenu(true)} />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="bg-black/50 w-full h-full absolute z-10">
          <div className="flex flex-col items-start gap-[17px] pl-12 pt-10 bg-gray-100 w-[235px] h-[235px] absolute right-0 min-w-[343px]">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.to}
                className="uppercase font-bold text-zinc-900 text-[32px] leading-10 cursor-pointer"
                onClick={() => setToggleMenu(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
