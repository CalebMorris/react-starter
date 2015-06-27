import routes from "../app/mainRoutes";

import Router from "react-router";
import React from "react";

function startApplication() {

  // Load the routes (needs to be loaded after config)
  var router = Router.create({
    routes: routes
  });
  // var RouterActions = require("./actions/router");

  // Require all stores to ensure they are listening
  // require("./stores/admin");

  router.run(function(Handler, state) {

    React.render(
      <Handler params={state.params} query={state.query} />,
      document.getElementsByTagName("body")[0]
    );

  });

}


document.addEventListener("DOMContentLoaded", function() {
  startApplication();
});
