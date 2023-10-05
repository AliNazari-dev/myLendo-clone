"use client";

import Image from "next/image";

interface HeadingProps {
  active?: boolean;
  title?: string;
  IconSrc?: string;
  subtitle?: string;
  step?: number;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, IconSrc, step, active }) => {
  return (
    <div className='flex flex-row w-full justify-between items-center'>
      <div className='text-md text-[#30357c] font-bold flex gap-x-3 items-center'>
        <Image src={IconSrc || "./createOrderModal.svg"} height={50} width={50} alt='' />
        <div>
          <p className='text-[11px] text-[#c3c6e8]'>{title}</p>
          <p className='text-sm text-[#30357c]'>{subtitle}</p>
        </div>
      </div>
      {/* Step container */}
      {active && (
        <div className='text-[#30357c]'>
          <p className='text-[11px] text-[#c3c6e8]'>مرحله</p>
          <p className='text-sm text-[#30357c]'>1 از 4</p>
        </div>
      )}
    </div>
  );
};

export default Heading;
