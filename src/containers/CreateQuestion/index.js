import React from 'react';
import PropTypes from 'prop-types';
import { postQuestion } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledCreateQuestion } from './styled';
import Header from '../../components/Header';
import strings from '../../constants/strings';

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
    return (
      <StyledCreateQuestion>
        <Header
          title={strings.questions}
          linkObject={{ title: strings.back, url: '/' }}
        />

        <textarea
          value={this.state.question}
          onChange={this.handleQuestionChange}
          placeholder={'question'}
        />
        <textarea
          value={this.state.choices}
          onChange={this.handleChoicesChange}
          placeholder={'choices'}
        />
        <button onClick={this.handleCreate}>Create</button>
      </StyledCreateQuestion>
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
