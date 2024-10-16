import React from 'react'

export default function MenuItem({children,...props}) {
  return (
  <button {...props} className="w-full items-center bg-slate-700 flex hover:bg-slate-600 justify-between gap-2 max-md:px-0 px-4 py-2 rounded-md text-white text-center" >  
   {children}
  </button>
  )
}
