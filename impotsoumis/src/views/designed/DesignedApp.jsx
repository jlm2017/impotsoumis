import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import numeral from 'numeral';
import Info from 'grommet/components/icons/base/Info';
import Pulse from 'grommet/components/icons/Pulse';


numeral.register('locale', 'fr', {
  delimiters: {
    thousands: '\u00a0',
    decimal: ','
  }
});

numeral.locale('fr');

import Filters from './Filters.jsx';
import AnimatedNumber from './AnimatedNumber.jsx';
import ShareButtons from './ShareButtons.jsx';
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

    let verdict;
    if (gain === 0 && this.props.net === 0) {
      verdict = 'default';
    } else if (gain >= 0) {
      verdict = 'positive';
    }
    if (gain < 0) {
      verdict = 'negative';
    }

    return (
      <div>
        <Container className="DesignedApp">
          <header>
            10 secondes<br />
            pour <strong>simuler</strong> votre imposition avec<br />
            <h1>
              La Révolution <strong>Fiscale</strong>
            </h1>
          </header>

          <Filters {...this.props} />

          <div className="verdict">
            <div className={`info${(verdict !== 'default') ? ' hide' : ''}`}>
              Renseignez le <strong>salaire net mensuel</strong> de votre foyer pour connaître votre situation.
            </div>

            <div className={(verdict !== 'positive') ? 'hide' : ''}>
              <span className="small">Si Jean-Luc <strong>Mélenchon</strong> est élu,<br/> </span>
              vous gagnerez
              <AnimatedNumber
                format={(val) => ` ${numeral(Math.abs(val)).format('€0,0')}`}
                value={gain}
              />
              €<br />
              en <span className="sign">plus</span> par an.

              <ShareButtons gain={gain} />
            </div>

            <div className={(verdict !== 'negative') ? 'hide' : ''}>
              <div className="negative">
                Vous faites partie des {this.props.percentile < 1 ? Number(Math.round(this.props.percentile+'e2')+'e-2') : this.props.percentile}
                % les plus riches.<br />
                Vous contribuerez à hauteur de
              </div>
              <AnimatedNumber
                format={(val) => ` ${numeral(Math.abs(val)).format('€0,0')}`}
                value={gain}
              />
              € en <span className="sign">plus</span> par an <br />
              pour la solidarité nationale.

              <ShareButtons gain={gain} />
            </div>
          </div>

          <Row>
            <Col sm={6}>
              <ResultCard
                color="red"
                title={<span>Imposition <strong>actuelle</strong></span>}
                total={current.total}
                top={{
                  legend: (
                    <span>Votre impôt sur le revenu est de :
                    <strong>
                    <AnimatedNumber
                      format={(val) => ` ${numeral(val).format('€0,0')} `}
                      value={current.IR}
                    /> €<sup>/an</sup></strong></span>
                  ),
                  value: current.IR
                }}
                bottom={{
                  legend: (
                    <span>Votre contribution sociale généralisée (CSG) est de:
                    <strong>
                    <AnimatedNumber
                      format={(val) => ` ${numeral(val).format('€0,0')} `}
                      value={current.CSG}
                    /> €<sup>/an</sup></strong></span>
                  ),
                  value: current.CSG
                }}
              />
            </Col>
            <Col sm={6}>
              <ResultCard
                color="blue"
                title={<span>Avec la <strong>Révolution Fiscale</strong></span>}
                total={revolution.total}
                top={{
                  legend: (
                    <span>Votre impôt sur le revenu sera de :
                    <strong>
                    <AnimatedNumber
                      format={(val) => ` ${numeral(val).format('€0,0')} `}
                      value={revolution.IR}
                    /> €<sup>/an</sup></strong></span>
                  ),
                  value: revolution.IR
                }}
                bottom={{
                  legend: (
                    <span>Votre contribution sociale généralisée (CSG) sera de :
                    <strong>
                    <AnimatedNumber
                      format={(val) => ` ${numeral(val).format('€0,0')} `}
                      value={revolution.CSG}
                    /> €<sup>/an</sup></strong></span>
                  ),
                  value: revolution.CSG
                }}
              />
            </Col>
          </Row>

            <div className="disclaimer">
              <Pulse icon={<Info />} />
              <p>Ce simulateur vous permet d'expérimenter la Révolution Fiscale que nous proposons.<br/>C'est un outil pédagogique qui n'a pas vocation à être exact à l'euro près. </p>
            </div>
        </Container>

        <div className="video">
          <Container>
            <h2>La <strong>Révolution Fiscale</strong>,<br /> comment ça marche ?</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/uK5vCgC9EN4" frameBorder="0" allowFullScreen></iframe>
          </Container>
        </div>

        <div className="version">
          Version
          <h1>
            0.<strong>40</strong>
          </h1>
        </div>
      </div>
    );
  }
};

export default DesignedApp;
