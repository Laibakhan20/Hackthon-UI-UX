"use client";
import Link from "next/link";
import { Heart, Search, User } from "lucide-react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import SearchBar from "./Search";
import { RootState } from "../redux/store"; 
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";


const Navbar: React.FC  = () => {
  
  const item = useSelector((state: RootState) => state.cart);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className=" xsmobile:w-[320px] mobile:w-[414px] h-[58px] top-[70px] laptop:w-[1437px] laptop:px-[25px] laptop:py-0 laptop:gap-[324px] laptop:left-[10px] bg-white  mx-auto justify-center items-center flex pt-[30px]">
      {/*for desktop ////////////////////////////*/}
      <div className="container laptop:flex xsmobile:hidden flex-row mx-auto">
        {/*logo*/}
        <div className="w-[187px] h-[58px] left-[38px]  py-[13px] gap-[10px] bg-white">
          <h3 className="text-mynav  w-[108px] h-[32px] top-[13px] gap-0 font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left items-start">
            CasaEncanto
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
            
                  <Link
                    href={"/Shop"}
                    className="w-[38px] h-[28px] top-[-1px] left-[6px] gap-0 font-montserrat text-[14px] font-medium leading-[28px] tracking-[0.2px] text-left"
                  >
                    Shop
                  </Link>
                 
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
              <SearchBar />
            </div>
            <div className="w-[46px] h-[46px] gap-0 flex justify-center items-center ">
              <Link
                href={"/Cart"}
                className="w-[56px] h-[46px] p-[15px] gap-[5px] rounded-[37px] flex justify-center items-center text-myblue"
              >
                <BsCart color="#23A6F0" className="w-[24px] h-[24px] "
                />
                {item.length}
              </Link> 
            </div>
            <div className="w-[56px] h-[46px] p-[15px] gap-[5px] rounded-[37px] flex justify-center items-center">
              <Heart color="#23A6F0" className="w-[16px] h-[15px]" />
             
            </div>
          </div>
        </div>
      </div>

      {/* for mobile ////////////////////////////*/}
      <div className="laptop:hidden xsmobile:flex overflow-hidden mx-auto items-center justify-between flex ">
        <div className="w-[187px] h-[58px] top-[23px] left-[35px] py-[13px] pr-[79px] gap-[10px] flex">
          {/*logo*/}
          <h3 className="w-[108px] h-[32px] top-[13px] gap-0 font-mon text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left">
            CasaEncanto
          </h3>
        </div>

        {/*icons*/}
        <div className="justify-between flex w-[227px]">
          <Search color="#252B42" className="w-[24px] h-[24px] " />

          <Link
                href={"/Cart"}
                className="flex"
              >
                <BsCart color="#252B42" className="w-[24px] h-[26px] "
                />
                {item.length}
              </Link> 

          <button  className="bg-transparent w-[24px] h-[26px]" onClick={toggleMenu}
          aria-label="Toggle Menu">
            <BiMenuAltRight className="w-[24px] h-[26px]"/>           
          </button>
        </div>

        {/*options*/}
        <div className={`${
            menuOpen ? "block" : "hidden"
          } absolute w-[400px] h-[474px] top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-50 bg-white`}>
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
              Product
            </Link>
            <Link
              href="/"
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

{/*  <DropdownMenu>
                <DropdownMenuTrigger className="w-[63px] h-[25px] flex items-center focus:outline-none"> <ChevronDown className="w-[10px] h-[15px] mr-[6px] text-mynav" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Eastern</DropdownMenuItem>
                  <DropdownMenuItem>Western</DropdownMenuItem>
                  <DropdownMenuItem>Outer Wear</DropdownMenuItem>
                  <DropdownMenuItem>Households</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}