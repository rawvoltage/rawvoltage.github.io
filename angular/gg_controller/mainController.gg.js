app.controller('mainController', ['$scope', function ($scope) {
    var bg_src = '../../assets/gg_assets/Alchemical Antithesis.png';

    $scope.gums = [
        {
            value: 1
        },
        {
            value: 2
        },
        {
            value: 3
        },
        {
            value: 4
        },
        {
            value: 5
        }
    ];

    $scope.gumballs = [
        {
            name: 'Alchemical Antithesis',
            bg: 'assets/gg_assets/Alchemical Antithesis'
        },
        {
            name: 'Danger Closest',
            bg: '../../assets/gg_assets/Alchemical Antithesis'
        },
        {
            name: 'Aftertaste',
            bg: '../assets/gg_assets/Alchemical Antithesis'
        }
    ];
}]);