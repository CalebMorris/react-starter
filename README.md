# React Starter

Starter template for react and webpack with Reflux

## Local Installation

1. Install [node.js](https://nodejs.org)
1. `git clone -o starter git@github.com:CalebMorris/react-starter.git <REPONAME>
1. npm install

## Development server

1. `npm run dev-server` Start webpack-dev-derver
1. `npm run start-dev` Run seperate console
1. Visit `http://localhost:8080/` in browser

### Info

The configuration is `webpack-dev-server.config.js`.

It automatically recompiles and refreshes the page when files are changed.

Also check the [webpack-dev-server documentation](http://webpack.github.io/docs/webpack-dev-server.html).


## Hot Module Replacement development server

1. `npm run hot-dev-server` Start webpack-dev-derver in HMR mode
1. `npm run start-dev` Run seperate console
1. Visit `http://localhost:8080/` in browser

### Info

The configuration is `webpack-hot-dev-server.config.js`.

It automatically recompiles when files are changed. When a hot-replacement-enabled file is changed (i. e. stylesheets or React components) the module is hot-replaced. If Hot Replacement is not possible the page is refreshed.

Hot Module Replacement has a performance impact on compilation.


## Production compilation and server

1. `npm run build` bundle client
1. `npm run start` start server in production mode
1. Visit `http://localhost:8080/` in browser


### Info

The configuration is `webpack-production.config.js`.

The server is at `lib/server.js`

The production setting builds two configurations: one for the client (`build/public`) and one for the serverside prerendering (`build/prerender`).
