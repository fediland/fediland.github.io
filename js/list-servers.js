// Should be included using 'defer' after servers.js and functions.js

let listGroup = document.getElementById('server-list');

let shuffledServerNames = shuffleArray(Object.keys(instances));
console.log('shuffled: ', shuffledServerNames);

for (serverName of shuffledServerNames) {
    let url = instances[serverName];

    // Creating list item
    let item = document.createElement('a');
    item.setAttribute('class', 'list-group-item');
    item.setAttribute('href', url);
    item.innerText = serverName;

    listGroup.appendChild(item);
}

