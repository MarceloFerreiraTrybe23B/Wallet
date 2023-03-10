import { LOGIN } from '../actions';

const initialState = {
  email: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return action.value;
  default:
    return state;
  }
}

export default userReducer;
