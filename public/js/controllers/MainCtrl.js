// myapp.controller('SomethingCtrl', ["$scope", 
// function ($scope) {
//     console.log("Something Ctrl Fired");
// }]);

myapp.controller('MainCtrl', ["$scope", function ($scope) {
		$scope.data = {};

        $scope.data.panes = [];

        for (var i = 0; i < 4; i++) {

            $scope.data.panes[0] = {
                color: 'pink',
                text:1,
                heading:"First Heading"
            };

            $scope.data.panes[1] = {
                color: 'blue',
                text: 'two',
                heading:"Second Heading"
            };

            $scope.data.panes[2] = {
                color: 'yellow',
                text: '3',
                heading:"Third Heading"
            };

        }

        console.log($scope.data.panes);

        $scope.top = function() {
            $scope.$broadcast('scrollify:goTo', {
                pane: 0,
                speed: 0,
                id: 'myScrollify' // optional
            });
        };

        $scope.$on('scrollify:change', function(event, args) {
            console.log(args);
        });
}]);


angular.module('PdiApp', ['hj.scrollify', 'myapp']).config(function() {});

angular.module('PdiApp', ['hj.scrollify', 'myapp']).directive("navscroll", function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (!scope.scrollPosition) {
                scope.scrollPosition = 0
            }

            if (this.pageYOffset > scope.scrollPosition) {
                scope.boolChangeClass = true;
            } else {
                scope.boolChangeClass = false;
            }
            scope.$apply();
        });
    };
});