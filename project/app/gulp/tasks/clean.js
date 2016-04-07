/*
 *  Clean
 */
(function() {
  'use strict';

  var inSequence = require('run-sequence');

  module.exports = function(gulp, plugins, manifest) {
    return function(callback) {
      var _clean = gulp.src([
          manifest.paths.dist + 'js',
          manifest.paths.dist + 'css',
          manifest.paths.dist + 'fonts',
          manifest.paths.dist + 'images',
          manifest.paths.build
        ], {
          read: false
        })
        .pipe(plugins.clean())
        .on('end', function(){
          console.log('Clean Finished');
        });

      gulp.task('_clean', function() {
        return _clean;
      });
      inSequence('_clean', callback);
    };
  };

}());
