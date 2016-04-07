/*
 * App module
 */
(function() {
  'use strict';

  var dependencies = [
    'App.environment',
    'App.service',
    'App.factory',
    'App.controller',
    'App.directive',
    'App.constant',
    'App.filter'
  ];

  // App module defintions
  angular.module('App.environment', []);
  angular.module('App.service', []);
  angular.module('App.factory', []);
  angular.module('App.controller', []);
  angular.module('App.directive', []);
  angular.module('App.constant', []);
  angular.module('App.filter', []);


  /**
   * @method init
   * @description initializes the app dependencies
   */
  function init() {
    if (dependencyCheck(dependencies)) {
      loadModules();
    }
  }

  /**
   * @method loadModules
   * @description load the module dependencies
   */
  function loadModules() {
    try {
      // Define modules
      angular.module('LaravelApp', []);
      angular.module('LaravelApp', dependencies);
    } catch (exception) {
      throw ' Error: missing dependency' + exception;
    }
  }

  /**
   * @method dependencyCheck
   * @description traverse the dependency array to check which one may be missing
   * @param  {Array} dependencies
   * @return {Boolean} true if there wasn't any error
   */
  function dependencyCheck(dependencies) {
    for (var i = 0, length = dependencies.length; i < length; i++) {
      try {
        angular.module(dependencies[i]);
      } catch (e) {
        throw ' Application dependency not found ' + dependencies[i];
      }
    }
    return true;
  }

  // Initialize
  init();
})();
