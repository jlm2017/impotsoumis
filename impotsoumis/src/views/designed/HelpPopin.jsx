import React, { Component } from 'react';

import './HelpPopin.css';

class HelpPopin extends Component {
  constructor() {
    super();
    this.state = {
      popinVisible: false
    }
  }

  render() {
    return (
      <div className="HelpPopin">
        <div
          className="ico"
          onMouseOut={() => this.setState({
            popinVisible: false
          })}
          onMouseOver={() => this.setState({
            popinVisible: true
          })}
        >
          ?
        </div>
        <div className={`popin${(this.state.popinVisible) ? ' visible' : ''}`}>
          <ul>
            <li>
              <span>Tous les montants à déclarer (salaire, retraite, chômage) <strong>mensuels</strong> et net imposables.</span>
            </li>
            <li>
              <span>Si vous êtes une personne divorcée, veuillez indiquer que vous êtes «Célibataire ».</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HelpPopin;
