import {fork, take, put, call} from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../../constants/actions';


function* fetchCreateUser(newuser, newpass) {
  return yield axios.post("http://localhost:8080/createuser", {
    headers: {'Content-Type' : 'application/json'},
    username: newuser, password: newpass
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

function* createInfo(newuser, newpass) {
  yield call(fetchCreateUser, newuser, newpass)
}

export default function* createuser() {
  while(typeof x === 'undefined') {
    const {newuser, newpass} = yield take(actionTypes.CREATEUSER);
    yield fork(createInfo, newuser, newpass);
  }
}
