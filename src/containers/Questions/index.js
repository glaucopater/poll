import React from 'react';
import PropTypes from 'prop-types';
import Question from '../../components/Question';
import EmptyResults from '../../components/EmptyResults';
import Loading from '../../components/Loading';
import { fetchQuestions } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Strings from '../../constants/strings';

import { StyledQuestions, StyledQuestionsGrid } from './styled';
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
    const { questions } = this.props;

    if (!questions.data) {
      return <Loading />;
    } else {
      const questionsData = questions.data ? questions.data : [];

      if (questionsData.length === 0) {
        return <EmptyResults />;
      }
      return (
        <StyledQuestions>
          {questionsData.length > 0 && <h1>{Strings.questions}</h1>}
          <StyledQuestionsGrid>
            {questionsData.map((q, index) => (
              <Question key={index} {...q} />
            ))}
          </StyledQuestionsGrid>
        </StyledQuestions>
      );
    }
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
