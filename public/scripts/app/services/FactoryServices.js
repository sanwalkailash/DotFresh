/**
 * Created by kailash on 27/10/16.
 */
define(['angular'], function(angular) {
    'use strict';


    var FactoryServices = angular.module('FactoryServices', []);

    FactoryServices.service('FactoryServices', ['$http', '$log',
        function ($http, $log) {

        return {
            listUsers: function (userId, Success,Failure) {
                $http({
                    method: 'GET',
                    url: '/api/home' +"?id="+userId,
                }).then(Success,Failure);
            }
        }
    }])
    return FactoryServices;
});
