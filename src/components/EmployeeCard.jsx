import React, { useState } from 'react';
import { Modal, Card, Col, Typography, message } from 'antd';
import {
  EditOutlined,
  DeleteFilled,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import EmployeeForm from './EmployeeForm';

import { deleteUser } from '../redux/actions/UserAction';



const { Text} = Typography;
const EmployeeCard = ({ addEmployee, item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { confirm } = Modal;
  const dispatch = useDispatch();
  const deleteSuccess = () => {
    message.warning('User Deleted ');
  };
  const handleDelete = (id) => {
    confirm({
      title: 'Are you sure delete this employee?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      centered: true,
      onOk() {
      
        dispatch(deleteUser(id,deleteSuccess));
      },
      onCancel() {
       
      },
    });
  };

  const handleEdit = (id) => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Col span={6} xs={24} sm={8} md={6}>
        <Card
          key={item.id}
          title={item.name}
          bordered={false}
          style={{
            width: '100%',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          }}
          actions={[
            <EditOutlined key="edit" onClick={() => handleEdit(item)} />,
            <DeleteFilled
              key="delete"
              style={{ color: 'red' }}
              onClick={() => handleDelete(item.id)}
            />,
          ]}
        >
          <Text>
            <strong>Email :</strong> {item.email}
          </Text>
          <br />
          <Text>
            <strong>Mobile :</strong> {item.mobile}
          </Text>
          <br />
          <Text>
            <strong>Address :</strong>  {item.address}
          </Text>
        </Card>
      </Col>
      <Modal
        title="User Information"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
        keyboard={false}
      >
        <EmployeeForm
          setIsModalVisible={setIsModalVisible}
          item={item}
          isEdit={true}
        />
      </Modal>
    </>
  );
};

export default EmployeeCard;
