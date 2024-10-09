// app/panel/layout.js

import Sidebar from '../../components/share/Sidebar';

export default function PanelLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 ml-20 md:mr-64">
        {children}
      </main>
    </div>
  );
}
