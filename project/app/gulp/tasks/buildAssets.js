/*
 *  Build and copy all assets
 */
(function() {
  'use strict';

  var Elixir = require('laravel-elixir');
  var inSequence = require('run-sequence');

  module.exports = function(gulp, plugins, manifest) {

    var assetBuilder = {};
    var watchDir = manifest.getProjectGlobs();
    // override css globs to watch for all scss and css changes
    if(typeof watchDir.css !== 'undefined' && Array.isArray(watchDir.css)){
      watchDir.css.push(manifest.paths.source + '**/*.scss');
      watchDir.css.push(manifest.paths.source + '**/*.css');
    }

    // build JS dependencies
    assetBuilder.js = function (){
      manifest.forEachDependency('js', function(dep) {
        gulp.src(dep.globs, {
            base: 'js'
          })
          .pipe(plugins.jshint())
          .pipe(plugins.if(manifest.enabled.maps, plugins.sourcemaps.init()))
          .pipe(plugins.concat(dep.name))
          .pipe(plugins.if(manifest.enabled.maps, plugins.sourcemaps.write('.')))
          .pipe(gulp.dest(manifest.paths.dist + 'js'));
      });
    };

    // build CSS dependencies
    assetBuilder.css = function(){
      return manifest.forEachDependency('css', function(dep) {
        gulp.src(dep.globs)
          .pipe(plugins.if(manifest.enabled.maps, plugins.sourcemaps.init()))
          .pipe(plugins.if('*.scss', plugins.sass()))
          .pipe(plugins.concat(dep.name))
          .pipe(plugins.if(manifest.enabled.maps, plugins.sourcemaps.write('.')))
          .pipe(gulp.dest(manifest.paths.dist + 'css'));
      });
    };

    // copy fonts dependencies
    assetBuilder.fonts = function() {
      gulp.src(manifest.globs.fonts)
        .pipe(plugins.flatten())
        .pipe(gulp.dest(manifest.paths.dist + 'fonts'));
    };

    // define elixir task
    Elixir.extend('buildAssets', function(assetType) {
      new Elixir.Task('buildAssets_'+assetType, function() {
        gulp.task('buildAssets_'+assetType, assetBuilder[assetType]);
        return inSequence('buildAssets_'+assetType);
        // return new assetBuilder[assetType]();
      })
      .watch(watchDir[assetType]);
    });


  };

}());
