import React, {Component} from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';

class ChartCard extends Component {

    render() {
        return <div>
            <Heading strong={true} tag='h2'>Imposition actuelle</Heading>
            <Box>
                <AnnotatedMeter
                    legend={true}
                    size='large'
                    type='bar'
                    units='€'
                    series={this.props.series}/>
            </Box>
        </div>
    }
}

export default ChartCard;
