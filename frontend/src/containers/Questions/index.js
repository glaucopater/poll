import React from 'react';
import Question from '../../components/Question';
import EmptyResults from '../../components/EmptyResults';
import { fetchQuestions, voteQuestion } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  async update() {
    this.props.fetchQuestions();
  }

  componentDidMount() {
    this.update();
  }

  render() {
    const questions =
      this.props.questions && this.props.questions.data
        ? this.props.questions.data
        : [];
    console.log('Questions');
    return (
      <div className="Questions">
        {questions.length === 0 && <EmptyResults />}
        {questions.map((q, index) => (
          <Question
            key={index}
            {...q}
            voteQuestion={this.props.voteQuestion}
            updateQuestions={this.props.voteQuestion}
          />
        ))}
      </div>
    );
  }
}

export default connect(
  ({ fetchQuestions: questions }) => ({
    questions,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchQuestions,
        voteQuestion,
      },
      dispatch,
    ),
)(Questions);
