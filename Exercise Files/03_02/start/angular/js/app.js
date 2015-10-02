var myApp = angular.module('myApp', [
    'ng-route',
    artistControllers
]);
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
        otherwise({
                redirectTo: '/list'
    });
}]);