import { useState, useEffect } from 'react';

import { getTeamsArticles } from '../api';

const useFetchArticles = teamId => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [teamId]);

  const fetchData = async () => {
    setIsLoading(true);
    const fetchedData = await getTeamsArticles(teamId);
    setArticles(fetchedData);
    setIsLoading(false);
  };

  return {
    articles,
    isLoading
  };
};

export default useFetchArticles;
