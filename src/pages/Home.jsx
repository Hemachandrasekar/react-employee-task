import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { checkLocalStorage } from '../utils/utils';
import { LOGGED_IN } from '../redux/actions/ActionTypes';



const Home = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch()
  const reduxState = useSelector((state) => {
    return state
  })

  useEffect(() => {
    if (checkLocalStorage()) {
      dispatch({
        type: LOGGED_IN,
        
      })
    }
  },[dispatch])
  useEffect(() => {
    if (reduxState.auth.isLoggedIn === false){
     navigate('/login')
   }
  },[reduxState.auth,navigate])

  return (
    <Layout style={{height:'auto',minHeight:'100vh'}}>
      <Header/>
      <Content />
      <Footer/>
    </Layout>
  );
};

export default Home;
