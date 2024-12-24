import Content from '@/app/components/about/Content'
import Header from '@/app/components/about/Header'
import Footer from '@/app/components/Footer'
import React from 'react'

const About = () => {
  return (
    <div className='laptop:w-[1440px] xsmobile:w-[414px] mx-auto overflow-hidden'>
        <Header />
        <Content />
        <Footer />
        
    </div>
  )
}

export default About