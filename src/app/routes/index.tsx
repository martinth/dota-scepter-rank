import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, ScepterList, ScepterCompare } from 'containers';
import { Home } from 'components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="compare" component={ScepterCompare} />
    <Route path="scepter-list" component={ScepterList} />
  </Route>
);
