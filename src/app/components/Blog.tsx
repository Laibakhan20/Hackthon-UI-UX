import { AlarmClock, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className='w-[414px] laptop:w-[1440px] h-[2302px] laptop:h-[1044px] laptop::px-[195px] gap-[0px] bg-white'>
        {/*container*/}
        <div className='w-[414px] laptop:w-[1050px] h-[2302px] laptop:h-[1044px] px-[0px] py-[80px] laptop:py-[112px] gap-[80px] bg-white flex mx-auto flex-col items-center justify-center'>
            {/*row 1*/}
            <div className='w-[300px] h-[184px] laptop:w-[692px] laptop:h-[134px] bg-white items-center justify-center flex flex-col gap-[10px]'>
                <h6 className='w-[114px] h-[24px] text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#23A6F0] font-mon'>Practice Advice</h6>
                <h2 className='w-[329px] h-[100px] laptop:w-[309px] laptop:h-[50px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center font-mon text-mynav'>Featured<br className='laptop:hidden xsmobile:flex'/> Posts</h2>
                <p className='laptop:flex xsmobile:hidden text-mytextgray w-[469px] h-[40px] text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center font-mon'>Problems trying to resolve the conflict between <br/>
                the two major realms of Classical physics: Newtonian mechanics </p>
                <p className='xsmobile:flex laptop:hidden text-mytextgray w-[261px] h-[40px] text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center font-mon'>Problems trying to resolve the conflict between the two major </p>
            </div>
            {/*row 2*/}
            <div className='w-[329px] h-[1878px] xsmobile:gap-[30px] laptop:w-[1045px] laptop:h-[606px] laptop:gap-[12px] bg-white laptop:flex-row xsmobile:flex-col flex'>
                {/*col 1*/}
                <div className='w-[348px] h-[606px] gap-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>

                    <div className="w-[348px] h-[300px] gap-0 bg-contain bg-center bg-no-repeat xsmobile:bg-[url('/blog4.png')] laptop:bg-[url('/blog1.png')]">
                    <span className='relative top-[20px] left-[20px] w-[58px] h-[24px] px-[10px] flex items-center justify-center bg-[#E74040] text-white rounded-[3px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>
                        <h6 className='w-[38px] h-[24px] flex items-center justify-center font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-white'>New</h6></span></div>
                    
                    <div className='w-[330px] laptop:w-[348px] h-[306px] p-[25px] pb-[35px] gap-[10px] flex flex-col bg-white'>
                        <span className='w-[169px] h-[16px] gap-[15px] flex'>
                            <p className='text-[#8EC2F2] text-[12px] leading-4 tracking-[0.2px] font-mon h-[16px] w-[45px]'>Google</p>
                            <p className='text-mytextgray text-[12px] leading-4 tracking-[0.2px] font-mon h-[16px] w-[56px]'>Trending</p>
                            <p className='text-mytextgray text-[12px] leading-4 tracking-[0.2px] font-mon h-[16px] w-[28px]'>New</p>
                        </span>
                        <h4 className='w-[247px] h-[60px] font-mon text-[20px] font-normal leading-[30px] tracking-[0.2px] text-left text-mynav'>Loudest à la Madison #1<br/> 
                        (L&apos;integral)</h4>
                        <p className='w-[280px] h-[60px] font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] text-left text-mytextgray'>We focus on ergonomics and meeting <br/>you where you work. It&apos;s only a <br/>keystroke away.</p>
                        <div className='w-[298px] h-[46px] py-[15px] gap-0 justify-between flex'>
                            <span className='w-[98px] h-[16px] gap-[5px] flex'>
                            <AlarmClock color="#23A6F0" className='w-4 h-4' />
                            <p className='w-[77px] h-[16px] font-mon text-[12px] leading-4 tracking-[0.2px] text-mytextgray '>22 April 2021</p>
                            </span>
                            <span className='w-[105px] h-[16px] gap-[5px] flex'>
                                <Image src={"/Vector (5).png"} alt='img' height={14.67} width={16} className='w-[16px] h-[14.67px]'/>
                                <p className='w-[84px] h-[16px] gap-0 text-left text-[12px] font-normal leading-[16px] tracking-[0.2px] text-mytextgray'>10 comments</p>
                            </span>
                        </div>
                        <span className='w-[104px] h-[24px] gap-[0px] flex justify-center items-center'>
                            <h6 className='w-[85px] h-[24px] gap-0 text-left text-[14px] font-bold leading-[24px] tracking-[0.2px] text-mytextgray font-mon'>Learn More</h6>
                            <ChevronRight color="#23A6F0" className='w-4 h-4' />
                        </span>

                    </div>

                </div>
                
                {/*col 2*/}
                <div className='w-[348px] h-[606px] gap-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>

                    <div className="w-[348px] h-[300px] gap-0 bg-contain bg-center bg-no-repeat xsmobile:bg-[url('/blog5.png')] laptop:bg-[url('/blog2.png')]">
                    <span className='relative top-[20px] left-[20px] w-[58px] h-[24px] px-[10px] flex items-center justify-center bg-[#E74040] text-white rounded-[3px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'><h6 className='w-[38px] h-[24px] flex items-center justify-center font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-white'>New</h6></span></div>
                    
                    <div className='w-[330px] laptop:w-[348px] h-[306px] p-[25px] pb-[35px] gap-[10px] flex flex-col bg-white'>
                        <span className='w-[169px] h-[16px] gap-[15px] flex'>
                            <p className='text-[#8EC2F2] text-[12px] leading-4 tracking-[0.2px] font-mon h-[16px] w-[45px]'>Google</p>
                            <p className='text-mytextgray text-[12px] leading-4 tracking-[0.2px] font-mon h-[16px] w-[56px]'>Trending</p>
                            <p className='text-mytextgray text-[12px] leading-4 tracking-[0.2px] font-mon h-[16px] w-[28px]'>New</p>
                        </span>
                        <h4 className='w-[247px] h-[60px] font-mon text-[20px] font-normal leading-[30px] tracking-[0.2px] text-left text-mynav'>Loudest à la Madison #1<br/> 
                        (L&apos;integral)</h4>
                        <p className='w-[280px] h-[60px] font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] text-left text-mytextgray'>We focus on ergonomics and meeting <br/>you where you work. It&apos;s only a <br/>keystroke away.</p>
                        <div className='w-[298px] h-[46px] py-[15px] gap-0 justify-between flex'>
                            <span className='w-[98px] h-[16px] gap-[5px] flex'>
                            <AlarmClock color="#23A6F0" className='w-4 h-4' />
                            <p className='w-[77px] h-[16px] font-mon text-[12px] leading-4 tracking-[0.2px] text-mytextgray '>22 April 2021</p>
                            </span>
                            <span className='w-[105px] h-[16px] gap-[5px] flex'>
                                <Image src={"/Vector (5).png"} alt='img' height={14.67} width={16} className='w-[16px] h-[14.67px]'/>
                                <p className='w-[84px] h-[16px] gap-0 text-left text-[12px] font-normal leading-[16px] tracking-[0.2px] text-mytextgray'>10 comments</p>
                            </span>
                        </div>
                        <span className='w-[104px] h-[24px] gap-[0px] flex justify-center items-center'>
                            <h6 className='w-[85px] h-[24px] gap-0 text-left text-[14px] font-bold leading-[24px] tracking-[0.2px] text-mytextgray font-mon'>Learn More</h6>
                            <ChevronRight color="#23A6F0" className='w-4 h-4' />
                        </span>

                    </div>

                </div>
                
                {/*col 3*/}
                <div className='w-[348px] h-[606px] gap-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>

                    <div className="w-[348px] h-[300px] gap-0 bg-contain bg-center bg-no-repeat xsmobile:bg-[url('/blog6.png')] laptop:bg-[url('/blog3.png')]">
                    <span className='relative top-[20px] left-[20px] w-[58px] h-[24px] px-[10px] flex items-center justify-center bg-[#E74040] text-white rounded-[3px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'><h6 className='w-[38px] h-[24px] flex items-center justify-center font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-white'>New</h6></span></div>
                    
                    <div className='w-[330px] laptop:w-[348px] h-[306px] p-[25px] pb-[35px] gap-[10px] flex flex-col bg-white'>
                        <span className='w-[169px] h-[16px] gap-[15px] flex'>
                            <p className='text-[#8EC2F2] text-[12px] leading-4 tracking-[0.2px] font-mon h-[16px] w-[45px]'>Google</p>
                            <p className='text-mytextgray text-[12px] leading-4 tracking-[0.2px] font-mon h-[16px] w-[56px]'>Trending</p>
                            <p className='text-mytextgray text-[12px] leading-4 tracking-[0.2px] font-mon h-[16px] w-[28px]'>New</p>
                        </span>
                        <h4 className='w-[247px] h-[60px] font-mon text-[20px] font-normal leading-[30px] tracking-[0.2px] text-left text-mynav'>Loudest à la Madison #1<br/> 
                        (L&apos;integral)</h4>
                        <p className='w-[280px] h-[60px] font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] text-left text-mytextgray'>We focus on ergonomics and meeting <br/>you where you work. It&apos;s only a <br/>keystroke away.</p>
                        <div className='w-[298px] h-[46px] py-[15px] gap-0 justify-between flex'>
                            <span className='w-[98px] h-[16px] gap-[5px] flex'>
                            <AlarmClock color="#23A6F0" className='w-4 h-4' />
                            <p className='w-[77px] h-[16px] font-mon text-[12px] leading-4 tracking-[0.2px] text-mytextgray '>22 April 2021</p>
                            </span>
                            <span className='w-[105px] h-[16px] gap-[5px] flex'>
                                <Image src={"/Vector (5).png"} alt='img' height={14.67} width={16} className='w-[16px] h-[14.67px]'/>
                                <p className='w-[84px] h-[16px] gap-0 text-left text-[12px] font-normal leading-[16px] tracking-[0.2px] text-mytextgray'>10 comments</p>
                            </span>
                        </div>
                        <span className='w-[104px] h-[24px] gap-[0px] flex justify-center items-center'>
                            <h6 className='w-[85px] h-[24px] gap-0 text-left text-[14px] font-bold leading-[24px] tracking-[0.2px] text-mytextgray font-mon'>Learn More</h6>
                            <ChevronRight color="#23A6F0" className='w-4 h-4' />
                        </span>

                    </div>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Blog