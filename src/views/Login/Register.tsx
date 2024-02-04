import React, { memo } from 'react';
import { LoginProps } from './LoginRegister';
import { Button, Col, Form, Input, Row } from 'antd';

const Register = memo((props: LoginProps) => {
  const { submit } = props;
  return (
    <>
      <Form>
        <Form.Item name={'username'} labelCol={{ span: 4 }} labelAlign={'left'} label={'用户名'}>
          <Input />
        </Form.Item>
        <Form.Item name={'nickname'} labelCol={{ span: 4 }} labelAlign={'left'} label={'昵称'}>
          <Input />
        </Form.Item>
        <Form.Item name={'password'} labelCol={{ span: 4 }} labelAlign={'left'} label={'密码'}>
          <Input.Password />
        </Form.Item>
        <Form.Item name={'passwordConfirm'} labelCol={{ span: 4 }} labelAlign={'left'} label={'确认密码'}>
          <Input.Password />
        </Form.Item>
        <Form.Item name={'email'} labelCol={{ span: 4 }} labelAlign={'left'} label={'邮箱'}>
          <Input />
        </Form.Item>
        <Form.Item name={'captcha'} labelCol={{ span: 4 }} labelAlign={'left'} label={'验证码'}>
          <Row justify={'space-between'}>
            <Col>
              <Input />
            </Col>
            <Col>
              <Button type={'primary'}>获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row justify={'space-between'} gutter={20}>
            <Col span={12}>
              <Button block type={'primary'}>
                提交
              </Button>
            </Col>
            <Col span={12}>
              <Button block type={'dashed'} onClick={() => submit}>
                返回登录
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
});

export default Register;
