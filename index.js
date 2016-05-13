/**
 * Created by abc on 13/05/2016.
 */
var app = angular.module("myapp", []);

app.controller("myctrl", function ($scope) {

    $scope.id = 1;
    $scope.userlist = [];
    $scope.user = {'id':$scope.id};
    
    $scope.saveuser = function() {
        console.log($scope.user);

        $scope.userlist.push($scope.user);

        $scope.id = $scope.id + 1;
        $scope.user = {'id' : $scope.id};
    };
    
    $scope.edituser = function(userobj) {
        $scope.editu = true;
        $scope.user = userobj;
    };

    $scope.udpateuser= function(index){
        $scope.userlist.splice(index, 0, $scope.user);
        $scope.editu = false;

        $scope.user = {'id' : $scope.id};
    }


});