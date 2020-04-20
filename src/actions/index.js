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
export function toStorage(items) {
  return {
    type: actionTypes.SENDSTORAGE,
    storage: items
  }
}
