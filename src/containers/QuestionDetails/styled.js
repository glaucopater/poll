import styled from 'styled-components';
import { DEFAULT_MARGIN } from '../../constants/';

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledQuestionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledThanks = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const StyledChoices = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  list-style-type: none;
  box-shadow: 0.5rem 0.25rem 0.25rem #00000030;
  margin: ${DEFAULT_MARGIN};

  > li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.25rem;
    align-items: stretch;
  }

  > li > p {
    font-size: 1rem;
    line-height: 1.5;
    padding: 1rem 0.75rem;
    color: #666666;
    font-weight: 700;
  }
`;
