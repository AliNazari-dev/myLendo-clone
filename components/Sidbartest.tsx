"use client";

//hooks
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Box from "./Box";
import SideBarItems from "./SideBarItems";
import UseInfo from "./UseInfo";

interface SidbarProps {
  children: React.ReactNode;
}

const Sidbartest: React.FC<SidbarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        src: "./homeIcon.svg",
        label: "داشبورد",
        active: pathname === "/",
        href: "/",
      },
      {
        src: "./svgexport-10.svg",
        label: "سفارش ها",
        active: pathname === "/orders",
        href: "/orders",
      },
      {
        src: "./svgexport-11.svg",
        label: "ثبت سفارش",
        active: pathname === "/createOrder",
        href: "/createOrder",
      },
      {
        src: "./svgexport-12.svg",
        label: "اعتبارسنجی",
        active: pathname === "/inquiry",
        href: "/inquiry",
      },
      {
        src: "./svgexport-13.svg",
        label: "خروج",
        href: "/",
        className: "text-red-400",
      },
    ],
    [pathname]
  );
  return (
    <div className='flex min-w-fit h-full mx-4  justify-end gap-x-5'>
      {/* div for responsiving Design */}
      <div className='flex flex-col  h-full w-[350px] mt-2 z-10 shadow-xl  rounded-t-3xl'>
        <div
          className='bg-userInfo 
          h-[102px] flex justify-center items-center rounded-t-2xl'>
          <Box className='max-w-[250px] min-h-[80px]'>
            <UseInfo />
          </Box>
        </div>
        <Box className='overflow-y-auto min-h-[700px] bg-white'>
          <div className='flex flex-col gap-y-2 px-5 py-4'>
            {routes.map((item) => (
              <SideBarItems key={item.label} {...item} />
            ))}
          </div>
        </Box>
      </div>
      <main className='h-full flex w-full overflow-y-auto py-2'>{children}</main>
    </div>
  );
};

export default Sidbartest;
