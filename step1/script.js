function test($scope) {
    $scope.adjectif = "super";
    $scope.nom = "John";

    $scope.utilisateur = {
        nom: "John",
        age: 25,
        ville: "Lyon"
    }

    $scope.fruits = ["Pomme", "Poire", "Kiwi", "Banane"];

    $scope.showAlert = function () {
        alert("Voici une alerte !");
    }

    $scope.addFruit = function (fruit) {
        $scope.fruits.push(fruit);
    }

    $scope.$watch("toLog", function(value) {
        // Cette fonction va être executée à chaque changement de $scope.toLog
        console.log("Value changed to : " + value);
    })
}
