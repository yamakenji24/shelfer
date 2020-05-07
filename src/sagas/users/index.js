import {fork} from 'redux-saga/effects';
import login from './login';
import createuser from './createuser';

export default function* users() {
  yield fork(login);
  yield fork(createuser);
}
