import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as ROUTES from './constant';
import {
  TeamNameCircle,
  TeamInfoWrapper,
  Badge,
  BadgeWrapper
} from './TeamInfo';
import Articles from './Articles';
import useTeam from '../hooks/useTeam';
import LoadingAndRedirect from './shared/LoadingAndRedirect';

const TeamDataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;
const TeamDataColumn = styled.div`
  label {
    display: block;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
  text-align: center;
  font-size: 1.5rem;
`;

const TeamPage = ({ id }) => {
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
          <Link
            styles={{ margin: '2rem auto' }}
            to={{
              pathname: ROUTES.PLAYERS,
              search: `?teamId=${team.id}`
            }}
          >
            View Roster
          </Link>
          <BadgeWrapper>
            {team.championships.map(championship => (
              <Badge key={championship}>{championship}</Badge>
            ))}
          </BadgeWrapper>
          <TeamDataGrid>
            <TeamDataColumn>
              <label>Established</label>
              {team.established}
            </TeamDataColumn>
            <TeamDataColumn>
              <label>Manager</label>
              {team.manager}
            </TeamDataColumn>
            <TeamDataColumn>
              <label>Coach</label>
              {team.coach}
            </TeamDataColumn>
            <TeamDataColumn>
              <label>Record</label>
              {team.wins} - {team.losses}
            </TeamDataColumn>
          </TeamDataGrid>

          <Articles teamId={team.id} />
        </TeamInfoWrapper>
      )}
    />
  );
};

TeamPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default TeamPage;
