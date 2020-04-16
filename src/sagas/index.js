import { push } from 'connected-react-router';
import {fork, take, put, call} from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../constants/actions';

function* fetchUserInfo(user, pass) {
  return yield axios.post("http://localhost:8080/login", {
    headers: {'Content-Type' : 'application/json'},
    username: user, password: pass
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
  if (error && error.response.status === 401) {
    yield put({type: actionTypes.UNAUTH, status:"login failed"})
  } else {
    yield put({type: actionTypes.SAVETOKEN, token: response.data.token})
    yield put(push('/dashboard'))
  }
}


function* login() {
  while(typeof x === 'undefined') {
    const {user, pass} = yield take(actionTypes.AUTH);
    yield fork(userInfo, user, pass);
  }
}

function* fetchBookInfo(Isbn) {
  console.log("calling fetchbook")
  return yield axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${Isbn}`,
  )
    .then(response => response.data)
    .then(res => res.items.map(item => ({
      id: item.id,
      title: item.volumeInfo.title,
      publishedDate: item.volumeInfo.publishedDate,
      imageLinks: item.volumeInfo.imageLinks.smallThumbnail,
    })))
}

function* bookInfo(Isbn) {
  let booklist = yield call(fetchBookInfo, Isbn)
  yield put({type: actionTypes.RECEIVEBOOK, items: booklist})
}

function* searchBook() {
  while(typeof x === 'undefined') {
    const {Isbn} = yield take(actionTypes.SEARCHBOOK)
    yield fork(bookInfo, Isbn)
  }
}

function* apiFlow() {
  yield fork(login);
  yield fork(searchBook);
}

export default function* rootSaga() {
  yield fork(apiFlow);
}
