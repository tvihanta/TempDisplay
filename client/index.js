import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import {fetchDevices, fetchData} from './actions'
import RuuviApp from './reducers'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Grid, Col, Row } from 'react-bootstrap';

let store = createStore(
    RuuviApp,
    applyMiddleware(
        thunkMiddleware
  ))

store.dispatch(fetchDevices()).then((data, err) => {
    console.log("after fetch");
    console.log(err);
    store.dispatch(fetchData(3)).then( (data) => {
        console.log(data);
    });
});

ReactDOM.render(
    <Grid fluid={true}>
        <Row className="show-grid">
          <Col xs={12} md={8}>
              <Provider store={store}>
                  <App />
              </Provider>
          </Col>
          <Col xs={6} md={4}>
            homonaamat
          </Col>
        </Row>
    </Grid>,
  document.getElementById('root')
);
