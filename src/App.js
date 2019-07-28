import React, { Fragment } from 'react';
import Questions from './containers/Questions';
import QuestionDetails from './containers/QuestionDetails';
import CreateQuestion from './containers/CreateQuestion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Route
            path="/"
            exact
            render={routeProps => <Questions {...routeProps} />}
          />
          <Route
            path="/questions/:questionId"
            exact
            render={routeProps => <QuestionDetails {...routeProps} />}
          />
          <Route
            path="/new"
            exact
            render={routeProps => <CreateQuestion {...routeProps} />}
          />
        </div>
      </Fragment>
    </Router>
  );
};

function mapStateToProps({ questions }) {
  return {
    loading: questions === null,
  };
}

export default connect(mapStateToProps)(App);
