import React from 'react';

import Autocomplete from '../components/Autocomplete';

const HomePage = React.createClass({

  render() {
    return (
      <div>
        <h2>Autocomplete</h2>
        <p>
          <Autocomplete />
        </p>
      </div>
    );
  },

});

export default HomePage;
