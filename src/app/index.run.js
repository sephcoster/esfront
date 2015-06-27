(function() {
  'use strict';

  angular
    .module('esfront')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
