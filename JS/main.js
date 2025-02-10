// main.js

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('haut').addEventListener('click', () => movePlayer('up'));
  document.getElementById('bas').addEventListener('click', () => movePlayer('down'));
  document.getElementById('gauche').addEventListener('click', () => movePlayer('left'));
  document.getElementById('droite').addEventListener('click', () => movePlayer('right'));
});

/**
 * Gère le déplacement du joueur et les interactions sur la cellule cible.
 * Seul l'historique des actions pertinentes est enregistré.
 * @param {string} direction - La direction du déplacement ('up', 'down', 'left', 'right').
 */
function movePlayer(direction) {
  const gridCells = document.querySelectorAll('.grid-cell');
  const gridSize = 10;
  const currentPosition = getPlayerPosition();
  let newPosition = currentPosition;

  if (direction === 'up' && currentPosition - gridSize >= 0) {
    newPosition = currentPosition - gridSize;
  } else if (direction === 'down' && currentPosition + gridSize < gridCells.length) {
    newPosition = currentPosition + gridSize;
  } else if (direction === 'left' && currentPosition % gridSize !== 0) {
    newPosition = currentPosition - 1;
  } else if (direction === 'right' && currentPosition % gridSize !== gridSize - 1) {
    newPosition = currentPosition + 1;
  }

  if (newPosition !== currentPosition) {
    const targetCell = gridCells[newPosition];
    const targetType = targetCell.dataset.type;

    // Gérer les interactions selon le contenu de la cellule cible
    if (targetType === "treasure") {
      addActionToLog("Vous avez trouvé le trésor ! Vous avez gagné !");
      // Fin de partie : réinitialisation après quelques secondes
      setTimeout(() => window.location.reload(), 3000);
    } else if (targetType === "monster") {
      fightMonster(targetCell);
    }
    
    // Mise à jour de la grille (sans loguer un déplacement valide)
    gridCells[currentPosition].style.backgroundImage = '';
    gridCells[currentPosition].dataset.type = "empty";
    
    targetCell.style.backgroundImage = `url('assets/img/chevalier.png')`;
    targetCell.style.backgroundSize = 'contain';
    targetCell.style.backgroundPosition = 'center';
    targetCell.dataset.type = "player";

    // Mise à jour de la position du joueur
    setPlayerPosition(newPosition);
    
    // Ici, on n'enregistre PAS le déplacement valide afin de ne garder que les actions pertinentes.
    
  } else {
    // Enregistrement des déplacements non valides
    addActionToLog(`Déplacement ${direction} non valide`);
  }
}

/**
 * Gère le combat lorsque le joueur rencontre un monstre.
 * Affiche dans l'historique les actions liées au combat, aux HP et XP.
 * @param {HTMLElement} targetCell - La cellule contenant le monstre.
 */
function fightMonster(targetCell) {
  const monsterType = targetCell.dataset.monsterType;
  if (!monsterType) {
    addActionToLog("Erreur : type de monstre inconnu.");
    return;
  }
  addActionToLog(`Combat : Vous affrontez un ${monsterType}`);

  // Récupérer les statistiques du monstre depuis role.js
  const monster = monsterStats[monsterType];
  if (!monster) {
    addActionToLog("Erreur : statistiques du monstre introuvables.");
    return;
  }

  // Comparaison de l'attaque du joueur aux HP du monstre
  if (player.attack >= monster.hp) {
    // Le joueur vainc le monstre
    addActionToLog(`Vous avez vaincu le ${monsterType} ! Vous regagnez 10 HP et gagnez 10 XP.`);
    targetCell.style.backgroundImage = '';
    targetCell.dataset.type = 'empty';
    player.hp = Math.min(player.hp + 10, 100);
    player.exp += 10;
    addActionToLog(`HP : ${player.hp}, XP : ${player.exp}`);
  } else {
    // Le monstre survit et attaque
    addActionToLog(`Le ${monsterType} survit et attaque ! Vous perdez ${monster.attack} HP.`);
    player.hp -= monster.attack;
    addActionToLog(`HP restant : ${player.hp}`);
    if (player.hp <= 0) {
      addActionToLog("Vous êtes mort ! La partie va se réinitialiser.");
      setTimeout(() => resetGame(), 2000);
    }
  }
}

/**
 * Ajoute un message dans la zone d'historique des actions.
 * Seules les actions pertinentes sont affichées.
 * @param {string} actionText - Le message à afficher.
 */
function addActionToLog(actionText) {
  const logList = document.getElementById('log-list');
  const li = document.createElement('li');
  li.textContent = actionText;
  logList.appendChild(li);
}
