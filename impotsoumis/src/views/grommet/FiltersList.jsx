import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Box from 'grommet/components/Box';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Select from 'grommet/components/Select';

import SimuActions from './../../actions/SimuActions';
import Constants from './../../constants/Constants';

class FiltersList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Box>
            <Form>
                <FormField label='Net imposable'>
                    <TextInput
                        defaultValue={this.props.defaultNet}
                        onDOMChange={(event) => { SimuActions.netChanged(event.target.value);
                    }}/>
                </FormField>

                <FormField label='Situation professionnelle' error="Indisponible">

                    <Select
                        placeHolder='Search'
                        options={['étudiant', 'salarié', 'retraité', 'chômeur']}
                        value='salarié'
                        onChange={(event) => { }}/>
                </FormField>
            </Form>
        </Box>;
    }

    componentDidMount() {
        this.setState({someKey: 'otherValue'});
    }
}

export default FiltersList;
