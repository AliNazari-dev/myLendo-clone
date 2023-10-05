"use client";

import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <div className='flex justify-between  bg-white items-center self-center'>
        <Image src={"/Discount.svg"} height={30} width={30} alt='' className='top-1 right-1' />
        <input className='placeholder:px-9 outline-none' type='text' placeholder='کد تخفیف' />
        <Button active={true} className='bg-[#3d3d3d] text-white p-2 rounded-xl' label='تایید' />
      </div>
      <div className='flex flex-row w-full justify-between items-center '>
        <div className='text-md text-[#30357c] font-bold flex gap-x-3 items-center'>
          <Image src={"./cash.svg"} height={30} width={30} alt='' />
          <div>
            <p className='text-md text-[#30357c] flex gap-x-3'>
              18,400
              <Image src={"./toman.svg"} height={20} width={20} alt='' />
            </p>
            <p className='text-[11px] text-[#4c55b0]'>با احتساب مالیات</p>
          </div>
        </div>
        {/* Step container */}
        <div className='text-[#30357c]'>
          <Button
            label='پرداخت'
            src='./PaymentIcon.svg'
            className='bg-[#16d8a4] w-full h-full rounded-2xl px-6 py-2 text-white font-bold '
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
