import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import * as Actions from '../../actions';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      newuser:'',
      newpass:'',
      againpass:'',
      message: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  createNewUser(e) {
    e.preventDefault();
    if(this.state.newuser && this.state.newpass && this.state.againpass) {
      if(this.state.newpass === this.state.againpass) {
        this.setState({"message": null})
        this.props.createUser(this.state.newuser, this.state.newpass)
      } else {
        this.setState({"message": "password同士があってないですよー"})
      }
    } else {
      this.setState({"message": "UsernameとPasswordを入力してください"});
    }
  }
  
  userForm() {
    return (
      <div>
        <h1>ユーザー新規作成</h1>
        <span style={{ color: "red" }}>{this.state.message}</span>
        <input type="text" name="newuser" value={this.state.newuser} onChange={this.handleChange} placeholder="New Username" />
        <input type="password" name="newpass" value={this.state.newpass} onChange={this.handleChange} placeholder="New Password" />
        <input type="password" name="againpass" value={this.state.againpass} onChange={this.handleChange} placeholder="Again password" />
        <button onClick={this.createNewUser.bind(this)}>新規作成</button>
      </div>
    )
  }
  
  render() {
    const newUserForm = this.userForm()
    return (
      <div className="box">
        <div className="createform">
          <button onClick={this.props.backPath}>ログインページに戻る</button>
        </div>
        {newUserForm}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (newuser, newpass) => dispatch(Actions.createUser(newuser, newpass)),
    backPath: () => dispatch(push('/'))
  }
}
function mapStateToProps(state, ownProps) {
  return state
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
