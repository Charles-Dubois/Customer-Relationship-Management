Rajouter une catégorie pour les utilisateurs. C’est-à-dire qu’un utilisateur peut être simple _user_, ou alors _admin_. Un admin a des droits qu’un user n’a pas. Par exemple, il peut supprimer d’autres utilisateurs (sauf un autre admin). Quand il supprime un autre utilisateur, tous les contacts de ce dernier sont également supprimés.

**PS:** on ne peut pas créer directement un compte administrateur. On créé d’abord un compte utilisateur, et ensuite on modifie la catégorie directement depuis le site de Mongo ou PGAdmin manuellement. Ainsi, seul le développeur - en l’occurrence vous - peut passer un utilisateur à administrateur. C’est un gage de sécurité pour votre application.

## ⭐️⭐️⭐️ Bonus

Rajouter un système de déconnexion automatique. Lorsque vous émettez un token, ce dernier a une durée de vie illimitée, n'est-ce pas ? Un token émis peut être utilisé indéfiniment pour accéder à votre application. Dans la réalité, ce système est trop dangereux. Par exemple, si le token a été volé, sans que l'utilisateur en ai conscience, le hacker pourrait en profiter sans limite.

Faites en sorte qu'un token soit considéré comme "expiré" lorsque ce dernier a été émis il y a plus de x jours (ou x secondes pour les besoins du développement). Si un token est identifié comme expiré, alors on supprime le cookie de l'utilisateur et ce dernier doit se reconnecter.
