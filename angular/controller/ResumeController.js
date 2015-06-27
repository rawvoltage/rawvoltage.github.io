app.controller('ResumeController', ['$scope', function ($scope) {
    $scope.field = 
        [
            {
                field: 'Education',
                title: 'JP McCaskey',
                location: 'Lancaster, PA',
                dates: '2005-2009',
                degree: 'High School Diploma'
            },
            {
                field: 'Experience',
                title: 'General Assembly',
                location: 'New York, NY',
                dates: '2014-2015',
                degree: 'Front-end Web Development Certificate'
            }
        ];
    }]);