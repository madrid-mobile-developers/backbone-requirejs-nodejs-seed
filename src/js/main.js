/**
 * Created by jarias on 04/11/13.
 */
// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        'underscore': {
            exports: '_'
        },
        'Backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'jquery': {
            exports: 'jquery'
        },
        'jquery-mobile': {
            deps: [
                'jquery'
            ],
            exports: 'jquery-mobile'
        }
    },
    paths: {
        'jquery': '../../lib/jquery/jquery',
        'jquery-mobile': '../../lib/jquery-mobile.min',
        'underscore': '../../lib/underscore-amd/underscore-min',
        'Backbone': '../../lib/backbone-amd/backbone',
        'text': '../../lib/requirejs-text/text'
    },
    waitSeconds: 15
});
require([
    'AppRouter'
],
    function (AppRouter) {
        window.router = new AppRouter();
        Backbone.history.start();
    });