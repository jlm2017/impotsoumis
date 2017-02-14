import React, { Component } from 'react';
import { Container, Row, Col, Visible } from 'react-grid-system';
import numeral from 'numeral';

import Filters from './Filters.jsx';
import ResultCard from './ResultCard.jsx';
import './DesignedApp.css';

class DesignedApp extends Component {
  static childContextTypes = {
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    return {
      breakpoints: [768, 1040],
      containerWidths: [728, 1000],
      gutterWidth: 40
    };
  }

  componentDidMount() {
    this.setState({
      purchase: this.nextPurchase
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      cancelAnimationFrame(this.state.verdictInterval);
      this.setState({
        verdictInterval: requestAnimationFrame(this.loopVerdict.bind(this))
      });
    }
  }

  loopVerdict() {
    if (this.nextPurchase === this.state.purchase) {
      cancelAnimationFrame(this.state.verdictInterval);
    } else {
      this.setState({
        purchase: this.updateVerdict(),
        verdictInterval: requestAnimationFrame(this.loopVerdict.bind(this))
      });
    }
  }

  updateVerdict() {
    let next;
    for(var i = 100000000; i >= 1; i = i / 10) {
      if (this.nextPurchase >= this.state.purchase + i) {
        next = this.state.purchase + i;
        break;
      } else if (this.nextPurchase <= this.state.purchase - i) {
        next = this.state.purchase - i;
        break;
      }
    }
    return next;
  }

  render() {
    const { currentSeries, newSeries } = this.props;

    const IR = currentSeries[0].value;
    const CSG = currentSeries[1].value;
    const NEW = newSeries[0].value;
    this.nextPurchase = (IR + CSG) - NEW;
    const isPositive = (this.nextPurchase >= 0) ? true : false;

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
                C'est
                <span ref={(node) => this.verdict = node}>
                  {` ${numeral(Math.abs(this.state.purchase)).format('€0a')}`}
                </span> €<span className="amountSuffix">/mois</span> en <span className={"sign " + ((isPositive) ? "positive" : "negative")}>
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
                  center={{
                    legend: "Nouvel Impôt Citoyen",
                    value: NEW
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
