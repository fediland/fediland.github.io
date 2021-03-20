// Should be included using 'defer' after servers.js

let serverName = getRandomKey(instances);
let url = instances[serverName];

console.log('Randomly selected: ', serverName, url);

let linkElement = document.getElementById('reg-link');
linkElement.setAttribute('href', url);
linkElement.innerHTML = 'Регистрация на ' + serverName;

function getRandomKey(obj) {
    let keys = Object.keys(obj);
    
    return keys[ keys.length * Math.random() << 0 ];
};