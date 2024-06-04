'use client';

import SidebarProvider from '@/context/SidebarProvider';
import AdminLayout from '@/ui/Components/Layout/AdminLayout';
// import SideBar from '@/ui/Components/Layout/SideBar';

// this below sideNavBar is if sothing goes wrong then this is the original file
// import SideNavBar from '@/ui/Components/SideNavBar';

function page() {
  return (
    <div>
      <SidebarProvider>
        <AdminLayout />
      </SidebarProvider>
      {/* <SideBar/> */}
    </div>
  );
}

export default page;
