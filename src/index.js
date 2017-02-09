import React from 'react';
import ReactDOM from 'react-dom';
import AppView from './views/AppView.jsx';

ReactDOM.render(<AppView/>, document.getElementById('content'));
document.body.classList.remove('loading');
