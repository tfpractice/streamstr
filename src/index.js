import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import { Worker } from './utils';

console.log('Worker', Worker);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
