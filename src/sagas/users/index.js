import {fork} from 'redux-saga/effects';
import login from './login';

export default function* users() {
  yield fork(login);
}
