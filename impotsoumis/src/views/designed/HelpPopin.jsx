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
            {/*
            <li>
              <span>Tous les montants à déclarer (salaire, retraite, chômage) sont en <strong>net mensuels</strong>.</span>
            </li>
            */}
            <li><span>Le salaire est à déclarer en <strong>net mensuel</strong>.</span></li>
            <li>
              <span>Si vous êtes une personne divorcée, veuillez indiquer que vous êtes «Célibataire».</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HelpPopin;
