import { useState, useEffect } from 'react';

import { getArticle } from '../api';

const useFetchArticle = (teamId, id) => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [teamId, id]);

  const fetchData = async () => {
    setIsLoading(true);
    const fetchedData = await getArticle(teamId, id);
    setArticle(fetchedData);
    setIsLoading(false);
  };

  return {
    article,
    isLoading
  };
};

export default useFetchArticle;
