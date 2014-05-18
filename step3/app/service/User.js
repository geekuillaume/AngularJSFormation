FormationServices.service("User", function(FalseApi) {
    // On utilise ici la methode service, on ne peut donc pas fournir un provider
    // FalseApi est ici injecté et ses methodes publiques sont exposées

    var _user = {};

    this.save = function (user) {
        FalseApi.makeQuery("save");
        _user = user;
    }
    this.get = function() {
        FalseApi.makeQuery("get");
        return _user;
    }
});

// On pourrait aussi utiliser la methode factory de cette façon :

/*
FormationServices.factory("User", function(FalseApi) {
    var User = {};
    // La seule différence avec la methode module.service est que l'on doit instancier l'objet du service
    // Avec module.service, cet objet est instancié par AngularJS et est passé par l'objet this
    var _user = {};

    User.save = function (user) {
        FalseApi.makeQuery("save");
        _user = user;
    }
    User.get = function() {
        FalseApi.makeQuery("get");
        return _user;
    }
    return User;
});
*/
