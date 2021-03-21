// Should be included using 'defer' after servers.js and functions.js

let server = getRandomItem(instances);

console.log('Randomly selected: ', server);

// Server link
let linkElement = document.getElementById('reg-link');
linkElement.setAttribute('href', server.url);
linkElement.innerText = 'Регистрация на ' + server.name;

let platform = platforms[server.platform];
let regMode = registrationModes[server.registration];

// Additional metadata elements
let platformElement = document.getElementById('node-platform');
let registrationElement = document.getElementById('node-registration');

// Icon element
let platformIcon = document.createElement('img');
platformIcon.setAttribute('src', platform.icon);

platformElement.innerHTML = '';
platformElement.appendChild(platformIcon);
platformElement.appendChild(document.createTextNode(' ' + platform.name));

registrationElement.innerText = regMode.name;