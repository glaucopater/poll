import React from 'react';
import PropTypes from 'prop-types';
import Question from '../../components/Question';
import EmptyResults from '../../components/EmptyResults';
import { fetchQuestions, voteQuestion } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Strings from '../../constants/strings';

class Questions extends React.PureComponent {
  static propTypes = {
    questions: PropTypes.object.isRequired,
    fetchQuestions: PropTypes.func.isRequired,
    voteQuestion: PropTypes.func.isRequired,
  };
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

    const { voteQuestion } = this.props;

    return (
      <div className="Questions">
        {questions.length === 0 && <EmptyResults />}
        {questions.map((q, index) => (
          <Question key={index} {...q} voteQuestion={voteQuestion} />
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
