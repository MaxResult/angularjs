var testApp = angular.module("fourthTaskApp", []);

testApp.controller("TestCtrl", function ($scope) {
    $scope.test = model;
    $scope.start = false;

    $scope.startTest = function () {
        $scope.start = true;

        clock("clock");
    }

});


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






