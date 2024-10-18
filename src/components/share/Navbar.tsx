import Image from 'next/legacy/image'
import React, { useState } from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import Searchbar from './Searchbar';
export default function Navbar() {
  return (
 <div className=' w-full h-[10] bg-slate-700 flex justify-around items-center' >
   <Searchbar />
    <div className='cursor-pointer hover:bg-slate-600 rounded-md h-full flex justify-center items-center p-1 ' >
        <DropdownMenu>
            <DropdownMenuTrigger className='outline-none border-none' >
                <div className='flex items-center' >
                <h3 className='text-white px-2 max-sm:text-[.8em]' >محمد مهدی الماسی خانلو</h3>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent  className="w-full" >
                <DropdownMenuItem>
                    <h3>حساب کاربری</h3>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <h3>خروج</h3>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
 </div>
  )
}
