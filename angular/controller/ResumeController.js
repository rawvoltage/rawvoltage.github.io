app.controller('ResumeController', ['$scope', function ($scope) {
    $scope.name = 'Danny Valerio';
    $scope.number = '(347) 292-1680';
    $scope.email = 'misscoollex@gmail.com';
    
    $scope.contact = 
        [
            {
                name: 'Danny Valerio',
                number: '(347) 292-1680',
                email: 'misscoollex@gmail.com'
            }
        ];
    
    $scope.field = 
        [
            {
                title: 'Education',
                location: '',
                dates: ''
            },
            {
                title: 'Experience',
                location: '',
                dates: ''
            }
        ];
    }]);