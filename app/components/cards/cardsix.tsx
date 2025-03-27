"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CardSix = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setShow(true);
      } else {
        setShow(false); // Scroll yuqoriga chiqsa animatsiya qaytadan ishlaydi
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex md:flex-row flex-col gap-5 mt-7">
      {/* Chap tarafdagi card */}
      <motion.div
        className="md:w-[50%] w-[90%] mx-auto flex flex-col h-[550px] rounded-[30px] p-5 "
        style={{ backgroundColor: "#FFFFFF" }}
        initial={{ x: "-100%", opacity: 0 }}
        animate={show ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-[569px] w-[90%]  h-[355px] flex items-center justify-center mx-auto rounded-[30px] p-9"
          style={{ backgroundColor: "#F8F8F8" }}>
          <div className='flex flex-row md:mr-0 mr-[190px]'>
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
              className='mx-auto mr-[155px]  object-contain md:h-[290px] h-[250px]  mb-[20px] rounded-2xl z-10 rotate-9'
            />
          </div>
        </div>
        <div>
          <h3 className="mt-4 mb-3 text-[#2A2A2A] font-semibold text-[20px] leading-[22px]  lg:text-[24px] lg:leading-[25.2px] xl:text-[32px] xl:leading-[35.2px]">
            Mutaxasislardan maslahatlar
          </h3>
          <p className="text-[#2A2A2A] font-medium text-[14px] leading-[18px] lg:text-[16px]  xl:text-[16px] xl:leading-[21.6px]">
            <span className="text-[#1AA95B] font-semibold text-[16px] leading-[20px] md:text-[18px] md:leading-[24px] xl:text-[24px] xl:leading-[32px]">AgroCheck </span> tajribali agronomlar xizmatini tashkil etib, fermerlarga qo’shimcha ravishda o‘simlik kasalliklarini aniqlash, samarali davolash usullarini tavsiya qilish va  hosildorligini oshirish bo‘yicha professional maslahatlar taqdim etadi.
          </p>
        </div>
      </motion.div>

      {/* O'ng tarafdagi card */}
      <motion.div
        className="md:w-[50%] w-[90%] mx-auto flex flex-col h-[550px] rounded-[30px] p-5"
        style={{ backgroundColor: "#FFFFFF" }}
        initial={{ x: "100%", opacity: 0 }}
        animate={show ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="md:w-[569px] w-[90%] h-[355px] flex items-center justify-center mx-auto rounded-[30px] p-9"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <div className='flex flex-row md:mr-0 mr-[190px]'>
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
              className='mx-auto mr-[155px]  object-contain  md:h-[290px] h-[250px] rounded-2xl  mb-[20px] z-10 rotate-9'
            />
          </div>
        </div>
        <div>
          <h3 className="mt-4 mb-3 text-[#2A2A2A] font-semibold text-[20px] leading-[22px]  lg:text-[24px] lg:leading-[25.2px] xl:text-[32px] xl:leading-[35.2px]">
            Agro mahsulotlar
          </h3>
          <p className="text-[#2A2A2A]  font-medium text-[14px] leading-[18px] lg:text-[16px]  xl:text-[16px] xl:leading-[21.6px]">
          <span className="text-[#1AA95B] font-semibold text-[16px] leading-[20px] md:text-[18px] md:leading-[24px] xl:text-[24px] xl:leading-[32px]">  Platforma  </span>
          fermerlarga o‘simlik kasalliklariga qarshi samarali dori vositalarini topish va ishonchli yetkazib beruvchilardan sotib olish imkoniyatini taqdim etib, ularning narxi, tarkibi va qo‘llanilishi bo‘yicha to‘liq ma’lumot beradi.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CardSix;

