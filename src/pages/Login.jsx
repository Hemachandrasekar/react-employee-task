import React, { useEffect } from 'react';
import { Form, Input, Button, Avatar, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { LOGGED_IN } from '../redux/actions/ActionTypes';
import {
  UserOutlined,
  LockOutlined,
  AntDesignOutlined,
} from '@ant-design/icons';
import { checkLocalStorage } from '../utils/utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Login = () => {
  const navigate = useNavigate();
  const reduxState = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (checkLocalStorage()) {
      dispatch({
        type: LOGGED_IN,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (reduxState.auth.isLoggedIn === true) {
      navigate('/');
    }
  }, [reduxState.auth, navigate]);

  const onFinish = (values) => {
    if (values.username === 'admin' && values.password === 'admin') {
      dispatch({
        type: LOGGED_IN,
      });
      localStorage.setItem('isLoggedIn', true);
    } else {
      message.error('Invalid Credentials');
    }
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Container>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<AntDesignOutlined />}
      />

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Login;
