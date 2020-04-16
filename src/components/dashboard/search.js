import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as Actions from '../../actions';


class Search extends Component {

  onSearch(e) {
    e.preventDefault();
    let bookIsbn = this.refs.bookisbn.value
    console.log(typeof(bookIsbn))
    this.props.searchBook(bookIsbn)
  }

  showBooks() {
    if (this.props.book.length === 0) {
      return null
    }
    
    return _.map(this.props.book.items, (value, key, object)=> (
      <div key={key}>
        <img
          alt = {value.title}
          src = {value.imageLinks === undefined ? null : value.imageLinks} 
        />
        <p>{value.title}</p>
      </div>
    ))
  }
  
  render() {
    const showbooks = this.showBooks()
    return (
      <div>
        <form>
          <h2>検索フォーム</h2>
          <input type="text" ref="bookisbn" />
          <button onClick={this.onSearch.bind(this)}>検索</button>
        </form>
        {showbooks}
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    searchBook: (Isbn) => dispatch(Actions.searchBook(Isbn))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
