import React, { Fragment } from 'react';
import axios from 'axios';
import Choices from '../../components/Choices';
import EmptyResults from '../../components/EmptyResults';
import Moment from 'react-moment';
import { fetchQuestions } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import store from '../../utils/configureStore';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  //post a vote and refetch
  async sendVote(choice) {
    axios
      .post(choice.url, {})
      .then(res => {
        if (res.data) {
          console.log(res.data, this);
          this.setState({ questions: res.data });
        }
      })
      .catch(function(error) {
        console.error('error:', error);
      });
  }

  async update() {
    this.props.fetchQuestions();
  }

  componentDidMount() {
    this.update();
  }

  render() {
    console.log(this.props);
    const questions =
      this.props.questions && this.props.questions.data
        ? this.props.questions.data
        : [];
    return (
      <div className="Questions">
        {questions.length === 0 && <EmptyResults />}
        {questions.map((q, index) => (
          <Fragment key={index}>
            <span className="Question">{q.question}</span>
            <span className="Published_at">
              <Moment>{q.published_at}</Moment>
            </span>
            <span className="Url">{q.url}</span>
            <Choices
              {...q.choices}
              sendVote={this.sendVote}
              update={this.update}
            />
          </Fragment>
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
      },
      dispatch,
    ),
)(Questions);
