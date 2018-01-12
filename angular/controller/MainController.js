app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'danny valerio';
    $scope.blocks = [
        {
            name: 'block 1',
            img: 'block1.jpg',
            url: 'https://google.com',
            order: 1
        },
        {
            name: 'block 2',
            img: 'block2.jpg',
            url: '',
            order: 2
        },
        {
            name: 'block 3',
            img: 'block3.jpg',
            url: '',
            order: 3
        },
        {
            name: 'block 4',
            img: 'block4.jpg',
            url: '',
            order: 4
        },
        {
            name: 'block 5',
            img: 'block5.jpg',
            url: '',
            order: 5
        }
    ];
}]);