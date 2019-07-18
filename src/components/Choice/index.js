import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Strings from '../../constants/strings';

export default class Question extends PureComponent {
  static propTypes = {
    choice: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    voteQuestion: PropTypes.func.isRequired,
    data: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { choices: [] };
  }
  componentDidMount() {
    this.setState({ choices: this.props });
  }
  handleClick(p, e) {
    this.props.voteQuestion(p);
  }
  render() {
    //to be refactored
    const { data } = this.props;
    const p = this.props;
    const lastChoice =
      data && data.data && data.data.url === p.url ? data.data : p;

    return (
      <li className="Choice">
        <p className="ChoiceContent">{lastChoice.choice}</p>
        <p className="Votes">
          {Strings.votes} {lastChoice.votes}
        </p>
        <button className="Url" onClick={e => this.handleClick(p, e)}>
          {Strings.vote}
        </button>
      </li>
    );
  }
}
