import Image from 'next/legacy/image'
import React, { useState } from 'react'
import * as route from "../../Routes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import Searchbar from './Searchbar';
import { SidebarTrigger } from '../ui/sidebar';
import { CiMenuBurger } from 'react-icons/ci';
import { Button } from '../ui/button';
import { CustomSidebarTrigger } from './CustomSidebarTrigger';
import { Bell } from 'lucide-react';
export default function Navbar() {
  return (
 <div className=' w-full h-[10] bg-teal-500 flex justify-between items-center py-2 px-1' >
    <CustomSidebarTrigger />
    <div className='flex gap-x-2' >
    <div className='p-1' >
    <Bell strokeWidth={2} className='cursor-pointer text-white' />
    </div>
    <div className='cursor-pointer rounded-md h-full flex justify-center items-center p-1 ' >
        <DropdownMenu>
            <DropdownMenuTrigger className='outline-none border-none' >
                <div className='flex items-center' >
                <h3 className='text-white px-2 max-sm:text-[.8em]' >محمد مهدی الماسی خانلو</h3>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent  className="w-full" >
                <DropdownMenuItem>
                    <a href={route.PROFILE} >حساب کاربری</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <h3 >خروج</h3>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
    </div>

 </div>
  )
}
