formation.controller("first", function($scope, $location, User) {
    // On injecte ici trois services, dont User qui est un service externe à AngularJS
    $scope.saveUser = function(user) {
        User.save(user);
        // On appelle la method save de notre service
        $location.path("/saved");
        // $location.path permet de changer de route
    }
});
