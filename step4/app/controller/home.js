formation.controller('home', function($scope, $http){
    // $http est le module chargé de l'AJAX dans AngularJS

    var promise = $http.get("http://ip.jsontest.com/");
    // Aussi possible d'utiliser $http.post, $http.put, $http.delete
    // Retourne une promise asynchrone

    promise.success(function(data, status) {
        // Callback appellé lors du retour du serveur
        $scope.ip = data;
        $scope.status = status;
    });
    promise.error(function(data, status) {
        // Callback appellé lors d'une erreur
        console.log(data, status);
    });

    // Possible de chainer les methodes :
    // $http.get(...).success(...).error(...);
})
