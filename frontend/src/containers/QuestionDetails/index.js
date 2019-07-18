import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Choice from '../../components/Choice/';
import EmtpyResults from '../../components/EmptyResults/';
import './index.css';
import { fetchQuestionDetails, voteQuestion } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

    if (questionDetails.data) {
      const { choices, published_at, question } = questionDetails.data;

      return (
        <Fragment>
          <h1>{question}</h1>
          <h2>{published_at}</h2>
          <div className="Choices">
            {Object.values(choices).map((p, index) => (
              <Choice
                key={index}
                {...p}
                voteQuestion={voteQuestion}
                data={data}
              />
            ))}
          </div>
        </Fragment>
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
