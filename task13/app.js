var testApp = angular.module("thirteenth", []);

testApp.controller("directiveCtrl", function ($scope) {
    $scope.data = [
        {title: 'Action', url: 'index.html'},
        {title: 'Another action', url: 'https://www.google.com.ua'},
        {title: 'habrahabr', url: 'habrahabr.ru'}
    ];
});


testApp.directive('navigation', [function () {
    return {
        restrict: 'E',
        scope: {
            data: '=',
            href: '=',
            text: '='
        },
        link: function (scope, elem, attrs, ctrl) {

        },
        replace: true,
        templateUrl: "template.html"
    }

}]);