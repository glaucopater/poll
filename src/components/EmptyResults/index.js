import React from 'react';
import { StyledEmptyResults } from './styled';
import strings from '../../constants/strings';

const EmptyResults = () => (
  <StyledEmptyResults>{strings.noResults}</StyledEmptyResults>
);

export default EmptyResults;
