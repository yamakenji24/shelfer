import {take, put} from 'redux-saga/effects';
import * as actionTypes from '../../constants/actions';

export default function* toStorage() {
  while(typeof x === 'undefined') {
    const {storage} = yield take(actionTypes.SENDSTORAGE);
    yield put({type: actionTypes.SAVESTORAGE, storage: storage})
  }
}
