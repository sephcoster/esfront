'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should have a search bar', function() {
    page.searchBox.sendKeys('Chicago');
    var results = element.all(by.repeater('hit in hits'));
    expect(results.count()).toBe(25);
  });

});
