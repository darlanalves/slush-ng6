module.exports = function(config) {
    var baseConfig = require('ng6-browserify/karma.conf');
    baseConfig(config);

    config.set({
        files: [
            require.resolve('babel-polyfill/browser'),
            'node_modules/angular/angular.js',
            'test/fixtures.js',
            'src/**/*.spec.js',
            'test/*.js',

            {
                pattern: 'test/fixture/*.json',
                watched: true,
                served: true,
                included: false
            }
        ]
    });

    config.browserify.paths = ['src', 'mock', 'test'];
};