Objectifs et Fonctionnalités :
1. Fonctionnalités de Base :
Carte visible :

Une arène de jeu représentée sous forme de grille (exemple : 10x10 cases).
Les points d'intérêt (créatures ou trésor) sont indiqués par une icône générique.
La position actuelle du joueur est clairement marquée.
Placement aléatoire :

Le trésor, les créatures (entre 10 et 50), et le joueur doivent être placés aléatoirement sur la carte.
Utilisez l'algorithme de Fisher-Yates pour garantir un placement équitable.
Mécaniques de déplacement :

Le joueur peut se déplacer grâce à 4 boutons directionnels (haut, bas, gauche, droite).
Aucune page ne doit se recharger : tout doit se passer en JavaScript.
Interactions avec la carte :

Lorsqu'un joueur rencontre une créature :
Le joueur confronte sa force aux points de vie de la créature.
Si la créature meurt, le joueur regagne ses points de vie et gagne en points d’expérience.
Si la créature survit, elle attaque le joueur, réduisant ses points de vie.
Si le joueur meurt, la partie se réinitialise.
Lorsqu'un joueur trouve le trésor, la partie se termine par une victoire.
Un historique des actions (texte) doit informer le joueur en temps réel de ses actions et de leurs conséquences.

2. Critères d'interface :
L'interface doit être intuitive et facile à comprendre :
Les boutons de contrôle doivent être clairement identifiés.
Les actions du joueur doivent être visibles en temps réel dans une zone dédiée.
La carte et les éléments de jeu doivent être visuellement agréables :
Une attention particulière doit être portée aux couleurs, polices, tailles, et espacement des boutons pour éviter des erreurs de clics.
