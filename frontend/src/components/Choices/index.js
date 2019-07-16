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
    console.log(this.props);
    this.setState({ choices: this.props });
  }

  handleClick(p, e) {
    console.log('vote', p, e);
    this.props.sendVote(p);
    /*
    console.log(res);
    const choices = Object.values(this.state.choices)
      .filter(c => c.choice !== p.choice)
      .concat(res);
    this.setState(choices);*/
  }
  render() {
    const choices = this.state.choices;
    return (
      <div className="Choices" style={style}>
        {Object.values(choices).map((p, index) => (
          <div key={index} onClick={e => this.handleClick(p, e)}>
            <span className="Choice">{p.choice}</span>
            <span className="Votes">{p.votes}</span>
            <span className="Url">{p.url}</span>
          </div>
        ))}
      </div>
    );
  }
}
