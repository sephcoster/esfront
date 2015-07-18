/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  // this.header = this.element(by.css('acme-navbar'));
  this.searchBox = element(by.css('.search_input input'));
  // this.aggregations = this.element(by.css('.aggregation'));
  // this.aggValues = this.aggregations.element(by.css('.aggregation-header'));
  // this.aggRepeater = this.all(by.repeater('(category, obj) in aggregations'));
};

module.exports = new MainPage();
