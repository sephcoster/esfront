(function() {
  'use strict';

  angular
    .module('esfront')
    .controller('MainController', MainController);

  /* global ejs:false */

  /** @ngInject */
  function MainController($timeout, $scope, searchClient, $mdSidenav) {
    var vm = this;

    vm.classAnimation = '';

    $scope.resultsShown = false;
    $scope.search_creator_class = 'search_creator';
    
    var highlightPost = ejs.Highlight(['JobSummary'])
      .numberOfFragments(1, 'JobSummary')
      .fragmentSize(350, 'JobSummary');

    $scope.queryIndex = 0;
    $scope.sort = '_score';
    $scope.sortOrder = 'desc';
    $scope.sortOptions = ['_score', 'created_time', 'severity', 'dispute_resolution'];
    $scope.size = 25;
    $scope.sizeOptions = [10,25,50,100];
    $scope.time_returned = new Date();
    $scope.lastQueryText = '';

    $scope.searchPerformed = function () {
      $scope.resultsShown = true;
      $scope.search_creator_class = 'search_creator-small';
    };

    $scope.sendQuery = function ( ) {
        searchClient.search({
          body: ejs.Request() //This is an example request with a few ejs params
                  .from( $scope.queryIndex )
                  .size( $scope.size )
                  .query(ejs.QueryStringQuery( $scope.queryText ))
                  .agg(ejs.TermsAggregation('Organization').field('Organization').size(5))
                  .agg(ejs.TermsAggregation('Locations').field('Locations').size(5))
                  .agg(ejs.TermsAggregation('Grade').field('Grade').size(5))
                  .highlight( highlightPost )
                  .sort( $scope.sort, $scope.sortOrder )
        }).then(function (body) {
          $scope.time_returned = new Date();
          $scope.hits = body.hits.hits;
          console.log('Scope hits: ', $scope.hits );
          $scope.lastQueryText = $scope.queryText;
          $scope.aggregations = body.aggregations;
          $scope.number_results = body.hits.total;
          $scope.time_taken = body.took;
          $scope.searchPerformed();
          $scope.err = false;
        }, function (error) {
          $scope.err = new Error(error.message);
        });
    };


  }
})();
