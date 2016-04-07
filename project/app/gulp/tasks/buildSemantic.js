/*
 *  Build Semantic UI with proposed theme configurations
 */
(function() {
  'use strict';

  module.exports = function(gulp, plugins, manifest) {
    var config = manifest.config;
    var runSequence = require('run-sequence').use(gulp);

    // define paths
    var semanticLib = config.paths.bower + '/semantic';
    var semanticSrc = semanticLib + '/src';
    var semanticGulpTasks = semanticLib + '/tasks';
    var semanticJson = config.paths.resources + '/semantic/semantic.json';
    var semanticTheme = config.paths.resources + '/semantic/theme.config';
    var semanticInstallJs = config.paths.resources + '/semantic/install.js';
    var semanticSite = config.paths.resources + '/semantic/site/**';

    var prefixCommand = 'cd ' + semanticLib + ' && ';

    return function(callback) {

      // copy semantic json
      gulp.task('_semanticJson', function() {
        return gulp.src(semanticJson)
          .pipe(gulp.dest(semanticLib));
      });
      // copy theme config
      gulp.task('_semanticTheme', function() {
        return gulp.src(semanticTheme)
          .pipe(gulp.dest(semanticSrc));
      });
      // copy install js
      gulp.task('_semanticInstallJs', function() {
        return gulp.src(semanticInstallJs)
          .pipe(gulp.dest(semanticGulpTasks));
      });
      // copy site folder
      gulp.task('_semanticSite', function() {
        return gulp.src(semanticSite)
          .pipe(gulp.dest(semanticSrc + '/site'));
      });

      // install semantic dependencies and run build task
      gulp.task('_semanticBuild', function() {
        gulp.src(semanticLib)
          .pipe(plugins.shell([
            prefixCommand + 'npm install',
            prefixCommand + 'gulp build'
          ], {
            verbose: true
          }))
          .on('end', function() {
            callback();
          });
      });

      return runSequence(
        '_semanticJson',
        '_semanticTheme',
        '_semanticInstallJs',
        '_semanticSite',
        '_semanticBuild'
      );
    };
  };

}());
