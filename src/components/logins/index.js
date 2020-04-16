import React, {Component} from 'react';
import {connect} from 'react-redux';


import * as Actions from '../../actions';
import '../../stylesheets/login.css';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    }
  }
  
  onLogin(e) {
    e.preventDefault();
    let user = this.refs.Username.value
    let pass = this.refs.Password.value
    //const hash = btoa(`${user}:${pass}`)
    
    if (user && pass) {
      this.setState({"message": null})
      this.props.auth(user, pass)
    } else {
      this.setState({ "message": "UsernameとPasswordを入力してください" });
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("calling loginindex getderived: ", props, state)
    return null
  }
  formLogin() {
    return (
      <div>
        <form className="box" onSubmit={this.onLogin.bind(this)}>
          <h1>Login</h1>
          <span style={{ color: "red" }}>{this.state.message}{this.props.login.status}</span>
          <input type="text" ref="Username" placeholder="Username" />
          <input type="password" ref="Password" placeholder="Password" />
          <button onClick={this.onLogin.bind(this)}>ログイン</button>
        </form>
      </div>
    )
  }
  
  render() {
    const loginform = this.formLogin()
    return (
      <div>
        {loginform}
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
