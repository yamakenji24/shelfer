import React, {Component} from 'react';

export default class TabListItem extends Component {
  changePanel() {
    this.props.changePanel(this.props.dist)
  }
  render() {
    return (
      <li>
        <a onClick={this.changePanel.bind(this)} data-toggle="tab">{this.props.label}</a>
      </li>
    )
  }
}
