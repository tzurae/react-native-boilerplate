import { handleActions } from 'redux-actions';
const initialState = {
  accessToken: '',
}

export default handleActions({
  INIT: (state, action) => ({
    ...state,
  })
}, initialState);
