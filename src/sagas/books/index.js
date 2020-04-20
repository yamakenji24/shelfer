import {fork} from 'redux-saga/effects';
import search from './search.js';
import toStorage from './toStorage.js';

export default function* books() {
  yield fork(search);
  yield fork(toStorage);
}
