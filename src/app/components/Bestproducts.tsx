"use client";
import { Product } from "@/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { eightProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Bestproducts = () => {

    const [product, setProduct] = useState<Product[]>([])
    const [loading, setLoading] = useState(true);
  
  
    useEffect(()=>{
      async function fetchproducts(){
        try {
        const fetchedproduct : Product[] = await client.fetch(eightProducts)
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
    <div className="w-[414px] h-[5510px] px-[43px] gap-0 bg-white laptop:w-[1440px] laptop:h-[1652px] laptop:px-[121px] ">
      {/*container*/}
      <div className=" mx-auto py-[80px] gap-[48px] laptop:gap-[80px] w-[328px] laptop:w-[1124px] h-[5510px] laptop:h-[1652px] left-[43px] laptop:left-[195px] bg-white flex-col flex">
        {/*row 1 heading*/}
        <div className="w-[300px] h-[154px] laptop:w-[692px] laptop:h-[102px] gap-0 mx-auto flex items-center justify-center flex-col">
          <h4 className="w-[191px] h-[30px] gap-0 font-mon text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center text-mytextgray">
            Featured Products
          </h4>
          <h3 className="text-mynav w-[239px] h-[64px] laptop:w-[692px] laptop:h-[32px] gap-0 font-mon text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center">
            BESTSELLER PRODUCTS
          </h3>
          <p className="w-[261px] h-[40px] laptop:w-[347px] laptop:h-[20px] gap-0 font-mon text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center text-mytextgray">
            Problems trying to resolve the{" "}
            <br className="xsmobile:flex laptop:hidden" /> conflict between{" "}
          </p>
        </div>

        {/*row 2 products*/}
        <div className=" w-[328px] h-full laptop:w-[1049px] laptop:h-full gap-[30px] laptop:flex-row xsmobile:flex-col grid grid-cols-1 laptop:grid-cols-4 laptop:grid-rows-2 ">
        {product.map((product) => (
                <div key={product._id} className="">
                  
                  <Link href={`/product/${product.slug?.current || ""}`}>
          {/*col 1*/}
          <div className="w-[328px] laptop:w-[238px] h-full gap-0 flex  flex-col">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              height={427}
              width={239}
              className="w-[328px] laptop:w-[239px] h-[427px] object-fill object-center"
            />
            )}
            <div className="w-[328px] laptop:w-[239px] h-[188px] p-[25px] pb-[35px] flex flex-col gap-[10px]  mx-auto justify-center items-center">
              <h5 className="w-[131px] h-[24px] flex items-center justify-center text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center font-mon text-mynav">
                {product.title}
              </h5>
              <Link
                href={"/"}
                className="text-mytextgray w-[146px] h-[24px] flex items-center justify-center text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-center font-mon hover:underline underline-offset-[4px]"
              >
                Home
              </Link>
              <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]">
              {product.dicountPercentage !== undefined && (
                <h5 className="w-[52px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD] font-mon line-through">
                ${(product.price / (1 - (product.dicountPercentage) / 100)).toFixed(2)}
                </h5>
              )}
                <h5 className="w-[45px] h-[24px] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center text-[#23856D] font-[Montserrat]">
                ${product.price}
                </h5>
              </span>
              <span className="inline-flex items-center w-auto h-[16px] gap-[6.08px]">
                <div className="w-[16px] h-[16px] gap-0 bg-myblue rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#23856D] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#E77C40] rounded-full"></div>
                <div className="w-[16px] h-[16px] gap-0 bg-[#252B42] rounded-full"></div>
              </span>
            </div>

          </div>
          </Link>
         

          </div>
          ))}
          
        </div>

       
      </div>
    </div>
  );
};

export default Bestproducts;
