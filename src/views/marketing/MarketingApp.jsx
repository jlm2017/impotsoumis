import React, {Component} from 'react';

class MarketingApp extends Component {
  constructor() {
    super();
    this.state = { someKey: 'Marketing App' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'Other Marketing App' });
  }
}

export default MarketingApp;
