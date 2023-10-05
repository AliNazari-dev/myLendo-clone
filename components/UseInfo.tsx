import Image from "next/image";
import React from "react";

const UseInfo = () => {
  return (
    <div className='h-[70px] flex flex-row justify-between px-3 items-center box-bg rounded-2xl'>
      <div className='bg-box flex rounded-full h-[50px] w-[60px] justify-center relative'>
        <Image src={"/svgexport-6.svg"} width={50} height={50} alt='user Image' />
        <Image
          className='absolute bottom-0 left-0'
          src={"/svgexport-7.svg"}
          width={25}
          height={25}
          alt='user Image'
        />
      </div>
      <div className='text-right'>
        <p className='font-medium text-blue-950'>علی نظری</p>
        <p className='text-xs font-medium'>9901133006</p>
      </div>
      <div className='bg-blue-500 flex rounded-2xl h-[40px] w-[40px] justify-center'>
        <Image src={"/svgexport-8.svg"} width={30} height={30} alt='user Image' />
      </div>
    </div>
  );
};

export default UseInfo;
