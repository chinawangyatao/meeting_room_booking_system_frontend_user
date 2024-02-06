import React, { memo, useState } from 'react';
import { Card, Col, Row } from 'antd';
import Login from './Login';
import { submitValue } from './LoginRegister';
import styled from 'styled-components';
import Register from './Register';
import { CSSTransition } from 'react-transition-group';

const Index = memo(() => {
  const [isRegister, setIsRegister] = useState(true);
  const [flag, setFlag] = useState(false);
  const submit = (val?: submitValue) => {
    console.log(val);
  };
  const handleRegister = ($e: Event) => {
    setFlag(!flag);
    setIsRegister(!isRegister);
  };
  return (
    <LoginWrapper>
      <Row justify={'center'} align={'middle'}>
        <Col lg={{ span: 8 }} md={{ span: 14 }} sm={{ span: 20 }} xs={{ span: 24 }}>
          <CSSTransition appear={true} in={flag} timeout={1000}>
            <Card bordered title={'会议室预订系统'}>
              {isRegister ? (
                <Login submit={submit} handleRegister={handleRegister} />
              ) : (
                <Register submit={submit} handleRegister={handleRegister} />
              )}
            </Card>
          </CSSTransition>
        </Col>
      </Row>
    </LoginWrapper>
  );
});

export default Index;

const LoginWrapper = styled.div`
  .ant-row-middle{
    height: 100vh;
  }
  .appear{
    transform: translateX(-100%);
    opacity: 0;
  }
  
  .appear-active{
    transform: translateX(0);
    opacity: 1;

    transition: all 1s ease;
  }

  .enter {
    transform: translateX(-100%);
    opacity: 0;
  }

  .enter-active {
    transform: translateX(0);
    opacity: 1;

    transition: all 1s ease;
  }

  .enter-done {
    //border: 5px solid #000;
  }

  .exit {
    transform: translateX(100%);
    opacity: 0;
  }

  .exit-active {
    transform: translateX(0%);
    opacity: 1;

    transition: all 1s ease;
  }

  .exit-done {
    
  }

`;
