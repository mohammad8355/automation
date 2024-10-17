"use client";

import { useState } from 'react';
import { AiFillDashboard, AiFillCar } from 'react-icons/ai';
import { FaUsers, FaMoneyBillAlt } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { TbReportSearch } from 'react-icons/tb';
import { CiMenuBurger } from 'react-icons/ci';
import { IoCloseSharp } from 'react-icons/io5';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';
import * as  route from "../../Routes.js";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
    
  };

  const toggleSidebar = () => {
    if (isOpen) {
      // Close all menus when closing the sidebar
      setOpenMenus({});
    }
    setIsOpen(!isOpen);
  };

  const closeMenus = () => {
    setOpenMenus({});
    setIsOpen(false);
  };

  return (
    <>
      <aside
        className={`fixed h-screen bg-gray-800 max-sm:hidden text-white transition-transform duration-300  w-24 md:w-64 md:static md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 md:hidden">
          <button onClick={toggleSidebar} className="text-2xl">
            {isOpen ? <IoCloseSharp /> : <CiMenuBurger />}
          </button>
        </div>
        <nav className="flex flex-col space-y-2 p-4">
          <MenuItem onClick={() => { toggleMenu('dashboard'); }}>
          <a  href={route.DASHBOARD} className={` w-full h-full  flex justify-between`}>
          <AiFillDashboard className="mr-3" />
          <span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>داشبورد</span>
          </a>
          </MenuItem>
          <div>
            <MenuItem onClick={() => { toggleMenu('management'); }}>
              <FaUsers className="mr-3" />
              <span className="flex items-center">
                <span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>مدیریت سیستم</span>
                <span className="ml-auto">
                  {openMenus['management'] ? <MdExpandLess /> : <MdExpandMore />}
                </span>
              </span>
            </MenuItem>
            {openMenus['management'] && (
              <div className="flex flex-col space-y-2 pl-6 pt-2">
                <SubMenuItem href={route.DRIVER_MANAGEMENT} onClick={closeMenus}>
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
                <span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>گزارشات</span>
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
      </aside>
    </>
  );
}
