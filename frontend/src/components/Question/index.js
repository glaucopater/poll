import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export default class Question extends PureComponent {
  static propTypes = {
    question: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,
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
    const { question, published_at, url } = this.props;

    return (
      <div className="Question">
        <div className="Url">
          <a href={url}>{question}</a>
        </div>
        <div className="Published_at">
          <Moment>{published_at}</Moment>
        </div>
      </div>
    );
  }
}
