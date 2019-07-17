import React, { PureComponent } from 'react';
import Strings from '../../constants/strings';
import Choice from '../Choice/';
export default class Choices extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { choices: [] };
  }
  componentDidMount() {
    this.setState({ choices: this.props.choices });
  }

  render() {
    const choices = this.state.choices;
    console.log('Choices render', this.props);
    const { data, voteQuestion } = this.props;
    return (
      <div className="Choices">
        {Object.values(choices).map((p, index) => (
          <Choice key={index} {...p} data={data} voteQuestion={voteQuestion} />
        ))}
      </div>
    );
  }
}
