import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Strings from '../../constants/strings';
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
    const { question, url } = this.props;

    return (
      <li className="Question">
        <p>{question}</p>
        <a href={url}>{Strings.vote}</a>
      </li>
    );
  }
}
