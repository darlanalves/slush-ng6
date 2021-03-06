'use strict';
/* jshint node:true */
var config = {
    app: {
        outputName: 'app.js',
        outputPath: 'public/js',
        entry: './app.js',
        ignore: ['angular'],
        include: ['src'],
        // NOTE: add builtins here when necessary
        builtins: []
    },

    vendorFiles: {
        src: [
            // vendor files copied to /public
            'node_modules/angular/angular.js',
            'node_modules/angular/angular.min.js'
        ],
        outputPath: 'public'
    },

    assets: {
        src: ['static/**/*'],
        outputPath: 'public'
    },

    appCss: {
        src: ['sass/**/*.scss', 'src/**/*.scss'],
        outputPath: 'public/css',
        outputName: 'app.css',
        include: [
            // sass include paths
            process.cwd() + '/sass'
        ]
    },

    // file paths replaced on content of 'index.html' while
    // compressing the project
    bundleReplacedFiles: {
        'angular.js': 'angular.min.js',
        'app.js': 'app.min.js'
    }
};

require('ng6-browserify/gulpfile')(config);