import React, {Component} from 'react';

import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Title from 'grommet/components/Title';

class LogoHeader extends Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <Header pad='medium' justify='between'>
      <Box direction="column">
        <Image src='./logo-orange-bleu.png' size='small'/>
        <Title>
          Simulateur d'impôts
        </Title>
      </Box>

    </Header>;
  }

  componentDidMount() {
    this.setState({someKey: 'otherValue'});
  }
}

export default LogoHeader;
