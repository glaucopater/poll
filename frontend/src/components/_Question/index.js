import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Choices from '../../containers/Choices';
import Strings from '../../constants/strings';
import Moment from 'react-moment';

export default class Question extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    question: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,
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

  render() {
    const {
      index,
      question,
      published_at,
      url,
      choices,
      voteQuestion,
      data,
    } = this.props;

    return (
      <Fragment key={index}>
        <span className="Question">{question}</span>
        <span className="Published_at">
          {Strings.publishedAt}
          <Moment>{published_at}</Moment>
        </span>
        <span className="Url">
          <a href={url}>{Strings.details}</a>
        </span>
        <Choices choices={choices} voteQuestion={voteQuestion} data={data} />
      </Fragment>
    );
  }
}
