import React, { PureComponent } from 'react';
import Strings from '../../constants/strings';

export default class Choices extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { choices: [] };
  }
  componentDidMount() {
    this.setState({ choices: this.props.choices });
  }

  handleClick(p, e) {
    this.props.voteQuestion(p);
  }
  render() {
    const choices = this.state.choices;
    console.log('Choices', this.props);
    return (
      <div className="Choices">
        {Object.values(choices).map((p, index) => (
          <div key={index}>
            <span className="Choice">{p.choice}</span>
            <span className="Votes">
              {Strings.votes} {p.votes}
            </span>
            <button className="Url" onClick={e => this.handleClick(p, e)}>
              {Strings.vote}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
