// app/panel/layout.js

import MobileNav from '../../components/share/MobileNav';
import Sidebar from '../../components/share/Sidebar';
import Navbar from '../../components/share/Navbar';
import { SidebarProvider } from "../../components/ui/sidebar"
import  AppSidebar from "../../components/share/AppSidebar";
export default function PanelLayout({ children }) {
  return (
    <div className="flex">
      <SidebarProvider  >
        <AppSidebar />
      <div className='w-full flex flex-col ' >
      <Navbar />
      <main >
        {children}
      </main>
      </div>
      </SidebarProvider>
    </div>
  );
}
