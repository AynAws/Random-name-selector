let nameList = [];
const p = document.getElementById('p');
const nameInput = document.getElementById('nameInput');
function nameIn() {
    let name; // Stores
    //name = prompt('Enter one name.');
    name = nameInput.value.trim();
    nameList.push(name);
    console.log(nameList);
    // listGen();
    nameInput.value = '';
}

function listGen() {
    // Make a container element for the list
    let listContainer = document.createElement('div');

    // Make the list
    let listElement = document.createElement('ul');

    // Make the list item
    let listItem = document.createElement('li');

    // Add it to the page
    p.append(listContainer);
    listContainer.appendChild(listElement);

    // Set up a loop that goes through the items in listItems one at a time
    let numberOfListItems = nameList.length;

    for (let i = 0; i < numberOfListItems; ++i) {
        listItem.textContent = nameList[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);

        // Reset the list item
        listItem = document.createElement('li');
    }
}

function reset() {
    p.innerHTML = '';
    nameList = [];
}

function darkMode() {
    // Toggles darkmode for buttons
    document.getElementById('gen').classList.toggle('btn-success');
    document.getElementById('gen').classList.toggle('btn-outline-success');
    document.getElementById('name').classList.toggle('btn-primary');
    document.getElementById('name').classList.toggle('btn-outline-primary');
    document.getElementById('reset').classList.toggle('btn-danger');
    document.getElementById('reset').classList.toggle('btn-outline-danger');
    // Toggles darkmode for background and text
    document.getElementById('body').classList.toggle('dark-mode-bg');
}