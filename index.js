import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import devices from './reducers'
import App from './components/App'



let store = createStore(todoApp)

ReactDOM.render(
    <div id="here">
    <Provider store={store}>
        <App />
    </Provider>
    </div>,
  document.getElementById('root')
);
