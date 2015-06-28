(function() {
  'use strict';

  angular
    .module('esfront')
    .directive('result', result);

  /** @ngInject */
  function result() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/result/result.html',
      scope: {
          result: '=result'
      }
    };

    return directive;

  }

})();