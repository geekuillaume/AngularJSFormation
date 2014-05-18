FormationServices.value("Infos", {
    // la methode module.vallue instancie un service qui se résume à un objet, pas de provider ni de variables privées
    appName: "Formation AngularJS",
    date: "Mai 2014"
});

// On peut aussi utiliser module.constant qui va créer un Provider du même nom que la classe
// et qui sera accessible dans la phase de config du module
