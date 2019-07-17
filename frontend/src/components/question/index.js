import React, { Fragment, Component } from 'react';
import Choices from '../../components/Choices';
import Strings from '../../constants/strings';
import Moment from 'react-moment';

export default class Question extends Component {
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
        <Choices
          choices={choices}
          voteQuestion={voteQuestion}
          update={this.update}
        />
      </Fragment>
    );
  }
}
