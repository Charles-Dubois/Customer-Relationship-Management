## ⭐️⭐️⭐️ Bonus

Rajouter un système de déconnexion automatique. Lorsque vous émettez un token, ce dernier a une durée de vie illimitée, n'est-ce pas ? Un token émis peut être utilisé indéfiniment pour accéder à votre application. Dans la réalité, ce système est trop dangereux. Par exemple, si le token a été volé, sans que l'utilisateur en ai conscience, le hacker pourrait en profiter sans limite.

Faites en sorte qu'un token soit considéré comme "expiré" lorsque ce dernier a été émis il y a plus de x jours (ou x secondes pour les besoins du développement). Si un token est identifié comme expiré, alors on supprime le cookie de l'utilisateur et ce dernier doit se reconnecter.
