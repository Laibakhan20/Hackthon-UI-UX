import Navbar from '@/app/components/Navbar'
import Navbar1 from '@/app/components/Navbar1'
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
      tags
    }`,
    { slug }
  )
}

async function Productdetail ( {params} : productprops) {
    const {slug} = await params;
    const product = await getproduct(slug);
  return (
    <div>
      <Navbar1 />
      <Navbar/>
      <div className=' mx-auto laptop:w-[1440px] w-[414px] bg-mywhite'>
        <div className='container w-[1050px] h-[550px] mx-auto flex gap-[30px]'>
      
        {product?.productImage && (
            <Image 
            src={urlFor(product.productImage).url()}
            alt='image'
            width={510}
            height={550}
            className='w-[510px] h-[550px] object-contain object-center'
            />
        )}
        <div className='w-[510px] h-[471px] gap-3 flex flex-col mt-2'>
        <h4 className="text-xl font-medium font-mon tracking-widest flex">{product?.title}</h4>
        <span className='flex text-[18px] gap-[5px] items-center '>
        <Star color="#F3CD03" fill='#F3CD03' /> <Star color="#F3CD03" fill='#F3CD03' /> <Star color="#F3CD03" fill='#F3CD03' /> <Star color="#F3CD03" fill='#F3CD03' /> <Star color="#F3CD03" />
        <h6 className='font-bold text-sm font-mon text-mytextgray'>10 Reviews</h6>
        </span>
        <h3 className='text-2xl font-bold font-mon mt-4'>${product?.price}</h3>
        <span className='flex gap-1'>
          <h6 className='text-sm font-mon font-bold text-mytextgray'>Availability  :</h6>
          <h6 className='font-bold text-sm text-myblue font-mon'></h6>
        </span>
        <p className='text-[#858585] font-mon font-normal text-xs'>{product?.description}</p>
        <div className='w-full border border-[#BDBDBD] '></div>
        <span className='w-3 h-7 rounded-full bg-black'></span>
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
       
       
    </div>
  )
}

export default Productdetail