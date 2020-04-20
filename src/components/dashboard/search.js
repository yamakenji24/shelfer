import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as Actions from '../../actions';
import '../../stylesheets/search.css';

import ShowDetail from './showDetail';
import ShowStorage from './showStorage';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.saveStorage = this.saveStorage.bind(this);
  }
  onSearch(e) {
    e.preventDefault();
    let bookIsbn = this.refs.bookisbn.value
    this.props.searchBook(bookIsbn)
  }
  saveStorage(e) {
    e.preventDefault();
    const {storage} = this.state
    const newStorage = {
      id : e.currentTarget.getAttribute('data-id'),
      title: e.currentTarget.getAttribute('data-title')
    }
    storage.push(newStorage)
    this.setState({storage})
  }
  showBooks() {
    if (this.props.book.length === 0) {
      return null
    }
    return _.map(this.props.book.items, (value, key, object)=> (
      <div className="books" key={key}>
        <img
          alt = {value.title}
          src = {value.imageLinks === undefined ? null : value.imageLinks} 
        />
        <p>{value.title}</p>
        <button
          onClick={this.saveStorage}
          data-id={value.id}
          data-title={value.title}
        >
          登録
        </button>
        
        <ShowDetail
          title={value.title}
          authors={value.authors}
          descriptions={value.description}
          publishedDate={value.publishedDate}
          infoLink={value.infoLink}
          imageLinks={value.imageLinks}
        />
      </div>
    ))
  }
  
  render() {
    const showbooks = this.showBooks();
    return (
      <div className="search-wrapper">
        <form>
          <h2>検索フォーム</h2>
          <input type="text" ref="bookisbn" />
          <button onClick={this.onSearch}>検索</button>
        </form>
        <ShowStorage storage={this.state.storage}/>
        <div className="showBooks">{showbooks}</div>
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
