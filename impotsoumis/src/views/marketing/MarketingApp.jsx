import './../../index.css';

import React, {Component} from 'react';
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';

class MarketingApp extends Component {

  render() {
    return <Container>
      <h2>9 SECONDES POUR CALCULER VOTRE IMPOSITION AVEC</h2>
      <h1>LA RÉVOLUTION FISCALE</h1>

      <Row>
        <h3>Mon revenu annuel - Net imposable</h3>
      </Row>
      <Row className="align-center"><input type="text"/></Row>
      <br/>

      <Row>
        <h3>Ma situation</h3>
      </Row>
      <Row className="align-center">
        <select value="salarie" onChange={(event) => {}}>
          <option value="salarie">Salarié</option>
          <option value="etudiant">Étudiant</option>
          <option value="retraite">Retraité</option>
          <option value="demandeur">Demandeur d'emploi</option>
        </select>
      </Row>

      <br/>

      <h4>500€ net pour mon pouvoir d'achat</h4>

      <p>Avec la réforme fiscale, mon imposition 2019</p>
      <Row>
        <AnnotatedMeter
          legend={false}
          size='large'
          type='bar'
          units='€'
          series={[
            {
                "label": "IR",
                "value": 42,
                "colorIndex": "neutral-1"
            },
            {
                "label": "IR",
                "value": 42,
                "colorIndex": "neutral-2"
            }
          ]}/>
      </Row>

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
}

export default MarketingApp;
