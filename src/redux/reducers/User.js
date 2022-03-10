import {ADD_USER,DELETE_USER,EDIT_USER,GET_USERS} from '../actions/ActionTypes'

const initialState = {
  users: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, { ...action.data }],
      };
    case DELETE_USER:
      const deletedUser = state.users.filter((item) => item.id !== action.data);
      return {
        users: [...deletedUser],
      };

    case EDIT_USER:

      const UpdatedUser = state.users.map((user) => {
        if (user.id === action.data.id) {
          return {
            id: action.data.id,
            name: action.data.name,
            email: action.data.email,
            mobile: action.data.mobile,
            address: action.data.address,
          };
        } else {
          return user;
        }
      });    
      return { users: [...UpdatedUser] };
    
    case GET_USERS:
      return {
        users:[...action.data]
      }
    

    default:
      return state;
  }
};
