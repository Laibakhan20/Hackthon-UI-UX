"use client";
import Link from "next/link";
import {  Heart, Search, User } from "lucide-react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart } from "react-icons/bs";


const Mobilenav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-[414px] h-[58px] top-[70px] bg-white mx-auto justify-center items-center flex pt-[30px]  px-[30px]">
        {/* for mobile ////////////////////////////*/}
      <div className="laptop:hidden xsmobile:flex   overflow-hidden mx-auto items-center justify-between flex">
        <div className="w-[187px] h-[58px] top-[23px] left-[35px] py-[13px] pr-[79px] gap-[10px] flex">
          {/*logo*/}
          <h3 className="w-[108px] h-[32px] top-[13px] gap-0 font-mon text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left">
            CasaEncanto
          </h3>
        </div>

        {/*icons*/}
        <div className="justify-end flex w-[227px] px-[30px]">

          <button  className="bg-transparent w-[24px] h-[26px]" onClick={toggleMenu}
          aria-label="Toggle Menu">
            <BiMenuAltRight className="w-[24px] h-[26px]"/>           
          </button>
        </div>

        {/*options*/}
        <div className={`${
            menuOpen ? "block" : "hidden"
          } absolute w-[400px] h-[821px] top-[490px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-50 bg-white flex-col`}>
          <div className="flex flex-col gap-[30px] mb-4">
            <Link
              href="/"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Shop
            </Link>
            <Link
              href="/services"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Contact
            </Link>
            <Link
              href="/About"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Pages
            </Link>
          </div>

          <div className="w-[310px] h-[265px] top-[590px] left-[52px] gap-[0px] flex justify-center items-center flex-col">

            <div className="w-[310px] h-[75px] gap-0 flex justify-center items-center">
              <User color="#23A6F0" className="w-[27px] h-[28px]" />
              <Link
                href={"/"}
                className="w-[248px] h-[45px] gap-0 font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center hover:underline text-myblue"
              >
                Login / Register
              </Link>
            </div>
            <div className="w-[64px] h-[64px] gap-0 flex justify-center items-center">
              <Search color="#23A6F0" className="w-[34px] h-[34px] " />
            </div>
            <div className="w-[64px] h-[64px] gap-0 flex justify-center items-center ">
              <Link
                href={"/"}
                className="w-[64px] h-[64px] gap-[5px]  flex justify-center items-center"
              >
                <BsCart className="w-[34px] h-[34px]" color="#23A6F0"/>
                <p className="text-myblue font-mon text-[12px] font-normal leading-[16px] tracking-[0.2px] text-center">
                  1
                </p>
              </Link>
            </div>
            <div className="w-[64px] h-[64px] gap-[5px] rounded-[37px] flex justify-center items-center">
              <Heart color="#23A6F0" className="w-[34px] h-[34px]" />
              <p className="text-myblue font-mon text-[12px] font-normal leading-[16px] tracking-[0.2px] text-center">
                1
              </p>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Mobilenav