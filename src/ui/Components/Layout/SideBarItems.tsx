import Image from 'next/image';
import getBrandLogo from '@/utils/getBrandLogo';
import { Menu, Layout } from 'antd';
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
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useContext } from 'react';
import { SidebarContext } from '@/context/SidebarProvider';

const { Sider } = Layout;
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
  icon: <item.icon />,
  label: item.label,
}));

function SideBarItems() {
  const { isSidebarExpanded } = useContext(SidebarContext);
  return (
    <Sider
      collapsible
      collapsed={isSidebarExpanded}
      style={{
        display: 'flex',
        flexDirection: 'column',
        left: '0',
        top: '0',
        bottom: '0',
        height: '100vh',
      }}
      className="flex flex-col "
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
        <Image src={`/${getBrandLogo()}`} alt="nipuna" height={60} width={60} />
      </div>

      <Sider
        collapsible
        collapsed={isSidebarExpanded}
        className="middle-bar"
        // trigger={null}
        style={{
          overflow: 'auto',
          height: '80vh',
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
  );
}

export default SideBarItems;
