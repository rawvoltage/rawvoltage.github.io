app.controller('TodoController', ['$scope', function ($scope) {
    $scope.title = 'Todo List';
    $scope.todos = 
        [
            {
                content: ''
            },
            {
                content: ''
            }
            ,
            {
                content: ''
            }
        ];
}]);