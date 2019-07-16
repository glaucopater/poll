import * as React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import Choices from '../../components/Choices';
import Moment from 'react-moment';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async fetchData() {
    axios
      .get(API_URL)
      .then(res => {
        if (res.data) {
          console.log(res.data);
        }
      })
      .catch(function(error) {
        console.error('error:', error);
      });
  }

  async updateQuote() {
    await this.fetchData();
  }

  componentDidMount() {
    this.updateQuote();
  }

  render() {
    const props = this.props;
    return (
      <div className="Questions">
        <span className="Question">{props.question}</span>
        <span className="Published_at">
          <Moment>{props.published_at}</Moment>
        </span>
        <span className="Url">{props.url}</span>
        <Choices {...props.choices} />
      </div>
    );
  }
}
