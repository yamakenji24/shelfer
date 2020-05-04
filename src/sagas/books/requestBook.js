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
    .then(response => response.data.books)
    .catch(error => {
      console.log(error)
    })
}

function* requestInfo() {
  const token = localStorage.getItem('token')
  let dbBook = yield call(fetchBookInfo, token)  
  yield put({type: actionTypes.GETBOOKSFROMDB, books: dbBook})
}

export default function* requestBook() {
  while(typeof x === 'undefined') {
    yield take(actionTypes.REQUESTALLBOOKDATA)
    yield fork(requestInfo)
  }
}
