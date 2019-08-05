import React from 'react';
import PropTypes from 'prop-types';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';

const Question = ({ question, url }) => {
  return (
    <li className="Question">
      <p>{question}</p>
      <NavLink to={url}>{strings.vote}</NavLink>
    </li>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  published_at: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default Question;
