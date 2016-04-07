/*
 *  Clean
 */
(function() {
  'use strict';

  var Elixir = require('laravel-elixir');

  module.exports = function(gulp, plugins, manifest) {

    Elixir.extend('clean', function() {

      new Elixir.Task('clean', function() {
        console.log('Start Clean Task');
        return (
          gulp.src([
            manifest.paths.dist + 'js',
            manifest.paths.dist + 'css',
            manifest.paths.dist + 'fonts',
            manifest.paths.dist + 'images',
            manifest.paths.build
          ], {
            read: false
          })
          .pipe(plugins.clean())
        );
      });

    });

  };

}());
