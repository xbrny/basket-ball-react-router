import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const PlayerProfileImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  padding: 2rem;
`;

const PlayerProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PlayerName = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

const PlayerNumber = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
  margin: 1.5rem auto;
`;

const Stats = styled.ul`
  margin: 1.5rem auto;
  width: 300px;
  text-align: left;
`

const StatsData = styled.li`
  margin-bottom: 0.5rem;
  label {
    font-weight: bold;
  }
`

const UserInfo = ({ player }) => {
  const { name, avatar, apg, number, position, ppg, rpg, spg, teamId } = player;
  return (
    <PlayerProfileWrapper>
      <PlayerProfileImage src={avatar} alt={`${name} profile photo`} />
      <PlayerName>{name}</PlayerName>
      <PlayerNumber>#{number}</PlayerNumber>

      <Stats>
        <StatsData><label>Team</label>: <Link to={`/${teamId}`}>{teamId}</Link></StatsData>
        <StatsData><label>Position</label>: {position}</StatsData>
        <StatsData><label>APG</label>: {apg}</StatsData>
        <StatsData><label>PPG</label>: {ppg}</StatsData>
        <StatsData><label>RPG</label>: {rpg}</StatsData>
        <StatsData><label>SPG</label>: {spg}</StatsData>
      </Stats>
    </PlayerProfileWrapper>
  );
};

export default UserInfo;
