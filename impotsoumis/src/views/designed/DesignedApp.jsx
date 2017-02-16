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
    const { current, revolution, gain } = this.props.results;

    return (
      <Container className="DesignedApp">
        <Row>
          <Col>
            <h2>
              <span>10 secondes</span> pour calculer votre imposition avec<br />
              <strong>la Révolution Fiscale</strong>
            </h2>

            <Filters {...this.props} />


            <div className={"verdict" + ((gain < 0) ? " hide" : "")}>
              Vous gagnez
              <AnimatedNumber
                format={(val) => ` ${numeral(Math.abs(val)).format('€0,0')}`}
                value={gain}
              />
              €<br />
              en <span className="sign">plus</span> par an.
            </div>
            <div className={"verdict" + ((gain >= 0) ? " hide" : "")}>
              Vous faites partie des <AnimatedNumber value={9} />
              % des plus riches.
              <div className="negative">
                Vous contribuez à la <strong>solidarité nationale de
                <AnimatedNumber
                  format={(val) => ` ${numeral(Math.abs(val)).format('€0,0')}`}
                  value={gain}
                />
                € en <span className="sign">plus</span> par an.
                </strong>
              </div>
            </div>

            <Row>
              <Col sm={6}>
                <ResultCard
                  color="red"
                  left={{
                    legend: <span>Impôt<br /> sur le revenu<br /> (IR)</span>,
                    value: current.IR
                  }}
                  right={{
                    legend: <span>Contribution <br />sociale généralisée<br /> (CSG)</span>,
                    value: current.CSG
                  }}
                  title="Imposition actuelle"
                  total={current.total}
                />
              </Col>
              <Col sm={6}>
                <ResultCard
                  left={{
                    legend: <span>Nouvel impôt<br /> citoyen sur les<br /> revenus</span>,
                    value: revolution.IR
                  }}
                  right={{
                    legend: <span>CSG progressive</span>,
                    value: revolution.CSG
                  }}
                  color="blue"
                  title="Avec la Révolution Fiscale"
                  total={revolution.total}
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
