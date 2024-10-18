"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../../../components/ui/card'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../../components/ui/form';
import { Input } from '../../../../../components/ui/input';
import { Command, CommandItem, CommandList, CommandInput, CommandSeparator, CommandGroup, CommandShortcut, CommandEmpty } from '../../../../../components/ui/command';
import { Button } from '../../../../../components/ui/button';
interface FormData {
  username: string;
  email: string;
}

export default function page() {
  const [openCommand,setOpenCommand] = React.useState<boolean>(false);
  const form = useForm<FormData>();
  return (
    <div className='flex flex-col p-2 m-1' >
      <Card >
        <CardHeader>
          <CardTitle className="text-blue-600" >
            رزرواسیون بلیط
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-800">نام کاربری</FormLabel>
                    <FormControl>
                      <Button Onclick={() => setOpenCommand(true)} >انتخاب نیمراه </Button>
                      {openCommand && <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup heading="Suggestions">
                          </CommandGroup>
                          <CommandSeparator />
                          <CommandGroup heading="Settings">
                            <CommandItem>
                              <span>{field}</span>
                              <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>

                              <span>Billing</span>
                              <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>

                              <span>Settings</span>
                              <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>}
                    </FormControl>
                    <FormDescription className="text-white">
                      نام کاربری شما
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
