import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" w-[412px] h-[753px] left-[1px] mx-auto flex justify-center items-center laptop:w-[1440px] desktop:h-[716px] desktop:left-0 bg-white mt-[30px] laptop:mt-0 desktop:transform-none desktop:top-0 text-white">
      {/*desktop image*/}
      <div
        className="relative bg-cover bg-center w-[1440px] h-[716px] xsmobile:hidden laptop:flex object-contain object-center"
        style={{ backgroundImage: "url('/hero banner.jpg')" }}
      >
        {/*content container*/}
        <div className="absolute top-[48px] left-[197.5px] w-[1044px] h-[651px] px-0 py-[112px] flex gap-[80px] ">
          <div className="w-[599px] flex flex-col gap-[35px]">
            <h5 className="w-[122px] h-[24px] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left font-mon text-white">
              SUMMER 2020
            </h5>
            <h1 className="w-[548px] h-[80px] text-[58px] font-bold leading-[80px] tracking-[0.2px] text-left font-mon">
              NEW COLLECTION
            </h1>
            <h4 className="w-[376px] h-[60px] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-left font-mon">
              We know how large objects will act,
              <br />
              but things on a small scale.
            </h4>
            <Link href={"/Shop"}>
              <Button className="w-[221px] h-[62px] gap-[10px] bg-[#2DC071]">
                <h3 className="w-[141px] h-[32px] text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center font-mon">
                  SHOP NOW
                </h3>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/*mobie hero section*/}
      <div
        className="xsmobile:flex laptop:hidden relative w-[414px] h-[753px] bg-cover bg-center rounded-[5px] border border-solid"
        style={{ backgroundImage: "url('/product-slide-1.jpg')" }}
      >
        {/*content conatiner*/}
        <div className="absolute w-[414px] h-[705px] top-[48px] left-1/2 transform -translate-x-1/2 px-0 py-[112px] flex justify-center items-center">
          {/*text container*/}
          <div className="w-[599px] h-[381px] flex flex-col gap-[35px] text-center mx-auto justify-center items-center">
            <h5 className="w-[122px] h-[24px] font-mon text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left">
              SUMMER 2020
            </h5>
            <h2 className="w-[268px] h-[100px] font-mon text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center">
              NEW COLLECTION
            </h2>
            <h4 className="w-[291px] h-[90px] font-mon text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center">
              We know how large objects <br />
              will act, but things on a <br />
              small scale.
            </h4>
            <Link href={"/Shop"}>
              <Button className="w-[221px] h-[62px] gap-[10px] bg-[#2DC071]">
                <h3 className="w-[141px] h-[32px] text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center font-mon">
                  SHOP NOW
                </h3>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

//<Image src={"/carousel 1.png"} alt='image' width={1440} height={716} className='w-[1440px] h-[716px] xsmobile:hidden laptop:flex object-contain object-center'/>
