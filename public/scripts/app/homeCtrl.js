define(['angular'],function(angular){
    'use strict';
    var LoginCtrl = angular.module('homeCtrl', []);
    LoginCtrl.controller('homeCtrl', ['$scope',
    function ($scope) {
        console.log("in home");

    }
    ]);
});