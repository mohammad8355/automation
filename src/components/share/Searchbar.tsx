"use client"
import React from 'react'
import { Input } from '../ui/input'
import { CiSearch } from "react-icons/ci";
export default function Searchbar() {
    const [open,setOpen] = React.useState<boolean>(false);

  return (
    <div className='w-1/2 h-full p-1' >
    <Input placeholder={"جستجو..."} className="ring-none border-none outline-none p-0 w-full pr-1 max-sm:hidden" />
    {open && <Input placeholder={"جستجو..."} className="border-none outline-none p-4 top-14 right-20 z-20 w-3/4 shadow-lg hidden absolute max-sm:flex" />}
    <CiSearch onClick={() => setOpen(!open)} size={40} className='ring-none text-white max-sm:block hidden mr-10'  />
 </div>
  )
}
