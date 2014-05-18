FormationServices.filter('dateOfBirth', function() {
    // On déclare un nouveau filtre nommé dateOfBirth
    return function(val, yearFrom) {
        // val correspond à l'entrée du filtre, les arguments suivants sont ceux passé au filtres avec ":"
        if (yearFrom)
            return yearFrom - val;
        else
            return (new Date().getFullYear()) - val;
        // On retourne le résultat de notre filtre
    }
})
