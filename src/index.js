import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Room from './Room';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path='/room' component={Room} />
        <Route path='/' component={App} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
