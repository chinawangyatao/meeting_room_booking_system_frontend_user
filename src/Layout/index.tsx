import React, { memo } from 'react';
import

const Layout = memo(() => {
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
