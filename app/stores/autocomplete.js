import _ from 'lodash';
import Reflux from 'reflux';

import AutocompleteActions from '../actions/autocomplete';

// import AutocompleteAPI from '../api/autocomplete';

export default Reflux.createStore({
  listenables : AutocompleteActions,

  onSearch : function(filters) {
    // return AutocompleteAPI.search({
    //   filters : filters,
    // })
    // .then(AutocompleteActions.search.completed)
    // .catch(AutocompleteActions.search.failed);

    AutocompleteActions.search.completed(_.map([1, 2, 3], (k) => {
      return '' + filters + k;
    }));
  },

});
