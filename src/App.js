import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from './components/constant';
import Navbar from './components/Navbar';
import LoadingMessage from './components/LoadingMessage';

const Home = lazy(() => import('./components/Home'));
const PlayersPage = lazy(() => import('./components/PlayersPage'));
const TeamsPage = lazy(() => import('./components/TeamsPage'));
const TeamPage = lazy(() => import('./components/TeamPage'));
const ArticlesPage = lazy(() => import('./components/ArticlesPage'));
const NotFound = lazy(() => import('./components/NotFound'));

const Container = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            <Route path={ROUTES.HOME} exact component={Home} />
            <Route path={ROUTES.PLAYERS} component={PlayersPage} />
            <Route path={ROUTES.TEAMS} component={TeamsPage} />
            <Route
              path='/:teamId'
              exact
              render={({ match }) => <TeamPage id={match.params.teamId} />}
            />
            <Route path='/:teamId/articles' component={ArticlesPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
