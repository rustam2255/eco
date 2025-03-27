import React from 'react'
import Hero from './hero/hero'
import Info from './info/info'



const Page = () => {
  return (
    <div style={{ backgroundColor: '#EFEFEF' }} className='pb-6 overflow-x-hidden'>
      <Hero />
      <Info />
    </div>
  )
}

export default Page