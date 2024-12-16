import Mobilenav from '@/app/components/Mobilenav'
import Navbar from '@/app/components/Navbar'
import Productshop from '@/app/components/productList/Productshop'
import Topnav from '@/app/components/productList/Topnav'
import React from 'react'

const Productlist = () => {
  return (
    <div className='laptop:w-[1440px] xsmobile:w-[414px] mx-auto'>
      <Topnav />
      <div className='xsmobile:hidden laptop:flex '>
      <Navbar/>
      </div>
      <div className='xsmobile:flex laptop:hidden '>
      <Mobilenav/>
      </div>
      <Productshop />
    </div>
  )
}

export default Productlist