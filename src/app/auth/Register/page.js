"use client"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Page() {
  const form = useForm();

  return (
   <div className="w-full h-full flex justify-center items-center p-2" >
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>به اتوماسیون ستاره جهان گستر خوش آمدید</CardTitle>
        <CardDescription>لطفا در صورت مشکل با پشتیبانی تماس بگیرید</CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
      <form  className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام کاربری</FormLabel>
              <FormControl>
                <Input placeholder="Joe" {...field} />
              </FormControl>
              <FormDescription>
                نام کاربری شما 
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
         <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ایمیل</FormLabel>
              <FormControl>
                <Input placeholder="email@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
              ایمیل 
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
            <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رمز عبور </FormLabel>
              <FormControl>
                <Input placeholder="email@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
              رمز عبور باید دارای حداقل ۴ کاراکتر باشد
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
            <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تکرار رمز عبور</FormLabel>
              <FormControl>
                <Input placeholder="email@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
               رمز عبور باید دارای حداقل ۴ کاراکتر باشد 
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button className="w-full" type="submit">ثبت نام</Button>
        <a className="mt-2 text-blue-500" href="/auth/register" >ورود</a>
      </form>
    </Form>
      </CardContent>
      </Card>
   </div>
  )
}
