import styled from 'styled-components';

export const StyledQuestionDetails = styled.div``;

export const StyledChoices = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;

  > li {
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    list-style-type: none;
    box-shadow: 0.5rem 0.25rem 0.25rem #00000030;
    padding: 0.5rem;
  }

  > li > p {
    font-size: 1rem;
    line-height: 1.5;
    padding: 1rem 0.75rem;
    color: #666666;
    font-weight: 700;
  }

  > li > button {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    background-color: goldenrod;
    text-decoration: none;
    color: white;
    border-radius: 0.25rem;
    text-align: center;
    display: inline-block;
    transition: all 0.3s;
    outline: none;
  }

  > li > button:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
