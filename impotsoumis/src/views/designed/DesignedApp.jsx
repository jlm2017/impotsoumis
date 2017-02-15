import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
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

    const IR = currentSeries[0].value;
    const CSG = currentSeries[1].value;
    const NEW = newSeries[0].value;
    const purchase = ((IR + CSG) - NEW) * 12;
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

            {(isPositive) ?
              <div className="verdict">
                Vous gagnez
                <AnimatedNumber
                  format={(val) => ` ${numeral(Math.abs(val)).format('€0,0')}`}
                  value={purchase}
                />
                €<br />
                en <span className="sign">plus</span> par an.
              </div>
            :
              <div className="verdict">
                Vous faites partie des <AnimatedNumber value={9} />
                % des plus riches.
                <div className="negative">
                  Vous contribuez à la <strong>solidarité nationale de
                  <AnimatedNumber
                    format={(val) => ` ${numeral(Math.abs(val)).format('€0,0')}`}
                    value={purchase}
                  />
                  € en <span className="sign">plus</span> par an.
                  </strong>
                </div>
              </div>
            }

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
