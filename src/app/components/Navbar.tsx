"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Heart, Search, User } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-[414px] h-[58px] top-[70px]  laptop:w-[1437px] laptop:px-[50px] laptop:py-0 laptop:gap-[324px] laptop:left-[38px] bg-white  mx-auto justify-center items-center flex pt-[30px]  px-[30px]">
      {/*for desktop ////////////////////////////*/}
      <div className="laptop:flex xsmobile:hidden flex-row">
        {/*logo*/}
        <div className="w-[187px] h-[58px] left-[38px]  py-[13px] gap-[10px] bg-white">
          <h3 className="text-mynav w-[108px] h-[32px] top-[13px] gap-0 font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left items-start">
            Bandage
          </h3>
        </div>
        {/*menu*/}
        <div className="w-[1155px] h-[58px] left-[265px] px-4 py-[2px] gap-0 flex flex-row  items-center justify-between">
          {/*options*/}
          <div className="w-[361px] h-[25px] top-[16.5px] gap-[15px] bg-white flex justify-between  items-center flex-row">
            <Link
              href={"/"}
              className="w-[43px] h-[24px] gap-0 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center hover:underline text-mytextgray"
            >
              Home
            </Link>
            <div className="flex">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-[63px] h-[25px] flex items-center focus:outline-none">
                  <Link
                    href={"/"}
                    className="w-[38px] h-[28px] top-[-1px] left-[6px] gap-0 font-montserrat text-[14px] font-medium leading-[28px] tracking-[0.2px] text-left"
                  >
                    Shop
                  </Link>
                  <ChevronDown className="w-[10px] h-[15px] mr-[6px] text-mynav" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Eastern</DropdownMenuItem>
                  <DropdownMenuItem>Western</DropdownMenuItem>
                  <DropdownMenuItem>Outer Wear</DropdownMenuItem>
                  <DropdownMenuItem>Accessories</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link
              href={"/about"}
              className="w-[33px] h-[24px] gap-0 font-mon text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center hover:underline text-mytextgray"
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              className="w-[58px] h-[24px] gap-0 font-mon text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center hover:underline text-mytextgray"
            >
              Contact
            </Link>
            <Link
              href={"/pages"}
              className="w-[44px] h-[24px] gap-0 font-mon text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center hover:underline text-mytextgray"
            >
              Pages
            </Link>
          </div>

          {/*end column*/}
          <div className="w-[324px] h-[54px] top-[2px]  bg-white flex justify-end">
            <div className="w-[166px] h-[54px] gap-0 flex justify-center items-center">
              <User color="#23A6F0" />
              <Link
                href={"/"}
                className="w-[119px] h-[24px] gap-0 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center hover:underline text-myblue"
              >
                Login / Register
              </Link>
            </div>
            <div className="w-[46px] h-[46px] gap-0 flex justify-center items-center">
              <Search color="#23A6F0" className="w-[16px] h-[16px]" />
            </div>
            <div className="w-[46px] h-[46px] gap-0 flex justify-center items-center ">
              <Link
                href={"/"}
                className="w-[56px] h-[46px] p-[15px] gap-[5px] rounded-[37px] flex justify-center items-center"
              >
                <Image
                  src={"/Vector (3).png"}
                  alt="cart"
                  height={15}
                  width={15}
                  className="w-[15px] h-[15px] object-contain object-center"
                />
                <p className="text-myblue font-mon text-[12px] font-normal leading-[16px] tracking-[0.2px] text-center">
                  1
                </p>
              </Link>
            </div>
            <div className="w-[56px] h-[46px] p-[15px] gap-[5px] rounded-[37px] flex justify-center items-center">
              <Heart color="#23A6F0" className="w-[16px] h-[15px]" />
              <p className="text-myblue font-mon text-[12px] font-normal leading-[16px] tracking-[0.2px] text-center">
                1
              </p>
            </div>
          </div>
        </div>
      </div>

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

          <Link href={"/"} className="">
            <Image
              src={"/Vector (4).png"}
              alt="menu"
              width={24}
              height={13.71}
              className="w-[24px] h-[26px] left-[0.57px] object-contain object-center"
            />
          </Link>
        </div>

        {/*options*/}
        <div className="absolute w-[400px] h-[474px] top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
          <div className="flex flex-col gap-[30px] mb-4">
            <Link
              href="/"
              className="font-mon text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-mytextgray"
            >
              Home
            </Link>
            <Link
              href="/about"
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
    </div>
  );
};

export default Navbar;
