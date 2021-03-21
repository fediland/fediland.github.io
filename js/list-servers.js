// Should be included using 'defer' after servers.js and functions.js

let tableBody = document.getElementById('table-servers-body');

let shuffledServers = shuffleArray(instances);
console.log('shuffled: ', shuffledServers);

for (server of shuffledServers) {
    let platform = platforms[server.platform];
    let regMode = registrationModes[server.registration];

    let tr = document.createElement('tr');

    let tdName = document.createElement('td');
    let tdPlatform = document.createElement('td');
    let tdRegistration = document.createElement('td');
    tr.appendChild(tdName);
    tr.appendChild(tdPlatform);
    tr.appendChild(tdRegistration);

    serverLink = document.createElement('a');
    serverLink.setAttribute('href', server.url);
    serverLink.innerText = server.name;
    tdName.appendChild(serverLink);
    platformIcon = document.createElement('img');
    platformIcon.setAttribute('src', platform.icon);
    tdPlatform.appendChild(platformIcon);
    tdPlatform.appendChild(document.createTextNode(' ' + platform.name));
    tdRegistration.innerText = regMode.name;

    // Adding to table
    tableBody.appendChild(tr);
}
