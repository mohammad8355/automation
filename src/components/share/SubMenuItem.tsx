import React from 'react'
import { FaCircle } from "react-icons/fa";

export default function SubMenuItem({children,href,...props}) {
  return (
    <a href={href} {...props} className="text-sm w-full flex justify-between items-center gap-2 px-4 max-md:px-0 py-2 rounded-md text-white text-center" >  
    <FaCircle size={10} />
    {children}
   </a>
  )
}
