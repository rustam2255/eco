import React from 'react'
import YouTubePlayer from '../components/youplayer/you-tube-player'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='md:h-[100vh] h-auto p-3 w-full bg-cover bg-center rounded-b-[50px] flex items-center' style={{ backgroundImage: 'url("https://growz.io/neture.png")' }} >
      <div className='rounded-[30px] w-[90%] max-w-[1270px] h-[90%] mx-auto flex items-center p-[15px]' style={{ backgroundColor: '#EFEFEF' }}>
        <div className='w-full max-w-[1210px] rounded-[30px] md:p-[30px] p-[15px] h-[90%] mx-auto' style={{ backgroundColor: '#FFFFFF' }}>
          <div className='flex items-center justify-between'>
            <Image
              src={'/logo.png'}
              alt='logo'
              width={100}
              height={50}
              className='md:w-[100px] w-[80px]'
            />
            <a href="https://t.me/agrocheckbot">
              <button className='bg-blue-500 rounded-[15px] text-white h-[50px] p-3 items-center'>Botdan Foydalanish</button>
            </a>

          </div>
          <div className='flex gap-5 flex-col md:flex-row items-center md:ml-5'>
            <YouTubePlayer />
            <div className='flex flex-col  pt-3 w-full'>
              <h3 className="font-semibold text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[32px] xl:leading-[43px] text-[#2A2A2A] mb-[16px] lg:mb-[32px]">
              Sun’iy intellekt va ma’lumotlar asosidagi barqaror kelajak dehqonchiligi
              </h3>
              <p className="text-[#2A2A2A] mt-[15px] font-normal text-[14px] leading-[18px] md:text-[17px] md:leading-[22px] xl:text-[20px] xl:leading-[27px]">
                <span className="text-[#1AA95B] font-semibold text-[16px] leading-[20px] md:text-[18px] md:leading-[24px] xl:text-[24px] xl:leading-[32px]">Bu bot</span> — kasallik turlari va ularga qarshi davo choralarini tez va samarali tarzda aniqlash imkonini beruvchi sun’iy     intellekt texnologiyasiga asoslangan platforma.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
