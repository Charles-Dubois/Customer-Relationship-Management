Faites un middleware qui sera exécuté à chaque fois qu’un utilisateur connecté faire une requête au serveur, peu importe la requête, et qui enregistre la date et l’heure de cette dernière requête dans la table/collection users dans le champ “last_request” ou “lastRequest”.

Faites ensuite une route /users/online qui renverra la liste de tous les utilisateurs actuellement connectés à l’application (c’est-à-dire qui sont en train de l’utiliser, ou qui l’ont utilisée pour la dernière fois il y a moins d’une minute).

## ⭐️⭐️⭐️⭐️⭐️ Bonus

On sauvegarde la date et l’heure de la dernière requête de chaque utilisateur, mais on aimerait aussi garder une trace de chaque requête effectuée sur notre serveur.

On va donc créer une table/collection requests qui aura pour but d’enregistrer chaque requête.

On aura comme champs :

- request_id ou requestId - _l’id de la requête_
- url - _l’url de la requête_
- verb - _le verbe http_
- date - _la date et l’heure de la requête_
- user_id ou userId - _l’id de l’utilisateur qui a fait la requête (peut être null)_

Une fois cela fait, faites quelques requêtes pour peupler cette table/collection.

On fait ensuite une route /requests/stats qui nous renverra des statistiques sur les requêtes effectuées à notre serveur.

Cette route renverra un objet avec les champs :

- nbRequests - _le nombre total de requêtes effectuées à notre serveur_
- mostUsedURL - _l’url la plus sollicitée lors des requêtes_
- mostUsedVerb - _le verbe le plus sollicité lors des requêtes_
