import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actions';
import { connectRouter } from 'connected-react-router'

function login(state='', action) {
  switch(action.type) {
  case actionTypes.UNAUTH:
    return {
      status: action.status,
      token: action.token
    }
  case actionTypes.SAVETOKEN:
    return {
      status: null,
      token: action.token
    }
  default: return {
    status: null,
    token: null
  };
  }
}

function book(state=[], action) {
  switch(action.type) {
  case actionTypes.RECEIVEBOOK:
    return {
      items: action.items,
    }
  case actionTypes.SAVESTORAGE:
    return {
      storage: action.storage,
    }
  default: return state;
  }
}

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  login,
  book
})

export default rootReducer;
