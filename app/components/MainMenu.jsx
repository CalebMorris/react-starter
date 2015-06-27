import React from 'react';
import { Link } from 'react-router';

const MainMenu = React.createClass({

  render() {
    return (
      <div>
        <h2>MainMenu:</h2>
        <ul>
          <li>The <Link to='home'>home</Link> page.</li>
        </ul>
      </div>
    );
  },

});

export default MainMenu;
