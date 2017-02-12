import './grommet.min.css';

import React, {Component} from 'react';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import SideMenu from './SideMenu.jsx'
import MainContent from './MainContent.jsx'

class GrommetApp extends Component {

  render() {
    return <App centered={false}>
      <Split flex='right' showOnResponsive='both'>
        <SideMenu defaultNet={this.props.defaultNet}/>
        <MainContent net={this.props.net} newSeries={this.props.newSeries} currentSeries={this.props.currentSeries}/>
      </Split>
    </App>;
  }
}

export default GrommetApp;
