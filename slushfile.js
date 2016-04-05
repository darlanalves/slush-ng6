/* jshint node:true */
'use strict';

var gulp = require('gulp');

gulp.task('default', function(exit) {
    var install = require('gulp-install'),
        conflict = require('gulp-conflict'),
        rename = require('gulp-rename'),
        multipipe = require('multipipe'),
        async = require('async');


    copyTemplateFiles();

    function copyTemplateFiles() {
        console.log('Copying files');

        multipipe(
            gulp.src(__dirname + '/template/**'),
            rename(function(file) {
                if (file.basename[0] === '_' && file.extname !== '.scss') {
                    file.basename = '.' + file.basename.slice(1);
                }
            }),
            conflict('./'),
            gulp.dest('./'),
            onEnd
        );

        function onEnd(error) {
            if (error) {
                console.log('[error]', error);
            } else {
                console.log('Generation completed. Don`t forget to install the npm packages');
            }

            exit();
        }
    }
});
