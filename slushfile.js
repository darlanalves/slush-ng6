/* jshint node:true */
'use strict';

var gulp = require('gulp');

gulp.task('default', function(exit) {
    var install = require('gulp-install'),
        conflict = require('gulp-conflict'),
        rename = require('gulp-rename'),
        multipipe = require('multipipe'),
        async = require('async');

    async.series([
        function(callback) {
            console.log('Copying files');
            copyTemplateFiles(callback);
        },

        function(callback) {
            console.log('Installing modules');
            runNpm(callback);
        }
    ], function(error) {
        if (error) {
            console.log('[error] ' + error);
        }

        exit();
    });

    function copyTemplateFiles(callback) {
        multipipe(
            gulp.src(__dirname + '/template/**'),
            rename(function(file) {
                if (file.basename[0] === '_') {
                    file.basename = '.' + file.basename.slice(1);
                }
            }),
            conflict('./'),
            gulp.dest('./'),
            onEnd
        );

        function onEnd(error) {

            if (error) {
                console.log('>> Generator failed!!');
                console.log(error);
                callback(error, null);
                return;
            }

            callback(null, true);
        }
    }

    function runNpm(callback) {
        var pipe = multipipe(gulp.src('./package.json'), install());

        pipe.on('end', function() {
            console.log('Modules installed');
            callback(null, true);
        });

        pipe.on('data', function(data) {
            return data;
        });

        pipe.on('error', function(err) {
            callback(err, null);
        });
    }
});
