import {fork} from 'redux-saga/effects';
import search from './search.js';
import toStorage from './toStorage.js';
import requestBook from './requestBook.js';

export default function* books() {
  yield fork(search);
  yield fork(toStorage);
  yield fork(requestBook);
}
