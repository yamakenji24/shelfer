import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasToken: true
    }
  }

  render() {
    console.log(this.props)
    return (
      <Route render={() => {
        if(!this.state.hasToken) {
          return <Redirect to={{pathname: '/', state: {from: this.props.location}}} />
        }
        return <Route path={this.props.path} component={this.props.component}/>
      }}
      />
    )
  }
}
function mapStateToProps(state, ownProps) {
  console.log("mapstate: ", state)
  return state
}


export default connect(mapStateToProps)(Auth);
