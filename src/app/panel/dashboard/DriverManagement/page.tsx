import React from 'react'
import {Driver,columns} from "@/Data/Columns/DriverColumn/Driver.ts";
import { DataTable } from "@/components/share/DataTable";
 
async function getData(): Promise<Driver[]> {
  return [
    {
      id: "728ed52f",
      name: "مجید",
      email: "m@example.com",
      phonenumber:"09444687434",
    },
  ]
}
export default async function page() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
    <DataTable columns={columns} data={data} />
  </div>
  )
}
