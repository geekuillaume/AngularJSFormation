FormationServices.provider("FalseApi", function() {
    // On utilise ici module.provider pour pouvoir renvoyer un provider qui sera accessible à la phase de config de l'app
    var _domain = "";
    this.init = function(domain) {
        _domain = domain;
    }
    // Cette fonction sera accessible avec : FalseApiProvider.init()
    this.$get = function(Infos) {
        // la méthode $get est appelée une seule fois lors de l'instanciation du service
        // On peut ici déclarer des variables privées, non accessibles en dehors du service
        return {
            // Cette fonction retourne un objet qui sera accessible publiquement dans l'application en injectant FalseApi
            makeQuery: function(path) {
                console.log(Infos.appName + " making query to : " + _domain + path);
            }
        }
    }
});
