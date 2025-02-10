// map.js

// Définir les éléments du jeu
const elements = {
    joueur: 'chevalier.png',
    tresor: 'tresor.png',
    monstres: ['monstre.png', 'orc.png', 'zombie.png'],
  };
  
  // Créer la grille du jeu (10x10)
  function createGrid() {
    const gameMap = document.getElementById('game-map');
    const gridSize = 10;
  
    for (let i = 0; i < gridSize * gridSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      // Initialiser chaque cellule comme vide
      cell.dataset.type = "empty";
      gameMap.appendChild(cell);
    }
  }
  
  // Générer les positions aléatoires pour les éléments
  function generateRandomPositions() {
    const gridCells = document.querySelectorAll('.grid-cell');
    const totalCells = gridCells.length;
  
    // Création et mélange du tableau d'indices
    const indices = Array.from({ length: totalCells }, (_, index) => index);
    shuffle(indices); // Appel de la fonction shuffle depuis utils.js
  
    // Placer le joueur sur une position aléatoire
    const playerIndex = indices.pop();
    gridCells[playerIndex].style.backgroundImage = `url('assets/img/${elements.joueur}')`;
    gridCells[playerIndex].style.backgroundSize = 'contain';
    gridCells[playerIndex].style.backgroundPosition = 'center';
    gridCells[playerIndex].dataset.type = "player";
    setPlayerPosition(playerIndex);
  
    // Placer le trésor sur une autre position aléatoire
    const treasureIndex = indices.pop();
    gridCells[treasureIndex].style.backgroundImage = `url('assets/img/${elements.tresor}')`;
    gridCells[treasureIndex].style.backgroundSize = 'contain';
    gridCells[treasureIndex].style.backgroundPosition = 'center';
    gridCells[treasureIndex].dataset.type = "treasure";
  
    // Placer les monstres sur des positions aléatoires
    const numberOfMonsters = Math.floor(Math.random() * 5) + 10; // Entre 10 et 14 monstres
    for (let i = 0; i < numberOfMonsters; i++) {
      const monsterIndex = indices.pop();
      const randomMonster = elements.monstres[Math.floor(Math.random() * elements.monstres.length)];
      gridCells[monsterIndex].style.backgroundImage = `url('assets/img/${randomMonster}')`;
      gridCells[monsterIndex].style.backgroundSize = 'contain';
      gridCells[monsterIndex].style.backgroundPosition = 'center';
      gridCells[monsterIndex].dataset.type = "monster";
      gridCells[monsterIndex].dataset.monsterType = randomMonster;
    }
  }
  
  // Initialisation de la carte et placement des éléments
  createGrid();
  generateRandomPositions();
  