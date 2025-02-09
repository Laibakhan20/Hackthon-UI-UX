import Bestseller from '@/app/components/Bestseller'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Navbar1 from '@/app/components/Navbar1'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Product } from '@/interface'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Eye, Heart, Star } from 'lucide-react'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCart2 } from 'react-icons/bs'


interface productprops {
    params : Promise<{slug : string}>
}

async function getproduct(slug:string) : Promise< Product | null > {
    
    return client.fetch( groq`
       *[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      productImage,
      price,
      description,
      "slug": slug.current,
      tags,
      isAvailable 
    }`,
    { slug }
  )
}

async function Productdetail ( {params} : productprops) {
    const {slug} = await params;
    const product = await getproduct(slug);
  return (
    <div className='xsmobile:w-[320px] mobile:w-[414px] laptop:w-[1440px] mx-auto'>
      <Navbar1 />
      <Navbar/>
     
     {/*breadcrumbs*/}
     <div className='h-[92px] bg-mywhite flex items-center p-6'>
      <div className='container bg-mywhite mx-auto '>
      <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href="/"
                      className="text-sm leading-6  font-bold text-mynav font-mon tracking-[0.2px] text-center"
                    >
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="w-[9px] h-[16px]" />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link
                      href="/Shop"
                      className="text-sm leading-6  font-bold text-mytextgray font-mon tracking-[0.2px] text-center "
                    >
                      Shop
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
      </div>
     </div>

      <div className=' mx-auto laptop:w-[1440px] xsmobile:w-[320px] mobile:w-[414px] bg-mywhite'>
        <div className='container mobile:w-[348px]  laptop:w-[1050px] h-full mx-auto flex laptop:flex-row flex-col gap-[30px] p-4'>
      
        {product?.productImage && (
            <Image 
            src={urlFor(product.productImage).url()}
            alt='image'
            width={510}
            height={550}
            className='w-[348px] h-[394px] laptop:w-[510px] laptop:h-[550px] object-contain object-center'
            />
        )}
        <div className='w-[348px] h-full laptop:w-[510px] laptop:h-[471px] gap-3 flex flex-col mt-2'>
        <h4 className="text-xl font-medium font-mon tracking-widest flex">{product?.title}</h4>
        <span className='flex text-[18px] gap-[5px] items-center '>
        <Star color="#F3CD03" fill='#F3CD03' /> <Star color="#F3CD03" fill='#F3CD03' /> <Star color="#F3CD03" fill='#F3CD03' /> <Star color="#F3CD03" fill='#F3CD03' /> <Star color="#F3CD03" />
        <h6 className='font-bold text-sm font-mon text-mytextgray'>10 Reviews</h6>
        </span>
        <h3 className='text-2xl font-bold font-mon mt-4'>${product?.price}</h3>
        <span className='flex gap-1'>
          <h6 className='text-sm font-mon font-bold text-mytextgray'>Availability  :</h6>
          <h6 className={`text-sm ${product?.isAvailable ? "text-myblue" : "text-red-500"}`}>
          {product?.isAvailable ? "In Stock" : "Out of Stock"}
          </h6>
        </span>
        <p className='text-[#858585] font-mon font-normal text-xs'>{product?.description}</p>
        <div className='w-full border border-[#BDBDBD] '></div>
        <span className='w-[10px] h-[10px] rounded-full bg-black'></span>
        <div className='flex gap-[10px]'>
          <Button className='p-3 rounded-sm bg-myblue text-white font-mon text-sm font-bold '>
            <Link href={"/select"}>Select Options</Link>
          </Button>
          <Button className='border border-[#E8E8E8] bg-white w-10 h-10 rounded-full hover:bg-slate-100'>
            <Heart color='black' className='w-5 h-5'/>
          </Button>
          <Button className='border border-[#E8E8E8] bg-white w-10 h-10 rounded-full hover:bg-slate-100'>
          <BsCart2 color='black' className='w-5 h-5'/>
          </Button>
          <Button className='border border-[#E8E8E8] bg-white w-10 h-10 rounded-full hover:bg-slate-100'>
          <Eye color="black" />
          </Button>

        </div>

        </div>
        </div>
      </div>

      <Bestseller />

      {/*SECTION////////////////////////////*/}
            <div className="xsmobile:w-[320px] mobile:w-[414px] h-full laptop:w-[1440px]  gap-4 laptop:px-[195px] flex pt-[100px]  bg-mywhite items-center justify-center flex-col laptop:flex-row">
              {/*container*/}
              <div className="container laptop:w-[1050px] laptop:h-[175px] xsmobile:w-[320px] mobile:w-[414px] h-full ">
                <div className="grid xsmobile:grid-rows-6 xsmobile:grid-cols-1 laptop:grid-rows-1 laptop:grid-cols-6  xsmobile:w-[320px] mobile:w-[414px] h-full laptop:w-[1054px] laptop:h-[175px] py-[50px] gap-[60px] laptop:gap-[30px] items-center">
                 <Image src={"/Vector (6).png"} alt="hooli" width={102.99} height={33.81} className="w-[102.99px] h-[33.81px] object-contain object-center mx-auto" />
                 <Image src={"/Vector (7).png"} alt="hooli" width={83} height={58.96} className="w-[83px] h-[58.96px] object-contain object-center mx-auto" />
                 <Image src={"/Vector (8).png"} alt="hooli" width={102} height={74.84} className="w-[102px] h-[74.84px] object-contain object-center mx-auto" />
                 <Image src={"/Vector (9).png"} alt="hooli" width={102.98} height={41.98} className="w-[102.98px] h-[41.98px] object-contain object-center mx-auto" />
                 <Image src={"/Vector (10).png"} alt="hooli" width={103.68} height={61.75} className="w-[103.68px] h-[61.75px] object-contain object-center mx-auto" />
                 <Image src={"/Vector (11).png"} alt="hooli" width={75.75} height={71.86} className="w-[75.75px] h-[71.86px] object-contain object-center mx-auto" />
                  
                </div>
              </div>
            </div>

      <Footer />
       
       
    </div>
  )
}

export default Productdetail