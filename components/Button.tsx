"use client";
import { twMerge } from "tailwind-merge";

import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
  href?: string;
  outline?: boolean;
  icon?: IconType;
  src?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  active,
  outline,
  icon,
  src,
  href,
  className,
}) => {
  return (
    <div className={`${active && "opacity-90"}`}>
      <Link
        href={href || ""}
        className={twMerge(
          `items-center justify-center align-middle flex flex-row gap-3`,
          className
        )}>
        {src && <Image src={src} alt={label} width={20} height={20} className='' />}
        <button>{label}</button>
      </Link>
    </div>
  );
};

export default Button;
