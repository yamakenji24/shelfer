import {fork, call, take, put} from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../constants/actions';

function* fetchBookInfo(token) {
  return yield axios.get("http://localhost:8080/storage", {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  })
    .then(response => {
      return {response}
    })
    .catch(error => {
      return {error}
    })
}

function* requestInfo() {
  const token = localStorage.getItem('token')
  let {response, error} = yield call(fetchBookInfo, token)
  if (error && error.response.status === 401) {
    localStorage.removeItem('token')
  } else {
    yield put({type: actionTypes.GETBOOKSFROMDB, books: response.data.books})
  }
}

export default function* requestBook() {
  while(typeof x === 'undefined') {
    yield take(actionTypes.REQUESTALLBOOKDATA)
    yield fork(requestInfo)
  }
}
