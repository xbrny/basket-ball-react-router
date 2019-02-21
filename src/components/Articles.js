import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getTeamsArticles } from '../api';
import LoadingMessage from './LoadingMessage';

const ArticlesWrapper = styled.ul`
  margin: 5rem auto 3rem;
  .header {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }
  .article {
    margin-bottom: 1rem;
  }
  .article-title {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 0.3rem;
  }
  .article-date {
    font-size: 1rem;
    font-weight: normal;
    color: #666;
  }
`;

const Articles = ({ teamId }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, [teamId]);

  const fetchArticles = async () => {
    setLoading(true);
    const fetchedArticles = await getTeamsArticles(teamId);
    setArticles(fetchedArticles);
    setLoading(false);
  };

  if (loading || !articles.length) {
    return (
      <LoadingMessage style={{ margin: '3rem auto' }} text='Loading Articles' />
    );
  }

  return (
    <ArticlesWrapper>
      <h1 className='header'>Articles</h1>
      {articles.map(article => (
        <div key={article.id} className='article'>
          <Link to={`/${teamId}/articles/${article.id}`}>
            <h1 className='article-title'>{article.title}</h1>
          </Link>
          <h3 className='article-date'>{article.date.toLocaleString()}</h3>
        </div>
      ))}
    </ArticlesWrapper>
  );
};

Articles.propTypes = {
  teamId: PropTypes.string.isRequired
};

export default Articles;
