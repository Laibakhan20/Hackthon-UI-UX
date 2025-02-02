"use client";
import { Button } from '@/components/ui/button'
import { Product } from '@/interface';
import { client } from '@/sanity/lib/client';
import { fourcategory } from '@/sanity/lib/queries';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const Shopcard = () => {

  const [product, setProduct] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    async function fetchproducts(){
      try {
      const fetchedproduct : Product[] = await client.fetch(fourcategory)
      setProduct(fetchedproduct)
    }
    catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
    fetchproducts();
  },[])

  if (loading) return <p>Loading products...</p>;

  return (
    <div className='w-[414px] h-[1850px] px-[40.5px] py-0 gap-[60px] laptop:w-[1440px] laptop:h-[770px] laptop:px-[195px] laptop:gap-[40px]  mx-auto flex justify-center items-center bg-mywhite'>

        {/*desktop //////////////////////*/}

        {/*container*/}
        <div className='xsmobile:hidden laptop:flex flex flex-col w-[1050px] h-[770px] left-[195px] px-0 py-[80px] gap-[48px] '>
            {/*row 1*/}
            <div className='w-[607px] h-[62px] gap-0  mx-auto justify-center items-center'>
                <h3 className='text-mynav w-[181px] h-[32px] gap-0 font-mon text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left  mx-auto'>EDITOR&apos;S PICK</h3>
                <p className='w-[347px] h-[20px] gap-0 font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center text-mytextgray mx-auto'>Problems trying to resolve the conflict between </p>
            </div>
            <div className='grid grid-cols-4 grid-rows-1'>
            {product.map((product) => (
                <div key={product._id} className="">
            {/*row 2*/}
            <div className='flex flex-row w-[1050px] h-[500px] gap-[30px] '>
                {/*col 1*/}
                <div className='w-[510px] h-[500px]'>
                {product.productImage && (
                    <Image 
                    src={urlFor(product.productImage).url()}
                    alt="image"
                    width={240}
                    height={500}
                    className='absolute object-fill object-center w-[240px] h-[500px]'
                    />
                )}
                <div className='relative top-[426px] left-[31px]'>
                    <Button className='bg-white rounded-none hover:bg-mytextgray'>
                        <Link href={`/product/${product._id}`}>
                        <p className='font-mon text-mynav text-sm font-semibold hover:text-mywhite'>{product.title}</p>
                        </Link>
                    </Button>
               
                </div>
                </div>
           
               
               
            </div>
            </div>
             ))};
             </div>
            
           
        </div>
    

        {/*mobile //////////////////////*/}

        {/*container*/}
        <div className='xsmobile:flex laptop:hidden flex-col w-[333px] h-[1850px] left-[40.5px] px-0 py-[80px] gap-[48px] '>
            {/*row 1*/}
            <div className='w-[333px] h-[82px] gap-0 justify-center flex items-center mx-auto flex-col'>
                <h3 className='text-mynav w-[181px] h-[32px] gap-0 font-mon text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left'>EDITOR&apos;S PICK</h3>
                <p className='text-mytextgray w-[196px] h-[40px] gap-0 font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center'>Problems trying to resolve <br/>
                the conflict between </p>
            </div>
            {/*row 2*/}
            <div className='flex flex-col w-[325px] h-[1560px] gap-[30px]'>
                {/*col 1*/}
                <div className='w-[325px] h-[500px] gap-0 bg-contain bg-center bg-no-repeat' style={{ backgroundImage: "url('/filter (4).png')" }}>
                <Button className='relative rounded-none w-[170px] h-[48px] top-[426px] left-[31px] py-[12px] gap-[17px] bg-white'>
                    <h5 className='text-mynav w-[40px] h-[24px] top-[12px] left-[64px] gap-0 font-mon text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center'>MEN</h5>
                </Button>
                </div>
                {/*col 2*/}
                <div className='w-[325px] h-[500px] gap-0 bg-contain bg-center bg-no-repeat' style={{ backgroundImage: "url('/filter (5).png')" }}>
                <Button className='rounded-none relative w-[136px] h-[48px] top-[434px] left-[21px] px-[48px] py-[12px] gap-[10px] bg-white'><h5 className='text-mynav w-[69px] h-[24px] top-[12px] left-[64px] gap-0 font-mon text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center'>WOMEN</h5></Button>
                </div>
                {/*col 3*/}
                <div className='w-[325px] h-[500px] gap-[16px] flex flex-col'>
                    <div className='bg-cover bg-center bg-no-repeat w-[325px] h-[242px] gap-[0px]' style={{ backgroundImage: "url('/filter (2).png')" }}>
                    <Button className='rounded-none relative w-[170px] bg-white h-[48px] top-[171px] left-[14px] px-[26px] py-[12px] gap-[10px]'>
                        <h5 className='text-mynav w-[118px] h-[24px] top-[12px] left-[64px] gap-0 font-mon text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center'>ACCESSORIES</h5>
                    </Button></div>
                    <div className='bg-cover bg-center bg-no-repeat w-[325px] h-[242px] gap-[0px]' style={{ backgroundImage: "url('/filter (3).png')" }}>
                    <Button className='rounded-none relative w-[120px] bg-white h-[48px] top-[176px] left-[18px] px-[40px] py-[12px] gap-[10px]'>
                    <h5 className='text-mynav w-[40px] h-[24px] top-[12px] left-[64px] gap-0 font-mon text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center'>KIDS</h5>
                    </Button>
                    </div>
                </div>

            </div>

        </div>


    </div>
  )
}

export default Shopcard