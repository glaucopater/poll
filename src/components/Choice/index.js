import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import strings from '../../constants/strings';
import { StyledVoteContainer } from './styled';

export default class Question extends PureComponent {
  static propTypes = {
    choice: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    voteQuestion: PropTypes.func.isRequired,
    data: PropTypes.object,
    hasVoted: PropTypes.bool,
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
    const props = this.props;
    const { data, url } = props;
    const lastChoice =
      data && data.data && data.data.url === url ? data.data : props;
    const hasVoted = data && data.data && data.data.url;
    const isUserVote = data && data.data && data.data.url === url;
    const voteProps = { isUserVote, hasVoted };

    return (
      <li className="Choice">
        <p className="ChoiceContent">{lastChoice.choice}</p>
        <StyledVoteContainer {...voteProps}>
          <p className="Votes">
            {strings.votes} {lastChoice.votes}
          </p>
          {!hasVoted && (
            <button
              className="Url"
              onClick={e => this.handleClick(props, e)}
              disabled={hasVoted}
            >
              {strings.vote}
            </button>
          )}
        </StyledVoteContainer>
      </li>
    );
  }
}
