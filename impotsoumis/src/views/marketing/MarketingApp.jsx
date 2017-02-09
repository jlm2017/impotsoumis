import React, {Component} from 'react';

class MarketingApp extends Component {
  constructor() {
    super();
    this.state = {
      someKey: 'Marketing App'
    };
  }

  render() {
    return <div className="container">
      <h1>{this.state.someKey}</h1>
    </div>;
  }

  componentDidMount() {
    this.setState({someKey: 'Heading'});
  }
}

export default MarketingApp;
