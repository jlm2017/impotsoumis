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
              <div className="negative">
              Vous faites partie des {this.props.percentile < 1 ? Number(Math.round(this.props.percentile+'e2')+'e-2') : this.props.percentile}
              % les plus riches.
              </div>
                <span className="smallTitle">Vous contribuez à hauteur de</span><br/>
                <AnimatedNumber
                  format={(val) => ` ${numeral(Math.abs(val)).format('€0,0')}`}
                  value={gain}
                />
                € en <span className="sign">plus</span> par an <br/>pour la solidarité nationale.
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
                  title={<span>Inmposition <strong>actuelle</strong></span>}
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
