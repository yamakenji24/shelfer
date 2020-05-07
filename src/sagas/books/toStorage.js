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
      if (error.response.status === 401) {
        localStorage.removeItem('token')
      }
    })
}

function* storageInfo(storage) {
  const data = {storage: storage}
  const token = localStorage.getItem('token')
  yield call(fetchStorageInfo, data, token);
}

export default function* toStorage() {
  while(typeof x === 'undefined') {
    const {storage} = yield take(actionTypes.SENDSTORAGE);
    yield fork(storageInfo, storage);
  }
}
