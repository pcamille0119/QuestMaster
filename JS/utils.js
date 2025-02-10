// utils.js

/**
 * Algorithme de Fisher-Yates pour mélanger un tableau
 * @param {Array} array - Le tableau à mélanger
 * @returns {Array} Le tableau mélangé
 */
function shuffle(array) {
    let currentIndex = array.length, randomIndex, temporaryValue;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Échanger les éléments
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  