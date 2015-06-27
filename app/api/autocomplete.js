
const client = null; // API Rest client

export default {
  search : (options) => {
    return client({
      path : '/api/search/homes/autocomplete',
      params : {
        filters : options.filters || {},
      },
    });
  },
};
