# About

This is a fork of [angular-requireJS Seed](https://github.com/madrid-mobile-developers/angular-requirejs-seed)

* RequireJS 2.1.8
* Full support for unit and e2e tests
* Support for Karma Test Runner 0.10+ (formerly Testacular)

## Changes

* To run e2e tests, you need to have a server running, you could run `node server/js/start.js` from the root folder of this repository to get one.
* There are 2 very similar files bootstraping the app named `main.js` and `main-test.js`. Latter is used only for unit testing where we still use RequireJS (so all your `define` and `require` works) but we don't attach our app to the DOM.
* App has been divided into separate files to hold controllers, filters, directives and services separately. These are all defined as separated Angular modules. In this example all these are required to run the main app but in real-world scenario it's likely that you will have modules that are not needed for certain parts of the applications - use requireJS to load them only as and when needed.

## Installation

    git clone git@github.com:madrid-mobile-developers/backbone-requirejs-nodejs-seed.git

    cd backbone-requirejs-seed
    npm install
    bower install
    npm install -g grunt-cli

## Running

    # Serve static files using your own web server or run
    cd backbone-requirejs-seed
    node server.js

## Testing

    # Under-Construction

    # Run unit tests automatically whenever app changes
    cd backbone-requirejs-seed
    grunt karma

    # Run end to end tests (requires web server to be running)
    cd backbone-requirejs-seed
    grunt karma:e2e

## Develop

    # JSlint + karma (unit tests)
    cd backbone-requirejs-seed
    grunt

## Production

    # Build to distribute client app (dist folder): JSLint + karma (unit tests) + requirejs (optimize one file)
    cd backbone-requirejs-seed
    grunt production