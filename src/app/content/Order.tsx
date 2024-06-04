// import React from 'react'

import OrdenContentHead from '@/ui/Atoms/content/OrdenContentHead';
import CopyRight from '@/ui/Atoms/CopyRight';
import OrderTable from '@/ui/Components/Tables/OrderTable';
import { Layout, theme } from 'antd';

function Order() {
  const { Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: ' 24px',
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        height: '80vh',
        overflow: 'scroll',
      }}
    >
      <OrdenContentHead />
      <OrderTable />
      <CopyRight />
    </Content>
  );
}

export default Order;
