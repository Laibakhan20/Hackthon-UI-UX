"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="laptop:w-[1280px] desktop:w-[1440px] laptop:h-[729px] laptop:gap-[40px] bg-white w-[414px] h-[1080px] gap-[0px] mx-auto">
      {/*navbar desktop*/}
      <div className="laptop:w-[1322px] laptop:h-[91px] laptop:flex xsmobile:hidden bg-white mx-auto flex  p-[16px_143px_16px_136px] items-center gap: [324px]">
        {/*logo*/}
        <div className="w-[187px] h-[58px] items-center flex">
          <h3 className="text-2xl tracking-widest font-mon text-mynav font-bold">
            Bandage
          </h3>
        </div>
        {/*options*/}
        <div className="w-[815px] h-[58px] py-[3px] justify-between items-center flex">
          <ul className="flex items-center gap-[21px]">
            <li>
              <Link
                href={"/"}
                className="text-sm leading-6 tracking-widest text-center font-mon text-mytextgray font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/Shop"}
                className="text-sm leading-6 tracking-widest text-center font-mon text-mytextgray font-bold"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-sm leading-6 tracking-widest text-center font-mon text-mytextgray font-bold"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-sm leading-6 tracking-widest text-center font-mon text-mytextgray font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
          <span className="gap-[45px] flex items-center">
            <button className="w-[41px] h-[22px] text-right font-mon text-myblue text-sm font-bold tracking-widest">
              Link
            </button>
            <Button className="bg-myblue text-white w-[214px] h-[52px] rounded-sm text-sm font-bold tracking-widest font-mon">
              Become a member <ArrowRight className="w-3 h-[10px]" />
            </Button>
          </span>
        </div>
      </div>

      {/*navbar mobile*/}
      {/* for mobile ////////////////////////////*/}
      <div className="laptop:hidden xsmobile:flex overflow-hidden mx-auto items-center justify-between flex ">
        <div className="w-[187px] h-[58px] top-[23px] left-[35px] py-[13px] pr-[79px] gap-[10px] flex">
          {/*logo*/}
          <h3 className="w-[108px] h-[32px] top-[13px] gap-0 font-mon text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left">
            Bandage
          </h3>
        </div>

        {/*icons*/}
        <div className="justify-between flex w-[227px] px-[30px]">
          <Search color="#252B42" className="w-[24px] h-[24px] " />

          <Link href={"/cart"}>
            <Image
              src={"/cart.png"}
              alt={"cart"}
              height={22}
              width={24}
              className="w-[24px] h-[22.4px]"
            />
          </Link>

          <button
            className="bg-transparent w-[24px] h-[26px]"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <BiMenuAltRight className="w-[24px] h-[26px]" />
          </button>
        </div>

        {/*options*/}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute w-[400px] h-[474px] top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-50 bg-white`}
        >
          <div className="flex flex-col gap-[30px] mb-4">
            <Link
              href="/"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Home
            </Link>
            <Link
              href="/Productlist"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Product
            </Link>
            <Link
              href="/services"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/*HERO SECTION*/}
      <div className="w-[414px] h-[1080px] [80px] gap-[0px] laptop:w-[1100px] laptop:h-[545px] laptop:py-[112px] laptop:gap-[80px] items-center bg-white mx-auto flex xsmobile:flex-col laptop:flex-row ">
        {/*col1 */}
        <div className="w-[414px] h-[590px] gap-[40px] laptop:w-[599px] laptop:h-[321px] laptop:gap-[35px] bg-white flex flex-col justify-center">
          <h5 className=" xsmobile:hidden laptop:flex text-base tracking-widest font-mon text-mynav font-bold xsmobile:mx-auto laptop:mx-0 justify-start">
            ABOUT COMPANY
          </h5>
          <h1 className="text-[40px] leading-[50px] laptop:text-[58px] laptop:leading-[80px] tracking-widest font-bold font-mon text-mynav xsmobile:mx-auto laptop:mx-0">
            ABOUT US
          </h1>
          <h4 className="laptop:block xsmobile:hidden text-[20px] leading-7 font-normal font-mon text-mytextgray tracking-widest  laptop:mx-0">
            We know how large objects will act,
            <br />
            but things on a small scale
          </h4>
          <h4 className="laptop:hidden xsmobile:block text-[20px] leading-7 font-normal font-mon text-mytextgray tracking-widest xsmobile:mx-auto text-center ">
            We know how large <br />
            objects will act, but things <br />
            on a small scale just do <br />
            not act that way.
          </h4>
          <Button className="mx-auto laptop:mx-0 inline-flex items-center justify-center w-[195px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-[5px] border-none bg-myblue text-white">
            Get Quote Now
          </Button>
        </div>
        {/*col2 */}
        <div className="laptop:w-[632px] laptop:h-[612px] w-[387px] h-[440px]">
            <Image src={"/none.png"} alt="image" width={387} height={440} className="w-[387px] h-[440px] laptop:w-[632px] laptop:h-[612px]"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
