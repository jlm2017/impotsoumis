import React, {Component} from 'react';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import SideMenu from './SideMenu.jsx'
import MainContent from './MainContent.jsx'

import SimuStore from './../stores/SimuStore';
import SimuActions from './../actions/SimuActions';

var _token;

class AppView extends Component {
  constructor() {
    super();
    this.state = SimuStore.getState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    _token = SimuStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    _token.remove();
  }

  render() {
    return <App centered={false}>
      <Split flex='right' showOnResponsive='both'>
        <SideMenu defaultNet={this.state.defaultNet}/>
        <MainContent net={this.state.net} newSeries={this.state.newSeries} currentSeries={this.state.currentSeries}/>
      </Split>
    </App>;
  }

  _onChange() {
    this.setState(SimuStore.getState());
  }
}

export default AppView;
