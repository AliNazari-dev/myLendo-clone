import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const EmptyState = () => {
  return (
    <div className='h-full flex justify-center flex-col items-center mt-10 gap-y-5'>
      <div className='flex'>
        <Image src={"./svgexport-14.svg"} objectFit='cover' alt='' width={500} height={500} />
      </div>
      <div className='flex flex-col gap-5 max-w-[364px] w-full text-center text-gray-800 '>
        <p className='text-xl '>هنوز موفق به ثبت سفارش وام قسطا نشده اید؟</p>
        <p className='text-sm'>
          فرآیند ثبت سفارش تا دریافت وام حدوداً یک هفته زمان می‌بره! میتونی همین الان کاملاً آنلاین
          و بدون نیاز به مراجعه حضوری سفارش خودت رو ثبت کنی
        </p>
      </div>
      <div className='border-2 border-gray-900 rounded-2xl relative h-14 items-center flex'>
        <Button
          label={"ثبت سفارش"}
          src='./svgexport-15.svg'
          href='/createOrder'
          className='w-40 flex font-medium'
        />
        <div className='bg-[#16d8a4] w-full h-full top-1 left-1 absolute rounded-2xl -z-10'></div>
      </div>
    </div>
  );
};

export default EmptyState;
