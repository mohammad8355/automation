import Image from 'next/legacy/image'
import React from 'react'
import { Input } from '../ui/input'
import avatar from "../../Assets/Images/avatar.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
export default function Navbar() {
  return (
 <div className='w-full h-[10] bg-slate-700 flex justify-around items-center' >
    <div className='w-1/4 h-full p-1' >
       <Input placeholder={"جستجو..."} className="border-none outline-none p-0 w-full pr-1" />
    </div>
    <div className='cursor-pointer hover:bg-slate-600 rounded-md h-full flex justify-center items-center p-1 ' >
        <DropdownMenu>
            <DropdownMenuTrigger className='outline-none border-none' >
                <div className='flex items-center' >
                <Image className='rounded-full' src={avatar} width={50} height={50} />
                <h3 className='text-white px-2' >محمد مهدی الماسی خانلو</h3>
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
