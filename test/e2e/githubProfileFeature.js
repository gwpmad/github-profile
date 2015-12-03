describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
    //browser is a global created by Protractor, which is used for browser-level
    //commands such as navigation with browser.get.
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds the last Spike', function() {
    searchBox.sendKeys('spike');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
      profiles.last().getText().then(function(response) {
        // http://stackoverflow.com/questions/28811661/protractor-return-an-object-but-expected-value-of-element-gettext
        // getText() returns a promise, therefore we cannot treat the response as a string. In order to
        // manipulate the data as a string, we need to resolve the promise by suffix-ing gettext() with .then
        // The response is passed as an argument to .then, and can subsequently be manipulated and tested.
      expect(response.toLowerCase()).toContain('spike');
    });
  });
});
