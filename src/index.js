import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {Welcome} from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<header className="App-header">
//     <App/>
//     <Welcome/>
//     </header>, document.getElementById('root'));
 ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
