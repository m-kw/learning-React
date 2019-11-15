import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { appData } from './data/dataStore';

ReactDOM.render(<App {...appData}/>, document.getElementById('app'));
