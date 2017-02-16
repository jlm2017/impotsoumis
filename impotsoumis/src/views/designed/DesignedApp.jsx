import React, { Component } from 'react';
import { Container, Row, Col, Visible } from 'react-grid-system';
import numeral from 'numeral';

import Filters from './Filters.jsx';
import AnimatedNumber from './AnimatedNumber.jsx';
import ResultCard from './ResultCard.jsx';
import './DesignedApp.css';

class DesignedApp extends Component {
  static childContextTypes = {
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number
  };

  getChildContext() {
    return {
      breakpoints: [768, 1040],
      containerWidths: [728, 1000],
      gutterWidth: 40
    };
  }

  render() {
    const { currentSeries, newSeries } = this.props;

    const IR = currentSeries.IR;
    const CSG = currentSeries.CSG;
    const NEW = newSeries.IR;
    const NEW_CSG = newSeries.CSG
    const purchase = (IR + CSG) - NEW;
    const isPositive = (purchase >= 0) ? true : false;

    return (
      <Container className="DesignedApp">
        <Row>
          <Col>
            <h2>
              <span>10 secondes</span> pour calculer votre imposition avec<br />
              <strong>la Révolution Fiscale</strong>
            </h2>

            <Filters {...this.props} />

            <div className="verdict">
              <Visible xs>Avec la <em>Révolution Fiscale</em></Visible>
              <strong>
                C'est {purchase} 
                <sup>/mois</sup> en
                <span className={"sign " + ((isPositive) ? "positive" : "negative")}>
                  {(isPositive) ? " plus " : " moins "}
                </span>
              </strong>
              sur mon pouvoir d'achat !<br/>
            </div>

            <Row>
              <Col sm={6}>
                <ResultCard
                  color="red"
                  left={{
                    legend: <span>Impôt<br /> sur le revenu<br /> (IR)</span>,
                    value: IR
                  }}
                  right={{
                    legend: <span>Contribution <br />sociale généralisée<br /> (CSG)</span>,
                    value: CSG
                  }}
                  title="Imposition actuelle"
                />
              </Col>
              <Col sm={6}>
                <ResultCard
                  left={{
                    legend: "Nouvel Impôt Citoyen",
                    value: NEW
                  }} 
                  right={{
                    legend: <span>Contribution <br />sociale généralisée<br /> (CSG)</span>,
                    value: NEW_CSG
                  }}
                  color="blue"
                  title="Avec la Révolution Fiscale"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default DesignedApp;
