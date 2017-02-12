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
    containerWidths: [540, 750, 960, 1440],
    gutterWidth: 50
  });

  render() {
    const { currentSeries, net } = this.props;

    return (
      <Container className="DesignedApp">
        <Row>
          <Col offset={{ md: 3 }} xl={6}>
            <h2>Faire ma simulation</h2>

            <Filters net={net} />

            <Row>
              <Col xl={6}>
                <ResultCard color="red" data={currentSeries} title="Imposition actuelle" />
              </Col>
              <Col xl={6}>
                <ResultCard color="blue" title="Imposition fiscale" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default DesignedApp;
