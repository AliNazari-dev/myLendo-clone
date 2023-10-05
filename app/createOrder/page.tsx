import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Modal from "@/components/modal/Modal";
import { CreateOrderCondition } from "@/data";
import Image from "next/image";
import React from "react";

enum STEPS {
  TAXPAY = 0,
  STEP2 = 1,
  STEP3 = 2,
  STEP4 = 3,
}

const CreateOrder = () => {
  let bodyContert = (
    <div className='flex gap-8 w-full flex-col'>
      <Heading active title='وضعیت استعلام' subtitle='در انتظار پرداخت' IconSrc='./createOrderModal.svg' />
      <hr className='border-2 border-[#DFE1F3]' />
      <div className=''>
        <span className='font-medium text-sm text-[#3d3d3d] '>
          لطفاً قبل از پرداخت صورتحساب، به نکات زیر توجه فرمایید:
        </span>
        <ul className='list-disc text-[#3d3d3d] font-medium  text-sm'>
          {CreateOrderCondition.map((item) => (
            <li className='my-6'>{item.label}</li>
          ))}
        </ul>
        <hr className='border-2 border-[#DFE1F3]' />
      </div>
      <div className='flex justify-between  bg-white items-center self-center'>
        <Image src={"/Discount.svg"} height={30} width={30} alt='' className='top-1 right-1' />
        <input className='placeholder:px-9 outline-none' type='text' placeholder='کد تخفیف' />
        <Button active={true} className='bg-[#3d3d3d] text-white p-2 rounded-xl' label='تایید' />
      </div>
      <Footer IconSrc='./cash.svg' subtitle='18,400' title='با احتساب مالیات' />
    </div>
  );

  return (
    <div className='w-full z-50 flex flex-col'>
      <div className='UprBar bg-userInfo rounded-t-xl h-[104px] '></div>
      <div
        className='
       z-50 bg-white w-full p-10 flex justify-center items-center '>
        <div className='z-50 bg-[#F2F3F6] h-full w-full rounded-3xl 2xl:h-[700px] p-10 max-w-[600px] flex justify-center'>
          <Modal body={bodyContert} actionLabel='' />
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
