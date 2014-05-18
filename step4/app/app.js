var formation = angular.module("formation", ["ngRoute"]);
// On injecte FormationServices (qui est aussi un module) dans notre app

formation.config(function($routeProvider) {
    // Lors de l'étape de config on peut acceder au Provider et configurer les modules
    $routeProvider.when('/', {
        controller: "home",
        templateUrl: "/app/template/home.html"
    }).otherwise({
        redirectTo: "/"
    });
});
