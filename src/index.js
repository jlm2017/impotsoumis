//import styles
import 'grommet/scss/vanilla/index';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import Meter from 'grommet/components/Meter';
import Title from 'grommet/components/Title';
import Value from 'grommet/components/Value';

import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Split from 'grommet/components/Split';

import Select from 'grommet/components/Select';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import Button from 'grommet/components/Button';
import Notification from 'grommet/components/Notification';
import Image from 'grommet/components/Image';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';

const nouveauBareme = [
  {
    "label": "Taux effectif d'imposition à 2%. ",
    "taux": 0.02,
    "min": 0,
    "max": 13200,
    "colorIndex": "graph-1"
  }, {
    "label": "Taux effectif d'imposition à 2%.",
    "taux": 0.02,
    "min": 13200,
    "max": 26040,
    "colorIndex": "accent-1"
  }, {
    "label": "Taux effectif d'imposition à 10%",
    "taux": 0.1,
    "min": 26040,
    "max": 60000,
    "colorIndex": "ok"
  }, {
    "label": "Taux effectif d'imposition à 13%",
    "taux": 0.13,
    "min": 60000,
    "max": 120000,
    "colorIndex": "warning"
  }, {
    "label": "Taux effectif d'imposition à 25%",
    "taux": 0.25,
    "min": 120000,
    "max": 300000,
    "colorIndex": "accent-2"
  }, {
    "label": "Taux effectif d'imposition à 40%",
    "taux": 0.40,
    "min": 300000,
    "max": 480000,
    "colorIndex": "critical"
  }, {
    "label": "Taux effectif d'imposition à 50%",
    "taux": 0.4,
    "min": 480000,
    "max": 1200000,
    "colorIndex": "graph-2"
  }, {
    "label": "Taux effectif d'imposition à 60%",
    "taux": 0.6,
    "min": 1200000,
    "max": Number.MAX_SAFE_INTEGER,
    "colorIndex": "graph-3"
  }
];

const baremeActuel = [
  {
    "label": "Tranche 0%",
    "taux": 0,
    "min": 0,
    "max": 9710,
    "colorIndex": "grey-2"
  }, {
    "label": "Tranche 14%",
    "taux": 0.14,
    "min": 9710,
    "max": 26818,
    "colorIndex": "neutral-4"
  }, {
    "label": "Tranche 30%",
    "taux": 0.3,
    "min": 26818,
    "max": 71898,
    "colorIndex": "neutral-1"
  }, {
    "label": "Tranche 40%",
    "taux": 0.41,
    "min": 71898,
    "max": 152260,
    "colorIndex": "neutral-3"
  }, {
    "label": "Tranche 45%",
    "taux": 0.45,
    "min": 152260,
    "max": Number.MAX_SAFE_INTEGER,
    "colorIndex": "neutral-2"
  }
];

function seriesForBareme(netimposable, baremeList) {

  var series = []
  for (var bareme of baremeList) {
    if (netimposable > bareme.min) {
      var margeHaute = (netimposable > bareme.max)
        ? bareme.max
        : netimposable;
      var montantAImposer = margeHaute - bareme.min;
      var sommeAPayerSurTranche = Math.round(montantAImposer * bareme.taux)

      var serie = {
        "label": bareme.label,
        "value": sommeAPayerSurTranche,
        "colorIndex": bareme.colorIndex
      };

      series.push(serie);
    } else {
      break;
    }
  }
  return series
}

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      netimposable: "13677",
      newSeries: seriesForBareme(13677, nouveauBareme),
      currentSeries: seriesForBareme(13677, baremeActuel)
    };
  }

  updateCharts(newValue) {
    var netimposable = newValue
    var newSeries = seriesForBareme(netimposable, nouveauBareme)
    var currentSeries = seriesForBareme(netimposable, baremeActuel)

    this.setState({netimposable: newValue, newSeries: newSeries, currentSeries: currentSeries});
  }

  render() {
    return (
      <App centered={false}>
        <Split flex='right' showOnResponsive='both'>
          <Sidebar colorIndex='light-2'>

            <Header pad='medium' justify='between'>
              <Box direction="column">
                <Image src='./logo-orange-bleu.png' size='small'/>
                <Title>
                  Simulateur d'impôts
                </Title>
              </Box>

            </Header>
            <Box>

              <Form>
                <FormField label='Net imposable'>
                  <TextInput
                    defaultValue={this.state.netimposable}
                    onDOMChange={(event) => {
                    this.updateCharts(event.target.value);
                  }}/>
                </FormField>

                <FormField label='Situation professionnelle' error="Indisponible">

                  <Select
                    placeHolder='Search'
                    options={['étudiant', 'salarié', 'retraité', 'chômeur']}
                    value='salarié'
                    onChange={(event) => {
                    console.log('it changed')
                  }}/>
                </FormField>
              </Form>
            </Box>

            <Box pad="small">

              <Paragraph size='small'>De l'argent, il y en a. Mais il est capté par les uns au
                lieu d'être mis au service de l'intérêt général par l'impôt. Le système fiscal
                est à bout souffre : injuste, plein de niches et de trous, tel un gruyère. Il
                doit être entièrement refondé sur des bases claires, lisibles, en appliquant le
                principe de la progressivité qui veut que plus on gagne d'argent, plus on
                contribue au bien public.
              </Paragraph>

              <Image src='jlm.png' size='thumb'/>
              <Heading strong={true} tag='h5'>Jean-Luc Mélanchon</Heading>
              <Heading tag='h5'>Candidat à l'élection présidentielle</Heading>
            </Box>
            <Box pad="small">
              <Notification
                message="Ce simulateur n'est pas exhaustif et n'a pas vocation à être précis à l'euro près. C'est un outil pédagogique. "
                status='warning'
                size='small'/>
            </Box>
          </Sidebar>

          <Box appCentered="true" justify="left" align="left" full={true} pad="large">
            <Heading tag="h1" strong={true}>
              Faire la révolution fiscale
            </Heading>

            <br/>

            <Box>
              <Heading strong={true} tag='h2'>Imposition avec la révolution fiscale</Heading>
              <Box>
                <AnnotatedMeter
                  legend={true}
                  size='large'
                  type='bar'
                  units='€'
                  series={this.state.newSeries}/>
              </Box>

              <Heading strong={true} tag='h2'>Imposition actuelle</Heading>
              <Box>
                <AnnotatedMeter
                  legend={true}
                  size='large'
                  type='bar'
                  units='€'
                  series={this.state.currentSeries}/>
              </Box>
            </Box>
          </Box>
        </Split>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document
  .body
  .classList
  .remove('loading');

/*
, {
                    "label": "CSG",
                    "taux": 0.02,
    "min": 0,
    "max": 13200,
                    "colorIndex": "warning"
                  }
*/
