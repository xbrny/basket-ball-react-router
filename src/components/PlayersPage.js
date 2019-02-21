import React, { useState, useEffect } from 'react';
import { parse } from 'query-string';
import { Route } from 'react-router-dom';
import slug from 'slug';

import { getPlayers } from '../api';
import { MainGrid, MainContentColumn } from './Layout';
import Sidebar from './Sidebar';
import PlayerInfo from './PlayerInfo';

const Players = props => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { location, match } = props;

  useEffect(() => {
    if (location.search) {
      const query = parse(location.search);
      fetchPlayers(query.teamId);
    } else {
      fetchPlayers();
    }
  }, [location.search]);

  const fetchPlayers = async teamId => {
    setLoading(true);
    const players = await getPlayers(teamId);
    setPlayers(players);
    setLoading(false);
  };

  const playerNames = players.map(player => player.name);

  return (
    <MainGrid>
      <Sidebar
        list={playerNames}
        title='Players'
        loading={loading}
        {...props}
      />
      <MainContentColumn>
        {!loading && location.pathname === `${match.url}` ? (
          <p>Select a player</p>
        ) : null}
        <Route
          path={`${match.url}/:playerId`}
          render={({ match }) => {
            if (loading) return null;

            const player = players.find(
              player => slug(player.name) === match.params.playerId
            );

            return <PlayerInfo player={player} />;
          }}
        />
      </MainContentColumn>
    </MainGrid>
  );
};

export default Players;
