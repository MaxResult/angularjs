var testApp = angular.module("twelfthApp", []);

testApp.controller("directiveCtrl", function ($scope) {

    $scope.data =  ['paragraph 1', 'paragraph 2', 'some text'];

});


testApp.directive('paragraphs', [function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {

        },
        replace: true,
        template:  '<p ng-repeat="item in data">{{item}}</p>'
    }

}]);



const app = angular.module('myApp', ['myApp.directives']);
app.controller('myCtrl', function($scope) {
    $scope.data = ['p1', 'p2'];
});
