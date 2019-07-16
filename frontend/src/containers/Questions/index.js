import React, { Fragment } from 'react';
import axios from 'axios';
import Choices from '../../components/Choices';
import EmptyResults from '../../components/EmptyResults';

import Moment from 'react-moment';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  async fetchData() {
    axios
      .get(`/questions`, { crossDomain: true })
      .then(res => {
        if (res.data) {
          console.log(res.data);
          this.setState({ questions: res.data });
        }
      })
      .catch(function(error) {
        console.error('error:', error);
      });
  }

  async update() {
    await this.fetchData();
  }

  componentDidMount() {
    this.update();
  }

  render() {
    const questions = this.state.questions;
    return (
      <div className="Questions">
        {questions.length === 0 && <EmptyResults />}
        {questions.map((q, index) => (
          <Fragment key={index}>
            <span className="Question">{q.question}</span>
            <span className="Published_at">
              <Moment>{q.published_at}</Moment>
            </span>
            <span className="Url">{q.url}</span>
            <Choices {...q.choices} />
          </Fragment>
        ))}
      </div>
    );
  }
}
