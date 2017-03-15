
define([
    'angular',
	'angularLocalStorage',
    'angularRoute',
    'homeCtrl'

], function (angular) {
    'use strict';

    var mainApp =  angular.module('mainApp', [
        'ngRoute',
		'LocalStorageModule',
        'homeCtrl'
    ]);

    
    mainApp.config(['$httpProvider',function ($httpProvider) {
    }]);


    mainApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl',
                access: { requiredLogin: false }
            }).
                otherwise({
                    redirectTo: '/home'
                });
        }



    ]);


    mainApp.run(['$rootScope','$location',function($rootScope, $location) {
         $rootScope.app = {
                name: 'DotFresh',
                description: 'Powered by DotFresh',
                year: ((new Date()).getFullYear()),
              };
    }]);

    return mainApp;


});




