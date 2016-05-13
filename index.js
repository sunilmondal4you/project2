/**
 * Created by abc on 13/05/2016.
 */
var app = angular.module("myapp", []);

app.controller("myctrl", function ($scope) {

    $scope.arry = [];
    $scope.table = function () {
        $scope.person = {
             username: $scope.username
            , email: $scope.email
            , mobile: $scope.mobile
        };
        $scope.arry.push($scope.person);
    };


    $scope.edit = function ($index) {
        var print = document.getElementById($index);
        $scope.newarry = $scope.arry[$index];

        $scope.username = $scope.newarry.username;
        $scope.email = $scope.newarry.email;
        $scope.mobile = $scope.newarry.mobile;

    };

    $scope.delete = function (index) {
        $scope.arry.splice(index, 1);

    };



});