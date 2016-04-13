(function() {
  'use strict';

  var elixir = require('laravel-elixir');
  var gulp = require('gulp');

  var plugins = require('gulp-load-plugins')();
  var argv = require('yargs').argv;
  var manifest = require('asset-builder')('resources/assets/manifest.json');

  var inSequence = require('run-sequence');


  // CLI options
  manifest.enabled = {
    // Enable static asset revisioning when `--production`
    rev: argv.production,
    // Disable source maps when `--production`
    maps: !argv.production,
    // Fail styles task on error when `--production`
    failStyleTask: argv.production
  };

  function getTask(task) {
    return require('./gulp/tasks/' + task)(gulp, plugins, manifest);
  }

  // getTask('clean');
  getTask('buildAssets');

  // define tasks
  gulp.task('clean', getTask('clean'));
  gulp.task('jshint', getTask('jshint'));
  gulp.task('buildSemantic', getTask('buildSemantic'));

  gulp.task('build', ['clean', 'buildSemantic'], function(callback){
    inSequence('default', callback);
  });
  gulp.task('buildVersion', function(callback){
    inSequence('version', 'copy', callback);
  });

  elixir(function(mix) {
    mix
      .task('jshint')
      .buildAssets('js')
      .buildAssets('css')
      .buildAssets('fonts')
      .version([
        'js',
        'css'
      ])
      .copy(manifest.paths.dist + 'fonts', manifest.paths.build + 'fonts/');
  });


}());
