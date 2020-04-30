import * as actionTypes from '../constants/actions';

export function auth(user, pass) {
  return {
    type: actionTypes.AUTH,
    user: user,
    pass: pass
  }
}

export function searchBook(Isbn) {
  return {
    type: actionTypes.SEARCHBOOK,
    Isbn: Isbn
  }
}
export function toSagaStorage(items, token) {
  return {
    type: actionTypes.SENDSTORAGE,
    storage: items,
    token: token,
  }
}
export function requestAllBookdata(token) {
  return {
    type: actionTypes.REQUESTALLBOOKDATA,
    token: token
  }
}
