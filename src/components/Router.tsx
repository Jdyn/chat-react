import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatContainer from '../containers/ChatContainer';

const routes = {
  home: '/',
};

const Router = () => (
  <Switch>
    <Route exact path={routes.home} component={ChatContainer} />
    <Redirect to={routes.home} />
  </Switch>
);

export default Router;
