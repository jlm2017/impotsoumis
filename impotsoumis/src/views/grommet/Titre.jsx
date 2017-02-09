import React, {Component} from 'react';

import Heading from 'grommet/components/Heading';

class Titre extends Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return <div>
            <Heading tag="h1" strong={true}>
                Avec la révolution fiscale, votre impôts va diminuer de 3000 €
            </Heading>
            <Heading strong={true} tag='h3'>C'est 15% d'économisé !
            </Heading>
        </div>;
    }

    componentDidMount() {
        this.setState({someKey: 'otherValue'});
    }
}

export default Titre;
