import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {hasToken: true}
  }
  
  render() {
    return (
      <Route render={() => {
        if (!this.state.hasToken) {
        //if(!this.props.login || !this.props.login.token ) {
          return <Redirect to={{pathname: '/', state: {from: this.props.location}}} />
        }
        return <Route path={this.props.path} component={this.props.component}/>
      }}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

export default connect(mapStateToProps)(Auth);
