import Reflux from 'reflux';

export default Reflux.createActions({
  search : { children : [ 'completed', 'failed' ] },
});
