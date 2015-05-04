app.controller('ResumeController', ['$scope', function($scope) {
    $scope.skills = 
        [
            {
                name: 'Angular',
                level: 2,
                source: 'assets/full-star.png',
                know: 'filters, ng-repeat, directives',
                link: 'book-store.html'
            },
            {
                name: 'Bootstrap',
                level: 1,
                source: '',
                know: 'jumbotron, col-classes, container',
                link: 'bootstrapper.html'
            },
            {
                name: 'Node.js',
                level: 1,
                source: '',
                know: 'work-in-progress...',
                link: 'server-test.html'
            }
        ];
}]);