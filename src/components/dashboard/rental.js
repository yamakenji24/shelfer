import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import * as Actions from '../../actions';
import _ from 'lodash';
import Slider from 'react-slick';
import * as Setting from '../../constants/slider';

import '../../stylesheets/slick.css';
import '../../stylesheets/slick-theme.css';

class Rental extends Component {
  componentDidMount() {
    // 初期時にとってきて更新ごとに追加するか、毎回全部取ってくるか、検討中
    // とりあえず、全部とってくる
    this.props.requestAllBookdata()
  }
  showDBBook() {
    if(this.props.book.length === 0) {
      return null
    }
    return _.map(this.props.book.storeditems, (value, key, object) => (
      <div key={key}>
        <img
          alt={value.title}
          src={value.imageLink === undefined ? null : value.imageLink}
        />
      </div>
    ))
  }
  
  render() {
    const showDBBook = this.showDBBook();
                
    return (
      <div className="slideBooks">
        <h3>書籍一覧</h3>
        <p>その他の表示</p>
        <Slider {...Setting.slider}>
          {showDBBook}
        </Slider>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    requestAllBookdata: () => dispatch(Actions.requestAllBookdata())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rental);
