formation.controller('home', function($scope){
    $scope.str = "Bonjour !";
    $scope.date = new Date();
    $scope.price = 500.00;
    $scope.personnes = [
        {name: "Lucas", age: 25},
        {name: "Léa", age: 27},
        {name: "Enzo", age: 32},
        {name: "Emma", age: 18},
        {name: "Thomas", age: 15},
        {name: "Manon", age: 22},
        {name: "Théo", age: 20},
        {name: "Chloé", age: 30},
        {name: "Hugo", age: 54},
        {name: "Camille", age: 42},
        {name: "Nathan", age: 48},
        {name: "Clara", age: 35}
        ];
})

