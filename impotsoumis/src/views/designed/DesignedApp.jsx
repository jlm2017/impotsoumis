import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Filters from './Filters.jsx';
import ResultCard from './ResultCard.jsx';
import './DesignedApp.css';

class DesignedApp extends Component {
  static childContextTypes = {
    containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number
  };

  // TODO: Fixer la grille
  getChildContext = () => ({
    containerWidths: [540, 750, 960, 1000],
    gutterWidth: 40
  });

  render() {
    const { currentSeries, newSeries } = this.props;

    const purchase = 0;
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
              <strong>C'est {purchase}€ en -</strong>
              sur mon pouvoir d'achat !
            </div>

            <Row>
              <Col md={6}>
                <ResultCard color="red" data={currentSeries} title="Imposition actuelle" />
              </Col>
              <Col md={6}>
                <ResultCard color="blue" data={newSeries} title="Imposition fiscale" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default DesignedApp;
