var testApp = angular.module("eleventhApp", []);

testApp.controller("directiveCtrl", function ($scope) {

    $scope.data =  [
        {name: " C# 6.0", author: "Andrew Troelsen",  description : "description 1"},
        {name: "Python", author: "Bill Lyubanovich", description : "description Python."},
        {name: "Ruby", author: "Jay Makgavren", description : "description 3"},
        {name: "Node и Express", author: "Ethan Brown",  description : "description 4"},
        {name: "Pro AngularJS", author: "A. Freeman", description : "Adam Freeman is an experienced IT professional who has held senior positions in a range of companies, most recently serving as chief technology officer and chief operating officer of a global bank. Now retired, he spends his time writing and running."  }
    ];

});


testApp.directive('mytable', [function () {
    return function (scope, elem, attrs, ctrl) {
            var keys = (scope.data && scope.data[0] && Object.keys(scope.data[0])) || [];
            var wrapper = angular.element(elem);
            var table = wrapper.append('<table></table>').find('table');
            var thead = table.append('<thead></thead>').find('thead');
            var tbody = table.append('<tbody></tbody>').find('tbody');

            var theadTr = angular.element(document.createElement('tr'));

            //head
            for(var i=0; i< keys.length; i++){
                theadTr.append(angular.element(document.createElement('th')).text(keys[i]));
            }
            thead.append(theadTr);

            //body
            var tr, row;
            for(var n = 0; n < scope.data.length; n++){
                row = scope.data[n];
                //console.log(row);
                tr = document.createElement('tr');
                for (var col in row) {
                    if (row.hasOwnProperty(col)) {
                        angular.element(tr).append(`<td>${row[col]}</td>`);
                    }
                }
                tbody.append(tr);
            }
        }

}]);