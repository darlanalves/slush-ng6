'use strict';
/* jshint node:true */
var config = {
    app: {
        outputName: 'app.js',
        outputPath: 'public/js',
        entry: './src/app/app.js',
        ignore: ['angular'],
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
        src: ['src/assets/**/*'],
        outputPath: 'public'
    },

    appCss: {
        src: ['sass/**/*.scss', 'src/**/*.scss'],
        outputPath: 'public/css',
        outputName: 'app.css',
        include: [
            // sass include paths
        ]
    }
};

require('ng6-browserify/gulpfile')(config);