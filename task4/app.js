var testApp = angular.module("fourthTaskApp", []);

testApp.controller("TestCtrl", function ($scope) {
    $scope.begin = false;
    $scope.start = false;
    $scope.finishDisable = true;
    $scope.result = false;
    $scope.showResult = false;
    $scope.test = model;

    $scope.showBlock = "begin";

    $scope.selectedQuestion = 1;
    $scope.visingBlocks = createArray($scope.test.questions.length);
    $scope.answers = createAnsersArray($scope.test.questions.length);

    $scope.setBlockVision = function (showElem) {
        $scope.visingBlocks = createArray($scope.test.questions.length, showElem);
    };

    $scope.startTest = function () {
        $scope.showBlock = "start";
        clock("clock");
    };
    
    $scope.checkAnswer = function (questionId, answerId) {
        $scope.answers[questionId] = answerId;

        if(checkIsFinished())
            $scope.finishDisable = false;
    };
    
    $scope.finishTest = function () {
        $scope.result =  checkResult();
        $scope.showBlock = "result";
    };
    
    function checkIsFinished () {
        for (var i = 1; i <= $scope.test.questions.length; i++) {
            if($scope.answers[i] === null)
               return false;
        }
        return true;
    }

    function checkResult () {
        var result = 0;
        for (var i = 0; i < $scope.test.questions.length; i++) {
            if($scope.test.questions[i].right == $scope.answers[i+1])
                result++;
        }
        return result;
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

function createAnsersArray(count) {
    var myArray = [];
    for(var i =1; i <= count; i++){
        myArray[i] = null;
    }
    return myArray;
}
var clock = function (id) {
    var seconds = 0;
    var hours = 0;
    var minutes = 0;
    
    console.log(id);
    var clock = document.getElementById(id);
    console.log(clock);

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






