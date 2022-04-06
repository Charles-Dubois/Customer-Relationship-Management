## Customer-Relationship-Management
https://crm-charles-dubois.herokuapp.com/


API utilisant mongoDB et express

A utiliser avec Postman afin de simuler des requêtes en local

Toutes le requêtes se font à l'url https://crm-charles-dubois.herokuapp.com/  seuls les endppoints et methodes changent

Toutes les champs renseignez doivent être au format JSON


### /register
`GET` Instructions

`POST` Créer un compte avec un "email" et un "password"


### /login
`GET` Instructions

`POST` Se connecter, la connexion expire au bout de 30 jours



### /contact
`GET` Permet de voir ses contacts, avec des query params, vous pouvez chercher un contact par nom, email, category

`POST` Créer un contact avec un "email", un "name" ,une "description", une "category"

`PUT` Modifier les information d'un contact avec un "contactID" et un "update" où sont stockés les inforamtions changeantes.

Expemple : 
{"contactID" : "id de mon contact",
 "update" : {
    "name" : "michel"
   }
}

`DELETE` Supprime un contact grace à son "name"

### /logout

`GET` Permet de se déconnecter


### /auth/reset/:userId

`GET` Renvoi une URL et un code 

`POST` Entrez un "code" le code recu, et en "password" un nouveau mot de passe

### /admin

`GET` Instructions

`DELETE` Supprime un autre utilisateur en donnant à la clé "id" l'id de l'utilisateur à supprimer

### /requests/stats

`GET` Donne des stats sur l'API

### /users/online

`GET` Affiche les utlisateur dont la dernière requête date de moins de 1 minute


