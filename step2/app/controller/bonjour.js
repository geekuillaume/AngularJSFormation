formation.controller('bonjour',  function($scope, $routeParams){
    $scope.name = $routeParams.name; // $routeParams est un objet comprenant tout les paramètres de la route actuelle telle que déclarée dans app.js
})
