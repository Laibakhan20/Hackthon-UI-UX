import Content from '@/app/components/about/Content'
import Header from '@/app/components/about/Header'
import React from 'react'

const About = () => {
  return (
    <div className='laptop:w-[1440px] xsmobile:w-[414px] mx-auto'>
        <Header />
        <Content />
    </div>
  )
}

export default About