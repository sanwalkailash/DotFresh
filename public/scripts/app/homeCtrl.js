define(['angular'],function(angular){
    'use strict';
    var newModule = angular.module('homeCtrl', []);
    newModule.controller('homeCtrl', ['$scope', '$location','$log','FactoryServices','Util',
    function ($scope, $location,$log,FactoryServices,Util) {
        console.log("in home");

        $scope.homeJSON = {
            "userList":""
        }
        
        $scope.showProfile = function () {
            $location.path('/profile');
        }

        var listSuccess = function listUsersSuccess(data, status, headers, config) {
            if(Util.isVoid(data)) {
                $log.debug("ERROR --- NULL DATA RECEIVED FROM SERVER.")
            } else {
                $scope.homeJSON.userList = data.data;
                for(var i=0;i<$scope.homeJSON.userList.length ;i++) {
                    $scope.homeJSON.userList[i].stars = ""; // defining stars key
                    for(var j=0;j<$scope.homeJSON.userList[i].heathRating;j++) {
                        $scope.homeJSON.userList[i].stars += "☆";
                    }
                }

            }
        }
        var listFailure = function listUsersSuccess(data, status, headers, config) {
            $log.debug("ERROR -- UNABLE TO FETCH DATA FROM SERVER",data);
        }
        FactoryServices.listUsers("user123",listSuccess,listFailure);


    }
    ]);
});