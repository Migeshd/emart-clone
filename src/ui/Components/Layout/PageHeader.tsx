import { SidebarContext } from '@/context/SidebarProvider';
import {
  BellOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout, theme } from 'antd';
import { useContext } from 'react';

function PageHeader() {
  const { toggleSidebar, isSidebarExpanded } = useContext(SidebarContext);
  const { Header } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <div className="flex justify-between">
          <div className="flex  ">
            <Button
              type="text"
              icon={
                isSidebarExpanded ? (
                  <MenuUnfoldOutlined />
                ) : (
                  <MenuFoldOutlined />
                )
              }
              onClick={toggleSidebar}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <p className=" mb-auto mt-auto text-center text-xl capitalize leading-loose">
              orders
            </p>
          </div>
          <div className="pr-5">
            <div className="flex justify-between ">
              <h1 className="pr-5">example@gmail.com</h1>
              <Avatar
                style={{
                  backgroundColor: '#fde3cf',
                  color: '#f56a00',
                  marginBottom: 'auto',
                  marginTop: 'auto',
                  marginRight: '30px',
                }}
              >
                U
              </Avatar>
              <BellOutlined style={{ fontSize: '20px' }} />
            </div>
          </div>
        </div>
      </Header>
    </Layout>
  );
}

export default PageHeader;
