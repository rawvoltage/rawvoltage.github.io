app.controller('SkillsetController', ['$scope', function ($scope) {
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
                name: 'Materialize',
                level: 1,
                source: '',
                know: 'Bootsrap-like with Material design in mind',
                link: ''
            },
            {
                name: 'Node.js',
                level: 1,
                source: '',
                know: 'work-in-progress...',
                link: 'server.html'
            },
            {
                name: 'SVG',
                level: 1,
                source: '',
                know: 'Animations (as seen above)',
                link: 'index.html'
            }
        ];
}]);