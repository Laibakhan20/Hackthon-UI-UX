import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Neural = () => {
  return (
    <div className='laptop:w-[1440px] laptop:h-[682px] laptop:pl-[1px] gap-0 w-[414px] h-[999px] xsmobile:pt-[120px]  bg-white flex justify-center items-center laptop:pt-[0px] laptop:flex-row xsmobile:flex-col laptop:gap-[30px]'>
        {/*col 1*/}
        <div className='laptop:w-[704px] laptop:h-[682px] laptop:gap-0 w-[394.33px] h-[476.15px] gap-[32.78px] '>

               {/*laptop image*/}
            <Image src={"/asian-woman-man-with-winter-clothes 1.png"} alt='image' height={682} width={704} className='xsmobile:hidden laptop:flex w-[704px] h-[682px] object-contain object-center '/>

              {/*mobile heading*/}
        <div className='xsmobile:laptop laptop:hidden flex-col gap-[32px] flex mx-auto justify-center items-center'>
        <h5 className='w-[122px] h-[24px] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon '>SUMMER 2020</h5>
        <h2 className='w-[303.48px] h-[140px] font-mon font-bold text-[40px] leading-[50px] text-mynav tracking-[0.2px]text-center flex justify-center items-center'>Part of the<br/> Neural<br/> 
        Universe</h2>
        <h4 className='w-[262.27px] h-[84px] font-mon font-normal text-[20px] leading-[30px] text-mytextgray tracking-[0.2px] text-center'>We know how large<br/> objects will act,
        but<br/> things on a small scale.</h4>
        <span className='flex-col flex w-[165px] h-[129px] gap-[25px] mx-auto'>
            <Button className='w-[156px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-[5px]  bg-myblue text-white text-[14px] font-bold leading-[22px] tracking-[0.2px]'>BUY NOW</Button>
            <Button className='w-[156px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-[5px]  bg-white text-myblue text-[14px] font-bold leading-[22px] tracking-[0.2px]'>LEARN MORE</Button>
        </span>
        </div>

        </div>

        {/*col 2*/}
        <div className='laptop:w-[573px] laptop:h-[326px] laptop:gap-[30px] w-[414px] h-[407px] xsmobile:gap-0  flex items-center'>

            {/*mobile image*/}
        <Image src={"/asian-woman-man-with-winter-clothes 1.png"} alt='image' height={414} width={403} className='xsmobile:flex laptop:hidden w-[414px] h-[403px] gap-0 object-contain object-center '/>

            {/*laptop heading*/}
        <div className='xsmobile:hidden laptop:flex flex-col laptop:gap-[30px] flex'>
        <h5 className='w-[122px] h-[24px] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left text-[#BDBDBD] font-mon'>SUMMER 2020</h5>
        <h2 className='w-[375px] h-[100px] font-mon font-bold text-[40px] leading-[50px] text-mynav tracking-[0.2px]text-left'>Part of the Neural<br/> 
        Universe</h2>
        <h4 className='w-[376px] h-[60px] font-mon font-normal text-[20px] leading-[30px] text-mytextgray tracking-[0.2px]text-left '>We know how large objects will act,<br/> 
        but things on a small scale.</h4>
        <span className='flex-row flex w-[339px] h-[52px] gap-[10px]'>
            <Button className='w-[156px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-[5px]  bg-[#2DC071] text-white text-[14px] font-bold leading-[22px] tracking-[0.2px]'>BUY NOW</Button>
            <Button className='w-[156px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-[5px]  bg-white text-[#2DC071] text-[14px] font-bold leading-[22px] tracking-[0.2px]'>READ MORE</Button>
        </span>
        </div>

        </div>
    </div>
  )
}

export default Neural