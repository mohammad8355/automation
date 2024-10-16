"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu.jsx";

// This type is used to define the shape of our data.
export type Driver = {  
  id: number,  
  name: string,  
  email: string,  
  phonenumber: string
};

export const columns: ColumnDef<Driver>[] = [
  {    
    accessorKey: "name",    
    header: "نام",  
  },  
  {    
    accessorKey: "email",    
    header: "ایمیل",  
  },  
  {    
    accessorKey: "phonenumber",    
    header: "شماره تلفن",  
  },  
  {    
    id: "actions",    
    cell: ({ row }) => {      
      const driver = row.original;
      return (        
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(payment.id)}
          >
            Copy payment ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View customer</DropdownMenuItem>
          <DropdownMenuItem>View payment details</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        

      )    
    }
  },
]
