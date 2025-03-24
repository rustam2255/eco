import React from 'react'
import {CardFirst, CardFive, CardFourth, CardSecond, CardSix, CardThird, Footer} from '../components/index'

const Info = () => {
  return (
    <div className='md:w-[1300px] w-full  mx-auto mt-10' >
       <CardFirst />
        <CardSecond />
        <CardThird />
        <CardFourth />
        <CardFive />
        <CardSix /> 
        <Footer />
    </div>
  )
}

export default Info