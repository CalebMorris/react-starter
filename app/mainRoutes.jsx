import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

/* eslint-disable no-multi-spaces */
// Only import from `route-handlers/*`
import Application  from 'routes/Application';
import HomePage     from 'routes/HomePage';
import NotFoundPage from 'routes/NotFoundPage';
/* eslint-enable */

// polyfill
if(!Object.assign)
  Object.assign = React.__spread; // eslint-disable-line no-underscore-dangle

// export routes
module.exports = (
  <Route name='app' path='/' handler={Application}>
    <Route name='home' path='/home' handler={HomePage} />
    <DefaultRoute handler={HomePage} />
    <NotFoundRoute handler={NotFoundPage} />
  </Route>
);
