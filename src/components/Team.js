import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { getTeam, getTeamNames } from '../api';
import LoadingMessage from './LoadingMessage';

const TeamInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Team = ({ id, render }) => {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [teamNames, setTeamnames] = useState([]);

  useEffect(() => {
    const teamId = id.toLowerCase();
    fetchTeam(teamId);
  }, [id]);

  const fetchTeam = async teamId => {
    setLoading(true);
    const fetchedTeam = await getTeam(teamId);
    setTeam(fetchedTeam);
    const fetchedTeamNames = await getTeamNames();
    console.log('fetchedTeamNames: ', fetchedTeamNames);
    setTeamnames(fetchedTeamNames);
    setLoading(false);
  };

  if (loading || team === null) {
    return (
      <TeamInfoWrapper>
        <LoadingMessage text='Loading Team' />
      </TeamInfoWrapper>
    );
  }

  if (!teamNames.includes(id.toLowerCase())) {
    return <Redirect to='/' />;
  }

  return render(team);
};

Team.propTypes = {
  id: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

export default Team;
