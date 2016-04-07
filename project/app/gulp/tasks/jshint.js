/*
 *  JS Hint
 */
(function() {
  'use strict';

  module.exports = function(gulp, plugins, manifest) {
    return function(){
      gulp.src(manifest.paths.source + 'js/**/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
    };
  };

}());
