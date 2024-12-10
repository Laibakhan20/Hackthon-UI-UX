import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bestproducts = () => {
  return (
    <div className="w-[414px] h-[5510px] px-[43px] gap-0 bg-white laptop:w-[1440px] laptop:h-[1652px] laptop:px-[121px] ">
      {/*container*/}
      <div className=" mx-auto py-[80px] gap-[48px] laptop:gap-[80px] w-[328px] laptop:w-[1124px] h-[5510px] laptop:h-[1652px] left-[43px] laptop:left-[195px] bg-white flex-col flex">
        {/*row 1 heading*/}
        <div className="w-[300px] h-[154px] laptop:w-[692px] laptop:h-[102px] gap-0 mx-auto flex items-center justify-center flex-col">
          <h4 className="w-[191px] h-[30px] gap-0 font-mon text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center text-mytextgray">
            Featured Products
          </h4>
          <h3 className="text-mynav w-[239px] h-[64px] laptop:w-[692px] laptop:h-[32px] gap-0 font-mon text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center">
            BESTSELLER PRODUCTS
          </h3>
          <p className="w-[261px] h-[40px] laptop:w-[347px] laptop:h-[20px] gap-0 font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center text-mytextgray">
            Problems trying to resolve the{" "}
            <br className="xsmobile:flex laptop:hidden" /> conflict between{" "}
          </p>
        </div>

        {/*row 2 products*/}
        <div className="w-[328px] h-[2550px] laptop:w-[1049px] laptop:h-[615px] gap-[30px] flex laptop:flex-row xsmobile:flex-col ">
          {/*col 1*/}
          <div className="w-[328px] laptop:w-[238px] h-[615px] gap-0 flex  flex-col">
            <Image
              src={"/product-cover-5.png"}
              alt="image"
              height={427}
              width={239}
              className="w-[328px] laptop:w-[239px] h-[427px] object-contain object-center"
            />
            <div className="w-[328px] laptop:w-[239px] h-[188px] p-[25px] pb-[35px] flex flex-col gap-[10px]  mx-auto justify-center items-center">
              <h5 className="w-[131px] h-[24px] flex items-center justify-center text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center font-mon text-mynav">
                Graphic Design
              </h5>
              <Link
                href={"/"}
                className="text-mytextgray w-[146px] h-[24px] flex items-center justify-center text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-center font-mon hover:underline underline-offset-[4px]"
              >
                English Department
              </Link>
              <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]">
                <h5 className="w-[52px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon">
                  $16.48
                </h5>
                <h5 className="w-[45px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#23856D] font-[Montserrat]">
                  $6.48
                </h5>
              </span>
              <span className="inline-flex items-center w-auto h-[16px] gap-[6.08px]">
                <div className="w-[16px] h-[16px] gap-0 bg-myblue rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#252B42] rounded-full"></div>
              </span>
            </div>
          </div>
          {/*col 2*/}
          <div className="w-[328px] laptop:w-[241px] h-[615px] gap-0 flex  flex-col bg-white">
            <Image
              src={"/product-cover-5 (1).png"}
              alt="image"
              height={427}
              width={239}
              className="w-[328px] laptop:w-[239px] h-[427px] object-contain object-center"
            />
            <div className="w-[328px] laptop:w-[239px] h-[188px] p-[25px] pb-[35px] flex flex-col gap-[10px]  mx-auto justify-center items-center">
              <h5 className="w-[131px] h-[24px] flex items-center justify-center text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center font-mon text-mynav">
                Graphic Design
              </h5>
              <Link
                href={"/"}
                className="text-mytextgray w-[146px] h-[24px] flex items-center justify-center text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-center font-mon hover:underline underline-offset-[4px]"
              >
                English Department
              </Link>
              <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]">
                <h5 className="w-[52px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon">
                  $16.48
                </h5>
                <h5 className="w-[45px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#23856D] font-[Montserrat]">
                  $6.48
                </h5>
              </span>
              <span className="inline-flex items-center w-auto h-[16px] gap-[6.08px]">
                <div className="w-[16px] h-[16px] gap-0 bg-myblue rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#252B42] rounded-full"></div>
              </span>
            </div>
          </div>
          {/*col 3*/}
          <div className="w-[328px] laptop:w-[240px] h-[615px] gap-0 flex  flex-col bg-white">
            <Image
              src={"/product-cover-5 (2).png"}
              alt="image"
              height={427}
              width={239}
              className="w-[328px] laptop:w-[239px] h-[427px] object-contain object-center"
            />
            <div className="w-[328px] laptop:w-[239px] h-[188px] p-[25px] pb-[35px] flex flex-col gap-[10px]  mx-auto justify-center items-center">
              <h5 className="w-[131px] h-[24px] flex items-center justify-center text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center font-mon text-mynav">
                Graphic Design
              </h5>
              <Link
                href={"/"}
                className="text-mytextgray w-[146px] h-[24px] flex items-center justify-center text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-center font-mon hover:underline underline-offset-[4px]"
              >
                English Department
              </Link>
              <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]">
                <h5 className="w-[52px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon">
                  $16.48
                </h5>
                <h5 className="w-[45px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#23856D] font-[Montserrat]">
                  $6.48
                </h5>
              </span>
              <span className="inline-flex items-center w-auto h-[16px] gap-[6.08px]">
                <div className="w-[16px] h-[16px] gap-0 bg-myblue rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#252B42] rounded-full"></div>
              </span>
            </div>
          </div>
          {/*col 4*/}
          <div className="w-[328px] laptop:w-[240px] h-[615px] gap-0 flex  flex-col ">
            <Image
              src={"/product-cover-5 (3).png"}
              alt="image"
              height={427}
              width={239}
              className="w-[328px] laptop:w-[239px] h-[427px] object-contain object-center"
            />
            <div className="w-[328px] laptop:w-[239px] h-[188px] p-[25px] pb-[35px] flex flex-col gap-[10px]  mx-auto justify-center items-center">
              <h5 className="w-[131px] h-[24px] flex items-center justify-center text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center font-mon text-mynav">
                Graphic Design
              </h5>
              <Link
                href={"/"}
                className="text-mytextgray w-[146px] h-[24px] flex items-center justify-center text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-center font-mon hover:underline underline-offset-[4px]"
              >
                English Department
              </Link>
              <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]">
                <h5 className="w-[52px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon">
                  $16.48
                </h5>
                <h5 className="w-[45px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#23856D] font-[Montserrat]">
                  $6.48
                </h5>
              </span>
              <span className="inline-flex items-center w-auto h-[16px] gap-[6.08px]">
                <div className="w-[16px] h-[16px] gap-0 bg-myblue rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#252B42] rounded-full"></div>
              </span>
            </div>
          </div>
        </div>

        {/*row 3 products*/}
        <div className="w-[328px] h-[2550px] laptop:w-[1049px] laptop:h-[615px] gap-[30px] flex laptop:flex-row xsmobile:flex-col ">
          {/*col 1*/}
          <div className="w-[328px] laptop:w-[238px] h-[615px] gap-0 flex  flex-col">
            <Image
              src={"/product-cover-5 (4).png"}
              alt="image"
              height={427}
              width={239}
              className="w-[328px] laptop:w-[239px] h-[427px] object-contain object-center"
            />
            <div className="w-[328px] laptop:w-[239px] h-[188px] p-[25px] pb-[35px] flex flex-col gap-[10px]  mx-auto justify-center items-center">
              <h5 className="w-[131px] h-[24px] flex items-center justify-center text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center font-mon text-mynav">
                Graphic Design
              </h5>
              <Link
                href={"/"}
                className="text-mytextgray w-[146px] h-[24px] flex items-center justify-center text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-center font-mon hover:underline underline-offset-[4px]"
              >
                English Department
              </Link>
              <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]">
                <h5 className="w-[52px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon">
                  $16.48
                </h5>
                <h5 className="w-[45px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#23856D] font-[Montserrat]">
                  $6.48
                </h5>
              </span>
              <span className="inline-flex items-center w-auto h-[16px] gap-[6.08px]">
                <div className="w-[16px] h-[16px] gap-0 bg-myblue rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#252B42] rounded-full"></div>
              </span>
            </div>
          </div>

          {/*col 2*/}
          <div className="w-[328px] laptop:w-[241px] h-[615px] gap-0 flex  flex-col bg-white">
            <Image
              src={"/product-cover-5 (5).png"}
              alt="image"
              height={427}
              width={239}
              className="w-[328px] laptop:w-[239px] h-[427px] object-contain object-center"
            />
            <div className="w-[328px] laptop:w-[239px] h-[188px] p-[25px] pb-[35px] flex flex-col gap-[10px]  mx-auto justify-center items-center">
              <h5 className="w-[131px] h-[24px] flex items-center justify-center text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center font-mon text-mynav">
                Graphic Design
              </h5>
              <Link
                href={"/"}
                className="text-mytextgray w-[146px] h-[24px] flex items-center justify-center text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-center font-mon hover:underline underline-offset-[4px]"
              >
                English Department
              </Link>
              <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]">
                <h5 className="w-[52px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon">
                  $16.48
                </h5>
                <h5 className="w-[45px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#23856D] font-[Montserrat]">
                  $6.48
                </h5>
              </span>
              <span className="inline-flex items-center w-auto h-[16px] gap-[6.08px]">
                <div className="w-[16px] h-[16px] gap-0 bg-myblue rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#252B42] rounded-full"></div>
              </span>
            </div>
          </div>

          {/*col 3*/}
          <div className="w-[328px] laptop:w-[240px] h-[615px] gap-0 flex  flex-col bg-white">
            <Image
              src={"/product-cover-5 (6).png"}
              alt="image"
              height={427}
              width={239}
              className="w-[328px] laptop:w-[239px] h-[427px] object-contain object-center"
            />
            <div className="w-[328px] laptop:w-[239px] h-[188px] p-[25px] pb-[35px] flex flex-col gap-[10px]  mx-auto justify-center items-center">
              <h5 className="w-[131px] h-[24px] flex items-center justify-center text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center font-mon text-mynav">
                Graphic Design
              </h5>
              <Link
                href={"/"}
                className="text-mytextgray w-[146px] h-[24px] flex items-center justify-center text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-center font-mon hover:underline underline-offset-[4px]"
              >
                English Department
              </Link>
              <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]">
                <h5 className="w-[52px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon">
                  $16.48
                </h5>
                <h5 className="w-[45px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#23856D] font-[Montserrat]">
                  $6.48
                </h5>
              </span>
              <span className="inline-flex items-center w-auto h-[16px] gap-[6.08px]">
                <div className="w-[16px] h-[16px] gap-0 bg-myblue rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#252B42] rounded-full"></div>
              </span>
            </div>
          </div>

          {/*col 4*/}
          <div className="w-[328px] laptop:w-[240px] h-[615px] gap-0 flex  flex-col ">
            <Image
              src={"/product-cover-5 (7).png"}
              alt="image"
              height={427}
              width={239}
              className="w-[328px] laptop:w-[239px] h-[427px] object-contain object-center"
            />
            <div className="w-[328px] laptop:w-[239px] h-[188px] p-[25px] pb-[35px] flex flex-col gap-[10px]  mx-auto justify-center items-center">
              <h5 className="w-[131px] h-[24px] flex items-center justify-center text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center font-mon text-mynav">
                Graphic Design
              </h5>
              <Link
                href={"/"}
                className="text-mytextgray w-[146px] h-[24px] flex items-center justify-center text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-center font-mon hover:underline underline-offset-[4px]"
              >
                English Department
              </Link>
              <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]">
                <h5 className="w-[52px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon">
                  $16.48
                </h5>
                <h5 className="w-[45px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#23856D] font-[Montserrat]">
                  $6.48
                </h5>
              </span>
              <span className="inline-flex items-center w-auto h-[16px] gap-[6.08px]">
                <div className="w-[16px] h-[16px] gap-0 bg-myblue rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#252B42] rounded-full"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestproducts;
