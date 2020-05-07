import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../actions';
import '../../stylesheets/login.css';
import { push } from 'connected-react-router';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      message: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
    
  onLogin(e) {
    e.preventDefault();
    if (this.state.user && this.state.pass) {
      this.setState({"message": null})
      this.props.auth(this.state.user, this.state.pass)
    } else {
      this.setState({ "message": "UsernameとPasswordを入力してください" });
    }
  }
  pathCreate() {
    return (
      <div className="createform">
        <button onClick={this.props.createPath.bind(this)}>新規作成</button>
      </div>
    )
  }
  
  formLogin() {
    return (
      <form onSubmit={this.onLogin.bind(this)}>
        <h1>Login</h1>
        <span style={{ color: "red" }}>{this.state.message}{this.props.login.status}</span>
        <input type="text" name="user" value={this.state.user} onChange={this.handleChange} placeholder="Username" />
        <input type="password" name="pass" value={this.state.pass} onChange={this.handleChange} placeholder="Password" />
        <button onClick={this.onLogin.bind(this)}>ログイン</button>
      </form>
    )
  }
  
  render() {
    const loginform = this.formLogin()
    const pathcreate = this.pathCreate()
    return(
     <div className="box">
        {pathcreate}
        {loginform}
     </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    auth: (user, pass) => dispatch(Actions.auth(user, pass)),
    createPath: () => dispatch(push('/create'))
  }
}
function mapStateToProps(state, ownProps) { 
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(login);
