"use client";

import Image from "next/image";
import Button from "./Button";

interface FooterProps {
  title?: string;
  IconSrc?: string;
  subtitle?: string;
  step?: number;
}

const Footer: React.FC<FooterProps> = ({ title, subtitle, IconSrc, step }) => {
  return (
    <div className='flex flex-row w-full justify-between items-center'>
      <div className='text-md text-[#30357c] font-bold flex gap-x-3 items-center'>
        <Image src={IconSrc || "./createOrderModal.svg"} height={30} width={30} alt='' />
        <div>
          <p className='text-sm text-[#30357c]'>{subtitle}</p>
          <p className='text-[11px] text-[#c3c6e8]'>{title}</p>
        </div>
      </div>
      {/* Step container */}
      <div className='text-[#30357c]'>
        <Button
          label='پرداخت'
          src='./PaymentButtonIcon.svg'
          className='bg-[#16d8a4] w-full h-full rounded-2xl px-6 py-2 text-white font-bold '
        />
      </div>
    </div>
  );
};

export default Footer;
