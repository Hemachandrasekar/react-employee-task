import React, { useState, useEffect } from 'react';
import { Button, Layout, Modal, Row, Spin } from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import EmployeeCard from './EmployeeCard';
import EmployeeForm from './EmployeeForm';
import { getUsers } from '../redux/actions/UserAction';

const ButtonContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 30px;
  margin-top: 20px;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px;
`;

const { Content: AntdContent } = Layout;

const Content = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading,setIsLoading] =useState(false)
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    mobile: '',
    address: '',
  };

  const userLoaded = () => {
    setIsLoading(false)
  }
  useEffect(() => {
    setIsLoading(true)
    dispatch(getUsers(userLoaded));   
  }, [dispatch]);
  const reduxState = useSelector((state) => {  
    return state.user;
  });

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AntdContent>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <ButtonContainer>
            <Button type="primary" onClick={showModal}>
              + Add Employee
            </Button>
          </ButtonContainer>
        </div>

        <CardContainer>
          {isLoading ? <Spin size="large" style={{marginTop:'200px'}} /> :
            <Row gutter={[16, 16]}>
              {reduxState.users.length === 0
                ? 'No data found'
                : reduxState.users.map((item) => {
                  return <EmployeeCard item={item} />;
                })}
            </Row>
          }
        </CardContainer>
      </AntdContent>
      <Modal
        title="User Information"
        visible={isModalVisible}
        footer={null}
        maskClosable={false}
        onCancel={handleCancel}
        keyboard={false}
      >
        <EmployeeForm
          setIsModalVisible={setIsModalVisible}
          isEdit={false}
          item={initialValues}
        />
      </Modal>
    </>
  );
};

export default Content;
