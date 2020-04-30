import {fork, call, take, put} from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../constants/actions';

function* fetchBookInfo(token) {
  console.log("called requestbook")
  return yield axios.get("http://localhost:8080/storage", {
    "Content-Type": "application/json",
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

function* requestInfo(token) {
  yield call(fetchBookInfo, token)
}

export default function* requestBook() {
  while(typeof x === 'undefined') {
    const {token} = yield take(actionTypes.REQUESTALLBOOKDATA)
    console.log(token)
    yield fork(requestInfo, token)
  }
}
