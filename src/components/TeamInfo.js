import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useTeam from '../hooks/useTeam';
import LoadingAndRedirect from './shared/LoadingAndRedirect';
import _TeamNameCircle from './TeamNameCircle';

export const TeamInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const TeamNameCircle = styled(_TeamNameCircle)`
  margin-bottom: 1.5rem;
`;

export const Badge = styled.span`
  padding: 0.5rem 1.2rem;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 0.2rem 0.5rem;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
`;

const TeamData = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const TeamInfo = ({ id }) => {
  const { team, isLoading, teamNames } = useTeam(id);

  return (
    <LoadingAndRedirect
      isLoading={isLoading}
      objectToCheck={team}
      listToCheck={teamNames}
      listItem={id.toLowerCase()}
      message='Loading Team'
      render={team => (
        <TeamInfoWrapper>
          <TeamNameCircle>{team.name}</TeamNameCircle>
          <TeamData>Established: {team.established}</TeamData>
          <TeamData>Manager: {team.manager}</TeamData>
          <TeamData>Coach: {team.coach}</TeamData>
          <TeamData>Losses: {team.losses}</TeamData>
          <TeamData>Wins: {team.wins}</TeamData>
          <BadgeWrapper>
            {team.championships.map(championship => (
              <Badge key={championship}>{championship}</Badge>
            ))}
          </BadgeWrapper>
          <Link to={`/${team.id}`}>{team.name} Home Page</Link>
        </TeamInfoWrapper>
      )}
    />
  );
};

TeamInfo.propTypes = {
  id: PropTypes.string.isRequired
};

export default TeamInfo;
