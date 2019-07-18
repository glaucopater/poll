import React from 'react';
import PropTypes from 'prop-types';
import { postQuestion } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CreateQuestion extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    postQuestion: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = { editable: false, question: '', choices: '' };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleChoicesChange = this.handleChoicesChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleQuestionChange = event => {
    this.setState({ question: event.target.value });
  };

  handleChoicesChange = event => {
    this.setState({ choices: event.target.value });
  };

  handleCreate = event => {
    const { question, choices } = this.state;
    if (question && question !== '' && choices && choices !== '')
      this.props.postQuestion({
        question: question,
        choices: choices.split(','),
      });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        Create new question...
        <div>
          <textarea
            value={this.state.question}
            onChange={this.handleQuestionChange}
          />
          <textarea
            value={this.state.choices}
            onChange={this.handleChoicesChange}
          />
          <button onClick={this.handleCreate}>Create</button>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ postQuestions: data }) => ({
    data,
  }),
  dispatch =>
    bindActionCreators(
      {
        postQuestion,
      },
      dispatch,
    ),
)(CreateQuestion);
