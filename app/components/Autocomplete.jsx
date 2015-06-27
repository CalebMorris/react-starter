import _ from 'lodash';
import Autosuggest from 'react-autosuggest';
import React from 'react';
import Reflux from 'reflux';

import AutocompleteActions from '../actions/autocomplete';

const Autocomplete = React.createClass({

  mixins : [ Reflux.ListenerMixin ],

  propTypes : {
    minimumLength : React.PropTypes.number, // Min number of characters before beginning search
    searchDelay : React.PropTypes.number, // Miliseconds to start search
  },

  getDefaultProps() {
    return {
      minimumLength : 3,
    };
  },

  getInitialState() {
    return {
      query : '',
    };
  },

  componentWillMount : function() {
    this.listenTo(AutocompleteActions.search.completed, this.onSearchResults);
  },

  getSuggestions(query, callback) {

    if (this.state.query.length >= this.props.minimumLength) {
      this.search(query);
      this.searchResultsHandler = callback;
    }

    this.setState({ searching : true });

  },

  getSuggestionValue() {
    return this.state.query;
  },

  search() {
    _.debounce(AutocompleteActions.search, this.props.searchDelay)(...arguments);
  },

  handleSearchChange(query) {
    this.setState({
      query : query,
    });
  },

  onSearchResults : function(results) {
    this.setState(
      {
        searching : false,
        results : results,
      },
      () => {
        this.searchResultsHandler(null, [
          {
            sectionName : 'Results',
            suggestions : results,
          },
        ]);
      }
    );
  },

  onSuggestionSelected(suggestion, e) {
    e.preventDefault();

    console.log('suggestion selected', suggestion);
  },

  onSubmit(e) {
    e.preventDefault();
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <Autosuggest
            ref="autosuggest"
            suggestions={this.getSuggestions}
            suggestionValue={this.getSuggestionValue}
            onSuggestionSelected={this.onSuggestionSelected}
            disableCache={true}
            inputAttributes={{
              onChange : this.handleSearchChange,
              placeholder : 'Search...',
              value : this.state.query,
            }}
          />
        </div>
      </form>
    );
  },

});

export default Autocomplete;
