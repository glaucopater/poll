import React from 'react';
import './App.css';
import Questions from './containers/Questions';
import QuestionDetails from './containers/QuestionDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Questions} />
        <Route
          path="/questions/:questionId"
          exact
          component={QuestionDetails}
        />
      </div>
    </Router>
  );
};
export default App;
