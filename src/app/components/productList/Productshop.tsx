"use client";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { HiViewGrid } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { BsListCheck } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Footer from "@/app/components/Footer"
import { Product } from "@/interface";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


const Productshop = () => {

  const [product, setProduct] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    async function fetchproducts(){
      try {
      const fetchedproduct : Product[] = await client.fetch(allProducts)
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
    <div className="laptop:w-[1440px] xsmobile:w-[414px] mx-auto mt-7 laptop:mt-0">

      {/* SECTION 1////////////////////////*/}
      <div className="flex justify-center items-center laptop:w-[1440px] laptop:h-[92px] laptop:py-[24px] bg-mywhite w-[414px] h-[202px]">
        {/*row in a container*/}
        <div className="flex flex-col laptop:flex-row gap-[30px] laptop:justify-between laptop:w-[1440px] laptop:h-[44px] laptop:px-[50px] items-center w-[414px] h-[154px] xsmobile:justify-center">
          {/*col 1*/}
          <div className="flex items-center w-[414px] h-[80px] xsmobile:py-6 laptop:py-0 laptop:w-[510px] laptop:h-[32px]  xsmobile:justify-center laptop:justify-start">
            <h3 className="text-2xl tracking-widest text-center font-mon text-mynav font-bold">
              Shop
            </h3>
          </div>
          {/*col 2*/}
          <div className="flex flex-col gap-[5px] w-[414px] h-[44px] laptop:w-[509px] laptop:h-[44px] bg-mywhite  items-center laptop:items-end justify-center">
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
      </div>

      {/*SECTION 2////////////////////////*/}
      <div className="w-[414px] h-[1628px] px-[41px] py-[0px] pb-[13px] gap-[60px] laptop:w-[1440px] laptop:h-[271px] laptop:px-[176px] laptop:py-[0px] laptop:gap-[40px] bg-mywhite">
        {/*container*/}
        <div className="w-[333px] h-[1615px] px-[0px] py-[24px] gap-[18px] left-[41px] laptop:w-[1088px] laptop:h-[271px] laptop:px-[0px] laptop:py-0 laptop:gap-[0px] laptop:left-[176px] bg-mywhite flex items-start ">
          {/*row in a container*/}
          <div className="grid xsmobile:grid-rows-5 xsmobile:grid-cols-1 laptop:grid-rows-1 laptop:grid-cols-5  w-[333px] h-[1609px] laptop:w-[1088px] laptop:h-[223px] gap-[15px]  ">
            <div className="bg-[url('/card-cover-5.jpg')] bg-contain bg-center bg-no-repeat flex items-center justify-center flex-col">
              <h5 className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                HOME
              </h5>
              <p className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-normal text-[14px] leading-[20px] tracking-[0.2px] mt-2">
                5 Items
              </p>
            </div>
            <div className="bg-[url('/card-cover-6.jpg')] bg-contain bg-center bg-no-repeat flex items-center justify-center flex-col">
              <h5 className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                HOME
              </h5>
              <p className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-normal text-[14px] leading-[20px] tracking-[0.2px] mt-2">
                5 Items
              </p>
            </div>
            <div className="bg-[url('/card-cover-7.jpg')] bg-contain bg-center bg-no-repeat flex items-center justify-center flex-col">
              <h5 className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                CLOTHS
              </h5>
              <p className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-normal text-[14px] leading-[20px] tracking-[0.2px] mt-2">
                5 Items
              </p>
            </div>
            <div className="bg-[url('/card-cover-8.jpg')] bg-contain bg-center bg-no-repeat flex items-center justify-center flex-col">
              <h5 className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                CLOTHS
              </h5>
              <p className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-normal text-[14px] leading-[20px] tracking-[0.2px] mt-2">
                5 Items
              </p>
            </div>
            <div className="bg-[url('/card-cover-9.jpg')] bg-contain bg-center bg-no-repeat flex items-center justify-center flex-col">
              <h5 className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                CLOTHS
              </h5>
              <p className="text-white w-[67px] h-[24px] top-[87px] left-[70px] text-center font-mon font-normal text-[14px] leading-[20px] tracking-[0.2px] mt-2">
                5 Items
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*SECTION 3//////////////////////////*/}
      <div className="w-[412px] h-[216px] gap-[40px] laptop:w-[1440px] laptop:h-[98px] laptop:px-[195px] laptop:gap-[40px] bg-white">
        {/*container*/}
        <div className="w-[412px] h-[216px] p-[24px] gap-0 laptop:w-[1050px] laptop:h-[98px] laptop:px-[24px] laptop:gap-20 laptop:left-[195px]  flex items-center justify-center ">
          {/*row */}
          <div className="w-[252px] h-[168px] gap-6 laptop:w-[1049px] laptop:h-[50px] laptop:gap-0 laptop:justify-between bg-white laptop:flex-row xsmobile:flex-col flex items-center">
            {/*col 1*/}

            <div className="w-[168px] h-[24px] gap-[15px] px-[1px] ">
              <h6 className="font-mon font-bold text-sm leading-6 tracking-[0.2px] text-mytextgray ">
                Showing all 12 results{" "}
              </h6>
            </div>

            {/*col 2*/}

            <div className="w-[177px] h-[46px] gap-[15px] px-[1px] flex items-center">
              <h6 className="font-mon font-bold text-sm leading-6 tracking-[0.2px] text-mytextgray ">
                Views:
              </h6>
              <div className="w-[107px] h-[46px] gap-[15px] flex">
                <Button className="rounded-[5px] border border-[#ECECEC] w-[46px] h-[46px] bg-white hover:bg-mywhite">
                  <HiViewGrid className="w-[14px] h-[14px]" color="#252B42" />
                </Button>
                <Button className="rounded-[5px] border border-[#ECECEC] w-[46px] h-[46px] bg-white hover:bg-mywhite">
                  <BsListCheck className="w-[14px] h-[14px]" color="#737373" />
                </Button>
              </div>
            </div>

            {/*col 3*/}

            <div className="w-[252px] h-[50px] gap-[15px] px-[1px]  items-center flex">
              <Select>
                <SelectTrigger className="w-[141px] h-[50px] bg-[#f9f9f9] border-[#DDDDDD] focus:border-[#DDDDDD] font-mon text-mytextgray text-sm leading-7 tracking-[0.2px] font-normal">
                  <SelectValue placeholder="Popularity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Position</SelectLabel>
                    <SelectItem value="Popularity">Popularity</SelectItem>
                    <SelectItem value="Newest">Newest</SelectItem>
                    <SelectItem value="Best Seller">Best Seller</SelectItem>
                    <SelectItem value="Price Low o High">
                      Price Low to High
                    </SelectItem>
                    <SelectItem value="Price High to Low">
                      Price High to Low
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button className="w-[94px] h-[50px] bg-myblue text-white font-mon text-sm leading-6  font-bold text-center tracking-[0.2px] rounded-sm">
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>




      {/*SECTION 4////////////////////////////*/}
      <div className="w-[414px] h-[1173px] laptop:w-[1440px] laptop:h-[175px] gap-[40px] laptop:px-[195px] flex pt-[110px] pb-[111px] bg-mywhite items-center justify-center">
        {/*container*/}
        <div className="container laptop:w-[1050px] laptop:h-[175px] w-[414px] h-[952px] ">
          <div className="grid xsmobile:grid-rows-6 xsmobile:grid-cols-1 laptop:grid-rows-1 laptop:grid-cols-6  w-[414px] h-[952px] laptop:w-[1054px] laptop:h-[175px] py-[50px] gap-[60px] laptop:gap-[30px] items-center">
           <Image src={"/Vector (6).png"} alt="hooli" width={102.99} height={33.81} className="w-[102.99px] h-[33.81px] object-contain object-center mx-auto" />
           <Image src={"/Vector (7).png"} alt="hooli" width={83} height={58.96} className="w-[83px] h-[58.96px] object-contain object-center mx-auto" />
           <Image src={"/Vector (8).png"} alt="hooli" width={102} height={74.84} className="w-[102px] h-[74.84px] object-contain object-center mx-auto" />
           <Image src={"/Vector (9).png"} alt="hooli" width={102.98} height={41.98} className="w-[102.98px] h-[41.98px] object-contain object-center mx-auto" />
           <Image src={"/Vector (10).png"} alt="hooli" width={103.68} height={61.75} className="w-[103.68px] h-[61.75px] object-contain object-center mx-auto" />
           <Image src={"/Vector (11).png"} alt="hooli" width={75.75} height={71.86} className="w-[75.75px] h-[71.86px] object-contain object-center mx-auto" />
            
          </div>
        </div>
      </div>



      {/*SECION 5////////////////////////////*/}
      <div className="w-[414px] h-full px-[43px] laptop:w-[1440px] laptop:px-[158px] gap-[0px] ">

        {/*container*/}
        <div className="w-[328px] left-[43px] py-[80px] gap-[48px] laptop:w-[1124px] h-full laptop:left-[158px] laptop:py-[48px] bg-white flex justify-center flex-col items-center">

          <div className="grid laptop:grid-rows laptop:grid-cols-4 xsmobile:grid-rows grid-cols-1 w-[328px] h-full gap-[30px] laptop:w-[1124px] laptop:h-full ">
            {product.map((product) => (
              <div key={product._id} className="w-[328px] h-full">
                <Link href={`/product/${product.slug?.current || ""}`}>
              {/*card*/}
            <div className="w-[328px] h-[615px] laptop:w-[239px] laptop:h-[488px] bg-white hover:bg-slate-200">
              {product.productImage && (
                <Image 
                src={urlFor(product.productImage).url()} 
                alt={product.title} 
                height={300} 
                width={239} 
                className="w-[328px] h-[427px]  laptop:w-[239px] laptop:h-[300px] object-center object-fill " 
                />
              )}
          
              <div className="w-[328px] laptop:w-[239px] h-[188px] pt-[25px] pb-[35px] px-[25px] gap-[8px] items-center justify-center flex flex-col">
                <h5 className="text-sm leading-6 text-mynav font-mon font-bold text-center tracking-widest">
                  {product.title}
                </h5>
                <p className="text-sm leading-6 text-mytextgray font-mon font-bold text-center tracking-widest">Home</p>
                <p className="text-red-500 font-semibold font-mon text-sm">{product.dicountPercentage}% off</p>
                <span className="inline-flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[6px] items-center justify-center">
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

          <div className="w-[313px] h-[74px] rounded-[6.73px] border-[1.35px] border-[#BDBDBD]  shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] mx-auto" >
          

          <>
        {/* Pagination */}
      <nav className="flex items-center -space-x-px" aria-label="Pagination">
      <button
      type="button"
      className="min-h-[74px] min-w-[86px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-[#BDBDBD] text-[#BDBDBD] hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none bg-[#F3F3F3]"
      aria-label="Previous"
    >
      <span className="hidden sm:block">First</span>
    </button>
    <button
      type="button"
      className="min-h-[74px] min-w-[47px] flex justify-center items-center bg-white text-myblue border border-[#E9E9E9] py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-myblue focus:text-white disabled:opacity-50 disabled:pointer-events-none"
      aria-current="page"
    >
      1
    </button>
    <button
      type="button"
      className="min-h-[74px] min-w-[47px] flex justify-center items-center border bg-white text-myblue border-[#E9E9E9] hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-myblue focus:text-white disabled:opacity-50 disabled:pointer-events-none"
    >
      2
    </button>
    <button
      type="button"
      className="min-h-[74px] min-w-[47px] flex justify-center items-center border bg-white text-myblue border-[#E9E9E9] hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-myblue focus:text-white disabled:opacity-50 disabled:pointer-events-none"
    >
      3
    </button>
    <button
      type="button"
      className="min-h-[74px] min-w-[86px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border bg-white border-[#E8E8E8] text-myblue  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      aria-label="Next"
    >
      <span className="hidden sm:block">Next</span>
      
    </button>
  </nav>
  {/* End Pagination */}
</>

               
             </div>


        </div>
      </div>

      


      <Footer />
      


         



    </div>
  );
};

export default Productshop;
