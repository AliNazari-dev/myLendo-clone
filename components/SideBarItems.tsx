import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  src: string;
  label: string;
  active?: boolean;
  href: string;
  className?: string;
}
const SideBarItems: React.FC<SidebarItemProps> = ({ src, label, active, href, className }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center justify-start xl:justify-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-blue-700 transition-colors text-neutral-800 py-1`,
        active && "text-blue-500"
      )}>
      <div
        className={`flex w-10 h-10 justify-center items-center rounded-xl ${
          active ? "bg-blue-200" : "bg-gray-200"
        }`}>
        <Image alt='' src={src} width={20} height={20} />
      </div>
      <p className={`truncate w-full hidden xl:block ${className}`}>{label}</p>
    </Link>
  );
};

export default SideBarItems;
