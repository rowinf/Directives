'use strict';

angular.module('directivesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.input = {
    	text: ['text1', 'second value', 'test 123', 'omg test alrady']
    };
    $scope.addItem = function () {
    	$scope.input.text.push('new item');
    }
  });
