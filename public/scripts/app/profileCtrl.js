/**
 * Created by kailash on 26/10/16.
 */
define(['angular'],function(angular){
    'use strict';
    var newModule = angular.module('profileCtrl', []);
    newModule.controller('profileCtrl', ['$scope',
        function ($scope) {
            console.log("in Profile");
            $scope.similiarItems = false;
            $scope.itemDetails = true;

        }
    ]);
});
