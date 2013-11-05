var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src/js',

    paths: {
        'jquery': '../../lib/jquery',
        'underscore': '../../lib/underscore',
        'angular': '../../lib/angular/angular',
        'angularRoute': '../../lib/angular-route/angular-route',
        'angularMocks': '../../lib/angular-mocks/angular-mocks',
        'text': '../../lib/requirejs-text/text'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});





