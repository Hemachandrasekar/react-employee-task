import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from './ActionTypes';
import axios from 'axios';

const BASE_URL = 'https://6228e4219fd6174ca832af76.mockapi.io/api/v1';

export const getUsers = (callBack) => (dispatch) => {
  axios.get(`${BASE_URL}/users`).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: GET_USERS,
        data: res.data,
      });
      callBack();
    }
  });
};

export const addUser = (values, callBack) => (dispatch) => {
  axios.post(`${BASE_URL}/users`, values).then((res) => {
    if (res.status === 201) {
      callBack();
      dispatch({
        type: ADD_USER,
        data: res.data,
      });
    }
  });
};
export const editUser = (values, callBack) => (dispatch) => {
  axios.put(`${BASE_URL}/users/${values.id}`, values).then((res) => {
    if (res.status === 200) {
      callBack();
      dispatch({
        type: EDIT_USER,
        data: res.data,
      });
    }
  });
};
export const deleteUser = (id, callBack) => (dispatch) => {
  axios.delete(`${BASE_URL}/users/${id}`).then((res) => {
    if (res.status === 200) {
      callBack();
      dispatch({
        type: DELETE_USER,
        data: id,
      });
    }
  });
};
