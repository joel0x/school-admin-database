import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainBanner = () => {
  return (
    <div class=" mx-auto mt-[48px] bg-gradient-to-r from-[#925FE2] to-cyan-500 w-[1398px] h-[239px] flex flex-row rounded-[20px]">
    <h1 class=' ml-[71px] mt-[110px] w-[361px]  h-[45px] text-[30px] font-poppins font-semibold text-[#ECECEC]  '>
      Welcome back, Amit sir
      </h1>   
      <div class=" gap-0 ml-[491px] flex flex-row items-left justify-between">
      <Image class='' src='/icons/header.png' height={238} width={474} /> 
      </div>   
  </div>
   
  )
}

export default MainBanner