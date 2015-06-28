/* global moment:false */
(function() {
  'use strict';

  angular
    .module('esfront')
    .constant('searchConfig', searchConfig)
    .constant('moment', moment);

  function searchConfig(){
    var options = {};

    options.default_return_size = 25;
    options.aggregations =[
      { name: "Organization",
        field: "OrganizationName"
      },
      { name: "Grade",
        field: "Grade"
      },
      { name: "Location",
        field: "Location"
      },        
    ];
    options.aggregation_size = 5;

    return options;
  }

})();
