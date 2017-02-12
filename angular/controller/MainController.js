app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'The Book Store';
    $scope.blocks = [
        {
            icon: 'assets/block1.jpg',
            name: 'Sustainability',
            publisher: 'Norman Reedus',
            price: 2.99,
            order: '1'
            },
        {
            icon: 'assets/block2.jpg',
            name: 'Over the Rainbow',
            publisher: 'Rick Grimes',
            price: 1.00,
            order: '2'
            },
        {
            icon: 'assets/block3.jpg',
            name: 'Golden Mountains',
            publisher: 'Maggie Cohan',
            price: 3.00,
            order: '3'
            },
        {
            icon: 'assets/block4.jpg',
            name: 'The Blue Flower',
            publisher: 'Steven Yeun',
            price: 1.50,
            order: '4'
            },
        {
            icon: 'assets/block5.jpg',
            name: 'Sheep Messiah',
            publisher: 'Emily Kinney',
            price: 3.50,
            order: '5'
            },
        {
            icon: 'assets/block6.jpg',
            name: 'Lone Wolf',
            publisher: 'Laurie Holden',
            price: 1.50,
            order: '6'
            },
        {
            icon: 'assets/block7.jpg',
            name: 'Spring Season',
            publisher: 'Jon Bernthal',
            price: 1.50,
            order: '7'
            },
        {
            icon: 'assets/block8.jpg',
            name: 'Morning',
            publisher: 'David Morrissey',
            price: 1.50,
            order: '8'
            }
        ];
}]);