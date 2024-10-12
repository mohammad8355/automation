"use client";
import React from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubMenuItem";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TbReportSearch } from 'react-icons/tb';
import { CiMenuBurger } from 'react-icons/ci';
import { FaUsers, FaMoneyBillAlt } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { AiFillDashboard, AiFillCar } from 'react-icons/ai';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// const NavContent = () => {
//   const Pathname = usePathname();
//   return (
//     <section className="flex h-full flex-col gap-6 pt-6 ">
//       {sidebarLinks.map((item) => {
//         const isActive =
//           (Pathname.includes(item.route) && item.route.length > 1) ||
//           Pathname === item.route;
//         return (
//           <SheetClose asChild>
//             <Link
//               href={item.route}
//               className={`${
//                 isActive
//                   ? "primary-gradient rounded-lg text-light-900"
//                   : "text-dark300_light900"
//               } flex items-center justify-start gap-4 bg-transparent p-4`}
//             >
//               <Image
//                 src={item.imgURL}
//                 className={`${isActive ? "" : "invert-colors"}`}
//                 alt={item.label}
//                 width={20}
//                 height={20}
//               />
//               <p className={`${isActive ? "base-bold" : "base-medium"}`}>
//                 {item.label}
//               </p>
//             </Link>
//           </SheetClose>
//         );
//       })}
//     </section>
//   );
// };
export default function MobileNav() {
  const [openMenus, setOpenMenus] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const closeMenus = () => {
    setOpenMenus({});
    setIsOpen(false);
  };
  return (
    <Sheet >
      <SheetTrigger className="hidden max-sm:block" asChild>
      <CiMenuBurger size={40} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="hidden max-sm:block bg-gray-800 text-white h-screen   border-none"
      >
        <Link className="flex items-center gap-1 " href="/">
         <h3 className="text-left w-full" >اتوماسیون جهان گستر آریا</h3>
        </Link>
        <nav className="flex flex-col space-y-2 p-4">
          <MenuItem onClick={() => { toggleMenu('dashboard'); }}>
            <AiFillDashboard className="mr-3" />
            <span className={`inline`}>داشبورد</span>
          </MenuItem>
          <div>
            <MenuItem onClick={() => { toggleMenu('management'); }}>
              <FaUsers className="mr-3" />
              <span className="flex items-center">
                <span className={`inline`}>مدیریت سیستم</span>
                <span className="ml-auto">
                  {openMenus['management'] ? <MdExpandLess /> : <MdExpandMore />}
                </span>
              </span>
            </MenuItem>
            {openMenus['management'] && (
              <div className="flex flex-col space-y-2 pl-6 pt-2">
                <SubMenuItem href="#" onClick={closeMenus}>
                  مدیریت رانندگان
                </SubMenuItem>
                <SubMenuItem href="#" onClick={closeMenus}>
                  مدیریت مسافران
                </SubMenuItem>
                <SubMenuItem href="#" onClick={closeMenus}>
                  مدیریت نیم راه ها
                </SubMenuItem>
              </div>
            )}
          </div>
          <div>
            <MenuItem onClick={() => { toggleMenu('reports'); }}>
              <TbReportSearch className="mr-3" />
              <span className="flex items-center">
                <span className={`inline`}>گزارشات</span>
                <span className="ml-auto">
                  {openMenus['reports'] ? <MdExpandLess /> : <MdExpandMore />}
                </span>
              </span>
            </MenuItem>
            {openMenus['reports'] && (
              <div className="flex flex-col space-y-2 pl-6 pt-2">
                <SubMenuItem href="#" onClick={closeMenus}>
                  گزارشات مالی
                </SubMenuItem>
                <SubMenuItem href="#" onClick={closeMenus}>
                  گزارشات سیستم
                </SubMenuItem>
                <SubMenuItem href="#" onClick={closeMenus}>
                  گزارشات فنی
                </SubMenuItem>
              </div>
            )}
          </div>
        </nav>
 
      </SheetContent>
    </Sheet>
  );
}
