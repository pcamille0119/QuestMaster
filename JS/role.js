// role.js

// Objet représentant le joueur avec ses statistiques
const player = {
    icon: 'chevalier.png',
    position: null,
    hp: 100,      // Points de vie
    attack: 20,   // Force d'attaque
    exp: 0        // Points d'expérience
  };
  
  // Statistiques des monstres, selon leur type (fichier image)
  const monsterStats = {
    "monstre.png": { hp: 30, attack: 10 },
    "orc.png":     { hp: 50, attack: 15 },
    "zombie.png":  { hp: 40, attack: 12 }
  };
  
  /**
   * Met à jour la position du joueur.
   * @param {number} index - L'indice de la cellule où se trouve le joueur.
   */
  function setPlayerPosition(index) {
    player.position = index;
    console.log(`Position du joueur mise à jour : ${player.position}`);
  }
  
  /**
   * Récupère la position actuelle du joueur.
   * @returns {number|null} L'indice de la cellule où se trouve le joueur.
   */
  function getPlayerPosition() {
    return player.position;
  }
  
  /**
   * Réinitialise la partie.
   */
  function resetGame() {
    window.location.reload();
  }
  