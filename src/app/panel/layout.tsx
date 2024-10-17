// app/panel/layout.js

import MobileNav from '../../components/share/MobileNav';
import Sidebar from '../../components/share/Sidebar';
import Navbar from '../../components/share/Navbar';

export default function PanelLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <MobileNav />
      <div className='w-full flex flex-col ' >
      <Navbar />
      <main className="max-sm:w-full h-screen flex-1 p-6 max-sm:p-0 max-sm:mr-0 max-md:mr-32 mr-0">
        {children}
      </main>
      </div>
    </div>
  );
}
