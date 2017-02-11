import './../../index.css';

import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import SimuActions from './../../actions/SimuActions';

class MarketingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    }
  }

  componentDidMount() {
    this.setState({
      series: []
    })
  }
  render() {
    return <Container>
      <h2>10 SECONDES POUR CALCULER VOTRE IMPOSITION AVEC</h2>
      <h1>LA RÉVOLUTION FISCALE</h1>

      <h3>Mon revenu net mensuel</h3>
      <Row className="align-center"><input type="text" /></Row>
      <br />

      <h3>Ma situation</h3>
      <Row className="align-center">
        <select value="salarie" onChange={(event) => { }}>
          <option value="salarie">Salarié</option>
          <option value="etudiant">Étudiant</option>
          <option value="retraite">Retraité</option>
          <option value="demandeur">Demandeur d'emploi</option>
        </select>
      </Row>

      <Row className="align-center">
        <select value="celibataire" onChange={(event) => {
          SimuActions.maritalStatusChanged(event.target.value === 'marieoupacse' ? 1 : 0);
        }}>
          <option value="celibataire">Célibataire</option>
          <option value="marieoupacse">Marié / Pacsé</option>
        </select>
      </Row>
      <div className="align-center">
        <p>Nombre d'enfants
        <select value="0" onChange={(event) => {
            SimuActions.numberofChildrenChanged(Number(event.target.value));
          }}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select></p>
      </div>
      <br />

      <h4>XXX€ net pour mon pouvoir d'achat</h4>

      <Row className="align-center">
        <p>Avec la réforme fiscale, mon imposition 2019</p>
      </Row>
      <Row className="align-center">
        <AnnotatedMeter
                    legend={false}
                    size='large'
                    type='bar'
                    units='€'
                    series={this.state.series}/>
      </Row>

      <p>Mon imposition actuelle</p>

      <h3>Pour comprendre la révolution fiscale</h3>
      <p>Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.</p>
      <p>Mox dicta finierat, multitudo omnis ad, quae imperator voluit, promptior laudato consilio consensit in pacem ea ratione maxime percita, quod norat expeditionibus crebris fortunam eius in malis tantum civilibus vigilasse, cum autem bella moverentur externa, accidisse plerumque luctuosa, icto post haec foedere gentium ritu perfectaque sollemnitate imperator Mediolanum ad hiberna discessit.
</p>
      <p>
        Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere. Non enim neque tu possis, quamvis excellas, omnes tuos ad honores amplissimos perducere, ut Scipio P. Rupilium potuit consulem efficere, fratrem eius L. non potuit. Quod si etiam possis quidvis deferre ad alterum, videndum est tamen, quid ille possit sustinere.
   </p>
    </Container>;
  }
}

export default MarketingApp;
