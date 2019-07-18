import React from 'react';
import PropTypes from 'prop-types';
import Question from '../../components/Question';
import EmptyResults from '../../components/EmptyResults';
import { fetchQuestions } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Strings from '../../constants/strings';
class Questions extends React.PureComponent {
  static propTypes = {
    questions: PropTypes.object,
    fetchQuestions: PropTypes.func,
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

    return (
      <div className="Questions">
        {questions.length === 0 && <EmptyResults />}
        {questions.length > 0 && <h1>{Strings.questions}</h1>}
        {questions.map((q, index) => (
          <Question key={index} {...q} />
        ))}
      </div>
    );
  }
}

export default connect(
  ({ fetchQuestions: questions, voteQuestion: data }) => ({
    questions,
    data,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchQuestions,
      },
      dispatch,
    ),
)(Questions);
