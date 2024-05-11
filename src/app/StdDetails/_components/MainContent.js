import React from 'react'
import Image from 'next/image';

function MainContent() {
  return (
    <div class='flex flex-row '>
    <div class="h-[657px] w-80 mx-[62px] my-[38px] bg-[#925FE2] items-center justify-center  rounded-[20px]">
        <div class='flex flex-col items-center justify-center'>
        <h1 class='my-[14px] mt-[38px] font-poppins text-[20px] text-slate-100'>STUDENT DETAILS</h1>
        <h2 class='my-[2px] text-[20px] font-thin font-poppins text-slate-100'>STUDENT NAME</h2>
        </div>
      
        <div class='my-[109px] mx-[28px]'>
        <h2 > STUDENT ID</h2>
        <h2> CLASS</h2>
        <h2>PHONE NO</h2>
        </div> 
        </div>

        <div class='mx-auto mt-[80px]  w-[188px] h-[219px] bg-white drop-shadow-2xl flex flex-col items-center justify-center rounded-[10px]'>
            <Image src='/icons/total-payable.png' width={76} height={80}></Image>
            <h1 class='my-[21px]' >7200 Rupees</h1>
            <h1>Total payable</h1>
        </div>
        <div class='mx-auto mt-[80px]   w-[188px] h-[219px] bg-white drop-shadow-2xl flex flex-col items-center justify-center rounded-[10px]'>
            <Image src='/icons/additional.png' width={76} height={80}></Image>
            <h1 class='my-[21px]' >7200 Rupees</h1>
            <h1>Additional</h1>
        </div>
        <div class='mx-auto mt-[80px]   w-[188px] h-[219px] bg-white drop-shadow-2xl flex flex-col items-center justify-center  rounded-[10px]'>
            <Image src='/icons/salary.png' width={76} height={80}></Image>
            <h1 class='my-[21px]' >7200 Rupees</h1>
            <h1>Total paid</h1>
        </div>
        </div>
        
      
    
  )
}

export default MainContent