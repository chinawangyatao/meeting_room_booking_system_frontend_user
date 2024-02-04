import React, { memo, useState } from 'react';
import { Card, Col, Flex, Row } from 'antd';
import Login from './Login';
import { submitValue } from './LoginRegister';
import styled from 'styled-components';
import Register from './Register';

const Index = memo(() => {
  const [isRegister, setIsRegister] = useState(false);
  const submit = (val: submitValue) => {
    console.log(val);
  };
  return (
    <LoginWrapper>
      <Row justify={'center'} align={'middle'}>
        <Col span={8}>
          <Card bordered title={'会议室预订系统'}>
            {isRegister ? <Login submit={submit} /> : <Register submit={submit} />}
          </Card>
        </Col>
      </Row>
    </LoginWrapper>
  );
});

export default Index;

const LoginWrapper = styled.div`
  :where(.css-dev-only-do-not-override-1qzi11j).ant-row-middle{
    height: 100vh;
  }
  
`;
