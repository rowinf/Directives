'use strict';

angular.module('directivesApp')
  .directive('editableOneText', function ($timeout) {
    /*
     * A bootstrap ready directive that appends a hidden form to the element 
     * Configure the directive with the value that you wish to edit
     */
    return {
      transclude: true,
      restrict: 'A',
      scope: {editable: '='},
      template: '<div ng-transclude ng-click="showForm()"></div>' +
                '<form class="sr-only" ng-submit="saveEdit()">' +
                  '<div class="input-group">' +
                    '<input type="text" class="form-control" ng-model="tempVal" ng-blur="hideForm()">' +
                    '<span class="input-group-btn">' +
                      '<button class="btn btn-default" type="submit">Save</button>' +
                      '<button class="btn btn-default" type="button" ng-click="hideForm()">Cancel</button>' +
                '</span></div></form>',
      link: function (scope, ele) {
        scope.tempVal = scope.editable;
        // save the changes to the parent scope value
        scope.saveEdit = function() {
          scope.editable = scope.tempVal;
          scope.hideForm();
        };
        scope.showForm = function() {
          ele.find('form').removeClass('sr-only');
          ele.find('div').eq(0).addClass('sr-only');
          $timeout(function() {
            ele.find('input')[0].select();
          });
        };
        scope.hideForm = function() {
          ele.find('form').addClass('sr-only');
          ele.find('div').eq(0).removeClass('sr-only');
        };
      }
    };
  });
