import React, { memo } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { LoginProps } from './LoginRegister';
import { Link } from 'react-router-dom';

const Login = memo((props: LoginProps) => {
  const { submit } = props;
  return (
    <>
      <Form onFinish={val => submit(val)}>
        <Form.Item labelCol={{ span: 4 }} labelAlign={'left'} label={'用户名'} name={'username'}>
          <Input />
        </Form.Item>
        <Form.Item labelCol={{ span: 4 }} labelAlign={'left'} label={'密码'} name={'password'}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Row justify={'space-between'}>
            <Col>创建账号</Col>
            <Col>忘记密码</Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row justify={'center'} gutter={20}>
            <Col span={12}>
              <Button block type={'primary'} htmlType={'submit'}>
                提交
              </Button>
            </Col>
            <Col span={12}>
              <Button block type={'default'} htmlType={'reset'}>
                取消
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
});

export default Login;
