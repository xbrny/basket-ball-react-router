import React from 'react';
import styled from "styled-components";

import useFetchArticle from '../hooks/useFetchArticle';
import LoadingAndRedirect from './shared/LoadingAndRedirect';

const ArticleHeader = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`
const ArticleDate = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`
const ArticleBody = styled.p`
  font-size: 1rem;
  color: #3b3b3b;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  line-height: 1.5rem;
`

const Article = ({ teamId, id }) => {
  const { article, isLoading } = useFetchArticle(teamId, id);
  console.log('article: ', article);

  return (
    <LoadingAndRedirect
      isLoading={isLoading}
      objectToCheck={article}
      message='Loading Article'
      render={article => (
        <div>
          <ArticleHeader>{article.title}</ArticleHeader>
          <ArticleDate>{article.date.toLocaleString()}</ArticleDate>
          <ArticleBody>{article.body}</ArticleBody>
        </div>
      )}
    />
  );
};

export default Article;
