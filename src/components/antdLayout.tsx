"use client";
import React from "react";
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Content, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
};

const items: MenuProps['items'] = [
  "Leave Form Request",
  "Approval Request",
].map((menuName, index) => ({
  key: String(index + 1),
  label: menuName,
}));

interface AntdLayoutProps {
  children: React.ReactNode;
}

const AntdLayout: React.FC<AntdLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AntdLayout;
