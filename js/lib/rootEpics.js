import { combineEpics } from 'redux-observable';
import { userLogin } from '../modules/auth/authEpics';

export default combineEpics(
  userLogin,
);
