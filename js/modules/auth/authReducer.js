import { handleActions } from 'redux-actions';
const initialState = {
  accessToken: '',
}

export default handleActions({
  INIT: (state, action) => ({
    ...state,
  }),
  USER_LOGIN_SUCCESS: (state, action) => ({
    ...state,
  })
}, initialState);
