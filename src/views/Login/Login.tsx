import React, { memo } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { LoginProps } from './LoginRegister';

const Login = memo((props: LoginProps) => {
  const { submit, handleRegister } = props;

  return (
    <>
      <Form onFinish={val => submit!(val)}>
        <Form.Item labelCol={{ span: 4 }} labelAlign={'left'} label={'用户名'} name={'username'}>
          <Input />
        </Form.Item>
        <Form.Item labelCol={{ span: 4 }} labelAlign={'left'} label={'密码'} name={'password'}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Row justify={'space-between'}>
            <Col>
              <Button type={'link'} onClick={handleRegister}>
                创建账号
              </Button>
            </Col>
            <Col>
              <Button type={'link'}>忘记密码?</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row justify={'center'} gutter={20}>
            <Col span={12}>
              <Button block type={'primary'} htmlType={'submit'}>
                登陆
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
});

export default Login;
