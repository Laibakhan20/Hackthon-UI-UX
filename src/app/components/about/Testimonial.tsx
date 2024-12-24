import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div className='w-[414px] h-[520px] pt-[60px] pb-[72px] laptop:w-[1440px] laptop:h-[636px] laptop:pt-[0px] laptop:pb-[0px] bg-[#2A7CC7] flex-col laptop:flex-row flex'>
        {/*container*/}
        <div className='flex  xsmobile:items-center laptop:items-start justify-between w-[414px] h-[388px] pt-[60px] pb-[72px] px-0 laptop:w-[600px] laptop:h-[636px] laptop:py-[112px] laptop:px-0 laptop:gap-0 mx-auto'>
            {/*row*/}
            <div className='w-[272px] h-[328px] gap-[24px] laptop:w-[600px] laptop:h-[412px] items-center flex'>
                {/*left content desktop and center content mobile*/}
                <div className='w-[272px] h-[328px] gap-[24px] laptop:w-[438px] laptop:h-[238px] justify-start flex flex-col'>
                  <h5 className='text-base leading-6 tracking-widest text-left font-mon text-white font-bold'>WORK WITH US</h5>
                  <h2 className='text-[40px] leading-[50px] tracking-[0.2px] text-left font-mon text-white font-bold'>Now Let&apos;s grow Yours</h2>
                  <p className='text-[14px] leading-[20px] tracking-[0.2px] text-left font-mon text-white font-normal'>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                  <Button className='w-[132px] h-[52px] bg-[#2A7CC7] border border-white text-white text-[14px] leading-[22px] tracking-[0.2px] text-left font-mon font-normal'>Button</Button>
                </div>
            </div>
           
        </div>
        <div className='xsmobile:hidden laptop:flex w-[590px] h-[640px]'>
          <Image src={"/unplash.png"} alt='image' width={590} height={640} className='w-[590px] h-[640px] object-contain object-center'/>
        </div>
        
    </div>
  )
}

export default Testimonial