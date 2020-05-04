import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actions';
import { connectRouter } from 'connected-react-router'

function login(state='', action) {
  switch(action.type) {
  case actionTypes.UNAUTH:
    return {
      status: action.status,
    }
  default:
    return state
  }
}

function book(state=[], action){
  switch(action.type) {
  case actionTypes.RECEIVEBOOK:
    return {
      searcheditems: action.items,
      storeditems: state.storeditems
    }
  case actionTypes.GETBOOKSFROMDB:
    return {
      storeditems: action.books,
      searcheditems: state.searcheditems
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
