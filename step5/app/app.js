var formation = angular.module("formation", ["ngRoute", "FormationServices"]);

formation.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: "home",
        templateUrl: "/app/template/home.html"
    }).otherwise({
        redirectTo: "/"
    });
});
