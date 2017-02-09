import React, {Component} from 'react';

import SimuStore from './../stores/SimuStore';
import Constants from './../constants/Constants';
import SimuActions from './../actions/SimuActions';

import GrommetApp from './grommet/GrommetApp.jsx'
import MarketingApp from './marketing/MarketingApp.jsx'

var _token;

class AppView extends Component {
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
        return (<MarketingApp/>);

      default:
        return (
          <h1>Default</h1>
        );
    }
  }

  render() {
    return <div>
      { this._renderTheme(this.state.theme) }
      <select value={this.state.theme} onChange={ (event) => { SimuActions.themeChanged(event.target.value) }}>
        <option value="grommet">Grommet</option>
        <option value="marketing">Marketing</option>
      </select>
    </div>
  }

  _onChange() {
    this.setState(SimuStore.getState());
  }
}

export default AppView;
