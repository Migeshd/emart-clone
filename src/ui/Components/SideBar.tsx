import React, { useState } from 'react';
import {
  TransactionOutlined,
  UsergroupAddOutlined,
  GiftOutlined,
  ShopOutlined,
  UserAddOutlined,
  TagsOutlined,
  ShoppingCartOutlined,
  ProductOutlined,
  SettingOutlined,
  FileTextOutlined,
  LogoutOutlined,
  DownloadOutlined,
  FileWordOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { Button, Layout, Menu, theme } from 'antd';
import Image from 'next/image';

import nipunaLogo from '../../../public/nipuna_sewa_logo.png';

const { Header, Sider, Content } = Layout;
const items: MenuProps['items'] = [
  { label: 'Shopping Cart', icon: ShoppingCartOutlined },
  { label: 'Product', icon: ProductOutlined },
  { label: 'Tags', icon: TagsOutlined },
  { label: 'Gifts', icon: GiftOutlined },
  { label: 'Shop', icon: ShopOutlined },
  { label: 'User Group', icon: UsergroupAddOutlined },
  { label: 'Add User', icon: UserAddOutlined },
  { label: 'Transaction History', icon: TransactionOutlined },
  { label: 'Settings', icon: SettingOutlined },
  { label: 'Admin Docs', icon: FileTextOutlined },
  { label: 'Mobile App Docs', icon: FileWordOutlined },
  { label: 'Download App', icon: DownloadOutlined },
  { label: 'LogOut ', icon: LogoutOutlined },
].map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: item.label,
}));

function SideNavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        style={{
          display: 'flex',
          flexDirection: 'column',
          left: '0',
          top: '0',
          bottom: '0',
          height: '100vh',
        }}
        className="flex flex-col bg-green-200"
      >
        <div
          className="logo-container"
          style={{
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <Image src={nipunaLogo} alt="nipuna" height={60} width={60} />
        </div>

        <Sider
          collapsible
          collapsed={collapsed}
          className="middle-bar"
          trigger={null}
          style={{
            overflow: 'auto',
            height: '100vh',
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
            style={{ marginTop: '30px' }}
          />
        </Sider>
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default SideNavBar;
