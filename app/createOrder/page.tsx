import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Modal from "@/components/modal/Modal";
import { CreateOrderCondition } from "@/data";
import Image from "next/image";
import React from "react";

//for create Order Modal steps in future :)
enum STEPS {
  TAXPAY = 0,
  STEP2 = 1,
  STEP3 = 2,
  STEP4 = 3,
}

const IconSvg = [{ cash: "./cash.svg" }, { cash: "./cash.svg" }];

const CreateOrder = () => {
  let bodyContert = (
    <div className='flex gap-8 w-full flex-col'>
      <Heading
        active
        title='وضعیت استعلام'
        subtitle='در انتظار پرداخت'
        IconSrc='./createOrderModal.svg'
      />
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
      <Footer />
    </div>
  );

  return (
    <div className='w-full z-50 flex flex-col'>
      <div className='bg-userInfo rounded-t-xl h-[104px] '></div>
      <div
        className='
       z-50 bg-white w-full p-10 flex justify-center items-center '>
        <div className='z-50 bg-[#F2F3F6] h-full w-full rounded-3xl 2xl:h-[750px] p-10 max-w-[600px] flex justify-center'>
          <Modal body={bodyContert} actionLabel='' />
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
