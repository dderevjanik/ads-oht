// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
import React from 'react';
import ReactDOM from 'react-dom';
import HashTables from './components/HashTables';

ReactDOM.render(<HashTables />, document.getElementById('app'));
