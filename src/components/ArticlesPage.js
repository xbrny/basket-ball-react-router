import React from 'react';
import { Route } from 'react-router-dom';

import useFetchArticles from '../hooks/useFetchArticles';
import Sidebar from './Sidebar';
import { MainGrid, MainContentColumn } from './Layout';
import Article from './Article';

const ArticlePage = props => {
  const { match } = props;
  const { teamId } = match.params;

  const { articles, isLoading } = useFetchArticles(teamId);

  return (
    <MainGrid>
      <Sidebar
        title='Articles'
        list={articles.map(article => article.title)}
        loading={isLoading}
        {...props}
      />
      <MainContentColumn>
        <Route
          path={`${match.url}/:articleId`}
          render={({ match }) => (
            <Article teamId={teamId} id={match.params.articleId} />
          )}
        />
      </MainContentColumn>
    </MainGrid>
  );
};

export default ArticlePage;
