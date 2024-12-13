import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Greenproduct = () => {
  return (
    <div className="w-[414px] h-[1230px] gap-[30px] rounded-[5px] border border-[#DEDEDE] laptop:w-[1440px] laptop:h-[709px] bg-[#23856D] text-white">
      {/*container*/}
      <div className="w-[412px] h-[1252px] mt-[48px] py-[112px] gap-[24px] laptop:gap-[80px] laptop:w-[1036px] laptop:h-[711px] laptop:ml-[209px] laptop:mt-0  flex laptop:flex-row xsmobile:flex-col ">
        {/*col 1*/}
        <div className="w-[416px] h-[429px] flex flex-col gap-[35px] laptop:w-[509px] laptop:h-[432px] laptop:pt-[60px] ">
          <h5 className="w-[154px] h-[30px] gap-0 font-mon text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center laptop:text-left mx-auto laptop:mx-0">
            SUMMER 2020
          </h5>
          <h1 className="laptop:flex xsmobile:hidden laptop:w-[509px] laptop:h-[160px] gap-0 font-mon text-[58px] font-bold leading-[80px] tracking-[0.2px] text-left">
            Vita Classic Product
          </h1>
          <h2 className="xsmobile:flex laptop:hidden w-[246px] h-[100px] gap-0 font-mon text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center mx-auto">
            Vita Classic Product
          </h2>
          <p className="xsmobile:hidden laptop:flex laptop:w-[341px] laptop:h-[40px] gap-0 font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] laptop:text-left ">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <h4 className="xsmobile:flex laptop:hidden w-[291px] h-[90px] gap-0 font-mon text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center mx-auto pl-3">
            We know how large objects <br />
            will act, but things on a <br />
            small scale.
          </h4>
          <span className="laptop:w-[295px] laptop:h-[52px] laptop:gap-[34px] xsmobile:w-[184px] xsmobile:h-[104px] xsmobile:gap-[20px] flex xsmobile:flex-col laptop:flex-row mx-auto laptop:mx-0 justify-center laptop:justify-start items-center">
            <h3 className="w-[77px] h-[32px] gap-0 text-center font-mon text-[24px] font-bold leading-[32px] tracking-[0.1px]">
              $16.48
            </h3>
            <Button className="bg-[#2DC071] w-[184px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-[5px]  border-none flex items-center">
              <Link
                href={"/"}
                className="w-[104px] h-[22px] text-[14px] font-[700] leading-[22px] tracking-[0.2px] text-center text-white"
              >
                ADD TO CART
              </Link>
            </Button>
          </span>
        </div>
        {/*col 2*/}
        <div className="w-[416px] h-[681px] gap-0 laptop:w-[510px] laptop:h-[600px] flex">
          <Image
            src={"/shop-hero-2-png-picture-1.png"}
            alt="image"
            width={414}
            height={675}
            className="w-[416px] h-[681px] gap-0 laptop:w-[443px] laptop:h-[600px] object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Greenproduct;
