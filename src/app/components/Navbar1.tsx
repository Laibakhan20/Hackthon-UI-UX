import {
  Instagram,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar1 = () => {
  return (
    <div className="xsmobile:hidden laptop:flex overflow-hidden w-screen max-w-[1439px] h-[58px] bg-mynav px-0 py-[9px] flex items-center justify-between gap-[324px] mx-auto pl-16">
      <div className="w-[1438px] h-[46px] flex items-center justify-between gap-0 opacity-100 px-4 pl-7 flex-row text-white text-center mx-auto">
        {/*col 1*/}
        <div className="gap-[10px] w-[415px] h-[46px] flex">
          <div className="w-[145px] h-[44px] pt-[10px] gap-[5px] rounded-[5px] flex text-white">
            <Phone className="w-[16px] h-[16px] mt-[2px]" />
            <h6 className="w-[104px] h-[24px] gap-0 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left hover:underline">
              (225) 555-0118
            </h6>
          </div>

          <div className="w-[260px] h-[44px] pt-[10px] gap-[5px] rounded-[5px] flex">
            <Mail className="text-white h-[16px] w-[16px] mt-[2px]" />
            <h6 className="w-[219px] h-[24px] gap-0 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left hover:underline">
              michelle.rivera@example.com
            </h6>
          </div>
        </div>

        {/*col 2*/}
        <div className="w-[332px] h-[46px] pt-[10px] gap-[10px]">
          <h6 className="w-[312px] h-[24px] gap-0 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left hover:underline ">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>

        {/*col 3*/}
        <div className="w-[332px] h-[46px] pt-[10px] gap-[10px] flex">
          <h6 className="w-[83px] h-[24px] gap-0 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left">
            Follow Us :
          </h6>
          <div className="w-[120px] h-[26px] px-[0.5px] gap-[10px] flex">
            <Instagram className="w-[26px] h-[26px] left-[93.5px] py-[5px] px-0 gap-[10px]" />
            <Link
              href={"/"}
              className="w-[26px] h-[26px] left-[93.5px] py-[5px] px-0 gap-[10px]"
            >
              <Image
                src={"/Vector (1).png"}
                alt="youtube"
                width={16}
                height={11}
                className="w-[16px] h-[11.24px] object-center top-[2px] left-[0.5px] relative object-contain"
              />
            </Link>
            <Link
              href={"/"}
              className="w-[26px] h-[26px] left-[93.5px] py-[5px] px-0 gap-[10px]"
            >
              <Image
                src={"/Vector (2).png"}
                alt="facebook"
                width={16}
                height={16}
                className="w-[16px] h-[16px] left-[-0.5px] relative object-center object-contain"
              />
            </Link>
            <Twitter
              color="#ffffff"
              fill="white"
              className="w-[16px] h-[13px] top-[6px] left-[-0.5px] relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
