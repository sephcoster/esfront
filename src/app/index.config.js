(function() {
  'use strict';

  angular
    .module('esfront')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('indigo')
    .warnPalette('deep-orange');
  }

})();
