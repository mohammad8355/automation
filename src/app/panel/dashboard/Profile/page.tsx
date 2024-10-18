import React from 'react'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'
import avatar from "../../../../Assets/Images/funny.png";
import Image from 'next/image';
import { Button } from '../../../../components/ui/button';
export default function page() {
  return (
    <div className='w-full flex flex-col items-center ' >
      <div className='w-1/2 p-4 flex justify-center' >
        <Image className='object-cover rounded-full' src={avatar} />
      </div>
      <div className='w-1/2 max-sm:w-full  max-sm:p-2 flex flex-col gap-1' >
      <div className='flex gap-1 m-1' >
       <Button className="bg-yellow-500 hover:bg-yellow-700 " >ویرایش</Button>
       <Button className="bg-red-500 hover:bg-red-700 ">خروج</Button>
      </div>
        <div className='flex flex-col gap-2' >
          <Label>نام و نام خانوادگی</Label>
          <Input value={"محمد مهدی الماسی"} />
        </div>
        <div className='flex flex-col gap-2' >
          <Label>ایمیل </Label>
          <Input value={"www.almasi@gmail.com"} />
        </div>
        <div className='flex flex-col gap-2' >
          <Label>شماره دانشجویی</Label>
          <Input value={"4012114103"} />
        </div>
      </div>
    </div>
  )
}
