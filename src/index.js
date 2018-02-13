import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<Button>Hello World!</Button>, document.getElementById('root'));
registerServiceWorker();
