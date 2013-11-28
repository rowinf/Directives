'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('directivesApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.input.text.length).toBe(4);
  });

  it('should be able to add a single item', function () {
    var items = scope.input.text.length;
    scope.addItem();
    expect(scope.input.text.length).toBe(items + 1);
  });
});
