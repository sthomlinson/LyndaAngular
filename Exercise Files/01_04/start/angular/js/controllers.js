var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function myController($scope){
    $scope.author = {
        name: 'Ray Villalobos',
        title: 'Staff Author',
        company: 'Lynda.com'
    };

});