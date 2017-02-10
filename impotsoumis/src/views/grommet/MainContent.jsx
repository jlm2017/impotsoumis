import React, {Component} from 'react';

import Box from 'grommet/components/Box';
import Titre from './Titre.jsx';
import ChartCard from './ChartCard.jsx';

class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /*<Box appCentered="true" justify="left" align="left" full={true} pad="large">*/
    return <Box full={true} pad="large">
      <Titre/>
      <p>{this.props.net}</p>
      <br/>
      <Box>
        <ChartCard series={this.props.currentSeries}/>
      </Box>
    </Box>;
  }
}

export default MainContent;
