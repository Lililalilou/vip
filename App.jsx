import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Player from './components/Player';

/* global document */
const store = createStore(reducers);
const App = () => (
  <Provider store={store}>
    <Player />
  </Provider>
);

render(<App />, document.getElementById('app'));
