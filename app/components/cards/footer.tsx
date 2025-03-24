import { Instagram, TableCellsMerge, Youtube } from "lucide-react"
import Image from "next/image"


const Footer = () => {
  return (
    <div className='mt-5 md:w-full w-[90%] mx-auto rounded-[30px] md:h-[346px] p-[25px] h-auto' style={{ backgroundColor: '#FFFFFF' }}>
      <div className="flex md:flex-row flex-col md:gap-[340px]">
        <div>
          <Image
            src={'/logo.png'}
            alt='logo'
            width={100}
            height={50}
            className='md:w-[100px] w-[80px]'
          />
        </div>

        <div className="flex flex-col">
          <p className="mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]"> Our Social Media</p>

          <a className="mb-3 w-full  flex items-center gap-2" target="_blank" href="https://www.instagram.com/growzmedia.uz/profilecard/?igsh=YjJjdnNxbXF5dHA0">
            <Instagram className="text-green-400" />
            <p className="text-[18px] leading-[24px] font-normal text-[#1F1F1F]">Instagram</p>
          </a>
          <a className="mb-3 w-full  flex items-center gap-2" target="_blank" href="https://www.instagram.com/growzmedia.uz/profilecard/?igsh=YjJjdnNxbXF5dHA0">
            <Youtube className="text-green-400" />
            <p className="text-[18px] leading-[24px] font-normal text-[#1F1F1F]">You Tube</p>
          </a>
          <a className="mb-3 w-full  flex items-center gap-2" target="_blank" href="https://www.instagram.com/growzmedia.uz/profilecard/?igsh=YjJjdnNxbXF5dHA0">
            <TableCellsMerge className="text-green-400" />
            <p className="text-[18px] leading-[24px] font-normal text-[#1F1F1F]">Telegram</p>
          </a>
        </div>
        <div className="flex flex-col">
          <p className="mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]">Address</p>
          <p className="mb-3 text-[18px] leading-[24px] font-normal text-[#523535]">Lorem, ipsum dolor.</p>
          <p className="mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]">Address</p>
          <p className="mb-3 text-[18px] leading-[24px] font-normal text-[#523535]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint? </p>
        </div>
      </div>
    </div>
  )
}

export default Footer