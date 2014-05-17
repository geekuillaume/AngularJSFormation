var formation = angular.module("formation", ["ngRoute"]);
// angular.module prend deux paramètres : le nom du module et les modules à injecter

formation.config(function($routeProvider, $locationProvider) { // Ces deux paramètres sont injecté par AngularJS lors de l'étape de configuration initiale du module
    $routeProvider.when('/', { // On déclare chacune des routes de notre application
        controller: "first", // Nom du controller déclaré avec formation.controller()
        templateUrl: "/app/template/first.html" // Chemin du template qui sera chargé pour cette route
    }).when('/second', {
        controller: "second",
        template: "<p>Deuxième page, <a href='/'>retour</a></p>" // On peut aussi charger la template directement sous forme de string
    }).when('/bonjour/:name', { // Une route peut contenir des paramètres qui seront récupérables dans le controller
        controller: "bonjour",
        templateUrl: "/app/template/bonjour.html"
    }).otherwise({ // Route par défaut si aucune autre ne correspond
        redirectTo: "/"
    });

    // l'API location introduite avec l'HTML5 permet de se passer du /#/ avant chaque URL
    // Il faut cependant que le serveur renvoie notre fichier index.html pour chacune des URL demandée

    // $locationProvider.html5Mode(true)
});
