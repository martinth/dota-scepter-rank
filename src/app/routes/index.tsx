import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, ScepterList, ScepterCompare } from 'containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ScepterList} />
    <Route path="compare" component={ScepterCompare} />
  </Route>
);
