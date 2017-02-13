import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Filters from './Filters.jsx';
import ResultCard from './ResultCard.jsx';
import './DesignedApp.css';

class DesignedApp extends Component {
  static childContextTypes = {
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number
  };

  // TODO: Fixer la grille
  getChildContext = () => ({
    breakpoints: [768, 1040],
    containerWidths: [728, 1000],
    gutterWidth: 40
  });

  render() {
    const { currentSeries, newSeries } = this.props;

    const purchase = (currentSeries[0].value + currentSeries[1].value) - (newSeries[0].value + newSeries[1].value);
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
              <strong>
                C'est {Math.abs(purchase)}€ en
                <span className={(isPositive) ? "positive" : "negative"}>
                  {(isPositive) ? " plus " : " moins "}
                </span>
              </strong>
              sur mon pouvoir d'achat !
            </div>

            <Row>
              <Col sm={6}>
                <ResultCard color="red" data={currentSeries} title="Imposition actuelle" />
              </Col>
              <Col sm={6}>
                <ResultCard color="blue" data={newSeries} title="Révolution fiscale" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default DesignedApp;
