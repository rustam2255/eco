import Image from 'next/image'
import React from 'react'

const CardFourth = () => {
  return (
    <div className='w-full flex md:flex-row flex-col gap-5 mt-7'>
      <div className='md:w-[50%] w-[90%] mx-auto flex flex-col h-[550px] rounded-[30px] gap-3 p-[28px]' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='md:w-[569px] w-[90%]  h-[355px] flex items-center p-9 justify-center mx-auto rounded-[30px]' style={{ backgroundColor: '#F8F8F8' }}>
          <div className='flex flex-row md:mr-0 mr-[190px]'>
            <Image
              src={'/card-1.png'}
              alt='rasm'
              width={300}
              height={293}
              className='mx-auto ml-[125px] object-contain  md:h-[290px] h-[250px] rounded-2xl rotate-[-10deg]' />
            <Image
              src={'/card-2.jpg'}
              alt='rasm'
              width={300}
              height={293}
              className='mx-auto mr-[155px]  object-contain  md:h-[290px] h-[250px]  rounded-2xl z-10 rotate-9'
            />

          </div>

        </div>
        <div >
          <h3 className="mt-4 mb-3 text-[#2A2A2A] font-semibold text-[20px] leading-[22px]  lg:text-[24px] lg:leading-[25.2px] xl:text-[32px] xl:leading-[35.2px]">AI tahlil </h3>
          <p className="text-[#2A2A2A] font-medium text-[14px] leading-[18px] lg:text-[16px]  xl:text-[16px] xl:leading-[21.6px]"><span className='text-[#1AA95B] font-semibold text-[16px] leading-[20px] md:text-[18px] md:leading-[24px] xl:text-[24px] xl:leading-[32px]'>AgroCheck</span> sun’iy intellekt texnologiyalari yordamida o‘simliklarning kasalliklarini  aniqlash, tasvirlarni tahlil qilish va fermerlarga aniq hamda tezkor diagnostika ma’lumotlarini taqdim etish orqali hosildorlikni saqlashga yordam beradi.</p>
        </div>
      </div>
      <div className='md:w-[50%] w-[90%] mx-auto flex flex-col h-[550px] rounded-[30px] p-5' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='md:w-[569px] w-[90%] h-[355px] flex items-center justify-center mx-auto p-9 rounded-[30px]' style={{ backgroundColor: '#F8F8F8' }}>
          <div className='flex flex-row  md:mr-0 mr-[190px]'>
            <Image
              src={'/card-3.jpg'}
              alt='rasm'
              width={300}
              height={293}
              className='mx-auto ml-[125px] object-contain md:h-[290px] h-[250px] rounded-2xl rotate-[-10deg]' />
            <Image
              src={'/card-4.jpg'}
              alt='rasm'
              width={300}
              height={293}
              className='mx-auto mr-[155px]  object-contain md:h-[290px] h-[250px]  mb-[20px]  rounded-2xl z-10 rotate-9'
            />

          </div>
        </div>
        <div >
          <h3 className="mt-4 mb-3 text-[#2A2A2A] font-semibold text-[20px] leading-[22px]  lg:text-[24px] lg:leading-[25.2px] xl:text-[32px] xl:leading-[35.2px]">AI yechim </h3>
          <p className="text-[#2A2A2A] font-medium text-[14px] leading-[18px] lg:text-[16px]  xl:text-[16px] xl:leading-[21.6px]"><span className='text-[#1AA95B] font-semibold text-[16px] leading-[20px] md:text-[18px] md:leading-[24px] xl:text-[24px] xl:leading-[32px]'>AgroCheck </span>nafaqat sun’iy intellekt yordamida o‘simlik kasalliklarini aniqlaydi, balki samarali davolash usullarini tavsiya qiladi, zararkunandalarga qarshi ekologik xavfsiz vositalarni aniqlaydi hamda kasalliklarning oldini olish bo‘yicha innovatsion yechimlar taklif etadi.</p>
        </div>
      </div>
    </div>
  )
}

export default CardFourth