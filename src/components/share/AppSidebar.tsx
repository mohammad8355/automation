"use client"
import React from 'react'
import { AiFillDashboard, AiFillCar } from 'react-icons/ai';
import { FaUsers, FaMoneyBillAlt } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { TbReportSearch } from 'react-icons/tb';
import { CiMenuBurger } from 'react-icons/ci';
import { FaCircle } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import * as routes from "../../Routes";
import { useSidebar } from "../../components/ui/sidebar"
import { Calendar, Home, icons, Inbox, Search, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../ui/sidebar"

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui/collapsible'
// Menu items.
const items = [
    {
        title: "داشبورد",
        url: routes.DASHBOARD,
        icon: AiFillDashboard,
    },
    {
        title: "مدیریت سیستم",
        url: "#",
        icon: AiFillCar,
        children: [
            {
                title: "مدیریت رانندگان",
                url: routes.DRIVER_MANAGEMENT,
                icon:FaCircle
            },
            {
                title: "مدیریت مسافران",
                url: routes.PASSENGER_MANAGEMENT,
                icon:FaCircle
            },
            {
                title: "مدیریت نیمراه ها",
                url: routes.HALFWAY_MANAGEMENT,
                icon:FaCircle
            }
        ]
    },
    {
        title: "رزرواسیون",
        url: "#",
        icon: FaTicket,
        children: [
            {
                title: "رزرو تیکت",
                url: routes.TICKETBOOKING,
                icon:FaCircle
            },
            {
                title: "تاریخچه رزروها",
                url: routes.TICKETHISTORY,
                icon:FaCircle
            },
        ]
    },
    {
        title: "گزارشات",
        url: routes.REPORT_MANAGEMENT,
        icon: TbReportSearch,
        children: [
            {
                title: "گزارشات مالی",
                url: routes.FINANCE_MANAGEMENT,
                icon:FaCircle
            },
        ]
    },
]
export default function AppSidebar() {
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
      } = useSidebar()
    return (
        <Sidebar collapsible="icon" side={"right"} >
            <SidebarContent  >
            <SidebarGroup>
          <SidebarGroupLabel>اتوماسیون رزرواسیون </SidebarGroupLabel>
          <SidebarGroupContent>
                <SidebarMenu>
              
                        {items && items.map((item) => {
                            return       <Collapsible className="group/collapsible"><SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton ><a className={`w-full ${open && "px-2 gap-x-2" } flex  py-1  hover:text-teal-500`} href={item.url ? item.url : "#"}><item.icon className='text-teal-500' size={open ? 20 : 30} /><h3 className={`${open ? "inline" : "hidden"}`} >{item.title}</h3></a></SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    {item.children && item.children.map((s) => {
                                        return <SidebarMenuSub>
                                            <SidebarMenuSubItem ><a className='flex px-2 py-1 gap-1 items-center hover:text-teal-500' href={s.url ? s.url : "#"}><s.icon className='text-teal-500' size={5} /><h3>{s.title}</h3></a></SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    })}
                                </CollapsibleContent>
                            </SidebarMenuItem>
                            </Collapsible>
                        })}
                   
                </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
