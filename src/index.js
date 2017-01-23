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
import Article from 'grommet/components/Article';
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

class Main extends Component {
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
            <Box flex='grow' justify='start' pad='small'>

              <Form>
                <FormField label='Net imposable' error='Champ incorrect'>
                  <TextInput/>
                </FormField>

                <FormField label='Situation professionnelle' error='Champ incorrect'>

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
          </Sidebar>

          <Box appCentered="true" justify="center" align="center" full={true} pad="large">
            <Section>
              <Article>
                <Box direction="column">

                  <Box direction='column' colorIndex='accent-1' pad="large">
                    <Heading tag="h5">
                      Si je suis élu en 2017, vous payerez
                    </Heading>
                    <Headline size="medium" strong={true}>
                      3 500 € de taxes
                    </Headline>
                    <Headline size="small" strong={true}>
                      dont 3 000 € d'impôts sur le revenu
                    </Headline>
                  </Box>

                  <Box pad="large">
                    <Notification
                      pad="medium"
                      message="Ce simulateur n'est pas exhaustif et n'a pas vocation à être précis à l'euro près. C'est un outil pédagogique. "
                      status='warning'
                      size='medium'/>
                  </Box>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>
                  <Heading tag="h3">
                    Access to the internet has increased at an unprecedented rate over the past 10
                    years. Creating today’s idea economy, where the speed of businesses is faster
                    and more agile than ever.
                  </Heading>

                  <Box direction="column" pad='large'>
                    <Heading tag="h1" strong={true}>
                      Faire la révolution fiscale
                    </Heading>
                    <Paragraph>De l'argent, il y en a. Mais il est capté par les uns au lieu d'être
                      mis au service de l'intérêt général par l'impôt. Le système fiscal est à bout
                      souffre : injuste, plein de niches et de trous, tel un gruyère. Il doit être
                      entièrement refondé sur des bases claires, lisibles, en appliquant le principe
                      de la progressivité qui veut que plus on gagne d'argent, plus on contribue au
                      bien public.
                    </Paragraph>
                  </Box>
                </Box>
              </Article>
            </Section>
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
