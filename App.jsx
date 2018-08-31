import React from 'react';
import { render } from 'react-dom';
import Player from './components/Player';

/* global document */

const App = () => (
  <Player />
);

render(<App />, document.getElementById('app'));
