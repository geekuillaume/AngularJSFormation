FormationServices.directive('customHeader', function(){
    // L'injection de dépendance d'une template se fais dans cette déclaration de fonction
    return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Commentaire
        // Correspond à la méthode de matching pour la directive, on peut combiner plusieurs méthode : "EAC"
        // Ici on utilisera <custom-header> dans le code HTML
        templateUrl: '/app/template/header.html',
        // On peut aussi utiliser l'attribut template avec une string en paramètre
        replace: true,
        // La template replace alors l'élément du DOM qui correspond à la directive
        // Sinon la template est insérée dans l'élément
        scope: {
            name: "=directiveName"
        },
        // Un scope isolé va être créé, il n'hérite pas du scope parent et a uniquement name comme propriété
        // name est copié depuis l'attribut DirectiveName de l'élément associé
        // On peut aussi utiliser "scope: false" pour ne pas créer de scope
        // "scope: true" va créer un nouveau scope héritant du scope parent
        transclude: true,
        // Cette option permet d'integrer le contenu de la directive dans sa template
        // Ce contenu sera placé dans le scope parent, pas dans celui de la directive
        link: function($scope, iElm, iAttrs) {
            // La fonction de link est semblable au controller pour un template
            $scope.insideName = "customHeader";
        }
    };
});
