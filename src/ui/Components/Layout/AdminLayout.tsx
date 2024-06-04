import React from 'react';
import { Layout } from 'antd';
import Order from '@/app/content/Order';
import PageHeader from './PageHeader';
import SideBarItems from './SideBarItems';

function AdminLayout() {
  return (
    <Layout>
      <SideBarItems />
      <Layout>
        <PageHeader />
        <Order />
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
