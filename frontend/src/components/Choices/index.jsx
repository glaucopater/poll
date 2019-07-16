import React, { Component } from 'react';

const style = {
  borderWidth: 1,
  borderColor: '#000',
};
export default class Choices extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="Choices" style={style}>
        {Object.values(this.props).map((p, index) => (
          <div key={index}>
            <span className="Choice">{p.choice}</span>
            <span className="Votes">{p.votes}</span>
            <span className="Url">{p.url}</span>
          </div>
        ))}
      </div>
    );
  }
}
