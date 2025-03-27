import React from 'react'
import {CardFirst, CardFive, CardFourth, CardSecond, CardSix, CardThird} from '../components/index'

const Info = () => {
  return (
    <div className='md:w-[1300px] w-full  mx-auto mt-10' >
       <CardFirst />
        <CardSecond />
        <CardThird />
        <CardFourth />
        <CardFive />
        <CardSix /> 
        
    </div>
  )
}

export default Info