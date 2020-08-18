import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb } from 'antd';

// import { Link } from 'react-router-dom';

import routes from '@/routes';

const { Sider, Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const renderMenuItem = (menuItem) => {
  return (
    <Menu.Item key={menuItem.path} icon={menuItem.icon}>
      <span>{menuItem.name}</span>
    </Menu.Item>
  );
};

const renderSubMenu = (subMenu) => {
  return (
    <SubMenu key={subMenu.path} icon={subMenu.icon} title={subMenu.name}>
      {subMenu.routes.map((item) => {
        if (item.routes) return renderSubMenu(item);
        return renderMenuItem(item);
      })}
    </SubMenu>
  );
};

const BasicLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { children } = props;

  const onToggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const renderMenus = () => {
    const RoutesAssign = [...routes];
    const routeRender = RoutesAssign.map((routeItem) => {
      if (!routeItem.routes) return renderMenuItem(routeItem);
      return renderSubMenu(routeItem);
    });
    return routeRender;
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onToggleCollapse}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <div className="layout_logo">
            <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
            />
            {!collapsed && <h1>Web CMS</h1>}
          </div>
          {renderMenus()}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BasicLayout;
