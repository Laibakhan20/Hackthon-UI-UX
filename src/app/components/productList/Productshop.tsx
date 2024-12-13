import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import Link from 'next/link'

const Productshop = () => {
  return (
    <div className='laptop:w-[1440px] xsmobile:w-[414px] mx-auto mt-7 laptop:mt-0'>

        {/*Section 1*/}
        <div className="laptop:w-[1440px] laptop:h-[92px] laptop:py-[24px] gap-[0px] bg-mywhite w-[414px] h-[202px] p-[24px] laptop:p-0  flex  items-center">

            <div className='w-[414px] h-[154px] gap-[30px] flex laptop:w-[1049px] laptop:h-[44px] flex-col laptop:flex-row laptop:justify-between '>
                <h3 className='laptop:w-[510px] text-2xl tracking-widest text-center font-mon text-mynav items-center justify-center laptop:justify-start laptop:pl- font-bold mx-auto laptop:mx-0'>Shop</h3>
                <span className='w-[414px] h-[44px] laptop:w-[509px] laptop:h-[44px] gap-[5px] justify-end'>

                <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/Shop">Shop</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

         

                </span>
            </div>

        </div>

    </div>
  )
}

export default Productshop