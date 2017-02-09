import './../../index.css';

import React, {Component} from 'react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';

class MarketingApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Container>
      <h2></h2>
      <h1>LA RÉVOLUTION FISCALE</h1>

      <Row><h3>Mon revenu annuel - Net imposable</h3></Row>
      <Row className="align-center"><input type="text"/></Row>
      <br/>

      <Row><h3>Ma situation</h3></Row>
      <Row className="align-center">
       <select value="salarie" onChange={ (event) => {  }}>
        <option value="salarie">Salarié</option>
        <option value="etudiant">Étudiant</option>
        <option value="retraite">Retraité</option>
        <option value="demandeur">Demandeur d'emploi</option>
      </select>
      </Row>

      <br/>

      <h2>500€ net pour mon pouvoir d'achat</h2>

      <p>Avec la réforme fiscale, mon imposition 2019</p>
      

      <p>Mon imposition actuelle</p>

      <h3>Pour comprendre la révolution fiscale</h3>

      <p>
        <span>Your current screen class is
        </span>
        <Visible xs>
          <strong>xs</strong>
        </Visible>
        <Visible sm>
          <strong>sm</strong>
        </Visible>
        <Visible md>
          <strong>md</strong>
        </Visible>
        <Visible lg>
          <strong>lg</strong>
        </Visible>
        <span>.</span>
      </p>
    </Container>;
  }

  componentDidMount() {
    this.setState({someKey: '10 secondes pour calculer votre imposition sur'});
  }
}

export default MarketingApp;
