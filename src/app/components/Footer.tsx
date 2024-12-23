import { Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-[414px] h-[1342px] gap-[40px] laptop:w-[1440px] laptop:h-[488px] laptop:gap-[40px] bg-white'>
        {/*1 row*/}
        <div className='w-[414px] h-[173px] px-[45px] py-0 pb-0 gap-[40px] laptop:w-[1440px] laptop:h-[142px] laptop:px-[195px] laptop:py-[4px] laptop:pb-[4px] bg-mywhite items-center justify-center flex'>
            {/*container*/}
            <div className='w-[325px] h-auto px-0 py-[40px] gap-0 laptop:w-[1050px] laptop:h-auto laptop:px-0 laptop:py-[40px] laptop:gap-0  laptop:left-[195px] left-[44px]  mx-auto items-center justify-center flex'>
                {/*row*/}
                <div className='w-[243px] h-[93.5px] gap-[11.5px] laptop:w-[1049.5px] laptop:h-[58px] laptop:gap-[577.5px] bg-mywhite flex-col laptop:flex-row flex items-center'>
                    {/*col 1*/}
                    <div className='w-[236px] h-[58px] gap-[10px]'>
                        <h3 className='text-mynav font-mon text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left w-[108px] h-[32px] relative top-[13px] '>Bandage</h3>
                        
                    </div>
                    {/*col 2*/}
                    <div className='w-[236px] h-[24px] gap-[10px]  '>
                    <span className='w-[112px] h-[24px] gap-[20px] flex justify-center item-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" className='text-myblue w-6 h-6' fill='#23A6F0'/></svg>
                    <Instagram  className='text-myblue w-6 h-6'/>
                    <Twitter fill='#23A6F0' className='text-myblue w-6 h-6'/>
                    
                    </span>
                    </div>
                </div>

            </div>
            
        </div>
        <hr className='w-[1057px]  top-[138px] left-[195px] gap-[0px] border h-0 border-t border-solid border-[#E6E6E6] text-center mx-auto xsmobile:hidden laptop:flex'/>
        {/*row 2*/}
        <div className=' w-[414px] h-[1071px] top-[173px] px-[47px] py-0 gap-[40px] laptop:w-[1440px] laptop:h-[272px] laptop:top-[142px] laptop:px-[195px] laptop:pb-[2px] bg-white flex '>


        <div className="container px-0 py-[50px] mx-auto ">
  <div className="flex flex-wrap text-left  order-first gap-[30px] w-[321px] h-[931px] laptop:w-[1041px] laptop:h-[170px]">

    <div className="w-[148px] h-[170px] px-4 gap-[20px] flex flex-col">
      <h5 className="title-font font-bold text-mynav tracking-widest text-sm mb-3 font-mon text-[16px] leading-[24px] text-left underline-offset-auto">
      Company Info
      </h5>
      <nav className="list-none mb-10 w-[96px] h-[126px] gap-[10px] flex flex-col">
        <li>
          <Link href={"/About"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">About Us</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgzray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">Carrier</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">We are hiring</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">Blog</Link>
        </li>
      </nav>
    </div>

    <div className="w-[148px] h-[170px] px-4 gap-[20px] flex flex-col">
      <h5 className="title-font font-bold text-mynav tracking-widest text-sm mb-3 font-mon text-[16px] leading-[24px] text-left underline-offset-auto">
      Legal
      </h5>
      <nav className="list-none mb-10 w-[96px] h-[126px] gap-[10px] flex flex-col">
        <li>
          <Link href={"/About"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">About Us</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">Carrier</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">We are hiring</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">Blog</Link>
        </li>
      </nav>
    </div>

    <div className="w-[148px] h-[170px] px-4 gap-[20px] flex flex-col">
      <h5 className="title-font font-bold text-mynav tracking-widest text-sm mb-3 font-mon text-[16px] leading-[24px] text-left underline-offset-auto">
      Features
      </h5>
      <nav className="list-none mb-10 w-[142px] h-[126px] gap-[10px] flex flex-col">
        <li>
          <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">Business Marketing</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">User Analytic</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">Live Chat</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">Unlimited Support</Link>
        </li>
      </nav>
    </div>

    <div className="w-[148px] h-[170px] px-4 gap-[20px] flex flex-col">
      <h5 className="title-font font-bold text-mynav tracking-widest text-sm mb-3 font-mon text-[16px] leading-[24px] text-left underline-offset-auto">
      Resources
      </h5>
      <nav className="list-none mb-10 w-[106px] h-[126px] gap-[10px] flex-col flex">
        <li>
          <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">IOS & Android</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">Watch a Demo</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">Customers</Link>
        </li>
        <li>
        <Link href={"/"} className="text-mytextgray hover:text-gray-800 font-mon text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left underline-offset-auto">API</Link>
        </li>
      </nav>
    </div>

    <div className="w-[321px] h-[131px] px-4 gap-[20px]">
      <h5 className="title-font font-bold text-mynav tracking-widest text-base mb-3 font-mon">
      Get In Touch
      </h5>
      <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start gap-0">
        <div className="relative w-[321px]  xl:mr-4 lg:mr-0 sm:mr-4 mr-2 flex">
          
          <input
            type="text"
            placeholder='Your Email'
            id="footer-field"
            name="footer-field"
            className=" h-[58px] bg-[#f9f9f9] bg-opacity-50 rounded border  focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-myblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  border-solid border-[#E6E6E6]"
            
          />
          <button className="xsmobile:mt-0 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-myblue border-0  focus:outline-none hover:bg-indigo-600  h-[58px] w-[117px] font-mon text-sm leading-[28px] tracking-[0.2px] text-center  px-[22.5px] py-[15px] gap-[10px] rounded-tr-[5px] rounded-br-[5px]">
          Subscribe
        </button>
          
        </div>
        
      </div>
      <p className="text-mytextgray  md:text-left w-[155px] h-[28px] top-[59px] left-[2px] gap-0 font-mon text-[12px] font-normal leading-[28px] tracking-[0.2px] text-left">
      Lore imp sum dolor Amit
        <br className="lg:block hidden" />
        
      </p>
    </div>
  </div>
</div>


             

        </div>

        {/*row 3*/}
        <div className='laptop:w-[1440px] laptop:h-[74px] laptop:top-[414px] laptop:px-[195px] flex bg-mywhite w-[414px] h-[98px] top-[1244px] gap-[40px]'>
            {/*container*/}
            <div className='w-[414px] h-[98px] py-[25px] gap-[40px] laptop:w-[1050px] laptop:h-[74px] laptop:left-[195px] laptop:py-[25px] laptop:gap-0 mx-auto'>
                {/*row*/}
                <div className='w-[413px] h-[48px] gap-[213px] laptop:w-[600px] laptop:h-[24px] flex'>
                    <h6 className='xsmobile:mx-auto laptop:mx-0 flex font-mon text-[14px] leading-[24px] tracking-[0.2px] font-bold xsmobile:text-center laptop:text-left text-mytextgray'>Made With Love By<br className='xsmobile:flex laptop:hidden'/> Finland All Right Reserved </h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer