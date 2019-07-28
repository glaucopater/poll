import styled from 'styled-components';

export const StyledVoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-basis: 50%;
  color: ${props => (props.isUserVote ? 'green' : 'black')};

  > button {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    background-color: forestgreen;
    text-decoration: none;
    color: white;
    border-radius: 0.25rem;
    text-align: center;
    display: inline-block;
    transition: all 0.3s;
    outline: none;
    border: none;
  }

  > button:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
