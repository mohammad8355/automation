import React from 'react'
import {Driver,columns} from "../../../../Data/Columns/DriverColumn/Driver";
import { DataTable } from "../../../../components/share/DataTable";
import { Button } from '../../../../components/ui/button';
 
async function getData(): Promise<Driver[]> {
  return [
    {
      id: 12,
      name: "مجید",
      email: "m@example.com",
      phonenumber:"09444687434",
    },
    {
      id: 13,
      name: "حمید",
      email: "H2000@gmail.com",
      phonenumber:"09444687434",
    },
    {
      id: 14,
      name: "رضا",
      email: "R.35@gmail.com",
      phonenumber:"09444687434",
    },
    {
      id: 15,
      name: "علی",
      email: "ali@gmail.com",
      phonenumber:"09444687434",
    },
  ]
}
export default async function page() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <h1 className='text-[2em] font-bold  text-slate-800'>مدیریت رانندگان</h1>
    <DataTable columns={columns} data={data} />
  </div>
  )
}
