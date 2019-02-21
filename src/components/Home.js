import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getTeamNames } from '../api';
import TeamNameCircle from "./TeamNameCircle";

const HomeHeader = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10vh;
`;

const SelectTeamMessage = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 5rem;
`;

const TeamNameCircleWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: space-around;
`;

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeamNames().then(teams => setTeams([...teams]));
  }, []);

  return (
    <div>
      <HomeHeader>Hash History Basketball League</HomeHeader>
      <SelectTeamMessage>Select Your Team</SelectTeamMessage>
      <TeamNameCircleWrapper>
        {teams.map(team => (
          <Link key={team} to={team}>
            <TeamNameCircle>{team}</TeamNameCircle>
          </Link>
        ))}
      </TeamNameCircleWrapper>
    </div>
  );
};

export default Home;
