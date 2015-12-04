describe('GitUserSearchController', function() {
  var ctrl, searchFake, scope;

  beforeEach(module('GitUserSearch'));

  beforeEach(function() {
    searchFake = jasmine.createSpyObj('searchFake', ["query"]);
    module({
      Search: searchFake
    });
  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope;
  }));

  beforeEach(inject(function($q) {
    searchFake.query.and.returnValue($q.when({
      data: {
        items: items
      } // the $q.when bit means 'when a 'when'
      //query is made (as it is in the $http part
      //of searchFactory), return the following
      //(i.e. the object literal) as the response.'
      // The response can then be used as the
      //argument in the .then part of doSearch().
    }));
  }));



  describe('When searching for a user', function() {

    it('initializes with an empy search result and term', function() {
      expect(ctrl.searchResult).toBeUndefined();
      expect(ctrl.searchTerm).toBeUndefined();
    });
    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      scope.$apply(); // checks for any differences in the page - calling this apply method on the scope of the whole page instead of just the current test
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });

});
