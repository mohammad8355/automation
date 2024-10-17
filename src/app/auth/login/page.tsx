"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import cover from "../../../Assets/Images/Bus_Cover_Auth.jpg";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import Image from "next/image";

interface FormData {
  username: string;
  email: string;
}

export default function Page() {
  const form = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    router.push('/panel/dashboard'); // Navigate to the dashboard
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Image src={cover} alt="Bus Cover" className="relative w-full h-full object-cover rounded-sm" />
      <div className="bg-gradient-to-r from-black opacity-50 w-full h-full absolute z-10"></div>
      <Card className="bg-transparent backdrop-blur-sm left-10 w-[350px] absolute z-30">
        <CardHeader>
          <CardTitle className="text-white font-medium">به اتوماسیون ستاره جهان گستر خوش آمدید</CardTitle>
          <CardDescription className="text-white">لطفا در صورت مشکل با پشتیبانی تماس بگیرید</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">نام کاربری</FormLabel>
                    <FormControl>
                      <Input placeholder="Joe" {...field} />
                    </FormControl>
                    <FormDescription className="text-white">
                      نام کاربری شما
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">ایمیل</FormLabel>
                    <FormControl>
                      <Input placeholder="email@gmail.com" {...field} />
                    </FormControl>
                    <FormDescription className="text-white">
                      ایمیل
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">ورود</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
