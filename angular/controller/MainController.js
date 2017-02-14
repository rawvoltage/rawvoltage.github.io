app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'danny valerio';
    $scope.blocks = [
        {
            name: 'block 1',
            order: 1
        },
        {
            name: 'block 2',
            order: 2
        },
        {
            name: 'block 3',
            order: 3
        },
        {
            name: 'block 4',
            order: 4
        },
        {
            name: 'block 5',
            order: 5
        }
    ];
}]);