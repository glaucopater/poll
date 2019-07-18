import styled from 'styled-components';

export const StyledQuestions = styled.div`
  padding: 2rem;
`;

export const StyledQuestionsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;

  > li {
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    list-style-type: none;
    box-shadow: 10px 5px 5px #00000030;
  }

  > li > p {
    font-size: 1rem;
    line-height: 1.5;
    padding: 1rem 0.75rem;
    color: #666666;
  }

  > li > a {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }
`;
