import React, {Component} from 'react';
import '../../../stylesheets/navbar.css';

export default class TabList extends Component {
  render() {
    return (
      <nav>
        <ul role="tablist">
          {this.props.children}
        </ul>
      </nav>
    )
  }
}
