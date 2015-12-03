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

  it('finds profiles', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
    expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  });
});
