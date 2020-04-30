import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../actions';
import '../../stylesheets/login.css';

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
  
  formLogin() {
    return (
      <div>
        <form className="box" onSubmit={this.onLogin.bind(this)}>
          <h1>Login</h1>
          <span style={{ color: "red" }}>{this.state.message}{this.props.login.status}</span>
          <input type="text" name="user" value={this.state.user} onChange={this.handleChange} placeholder="Username" />
          <input type="password" name="pass" value={this.state.pass} onChange={this.handleChange} placeholder="Password" />
          <button onClick={this.onLogin.bind(this)}>ログイン</button>
        </form>
      </div>
    )
  }
  
  render() {
    const loginform = this.formLogin()
    return(
      <React.Fragment>
        {loginform}
      </React.Fragment>
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
