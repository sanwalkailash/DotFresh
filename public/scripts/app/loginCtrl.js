/**
 * Created by kailash on 27/10/16.
 */
/**
 * Created by kailash on 26/10/16.
 */
define(['angular'],function(angular){
    'use strict';
    var newModule = angular.module('loginCtrl', []);
    newModule.controller('loginCtrl', ['$scope','$location',
        function ($scope,$location) {
            console.log("in loginCtrl");

            $scope.login = function () {
                $location.path('/home')
            }


        }
    ]);
});
