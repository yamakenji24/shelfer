import {push} from 'connected-react-router';
import {fork, take, put, call} from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../../constants/actions';

function* fetchUserInfo(user, pass) {
  return yield axios.post("http://localhost:8080/login", {
    headers: {'Content-Type' : 'application/json'},
    username: user, password: pass,
  })
    .then(response => {
      return {response}
    })
    .catch(error => {
      return {error}
    })
}

function* userInfo(user, pass) {
  const {response, error} = yield call(fetchUserInfo, user, pass);
  if(error && error.response.status === 401) {
    yield put({type: actionTypes.UNAUTH, status: "login failed"})
  } else {
    yield put({type: actionTypes.SAVETOKEN, token: response.data.token})
    yield put(push('/dashboard'))
  }
}

export default function* login() {
  while(typeof x === 'undefined') {
    const {user, pass} = yield take(actionTypes.AUTH);
    yield fork(userInfo, user, pass);
  }
}
