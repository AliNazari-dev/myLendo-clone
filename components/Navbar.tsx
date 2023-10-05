import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className='hidden 2xl:block'>
      <div className='flex relative h-[90px] '>
        <Image
          className='w-full min-h-[200px] rounded-xl shadow-xl shadow-gray-400'
          src={"./svgexport-1.svg"}
          alt=''
          width={100}
          height={300}
        />
        <div className='flex absolute right-32 top-7'>
          <Image
            src={"./svgexport-2.svg"}
            className='max-w-[160px]'
            alt=''
            width={146}
            height={49}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
