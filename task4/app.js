var testApp = angular.module("fourthTaskApp", []);

testApp.controller("TestCtrl", function ($scope) {
    $scope.test = model;
    $scope.start = false;
    $scope.selectedQuestion = 1;
    $scope.visingBlocks = createArray($scope.test.questions.length);

    $scope.setBlockVision = function (showElem) {
        $scope.visingBlocks = createArray($scope.test.questions.length, showElem);
    };

    $scope.startTest = function () {
        $scope.start = true;

        clock("clock");
    };
    
    $scope.finishTest = function () {
        
    }

});

function createArray(count, showingElement) {
    showingElement = typeof showingElement !== 'undefined' ?  showingElement : 1;
    var myArray = [];
    for(var i =1; i <= count; i++){
        myArray[i] = i == showingElement ? true : false;
    }
    return myArray;
}

var clock = function (id) {
    var seconds = 0;
    var hours = 0;
    var minutes = 0;

    function getTime(){
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
        return {
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    var initializeClock = function (id){
        var clock = document.getElementById(id);
        setInterval(function(){
            var t = getTime();
            clock.innerHTML =
                'hours: '+ t.hours + ' ' +
                'minutes: ' + t.minutes + ' ' +
                'seconds: ' + t.seconds;
        },1000);
    }(id);
};






