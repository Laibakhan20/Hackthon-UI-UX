import { Card } from "@/components/ui/card";
import { Instagram, Play, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import Testimonial from "./Testimonial";

const Content = () => {
  return (
    <div className="laptop:w-[1280px] desktop:w-[1440px] bg-white w-[414px] mx-auto">

      {/*section 1: problems trying*/}
      <section className="w-[414px] h-[500px] xsmobile:px-[16.5px] laptop:px-[0px] laptop:w-[1440px] laptop:h-[236px] laptop:gap-[40px] bg-white mx-auto justify-center items-center overflow-hidden">
        {/*container*/}
        <div className="w-[381px] h-[500px] px-0 py-[80px] laptop:w-[1440px] laptop:h-[236px] laptop:py-[24px] ">
          {/*content*/}
          <div className="w-[381px] h-[340px] gap-[60px] laptop:w-[1018px] laptop:h-[188px] laptop:gap-[60px]  mx-auto xsmobile:flex-col laptop:flex-row flex justify-center items-center">
            {/*col 1*/}
            <div className="w-[381px] h-[220px] py-[24px] gap-[24px] laptop:w-[394px] laptop:h-[188px] laptop:py-[24px] laptop:gap-[24px]  flex flex-col">
              <p className="laptop:text-left xsmobile:text-center text-[14px] font-normal leading-[20px] tracking-[0.2px] font-mon text-[#E74040] ">
                Problems trying
              </p>
              <h3 className="laptop:text-left xsmobile:text-center text-[24px] font-bold leading-[32px] tracking-[0.1px] font-mon text-mynav">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h3>
            </div>
            {/*col 2*/}
            <div className="w-[306px] h-[60px] gap-[38px] laptop:w-[529px] laptop:h-[40px] laptop:gap-[49px] ">
              <p className="text-mytextgray laptop:text-left xsmobile:text-center text-[14px] font-normal leading-[20px] tracking-[0.2px] font-mon">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*section 2 : stats*/}
      <div className="bg-white">
        {/* Container */}
        <div className="container mx-auto p-4 xsmobile:max-w-[329px] xsmobile:h-[806px] laptop:max-w-[1050px] laptop:h-[264px] laptop:p-[80px_0] laptop:left-[195px] justify-center flex">
          {/* Row */}
          <div className=" xsmobile:w-[241px] xsmobile:h-[716px] xsmobile:gap-[100px] laptop:w-[1049px] laptop:h-[104px] laptop:gap-[30px]  flex xsmobile:flex-col laptop:flex-row justify-center items-center">
            {/* Column 1 */}
            <div className=" xsmobile:w-[238px] xsmobile:h-[104px] xsmobile:gap-0 laptop:w-[238px] laptop:h-[104px]  laptop:gap-0 bg-white">
              <h1 className="font-mon text-5xl font-bold leading-[80px] tracking-[0.2px] text-center text-mynavz">
                15K
              </h1>
              <h5 className="font-mon text-base font-bold leading-[24px] tracking-[0.1px] text-center text-mytextgray">
                Happy Customers
              </h5>
            </div>
            {/* Column 2 */}
            <div className=" xsmobile:w-[238px] xsmobile:h-[104px] xsmobile:gap-0 laptop:w-[238px] laptop:h-[104px]  laptop:gap-0 bg-white">
              <h1 className="font-mon text-5xl font-bold leading-[80px] tracking-[0.2px] text-center text-mynavz">
                150K
              </h1>
              <h5 className="font-mon text-base font-bold leading-[24px] tracking-[0.1px] text-center text-mytextgray">
                Monthly Visitors
              </h5>
            </div>
            {/* Column 3 */}
            <div className=" xsmobile:w-[238px] xsmobile:h-[104px] xsmobile:gap-0 laptop:w-[238px] laptop:h-[104px]  laptop:gap-0 bg-white">
              <h1 className="font-mon text-5xl font-bold leading-[80px] tracking-[0.2px] text-center text-mynavz">
                100+
              </h1>
              <h5 className="font-mon text-base font-bold leading-[24px] tracking-[0.1px] text-center text-mytextgray">
                Top Partners
              </h5>
            </div>
            {/* Column 4 */}
            <div className=" xsmobile:w-[238px] xsmobile:h-[104px] xsmobile:gap-0 laptop:w-[238px] laptop:h-[104px]  laptop:gap-0 bg-white">
              <h1 className="font-mon text-5xl font-bold leading-[80px] tracking-[0.2px] text-center text-mynavz">
                15K
              </h1>
              <h5 className="font-mon text-base font-bold leading-[24px] tracking-[0.1px] text-center text-mytextgray">
                Happy Customers
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/*section 3 : video*/}
      <div className="bg-white w-[414px] h-[477px] mx-auto laptop:w-[1440px] laptop:h-[764px]">
        <div className="container mx-auto  gap-[40px] xsmobile:w-[307px] xsmobile:h-[316px] xsmobile:gap-[96px] laptop:w-[1050px] laptop:h-[764px] laptop:p-[112px_30px_112px_31px] laptop:gap-[96px] ">
          <div className="xsmobile:w-[307px] xsmobile:h-[316px] xsmobile:gap-[18.45px] xsmobile:rounded-[12.3px] laptop:w-[989px] laptop:h-[540px] laptop:gap-[30px] laptop:rounded-[20px] bg-no-repeat bg-contain bg-center  laptop:bg-[url('/bgaboutlap.png')] xsmobile:bg-[url('/features-11-video-thumb.png')] flex justify-center items-center">
            <span className="bg-myblue rounded-full w-[56px] h-[56px] laptop:w-[92px] laptop:h-[92px] flex justify-center items-center">
              <Play color="white" fill="white" />
            </span>
          </div>
        </div>
      </div>

      {/*section 4 : meet our team*/}
      <div className="bg-white w-[414px] h-[1627px] px-[26px] pb-[18px] gap-0 laptop:w-[1440px] laptop:h-[826px] laptop:px-[195px] laptop:pb-[7px] laptop:gap-0 flex justify-center items-center">
        {/*container*/}
        <div className=" w-[361px] h-[1609px] px-0 pt-[30px] pb-[30px] gap-[112px] laptop:w-[1050px] laptop:h-[819px] laptop:pt-[112px] laptop:pb-[112px] laptop:gap-[112px] flex justify-center items-center flex-col">
          {/*row 1*/}
          <div className=" w-[361px] h-[200px] py-[45px] gap-[10px] laptop:w-[607px] laptop:h-[100px] laptop:py-0  flex justify-center flex-col">
            <h2 className="text-mynav font-mon text-[40px] font-bold leading-[50px] tracking-[0.2px] text-left mx-auto">
              Meet Our Team
            </h2>
            <p className="text-mytextgray font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center mx-auto">
              Problems trying to resolve
              <br className="laptop:hidden" /> the conflict between
              <br className="xsmobile:hidden laptop:flex" />
              the two major
              <br className="laptop:hidden" /> realms of Classical physics:
              <br className="laptop:hidden" /> Newtonian mechanics{" "}
            </p>
          </div>
          {/*row 2*/}
          <div className="grid grid-rows-3 laptop:grid-row-1 grid-cols-1 laptop:grid-cols-3 w-[329px] h-[1269px] gap-[30px] laptop:w-[1034px] laptop:h-[383px] laptop:gap-[30px] ">
            <Card className="w-[316px] h-[383px] gap-0 rounded-none border-none shadow-none">
              <Image
                src={"/team-1-user-1.jpg"}
                alt="img"
                width={300}
                height={231}
                className="w-[316px] h-[231px] object-contain object-center"
              />
              <div className="w-[316px] h-[152px] pt-[30px] gap-[10px] flex justify-center items-center flex-col">
                <h5 className="text-mynav font-mon text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center">
                  Username
                </h5>
                <h6 className="text-mytextgray font-mon text-[14px] font-normal leading-[24px] tracking-[0.1px] text-center">
                  Profession
                </h6>
                <span className="w-[112px] h-[24px] gap-[20px] flex">
                  <FaFacebook
                    fill="#23A6F0"
                    color="white"
                    className="w-[23px] h-[23px]"
                  />
                  <Instagram color="#23A6F0" className="w-[23px] h-[23px]" />
                  <Twitter
                    color="#23A6F0"
                    fill="#23A6F0"
                    className="w-[23px] h-[23px]"
                  />
                </span>
              </div>
            </Card>
            <Card className="w-[316px] h-[383px] gap-0 rounded-none border-none shadow-none">
              <Image
                src={"/team-1-user-2.jpg"}
                alt="img"
                width={300}
                height={231}
                className="w-[316px] h-[231px] object-contain object-center"
              />
              <div className="w-[316px] h-[152px] pt-[30px] gap-[10px] flex justify-center items-center flex-col">
                <h5 className="text-mynav font-mon text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center">
                  Username
                </h5>
                <h6 className="text-mytextgray font-mon text-[14px] font-normal leading-[24px] tracking-[0.1px] text-center">
                  Profession
                </h6>
                <span className="w-[112px] h-[24px] gap-[20px] flex">
                  <FaFacebook
                    fill="#23A6F0"
                    color="white"
                    className="w-[23px] h-[23px]"
                  />
                  <Instagram color="#23A6F0" className="w-[23px] h-[23px]" />
                  <Twitter
                    color="#23A6F0"
                    fill="#23A6F0"
                    className="w-[23px] h-[23px]"
                  />
                </span>
              </div>
            </Card>
            <Card className="w-[316px] h-[383px] gap-0 rounded-none border-none shadow-none">
              <Image
                src={"/team-1-user-3.jpg"}
                alt="img"
                width={300}
                height={231}
                className="w-[316px] h-[231px] object-contain object-center"
              />
              <div className="w-[316px] h-[152px] pt-[30px] gap-[10px] flex justify-center items-center flex-col">
                <h5 className="text-mynav font-mon text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center">
                  Username
                </h5>
                <h6 className="text-mytextgray font-mon text-[14px] font-normal leading-[24px] tracking-[0.1px] text-center">
                  Profession
                </h6>
                <span className="w-[112px] h-[24px] gap-[20px] flex">
                  <FaFacebook
                    fill="#23A6F0"
                    color="white"
                    className="w-[23px] h-[23px]"
                  />
                  <Instagram color="#23A6F0" className="w-[23px] h-[23px]" />
                  <Twitter
                    color="#23A6F0"
                    fill="#23A6F0"
                    className="w-[23px] h-[23px]"
                  />
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/*Section 5 : Clients*/}
      <div className="w-[414px] h-[1444px] laptop:w-[1440px] laptop:h-[479px] bg-mywhite">
      {/*container*/}
      <div className="flex flex-col items-center gap-[40px] w-[410px] h-[1192px] pt-[120px] pb-[132px] px-[4px] laptop:w-[1050px] laptop:h-[479px] laptop:pt-[80px] laptop:pb-[80px] laptop:px-[195px] laptop:gap-[24px]  mx-auto">

        {/*row 1*/}
        <div className="w-[325px] h-[240px] laptop:w-[864px] laptop:h-[120px]  gap-[30px] flex flex-col items-center">
          <h2 className="font-mon text-[40px] font-bold leading-[50px] tracking-[0.2px] text-left text-mynav ">Big Companies Are Here</h2>
          <p className="font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center text-mytextgray ">Problems trying to resolve the conflict between<br/> 
          the two major realms of Classical physics: Newtonian mechanics </p>

        </div>

        {/*row 2*/}
        
        <div className="w-[327px] h-auto pt-[50px] pb-[50px] gap-[60px] laptop:w-[1054px] laptop:h-[175px] laptop:pt-[50px] laptop:pb-[50px] laptop:gap-[30px]  justify-center grid xsmobile:grid-rows-6 xsmobile:grid-cols-1 laptop:grid-rows-1 laptop:grid-cols-6 items-center">
         
                     <Image src={"/Vector (6).png"} alt="hooli" width={102.99} height={33.81} className="w-[102.99px] h-[33.81px] object-contain object-center mx-auto" />
                     <Image src={"/Vector (7).png"} alt="hooli" width={83} height={58.96} className="w-[83px] h-[58.96px] object-contain object-center mx-auto" />
                     <Image src={"/Vector (8).png"} alt="hooli" width={102} height={74.84} className="w-[102px] h-[74.84px] object-contain object-center mx-auto" />
                     <Image src={"/Vector (9).png"} alt="hooli" width={102.98} height={41.98} className="w-[102.98px] h-[41.98px] object-contain object-center mx-auto" />
                     <Image src={"/Vector (10).png"} alt="hooli" width={103.68} height={61.75} className="w-[103.68px] h-[61.75px] object-contain object-center mx-auto" />
                     <Image src={"/Vector (11).png"} alt="hooli" width={75.75} height={71.86} className="w-[75.75px] h-[71.86px] object-contain object-center mx-auto" />
                      
                 
        </div>
      </div>
      </div>

      {/*Section 5*/}
      <Testimonial />





    </div>
  );
};

export default Content;
