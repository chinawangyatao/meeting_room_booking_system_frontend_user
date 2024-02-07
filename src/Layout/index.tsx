import React, { memo } from 'react';
import { Layout } from 'antd';

const { Sider, Footer, Content, Header } = Layout;

const Index = memo(() => {
  return (
    <>
      <Layout>
        <Sider width="25%">Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
});

export default Layout;
