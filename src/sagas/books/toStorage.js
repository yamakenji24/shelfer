import {fork, call, take} from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../constants/actions';

function* fetchStorageInfo(data, token) {
  return yield axios.post("http://localhost:8080/storage/save", data, {
    headers : {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

function* storageInfo(storage, token) {
  const data = {storage: storage}
  yield call(fetchStorageInfo, data, token);
}

export default function* toStorage() {
  while(typeof x === 'undefined') {
    const {storage, token} = yield take(actionTypes.SENDSTORAGE);
    yield fork(storageInfo, storage, token);
  }
}
