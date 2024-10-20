"use client"
import { CiMenuBurger } from "react-icons/ci"
import { useSidebar } from "../../components/ui/sidebar"
import { Button } from "../ui/button"

export function CustomSidebarTrigger() {
  const { toggleSidebar } = useSidebar()

  return <Button className="bg-transparent hover:bg-transparent" onClick={toggleSidebar} ><CiMenuBurger size={30} /></Button>
}
