import React, {Component} from 'react';

import SimuStore from './stores/SimuStore';
import Constants from './constants/Constants';

import GrommetApp from './views/grommet/GrommetApp.jsx';
import MarketingApp from './views/marketing/MarketingApp.jsx';
import DesignedApp from './views/designed/DesignedApp.jsx';

import './main.css';

var _token;

class App extends Component {
  constructor() {
    super();
    this.state = SimuStore.getState();
    this._onChange = this
      ._onChange
      .bind(this);
  }

  componentDidMount() {
    _token = SimuStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    _token.remove();
  }

  _renderTheme(theme) {
    switch (theme) {
      case Constants.Theme.GROMMET:
        return (<GrommetApp
          defaultNet={this.state.defaultNet}
          net={this.state.net}
          newSeries={this.state.newSeries}
          currentSeries={this.state.currentSeries}/>);

      case Constants.Theme.MARKETING:
        return (<MarketingApp
          net={this.state.net}
          currentSeries={this.state.currentSeries}
          isMarried={this.state.isMarried}
          numberOfChildren={this.state.numberOfChildren}/>);

      case Constants.Theme.DESIGNED:
        return (<DesignedApp {...this.state}/>);

      default:
        return (
          <h1>Default</h1>
        );
    }
  }

  render() {
    return this._renderTheme(this.state.theme)
  }

  _onChange() {
    this.setState(SimuStore.getState());
  }
}

export default App;
