import { Home, Search, User } from 'lucide-react'
import React from 'react'

const CardFirst = () => {
  return (
    <div className='flex flex-col md:flex-row   gap-5'>
      <div className='md:w-[75%] md:h-[544px] w-[90%] mx-auto h-auto rounded-[30px] md:p-10 p-5' style={{ backgroundColor: '#FFFFFF' }}>
        <h3 className="font-semibold  w-full md:max-w-[767px] mb-6 text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[29px] xl:leading-[33px] text-[#2A2A2A]">Qishloq xo’jaligidagi muammolar</h3>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row gap-3'>
            <Home className='text-green-500'/>
            <p className='flex items-start gap-4 font-medium text-[14px]    w-full max-w-[735px] leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px]'>An’anaviy usullar orqali kasalliklarni aniqlash qiyin va ko’p vaqt talab qiladi.</p>
          </div>
          <div className='flex flex-row gap-3'>
            <Search className='text-green-500'/>
            <p className='flex items-start gap-4 font-medium text-[14px]   w-full max-w-[735px] leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px]'>Kasalliklar tufayli dehqon xo’jaliklari yillik hosilning 20-40% gacha yo’qotishi mumkin</p>
          </div>
          <div className='flex flex-row gap-3'>
            <User className='text-green-500'/>
            <p className='flex items-start gap-4 font-medium text-[14px]  w-full max-w-[735px] leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px]'>Bilimlar yetishmasligi agrokimyoviy vositalardan samarasiz foydalanishga olib keladi</p>
          </div>
        
          
         
        </div>
      </div>
      <div className='md:w-[25%] w-[90%] mx-auto h-[300px] md:h-[544px] rounded-[30px] bg-cover bg-center' style={{ backgroundImage: 'url("/agro.png")' }}>

      </div>
    </div>
  )
}

export default CardFirst
