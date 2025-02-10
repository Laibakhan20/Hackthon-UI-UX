"use client";
import { Button } from '@/components/ui/button';
import { Product } from '@/interface';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { bestseller } from '@/sanity/lib/queries';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Bestseller = () => {

    const [product, setProduct] = useState<Product[]>([])
        const [loading, setLoading] = useState(true);
      
      
        useEffect(()=>{
          async function fetchproducts(){
            try {
            const fetchedproduct : Product[] = await client.fetch(bestseller)
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
    <div className='laptop:w-[1440px] xsmobile:w-[320px] mobile:w-[414px] h-full pt-32 p-6 bg-mywhite '>
        <div className='container mx-auto'>
            <h3 className='text-mynav font-bold text-2xl font-mon'>BESTSELLER PRODUCTS</h3>
            <div className='border-[#ECECEC] border w-full my-6'></div>
            <div className='grid grid-cols-1 laptop:grid-cols-4 laptop:grid-rows-2 gap-[30px] mx-auto justify-center'>
            
                {product.map((product) => (
                <div key={product._id} className="">
                  
                  <Link href={`/product/${product.slug?.current || ""}`}>
                  {product.productImage && (
                              <Image
                                src={urlFor(product.productImage).url()}
                                alt={product.title}
                                height={280}
                                width={239}
                                className="w-[239px] laptop:w-[239px] h-[280px] object-fill object-center"
                              />
                              )}

                  <div className='w-[239px] h-[162px] p-6 flex-col flex gap-3 bg-white'>
                    <h5 className="text-mynav font-bold text-base font-mon">{product.title}</h5>
                    <p className='text-sm text-mytextgray'>Home</p>
                    <span className='flex  items-center justify-between'>
                        <span className='flex gap-3 items-center'>
                    {product.dicountPercentage !== undefined && (
                <h5 className="w-[52px] h-[24px] text-sm font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon line-through">
                ${(product.price / (1 - (product.dicountPercentage) / 100)).toFixed(2)}
                </h5>
              )}
              <h5 className='text-[#23856D] font-bold text-sm font-mon'>${product.price}</h5>
              </span>
              <Link href={"/cart"}>
              <ShoppingBag className='hover:text-myblue w-6 h-6'/>
              </Link>
              </span>
              <Button className='w-full h-full text-white bg-myblue font-mon'>
                View Product
              </Button>
                  </div>


                  </Link>
                  </div>
                ))}

               
            </div>
        </div>
        

    </div>
  )
}

export default Bestseller