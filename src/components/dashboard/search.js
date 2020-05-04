import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Actions from '../../actions';
import '../../stylesheets/search.css';
import icon from '../../imgs/noPicture.jpeg';
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
      book_id : e.currentTarget.getAttribute('data-id'),
      title: e.currentTarget.getAttribute('data-title'),
      authors: e.currentTarget.getAttribute('data-authors'),
      descrip: e.currentTarget.getAttribute('data-descri'),
      pbDate: e.currentTarget.getAttribute('data-pbdate'),
      infoLink: e.currentTarget.getAttribute('data-infolink'),
      imageLink: e.currentTarget.getAttribute('data-imagelink'),
    }
    storage.push(newStorage)
    this.setState({storage})
  }
  showBooks() {
    if (this.props.book.length === 0) {
      return null
    }
    return _.map(this.props.book.searcheditems, (value, key, object)=> (
      <div className="books" key={key}>
        <img
          alt = {value.title}
          src = {value.imageLinks ? value.imageLinks : icon} 
        />
        <p>{value.title}</p>
        <button
          onClick={this.saveStorage}
          data-id={value.id}
          data-title={value.title}
          data-authors={value.authors}
          data-descri={value.description}
          data-pbdate={value.publishedDate}
          data-infolink={value.infoLink}
          data-imagelink={value.imageLinks}
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
        <h2>検索フォーム</h2>
        <div className="search-box">
          <input className="search-txt" type="text" ref="bookisbn" />
          <button className="search-btn" onClick={this.onSearch}>
            <FontAwesomeIcon icon='search' size='lg' />
          </button>
        </div>
        <ShowStorage storage={this.state.storage} len={this.state.storage.length}/>
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
