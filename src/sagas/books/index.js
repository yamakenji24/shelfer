import {fork} from 'redux-saga/effects';
import search from './search.js';

export default function* books() {
  yield fork(search);
}
