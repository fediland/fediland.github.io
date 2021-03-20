// Should be included using 'defer' after servers.js and functions.js

let serverName = getRandomKey(instances);
let url = instances[serverName];

console.log('Randomly selected: ', serverName, url);

let linkElement = document.getElementById('reg-link');
linkElement.setAttribute('href', url);
linkElement.innerText = 'Регистрация на ' + serverName;
