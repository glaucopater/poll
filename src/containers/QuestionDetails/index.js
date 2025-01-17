import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Choice from '../../components/Choice/';
import EmtpyResults from '../../components/EmptyResults/';
import Loading from '../../components/Loading/';
import {
  StyledHeader,
  StyledQuestionDetails,
  StyledChoices,
  StyledThanks,
} from './styled';
import { fetchQuestionDetails, voteQuestion } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Strings from '../../constants/strings';

class QuestionDetails extends PureComponent {
  static propTypes = {
    voteQuestion: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = { choices: [] };
  }

  async update(match) {
    this.props.fetchQuestionDetails(match.params.questionId);
  }

  componentDidMount() {
    if (this.props.match) {
      const { match } = this.props;
      this.update(match);
      this.setState({ choices: this.props.choices });
    }
  }

  render() {
    const { voteQuestion, questionDetails, data } = this.props;
    const hasVoted = data && data.data && data.data.url;

    if (!questionDetails.data) {
      return <Loading />;
    }

    if (questionDetails.data && questionDetails.data.length !== 0) {
      const { choices, question } = questionDetails.data;
      return (
        <StyledQuestionDetails>
          <StyledHeader>
            <h1>{question}</h1>
            <span>
              <a href="/">{Strings.back}</a>
            </span>
          </StyledHeader>
          <StyledChoices className="Choices">
            {Object.values(choices).map((p, index) => (
              <Choice
                key={index}
                {...p}
                voteQuestion={voteQuestion}
                data={data}
              />
            ))}
          </StyledChoices>
          {hasVoted && <StyledThanks>{Strings.thanks}</StyledThanks>}
        </StyledQuestionDetails>
      );
    } else return <EmtpyResults />;
  }
}

export default connect(
  ({ fetchQuestionDetails: questionDetails, voteQuestion: data }) => ({
    questionDetails,
    data,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchQuestionDetails,
        voteQuestion,
      },
      dispatch,
    ),
)(QuestionDetails);
