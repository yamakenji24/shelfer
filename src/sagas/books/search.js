import {fork, take, put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../constants/actions';

function* fetchBookInfo(Isbn) {
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

export default function* search() {
  while(typeof x === 'undefined') {
    const {Isbn} = yield take(actionTypes.SEARCHBOOK)
    yield fork(bookInfo, Isbn)
  }
}
