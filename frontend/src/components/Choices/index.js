import React, { Component } from 'react';

const style = {
  borderWidth: 1,
  borderColor: '#000',
};
export default class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = { choices: [] };
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.setState({ choices: this.props.choices });
  }

  handleClick(p, e) {
    this.props.voteQuestion(p);
  }
  render() {
    const choices = this.state.choices;
    return (
      <div className="Choices" style={style}>
        {Object.values(choices).map((p, index) => (
          <div key={index}>
            <span className="Choice">{p.choice}</span>
            <span className="Votes">Votes: {p.votes}</span>
            <button className="Url" onClick={e => this.handleClick(p, e)}>
              Vote
            </button>
          </div>
        ))}
      </div>
    );
  }
}
