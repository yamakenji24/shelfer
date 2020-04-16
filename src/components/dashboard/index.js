import React, {Component} from 'react';

import Home from './home';
import Rental from './rental';
import Search from './search';
import About from './about';

import TabContent from './tabs/tab-content';
import TabList from './tabs/tab-list';
import TabListItem from './tabs/tab-list-item';

import * as Panels from '../../constants/componentPanel';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: Panels.HOME_PANEL
    }
  }

  changePanel(panelName) {
    this.setState({showPanel: panelName})
  }

  getPanel() {
    switch(this.state.showPanel) {
    case Panels.HOME_PANEL:
      return <Home />;
    case Panels.RENTAL_PANEL:
      return <Rental />;
    case Panels.SEARCH_PANEL:
      return <Search />;
    case Panels.ABOUT_PANEL:
      return <About />;
    default:
      return null;
    }
  }
  
  render() {
    const panel = this.getPanel();
    return (
      <div>
        <TabList>
          <TabListItem dist={Panels.HOME_PANEL} label="Home" changePanel={this.changePanel.bind(this)}/>
          <TabListItem dist={Panels.RENTAL_PANEL} label="Rental" changePanel={this.changePanel.bind(this)}/>
          <TabListItem dist={Panels.SEARCH_PANEL} label="Search" changePanel={this.changePanel.bind(this)}/>
          <TabListItem dist={Panels.ABOUT_PANEL} label="About" changePanel={this.changePanel.bind(this)}/>
        </TabList>
        <TabContent>
          {panel}
        </TabContent>
      </div>
    )
  }
}

export default DashBoard;
