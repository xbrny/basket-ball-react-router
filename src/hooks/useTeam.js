import { useState, useEffect } from 'react';
import { getTeam, getTeamNames } from '../api';

const useTeam = id => {
  const [team, setTeam] = useState(null);
  const [teamNames, setTeamNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const lowercaseId = id.toLowerCase();
    fetchTeam(lowercaseId);
  }, [id]);

  const fetchTeam = async id => {
    setIsError(false);
    setIsLoading(true);
    try {
      const fetchedTeam = await getTeam(id);
      setTeam(fetchedTeam);
      const fetchedTeamNames = await getTeamNames();
      setTeamNames(fetchedTeamNames);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return { team, teamNames, isLoading, isError };
};

export default useTeam;
