import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../redux/actions/ActionTypes';

const { Title } = Typography;

const { Header: AntdHeader } = Layout;

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: LOGOUT,
    });
    localStorage.removeItem('isLoggedIn');
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
    </Menu>
  );
  return (
    <AntdHeader
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Title style={{ color: '#fff', fontSize: '24px' }}>
        Employee Dashboard
      </Title>
      <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
        <div style={{ cursor: 'pointer' }}>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </Dropdown>
    </AntdHeader>
  );
};

export default Header;
