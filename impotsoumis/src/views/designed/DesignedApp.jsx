import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import numeral from 'numeral';
import Info from 'grommet/components/icons/base/Info';
import Pulse from 'grommet/components/icons/Pulse';


numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    }
});

numeral.locale('fr');

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
    const { current, revolution, gain, developer } = this.props.results;

    return (
      <Container className="DesignedApp">
        <Row>
          <Col>
            <h2>
              <span>10 secondes</span> pour <b>simuler</b> votre imposition avec<br/>
              <span className="laRevolution">la Révolution</span><br/><span className="fiscale">Fiscale</span>
            </h2>

            <Filters {...this.props} />

            <p>[Calcul Nouvel Impot Citoyen]<br/>R = {developer.sommeIR.revenu}.<br/>t = {developer.sommeIR.taux}.<br/>R * t = {developer.sommeIR.total}. <br/> R * t * 12 = {developer.sommeIR.total * 12}.</p>
            <p>[Calcul Nouvelle CSG]<br/>R = {developer.sommeCSG.revenu}.<br/>t = {developer.sommeCSG.taux}.<br/>R*t = {developer.sommeCSG.total}.<br/> R * t * 12 = {developer.sommeCSG.total * 12}.</p>
            <hr/>
            <p>[A24] : Revenu imposable par part fiscale: {developer.a24}</p>
            <p>Nouvel Impot Citoyen = Nouveau IR + Nouvelle CSG  : {developer.sommeIR.total}</p>
            <p>Dont Nouveau IR : {developer.sommeIR.total - developer.sommeCSG.total}</p>
            <p>Dont Nouveau CSG : {developer.sommeCSG.total}</p>

            <p>[B24] : Impot par part fiscale avant CI QF (avec soustraction CSG) {developer.b24}</p>
            <p>[C24] : Impot total : {developer.c24}</p>
            <p>[D24] : Impot après CI QF : {developer.d24}</p>
            <p>[E24] : Impot du après seuil recouvrement : {developer.e24}</p>
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
              <Col sm={6} md={5} offset={{md: 1}}>
                <ResultCard
                  color="red"
                  title={<span>Imposition <strong>actuelle</strong></span>}
                  total={current.total} 
                  top={{
                    legend: 
                      <span>Votre impôt sur le revenu est de :<br /><strong>            <AnimatedNumber
                            format={(val) => ` ${numeral(val).format('€0,0')} `}
                            value={current.IR}
                          /> €<sup>/an</sup></strong></span>,
                    value: current.IR
                  }}
                  bottom={{
                    legend: 
                    <span>Votre contribution sociale généralisée est de:<br /><strong>
                    <AnimatedNumber
                      format={(val) => ` ${numeral(val).format('€0,0')} `}
                      value={current.CSG}
                    /> €<sup>/an</sup></strong></span>,
                    value: current.CSG
                  }}
                />
              </Col>
              <Col sm={6} md={5}>
                <ResultCard
                  color="blue"
                  title={<span>Avec la <strong>Révolution Fiscale</strong></span>}
                  total={revolution.total}
                  top={{
                    legend: <span>Votre impôt sur le revenu sera de :<br /><strong>   <AnimatedNumber
                      format={(val) => ` ${numeral(val).format('€0,0')} `}
                      value={revolution.IR}
                    /> €<sup>/an</sup></strong></span>,
                    value: revolution.IR
                  }}
                  bottom={{
                    legend: 
                    <span>Votre contribution sociale généralisée sera de:<br /> <strong>
                    <AnimatedNumber
                        format={(val) => ` ${numeral(val).format('€0,0')} `}
                        value={revolution.CSG}
                      /> €<sup>/an</sup></strong></span>,
                    value: revolution.CSG
                  }}                  
                />
              </Col>
            </Row>   

            <br/>
            <br/>
            <br/>
            <Pulse icon={<Info />} />
            <p>Ce simulateur vous permet d'expérimenter la Révolution Fiscale que nous proposons.<br/>C'est un outil pédagogique qui n'a pas vocation à être exact à l'euro près. </p>

          </Col>
            <h2>Version<br/>
            <span className="laRevolution">0.1</span><br/>
            <span className="fiscale">24</span>
            </h2>
        </Row>

      </Container>
    );
  }
};

export default DesignedApp;
