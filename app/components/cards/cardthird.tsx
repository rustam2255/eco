import { Check } from 'lucide-react'
import React from 'react'

const CardThird = () => {
  return (
    <div className='w-full flex flex-col md:flex-row  gap-5 mt-5' >
      <div className='md:w-[75%] w-[90%] h-[270px] border  mx-auto border-green-500 rounded-[30px] p-10' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='flex flex-col gap-6'>
          <h3 className="font-semibold  w-full max-w-[767px] md:mb-6 mb-2  text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[29px] xl:leading-[37.8px] flex items-center text-[#2A2A2A]">Imkoniyatlar 
          </h3>
          <div className='flex gap-5 flex-col'>
            <div className='flex flex-row gap-3'>
              <Check className='text-green-500' /> <p className='flex items-start  font-medium leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px]  w-full maxm-w-[735px]'>Malakali mutaxasislar bilan bog’lanish imkoniyati</p>
            </div>
            <div className='flex flex-row gap-3 items-center'>
              <Check className='text-green-500' /> <p className='flex items-start  font-medium leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px]  w-full maxm-w-[735px]'>O’simlikni hosildorligini oshirish bo’yicha maslahatlar</p>
            </div>
            <div className='flex flex-row gap-3'>
              <Check className='text-green-500' /> <p className='flex items-start  font-medium leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px]  w-full maxm-w-[735px]'>O’simlik kasalliklariga qarshi va hosildorligini oshiruvchi dori vositalari</p>
            </div>


          </div>
        </div>

      </div>
      <div className='md:w-[25%] w-[90%] mx-auto h-[270px] rounded-[30px]' style={{ backgroundImage: 'url("https://growz.io/neture.png")' }}>

      </div>
    </div>
  )
}
export default CardThird
