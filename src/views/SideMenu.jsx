import React, {Component} from 'react';

import Sidebar from 'grommet/components/Sidebar';

import LogoHeader from '../filters/LogoHeader.jsx'
import FiltersList from '../filters/FiltersList.jsx'

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Sidebar colorIndex='light-2'>
                <LogoHeader/>
                <FiltersList defaultNet={this.props.defaultNet}/>
            </Sidebar>
        );
    }

    componentDidMount() {
        this.setState({someKey: 'otherValue'});
    }
}

export default SideMenu;
