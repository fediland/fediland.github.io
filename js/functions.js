/**
 * Returns random key from the object.
 * 
 * @param {object} obj 
 * @returns {string}
 */
function getRandomKey(obj) {
    let keys = Object.keys(obj);
    
    return keys[ keys.length * Math.random() << 0 ];
};

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
