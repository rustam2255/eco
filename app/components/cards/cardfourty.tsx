import Image from 'next/image'
import React from 'react'

const CardFourth = () => {
  return (
    <div className='w-full flex md:flex-row flex-col gap-5 mt-7'>
      <div className='md:w-[50%] w-[90%] mx-auto flex flex-col h-[550px] rounded-[30px] gap-3 p-[28px]' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='md:w-[569px] w-[90%]  h-[355px] flex items-center justify-center mx-auto rounded-[30px]' style={{ backgroundColor: '#F8F8F8' }}>
          <Image
            src={'/tel1_en.png'}
            alt='rasm'
            width={300}
            height={293}
            className='mx-auto w-full max-w-[300px] h-auto'
          />
        </div>
        <div >
          <h3 className="mt-4 mb-3 text-[#2A2A2A] font-semibold text-[20px] leading-[22px]  lg:text-[24px] lg:leading-[25.2px] xl:text-[32px] xl:leading-[35.2px]">AI Diagnosis and Crop Protection</h3>
          <p className="text-[#2A2A2A] font-medium text-[14px] leading-[18px] lg:text-[16px]  xl:text-[16px] xl:leading-[21.6px]">Growz uses artificial intelligence to accurately diagnose pests and plant diseases. The platform analyzes data, offers sustainable solutions, and provides recommendations for effective crop protection at every growth stage.</p>
        </div>
      </div>
      <div className='md:w-[50%] w-[90%] mx-auto flex flex-col h-[550px] rounded-[30px] p-5' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='md:w-[569px] w-[90%] h-[355px] flex items-center justify-center mx-auto rounded-[30px]' style={{ backgroundColor: '#F8F8F8' }}>
          <Image
            src={'/tel2_en.png'}
            alt='rasm'
            width={300}
            height={293}
            className='mx-auto'
          />
        </div>
        <div >
          <h3 className="mt-4 mb-3 text-[#2A2A2A] font-semibold text-[20px] leading-[22px]  lg:text-[24px] lg:leading-[25.2px] xl:text-[32px] xl:leading-[35.2px]">Lorem ipsum dolor sit amet.</h3>
          <p className="text-[#2A2A2A] font-medium text-[14px] leading-[18px] lg:text-[16px]  xl:text-[16px] xl:leading-[21.6px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores atque nam totam facilis assumenda, aliquid tempora veritatis temporibus est ad.  </p>
        </div>
      </div>
    </div>
  )
}

export default CardFourth