import React from 'react';
import './App.css';
import Questions from './containers/Questions';
import Strings from './constants/strings';

const App = props => (
  <div className="App">
    <h1>{Strings.questions}</h1>
    <Questions {...props} />
  </div>
);
export default App;
