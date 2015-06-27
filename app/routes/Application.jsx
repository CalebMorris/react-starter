import React from 'react';
import { RouteHandler } from 'react-router';
import MainMenu from 'components/MainMenu';

const Application = React.createClass({

  render() {
    return (
      <div>
        <h1>{'react-starter'}</h1>
        <MainMenu />
        <RouteHandler />
      </div>
    );
  },

});

export default Application;
