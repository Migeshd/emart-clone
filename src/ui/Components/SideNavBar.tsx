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
import getBrandLogo from '@/utils/getBrandLogo';

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
          <Image
            src={`/${getBrandLogo()}`}
            alt="nipuna"
            height={60}
            width={60}
          />
        </div>

        <Sider
          collapsible
          collapsed={collapsed}
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
          {/* <h1>order details</h1> */}
        </Header>
        {/* <Sider> */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: '60vh',
            overflow: 'scroll',
          }}
        >
          contentLorem ipsum dolor sit amet, consectetur adipiscing elit. In
          dapibus arcu ut dui accumsan, ac vestibulum lectus eleifend. In eu
          orci vitae augue ultricies sodales. Duis blandit mauris et odio
          convallis, sit amet aliquet libero tincidunt. Vivamus posuere interdum
          arcu, sit amet pretium orci semper vitae. Pellentesque scelerisque
          egestas posuere. Proin arcu odio, cursus ac venenatis bibendum, cursus
          eget mauris. Quisque eu posuere risus. Vivamus in interdum diam.
          Aenean placerat finibus convallis. Suspendisse dignissim facilisis
          libero, vel porta lectus venenatis ut. Integer quis mattis nisi, id
          placerat nulla. Aliquam aliquet fermentum elit, in dictum odio viverra
          et. Donec rutrum sagittis dolor, ac gravida nisi aliquam eu. Praesent
          rutrum augue non venenatis mattis. Aliquam massa orci, fringilla ac
          euismod a, malesuada quis tortor. Phasellus a commodo nibh.
          Pellentesque vel pellentesque eros. Nam cursus iaculis felis, sed
          condimentum arcu tincidunt eu. In sodales metus nec congue sodales.
          Maecenas pulvinar ligula dolor, a varius nisl vehicula quis.
          Vestibulum tempus, velit non maximus dapibus, ipsum urna scelerisque
          lacus, sit amet rhoncus eros massa eu massa. Mauris quis nibh odio.
          Donec euismod tellus at fermentum aliquet. Vestibulum posuere leo id
          aliquam aliquam. Donec dapibus eleifend velit, id imperdiet neque
          varius vel. Ut non elementum nisi, eget molestie velit. Nunc
          pellentesque tempus erat quis faucibus. Mauris nec ex erat. Duis
          aliquam arcu eu hendrerit pretium. Aliquam luctus pretium urna. Proin
          non varius nulla. Aenean bibendum sit amet sem id vulputate. Etiam
          sodales euismod felis eget scelerisque. Nulla quis libero quis dolor
          faucibus sollicitudin. Suspendisse eu neque elementum, imperdiet ante
          nec, condimentum ex. Vestibulum varius tincidunt sapien vitae gravida.
          Etiam vitae urna libero. Integer feugiat, enim vitae aliquet
          ultricies, lectus sem volutpat sapien, ac pharetra turpis enim vitae
          neque. Pellentesque ultricies dolor nibh, eget feugiat nulla blandit
          vel. Nam viverra augue ut bibendum fermentum. Phasellus at ante tempor
          velit tempus vehicula a pharetra massa. Donec condimentum facilisis
          risus, vel accumsan arcu blandit sit amet. Nulla facilisi. Nullam
          placerat scelerisque tellus, ac rhoncus leo efficitur vel. Etiam
          mattis, felis in iaculis dapibus, dui augue varius felis, ac
          sollicitudin justo neque at justo. Pellentesque elementum lorem et
          elit ornare, eu tincidunt ex volutpat. Integer dignissim felis sed
          metus molestie placerat. Etiam quam elit, malesuada vel fringilla nec,
          consectetur eget tortor. Praesent mattis augue in diam sodales, at
          cursus mi pretium. Fusce congue risus sem, ac luctus tellus vehicula
          at. Integer sodales vel nunc eu pharetra. Mauris nec ligula risus.
          Aliquam accumsan et elit accumsan venenatis. Cras molestie tristique
          ante ac vulputate. Sed a velit eu massa efficitur suscipit. Etiam
          vitae blandit elit. Maecenas id erat fringilla, finibus arcu ut,
          bibendum mi. Sed et purus efficitur, porttitor augue nec, venenatis
          turpis. Duis congue feugiat dictum. Aenean dignissim cursus dapibus.
          Morbi feugiat magna ut scelerisque tincidunt. Quisque dictum varius
          mollis. Vestibulum elementum pharetra velit, a mattis urna pulvinar
          sed. Sed at dignissim ex, ac rhoncus orci. Sed lacus justo, rhoncus eu
          iaculis commodo, sagittis ac quam. Duis et porta nibh, molestie
          vulputate tortor. Proin dapibus vulputate nunc, vitae aliquet elit
          semper ornare. In quis pulvinar libero. Sed id fermentum purus. In
          facilisis aliquet magna quis rhoncus. Proin nec erat consequat,
          tristique lorem quis, dignissim lectus. Sed vel risus dignissim,
          eleifend orci ut, tempor libero. Curabitur vulputate varius porta.
          Morbi pharetra, arcu vitae euismod feugiat, augue metus commodo nunc,
          a malesuada dolor est non tortor. Vivamus elementum dignissim libero
          sed condimentum. Praesent orci lorem, pharetra ac massa eget,
          elementum ullamcorper ante. Phasellus pulvinar volutpat nulla et
          rutrum. In ornare molestie nisl, vitae dictum velit eleifend nec. Sed
          ut sapien justo. Morbi gravida justo ut diam varius, id accumsan nisl
          gravida. Ut mattis augue dolor, nec dictum ante dapibus at.
          Pellentesque faucibus leo vitae purus venenatis fermentum. Morbi vel
          quam quis justo venenatis condimentum. Nulla facilisi. Aenean mattis
          metus ex, ut semper dui facilisis et. Vestibulum ac mauris erat.
          Vivamus porta suscipit arcu a cursus. Sed felis lectus, tincidunt ut
          tincidunt eget, rhoncus id dui. Donec at diam eros. Sed pulvinar sem
          purus, et laoreet lectus facilisis at. Integer ultricies, tortor
          lacinia auctor tincidunt, metus dui congue arcu, et vulputate mauris
          odio in arcu. Sed lobortis elementum ipsum, quis sodales risus cursus
          vitae. Aliquam et erat pretium, pellentesque magna vel, ullamcorper
          eros. Cras augue est, maximus ut mauris quis, lacinia mollis
          sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          dapibus arcu ut dui accumsan, ac vestibulum lectus eleifend. In eu
          orci vitae augue ultricies sodales. Duis blandit mauris et odio
          convallis, sit amet aliquet libero tincidunt. Vivamus posuere interdum
          arcu, sit amet pretium orci semper vitae. Pellentesque scelerisque
          egestas posuere. Proin arcu odio, cursus ac venenatis bibendum, cursus
          eget mauris. Quisque eu posuere risus. Vivamus in interdum diam.
          Aenean placerat finibus convallis. Suspendisse dignissim facilisis
          libero, vel porta lectus venenatis ut. Integer quis mattis nisi, id
          placerat nulla. Aliquam aliquet fermentum elit, in dictum odio viverra
          et. Donec rutrum sagittis dolor, ac gravida nisi aliquam eu. Praesent
          rutrum augue non venenatis mattis. Aliquam massa orci, fringilla ac
          euismod a, malesuada quis tortor. Phasellus a commodo nibh.
          Pellentesque vel pellentesque eros. Nam cursus iaculis felis, sed
          condimentum arcu tincidunt eu. In sodales metus nec congue sodales.
          Maecenas pulvinar ligula dolor, a varius nisl vehicula quis.
          Vestibulum tempus, velit non maximus dapibus, ipsum urna scelerisque
          lacus, sit amet rhoncus eros massa eu massa. Mauris quis nibh odio.
          Donec euismod tellus at fermentum aliquet. Vestibulum posuere leo id
          aliquam aliquam. Donec dapibus eleifend velit, id imperdiet neque
          varius vel. Ut non elementum nisi, eget molestie velit. Nunc
          pellentesque tempus erat quis faucibus. Mauris nec ex erat. Duis
          aliquam arcu eu hendrerit pretium. Aliquam luctus pretium urna. Proin
          non varius nulla. Aenean bibendum sit amet sem id vulputate. Etiam
          sodales euismod felis eget scelerisque. Nulla quis libero quis dolor
          faucibus sollicitudin. Suspendisse eu neque elementum, imperdiet ante
          nec, condimentum ex. Vestibulum varius tincidunt sapien vitae gravida.
          Etiam vitae urna libero. Integer feugiat, enim vitae aliquet
          ultricies, lectus sem volutpat sapien, ac pharetra turpis enim vitae
          neque. Pellentesque ultricies dolor nibh, eget feugiat nulla blandit
          vel. Nam viverra augue ut bibendum fermentum. Phasellus at ante tempor
          velit tempus vehicula a pharetra massa. Donec condimentum facilisis
          risus, vel accumsan arcu blandit sit amet. Nulla facilisi. Nullam
          placerat scelerisque tellus, ac rhoncus leo efficitur vel. Etiam
          mattis, felis in iaculis dapibus, dui augue varius felis, ac
          sollicitudin justo neque at justo. Pellentesque elementum lorem et
          elit ornare, eu tincidunt ex volutpat. Integer dignissim felis sed
          metus molestie placerat. Etiam quam elit, malesuada vel fringilla nec,
          consectetur eget tortor. Praesent mattis augue in diam sodales, at
          cursus mi pretium. Fusce congue risus sem, ac luctus tellus vehicula
          at. Integer sodales vel nunc eu pharetra. Mauris nec ligula risus.
          Aliquam accumsan et elit accumsan venenatis. Cras molestie tristique
          ante ac vulputate. Sed a velit eu massa efficitur suscipit. Etiam
          vitae blandit elit. Maecenas id erat fringilla, finibus arcu ut,
          bibendum mi. Sed et purus efficitur, porttitor augue nec, venenatis
          turpis. Duis congue feugiat dictum. Aenean dignissim cursus dapibus.
          Morbi feugiat magna ut scelerisque tincidunt. Quisque dictum varius
          mollis. Vestibulum elementum pharetra velit, a mattis urna pulvinar
          sed. Sed at dignissim ex, ac rhoncus orci. Sed lacus justo, rhoncus eu
          iaculis commodo, sagittis ac quam. Duis et porta nibh, molestie
          vulputate tortor. Proin dapibus vulputate nunc, vitae aliquet elit
          semper ornare. In quis pulvinar libero. Sed id fermentum purus. In
          facilisis aliquet magna quis rhoncus. Proin nec erat consequat,
          tristique lorem quis, dignissim lectus. Sed vel risus dignissim,
          eleifend orci ut, tempor libero. Curabitur vulputate varius porta.
          Morbi pharetra, arcu vitae euismod feugiat, augue metus commodo nunc,
          a malesuada dolor est non tortor. Vivamus elementum dignissim libero
          sed condimentum. Praesent orci lorem, pharetra ac massa eget,
          elementum ullamcorper ante. Phasellus pulvinar volutpat nulla et
          rutrum. In ornare molestie nisl, vitae dictum velit eleifend nec. Sed
          ut sapien justo. Morbi gravida justo ut diam varius, id accumsan nisl
          gravida. Ut mattis augue dolor, nec dictum ante dapibus at.
          Pellentesque faucibus leo vitae purus venenatis fermentum. Morbi vel
          quam quis justo venenatis condimentum. Nulla facilisi. Aenean mattis
          metus ex, ut semper dui facilisis et. Vestibulum ac mauris erat.
          Vivamus porta suscipit arcu a cursus. Sed felis lectus, tincidunt ut
          tincidunt eget, rhoncus id dui. Donec at diam eros. Sed pulvinar sem
          purus, et laoreet lectus facilisis at. Integer ultricies, tortor
          lacinia auctor tincidunt, metus dui congue arcu, et vulputate mauris
          odio in arcu. Sed lobortis elementum ipsum, quis sodales risus cursus
          vitae. Aliquam et erat pretium, pellentesque magna vel, ullamcorper
          eros. Cras augue est, maximus ut mauris quis, lacinia mollis
          sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          dapibus arcu ut dui accumsan, ac vestibulum lectus eleifend. In eu
          orci vitae augue ultricies sodales. Duis blandit mauris et odio
          convallis, sit amet aliquet libero tincidunt. Vivamus posuere interdum
          arcu, sit amet pretium orci semper vitae. Pellentesque scelerisque
          egestas posuere. Proin arcu odio, cursus ac venenatis bibendum, cursus
          eget mauris. Quisque eu posuere risus. Vivamus in interdum diam.
          Aenean placerat finibus convallis. Suspendisse dignissim facilisis
          libero, vel porta lectus venenatis ut. Integer quis mattis nisi, id
          placerat nulla. Aliquam aliquet fermentum elit, in dictum odio viverra
          et. Donec rutrum sagittis dolor, ac gravida nisi aliquam eu. Praesent
          rutrum augue non venenatis mattis. Aliquam massa orci, fringilla ac
          euismod a, malesuada quis tortor. Phasellus a commodo nibh.
          Pellentesque vel pellentesque eros. Nam cursus iaculis felis, sed
          condimentum arcu tincidunt eu. In sodales metus nec congue sodales.
          Maecenas pulvinar ligula dolor, a varius nisl vehicula quis.
          Vestibulum tempus, velit non maximus dapibus, ipsum urna scelerisque
          lacus, sit amet rhoncus eros massa eu massa. Mauris quis nibh odio.
          Donec euismod tellus at fermentum aliquet. Vestibulum posuere leo id
          aliquam aliquam. Donec dapibus eleifend velit, id imperdiet neque
          varius vel. Ut non elementum nisi, eget molestie velit. Nunc
          pellentesque tempus erat quis faucibus. Mauris nec ex erat. Duis
          aliquam arcu eu hendrerit pretium. Aliquam luctus pretium urna. Proin
          non varius nulla. Aenean bibendum sit amet sem id vulputate. Etiam
          sodales euismod felis eget scelerisque. Nulla quis libero quis dolor
          faucibus sollicitudin. Suspendisse eu neque elementum, imperdiet ante
          nec, condimentum ex. Vestibulum varius tincidunt sapien vitae gravida.
          Etiam vitae urna libero. Integer feugiat, enim vitae aliquet
          ultricies, lectus sem volutpat sapien, ac pharetra turpis enim vitae
          neque. Pellentesque ultricies dolor nibh, eget feugiat nulla blandit
          vel. Nam viverra augue ut bibendum fermentum. Phasellus at ante tempor
          velit tempus vehicula a pharetra massa. Donec condimentum facilisis
          risus, vel accumsan arcu blandit sit amet. Nulla facilisi. Nullam
          placerat scelerisque tellus, ac rhoncus leo efficitur vel. Etiam
          mattis, felis in iaculis dapibus, dui augue varius felis, ac
          sollicitudin justo neque at justo. Pellentesque elementum lorem et
          elit ornare, eu tincidunt ex volutpat. Integer dignissim felis sed
          metus molestie placerat. Etiam quam elit, malesuada vel fringilla nec,
          consectetur eget tortor. Praesent mattis augue in diam sodales, at
          cursus mi pretium. Fusce congue risus sem, ac luctus tellus vehicula
          at. Integer sodales vel nunc eu pharetra. Mauris nec ligula risus.
          Aliquam accumsan et elit accumsan venenatis. Cras molestie tristique
          ante ac vulputate. Sed a velit eu massa efficitur suscipit. Etiam
          vitae blandit elit. Maecenas id erat fringilla, finibus arcu ut,
          bibendum mi. Sed et purus efficitur, porttitor augue nec, venenatis
          turpis. Duis congue feugiat dictum. Aenean dignissim cursus dapibus.
          Morbi feugiat magna ut scelerisque tincidunt. Quisque dictum varius
          mollis. Vestibulum elementum pharetra velit, a mattis urna pulvinar
          sed. Sed at dignissim ex, ac rhoncus orci. Sed lacus justo, rhoncus eu
          iaculis commodo, sagittis ac quam. Duis et porta nibh, molestie
          vulputate tortor. Proin dapibus vulputate nunc, vitae aliquet elit
          semper ornare. In quis pulvinar libero. Sed id fermentum purus. In
          facilisis aliquet magna quis rhoncus. Proin nec erat consequat,
          tristique lorem quis, dignissim lectus. Sed vel risus dignissim,
          eleifend orci ut, tempor libero. Curabitur vulputate varius porta.
          Morbi pharetra, arcu vitae euismod feugiat, augue metus commodo nunc,
          a malesuada dolor est non tortor. Vivamus elementum dignissim libero
          sed condimentum. Praesent orci lorem, pharetra ac massa eget,
          elementum ullamcorper ante. Phasellus pulvinar volutpat nulla et
          rutrum. In ornare molestie nisl, vitae dictum velit eleifend nec. Sed
          ut sapien justo. Morbi gravida justo ut diam varius, id accumsan nisl
          gravida. Ut mattis augue dolor, nec dictum ante dapibus at.
          Pellentesque faucibus leo vitae purus venenatis fermentum. Morbi vel
          quam quis justo venenatis condimentum. Nulla facilisi. Aenean mattis
          metus ex, ut semper dui facilisis et. Vestibulum ac mauris erat.
          Vivamus porta suscipit arcu a cursus. Sed felis lectus, tincidunt ut
          tincidunt eget, rhoncus id dui. Donec at diam eros. Sed pulvinar sem
          purus, et laoreet lectus facilisis at. Integer ultricies, tortor
          lacinia auctor tincidunt, metus dui congue arcu, et vulputate mauris
          odio in arcu. Sed lobortis elementum ipsum, quis sodales risus cursus
          vitae. Aliquam et erat pretium, pellentesque magna vel, ullamcorper
          eros. Cras augue est, maximus ut mauris quis, lacinia mollis sapien.
        </Content>
        {/* </Sider> */}
      </Layout>
    </Layout>
  );
}

export default SideNavBar;
