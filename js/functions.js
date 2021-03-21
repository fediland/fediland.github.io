/**
 * Returns random item from given array.
 * 
 * @param {array} array 
 * @returns {object}
 */
function getRandomItem(array) {
    return array[array.length * Math.random() << 0];
}

/**
 * Randomly sorts an array.
 * 
 * @param {array} array 
 * @returns {array}
 */
function shuffleArray(array) {
    return array.sort(function(a, b) {
        return getRandomInt(1) ? 1 : -1;
    });
}

/**
 * Returns random number from 0 to max.
 * 
 * @param {number} max 
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
}
