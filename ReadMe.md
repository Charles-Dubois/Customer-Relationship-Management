<div align="center">
  <h3 align="center">Customer-Relationship-Management</h3>
<h3 align="center">https://crm-charles-dubois.herokuapp.com/</h3>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project
 
Une API permettant de répertorier ses contacts, et de les classer par catégories.

### Built With

- [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [Express](https://expressjs.com/fr/)
- [Mongo DB](https://www.mongodb.com/fr-fr)
- [Node JS](https://nodejs.org/en/)

## Getting Started

### Prerequisites

Pour utilisez l'API vous avez besoin de Postman
https://www.postman.com/



## Usage

Toutes les champs renseignez doivent être au format JSON

Toutes le requêtes se font à l'url https://crm-charles-dubois.herokuapp.com/  seuls les endpoints et methodes changent

##### /register

`GET` Instructions

`POST` Créer un compte avec un "email" et un "password"

##### /login

`GET` Instructions

`POST` Se connecter, la connexion expire au bout de 30 jours



##### /contact

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

##### /logout

`GET` Permet de se déconnecter

##### /auth/reset/:userId

`GET` Renvoi une URL et un code 

`POST` Entrez un "code" le code recu, et en "password" un nouveau mot de passe

##### /admin

`GET` Instructions

`DELETE` Supprime un autre utilisateur en donnant à la clé "id" l'id de l'utilisateur à supprimer

##### /requests/stats

`GET` Donne des stats sur l'API

##### /users/online

`GET` Affiche les utlisateur dont la dernière requête date de moins de 1 minute

## Roadmap

- [x] CRUD utilisateur
- [x] CRUD contact
- [x] CRUD admin
- [x] Reset password
- [x] Stats requests
- [ ] Front

## Contact

Charles Dubois  charles.dubois.h@gmail.com

Project link : https://github.com/Charles-Dubois/Customer-Relationship-Management 

Linked In : https://www.linkedin.com/in/charles--dubois/

