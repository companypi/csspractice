myapp.controller('MainCtrl', ["$scope", function ($scope) {
		$scope.data = {};

        $scope.data.panes = [];

        for (var i = 0; i < 5; i++) {

            $scope.data.panes[0] = {
                color: 'PaleVioletRed',
                heading:"Make a reservation"
            };

            $scope.data.panes[1] = {
                color: 'PapayaWhip',
                heading:"About us"
            };

            $scope.data.panes[2] = {
                color: 'Peru',
                heading:"Menu",
                col1: "col1",
                col2: "col2"
            };

            $scope.data.panes[3] = {
                color: 'Plum',
                heading:"Contact us"
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