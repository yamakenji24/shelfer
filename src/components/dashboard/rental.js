import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import * as Actions from '../../actions';

class Rental extends Component {
  componentDidMount() {
    // 初期時にとってきて更新ごとに追加するか、毎回全部取ってくるか、検討中
    // とりあえず、全部とってくる
    //this.props.requestAllBookdata(this.props.login.token)
    this.props.requestAllBookdata("kenji")
  }
  
  render() {
    return (
      <h2>Showing Rental page</h2>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    requestAllBookdata: (token) => dispatch(Actions.requestAllBookdata(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rental);
