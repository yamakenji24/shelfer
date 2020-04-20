import {fork} from 'redux-saga/effects';
import users from './users';
import books from './books';

function* apiFlow() {
  yield fork(users);
  yield fork(books);
}

export default function* rootSaga() {
  yield fork(apiFlow);
}
