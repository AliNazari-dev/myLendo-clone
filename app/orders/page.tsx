import Heading from "@/components/Heading";
import Modal from "@/components/modal/Modal";
import React from "react";

const page = () => {
  let bodyContert = (
    <div className='flex gap-8 w-full flex-col'>
      <Heading
        title='وضعیت استعلام'
        subtitle='تا کنون سفارشی برای شما ثبت نشده است'
        IconSrc='./createOrderModal.svg'
      />
      <hr className='border-2 border-[#DFE1F3]' />
    </div>
  );

  return (
    <div className='container z-50 flex flex-col'>
      <div className='UprBar bg-userInfo  w-full rounded-t-xl h-[104px] '></div>
      <div
        className='
        z-50 bg-white w-full p-10 flex justify-center items-center '>
        <div className='z-50 bg-[#F2F3F6] h-auto w-full rounded-3xl 2xl:max-h-[700px] p-10 max-w-[600px] flex justify-center'>
          <Modal body={bodyContert} actionLabel='' />
        </div>
      </div>
    </div>
  );
};

export default page;
