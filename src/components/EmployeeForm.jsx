import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { ADD_USER, EDIT_USER } from '../redux/actions/ActionTypes';
import { addUser, editUser } from '../redux/actions/UserAction';
import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  PicCenterOutlined,
  UserOutlined,
} from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const EmployeeForm = ({ setIsModalVisible, item, isEdit }) => {
  const { name = '', email = '', mobile = '', address = '', id = '' } = item;

  const dispatch = useDispatch();

  const addSucess = () => {
    message.success('User Added Successfully');
  };
  const editSucess = () => {
    message.success('User Edited Successfully');
  };

  const onFinish = (values) => {
    
    if (!isEdit) {
      dispatch(addUser(values, addSucess));
    } else {
      dispatch(editUser(values, editSucess));
    }
    setIsModalVisible(false);
  };
  return (
    <div>
      <Form
        {...layout}
        name="employee-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={{ id, name, email, mobile, address }}
      >
        {isEdit && (
          <Form.Item name="id" className="form-group">
            <Input
              disabled
              prefix={<PicCenterOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
        )}
        <Form.Item
          name="name"
          className="form-group"
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
          name="email"
          className="form-group"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="mobile"
          className="form-group"
          rules={[
            {
              required: true,
              message: 'Please input your Mobile!',
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Mobile"
          />
        </Form.Item>
        <Form.Item
          name="address"
          className="form-group"
          rules={[
            {
              required: true,
              message: 'Please input your Address!',
            },
          ]}
        >
          <Input.TextArea
            prefix={<HomeOutlined className="site-form-item-icon" />}
            placeholder="Address"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            {isEdit ? 'Update' : 'Submit'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmployeeForm;
