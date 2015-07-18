/* global window:true */
// Service
//
// esFactory() creates a configured client instance. Turn that instance
// into a service so that it can be required by other parts of the application

(function() {
  'use strict';
  angular
    .module('esfront')
    .service('searchClient', searchClient);

  /** @ngInject */
  function searchClient (esFactory){
    var esLocation = 'http://52.2.78.193:9200/';
    return esFactory({
      host: esLocation,
      apiVersion: '1.5',
      log: 'trace'
    });
  }
    
})();