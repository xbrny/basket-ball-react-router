import styled from 'styled-components';

const TeamNameCircle = styled.h3`
  height: 150px;
  width: 150px;
  color: blue;
  border: 4px solid blue;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 200ms ease-in-out;
  }
`;

export default TeamNameCircle;
