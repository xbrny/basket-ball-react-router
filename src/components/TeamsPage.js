import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { getTeamNames } from '../api';
import Sidebar from './Sidebar';
import { MainGrid, MainContentColumn } from './Layout';
import TeamInfo from './TeamInfo';

const Teams = props => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const { match, location } = props;

  const fetchTeams = async () => {
    setLoading(true);
    const fetchedTeams = await getTeamNames();
    setTeams([...fetchedTeams]);
    setLoading(false);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <MainGrid>
      <Sidebar
        list={teams.map(team => team[0].toUpperCase() + team.slice(1))}
        title='Teams'
        loading={loading}
        {...props}
      />
      <MainContentColumn>
        {!loading && location.pathname === `${match.url}` ? (
          <p>Select a team</p>
        ) : null}

        <Route
          path={`${match.url}/:teamId`}
          render={({ match }) => <TeamInfo id={match.params.teamId} />}
        />
      </MainContentColumn>
    </MainGrid>
  );
};

export default Teams;
