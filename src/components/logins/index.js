import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Actions from '../../actions';
import '../../stylesheets/login.css';


class login extends Component {
  constructor(props) {
    super(props);
    this.state = {"message": null};
  }
  
  onLogin(e) {
    e.preventDefault();
    let user = this.refs.Username.value
    let pass = this.refs.Password.value
    if (user && pass) {
      this.setState({"message": null});
      this.props.auth(user, pass)
    } else {
      this.setState({ "message": "UsernameとPasswordを入力してください" });
    }
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <form className="box" onSubmit={this.onLogin.bind(this)}>
          <h1>Login</h1>
          <span style={{ color: "red" }}>{this.state.message}</span>
          <input type="text" ref="Username" placeholder="Username" />
          <input type="password" ref="Password" placeholder="Password" />
          <button onClick={this.onLogin.bind(this)}>ログイン</button>
        </form>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    auth: (user, pass) => dispatch(Actions.auth(user, pass))
  }
}
function mapStateToProps(state, ownProps) { 
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(login);
