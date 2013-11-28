'use strict';

describe('Directive: editable', function () {

  // load the directive's module
  beforeEach(module('directivesApp'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<p editable-one-text editable="value">text</p>');
    scope = $rootScope;
    $compile(element)(scope);
    scope.$digest();
  }));

  it('should show the text within the tag', function () {
    expect(element.find('div').text()).toBe('text');
  });

  it('should initially hide the form', function () {
    var theForm = element.find('form');
    expect(theForm.length).toBe(1);
    expect(theForm.hasClass('sr-only')).toBe(true);
  });
});
