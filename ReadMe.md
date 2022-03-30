<!-- - Un utilisateur peut créer un compte à l'aide de son email et de son mot de passe. Il est indispensable d'avoir un compte pour utiliser l'application. En effet, chaque utilisateur possède sa liste privée de contacts auxquels seul lui a accès. Un contact est donc lié à un utilisateur. Un seul compte par email peut être créé. -->

<!-- - Les routes /register et /login permettent respectivement de créer un compte et de se connecter. Elles reçoivent l'email et le mot de passe dans le body. La première renvoie seulement un message indiquant que le compte a bien été créé, c'est-à-dire si l'email est disponible et que le mot de passe a le bon format (minimum 6 caractères et un chiffre). -->

La seconde renvoie un token contenant les informations de l'utilisateur. En cas d'erreur, un message "error" est également envoyé. Il faut utiliser les bons codes HTTP en cas de succès/erreurs.

- La route /contacts va gérer toutes les requêtes en rapport avec les contacts. Seuls les verbes HTTP changeront. Sur cette route, il faut pouvoir :
  - récupérer la liste des contacts de l'utilisateur connecté. Dans le json de la réponse, la clé data contient le tableau d'objets où chaque objet est un contact, et la clé nb contient le nombre de contacts.
  - ajouter un contact
  - modifier un contact (avec un PUT)
  - supprimer un contact
  - faire une recherche de contacts avec des filtres spécifiques (utiliser les query strings). On doit pouvoir rechercher un contact en fonction de son : nom OU email OU catégorie. Par exemple : **_/contacts?category=3_ OU _/contacts?name=John_**
- La base de données doit s'appeler crmDB doit contenir une collection/table users ET une collection/table contacts. Dans ces dernières, les documents auront cette forme (ici l’exemple est donné avec une db Mongo) :
