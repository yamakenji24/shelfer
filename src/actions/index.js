import * as actionTypes from '../constants/actions';

export function createUser(newuser, newpass) {
  return {
    type: actionTypes.CREATEUSER,
    newuser: newuser,
    newpass: newpass
  }
}

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
export function toSagaStorage(items) {
  return {
    type: actionTypes.SENDSTORAGE,
    storage: items,
  }
}
export function requestAllBookdata() {
  return {
    type: actionTypes.REQUESTALLBOOKDATA,
  }
}
