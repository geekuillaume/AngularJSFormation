# TODO List App API Documentation

## Lister les TODO

`GET https://api.mongolab.com/api/1/databases/formation-angularjs/collections/todo?apiKey=H9Yt5qcMpf4DiPsbwOiiFQ2LBOJW7YUl`

Exemple de retour :
```
[
    {
        "_id": {
            "$oid": "5378c657e4b01851b26da452"
        },
        "title": "Finir la formation",
        "description": "AngularJS est complexe, il reste beaucoup de chose à découvrir"
    }
]
```

## Ajouter un TODO

`POST https://api.mongolab.com/api/1/databases/formation-angularjs/collections/todo?apiKey=H9Yt5qcMpf4DiPsbwOiiFQ2LBOJW7YUl`

Envoyer en paramètre un objet JSON du type :
```
{
    "title": "Finir la formation",
    "description": "AngularJS est complexe, il reste beaucoup de chose à découvrir"
}
```

Retourne le TODO nouvellement créé

## Modifier un TODO

`PUT https://api.mongolab.com/api/1/databases/formation-angularjs/collections/todo/[id de la TODO]?apiKey=H9Yt5qcMpf4DiPsbwOiiFQ2LBOJW7YUl`

Envoyer en paramètre un objet JSON du type :
```
{
    "title": "Finir la formation",
    "description": "AngularJS est complexe, il reste beaucoup de chose à découvrir"
}
```

Retourne le TODO modifié


## Supprimer un TODO

`DELETE https://api.mongolab.com/api/1/databases/formation-angularjs/collections/todo/[id de la TODO]?apiKey=H9Yt5qcMpf4DiPsbwOiiFQ2LBOJW7YUl`

Retourne le TODO supprimé
