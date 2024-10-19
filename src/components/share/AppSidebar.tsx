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
    return (
        <Sidebar className="bg-slate-800 text-white" side={"right"} >
            <SidebarContent className="bg-slate-800 " >
            <SidebarGroup>
          <SidebarGroupLabel>اتوماسیون رزرواسیون </SidebarGroupLabel>
          <SidebarGroupContent>
                <SidebarMenu>
              
                        {items && items.map((item) => {
                            return       <Collapsible className="group/collapsible"><SidebarMenuItem>
                                <CollapsibleTrigger className='hover:bg-slate-600' asChild>
                                    <SidebarMenuButton ><a className='text-white flex px-2 py-1 gap-1' href={item.url ? item.url : "#"}><item.icon/>{item.title}</a></SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    {item.children && item.children.map((s) => {
                                        return <SidebarMenuSub>
                                            <SidebarMenuSubItem ><a className='flex px-2 py-1 gap-1' href={s.url ? s.url : "#"}><s.icon size={10} />{s.title}</a></SidebarMenuSubItem>
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
