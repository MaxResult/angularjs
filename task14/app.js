var testApp = angular.module("fourteenth", []);

testApp.service('Calculator', function(){
    this.add = function (a, b) {
        return a + b;
    };

    this.sub =  function (a, b) {
        return a - b;
    };

    this.mult = function (a, b) {
        return a * b;
    };

    this.div = function (a, b) {
        return  a / b;
    };

    this.pow = function (a, b) {
        return  Math.pow(a, b);
    };

});

testApp.controller("calculatorCtrl", function ($scope, Calculator) {

    $scope.namber1      = 0;
    $scope.namber2      = 0;
    $scope.operation    = '+';
    $scope.result       = 0;

    $scope.calculation = function(operation, a, b){
        switch(operation){
            case '+': $scope.result = Calculator.add(a, b); break;
            case '-': $scope.result = Calculator.sub(a, b); break;
            case '*': $scope.result = Calculator.mult(a, b); break;
            case '/': $scope.result = Calculator.div(a, b); break;
            case '^': $scope.result = Calculator.pow(a, b); break;
        }
    };
});
