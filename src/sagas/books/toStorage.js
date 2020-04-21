import {fork, call, take, put} from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../constants/actions';

function* fetchStorageInfo(storage, token) {
  return yield axios.post("http://localhost:8080/storage", {
    headers : {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    storage: storage,
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

function* storageInfo(storage, token) {
  yield call(fetchStorageInfo, storage, token);
}

export default function* toStorage() {
  while(typeof x === 'undefined') {
    const {storage, token} = yield take(actionTypes.SENDSTORAGE);
    yield fork(storageInfo, storage, token);
  }
}
