var formation = angular.module("formation", ["ngRoute", "FormationServices"]);
// On injecte FormationServices (qui est aussi un module) dans notre app

formation.config(function($routeProvider, $locationProvider, FalseApiProvider) {
    // Lors de l'étape de config on peut acceder au Provider et configurer les modules
    $routeProvider.when('/', {
        controller: "first",
        templateUrl: "/app/template/first.html"
    }).when('/saved', {
        controller: "saved",
        templateUrl: "/app/template/saved.html"
    }).otherwise({
        redirectTo: "/"
    });

    FalseApiProvider.init("http://test.com/");
    // On initialise notre module FalseApi
});

formation.run(function($rootScope, Infos) {
    // Ceci est le controller principal de notre application, il correspond à l'element du DOM qui a comme propriété ng-app
    $rootScope.infos = Infos;
    // On charge notre objet constant Infos dans le $rootScope, il sera accessible de partout dans notre application
    // Pour y acceder dans n'importe quel binding, il suffit d'utiliser {{$root.infos}}
})
