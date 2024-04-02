let nameList = [];
const nameInput = document.getElementById('nameInput');
function nameIn() {
    let name; // Stores input
    name = nameInput.value.trim();
    nameList.push(name);
    console.log(nameList);
    listGen();
    nameInput.value = '';
}

function listGen() {
    const theNameList = document.getElementById('nameList');
    theNameList.innerHTML = '';

    for (let i = 0; i < nameList.length; ++i) {
        const name = nameList[i];
        const li = document.createElement('li');
        const span = document.createElement('div');

        //li.className = 'list-group-item';
        span.textContent = name;

        li.appendChild(span);
        theNameList.appendChild(li);
    }
}

function pickRandomName() {
    const randomNameDiv = document.getElementById('randomNameDiv');
    randomNameDiv.textContent = ''
    const randomNumber = Math.floor(Math.random() * nameList.length);
    const randomName = nameList[randomNumber];
    randomNameDiv.textContent = randomName;
    nameList.splice(randomNumber, 1);
    listGen();
}

// Resets the list and clears the chosen name
function reset() {
    document.getElementById('nameList').textContent = '';
    nameList = [];
}

function darkMode() {
    // Toggles darkmode for buttons
    document.getElementById('randomName').classList.toggle('btn-success');
    document.getElementById('randomName').classList.toggle('btn-outline-success');
    document.getElementById('name').classList.toggle('btn-primary');
    document.getElementById('name').classList.toggle('btn-outline-primary');
    document.getElementById('reset').classList.toggle('btn-danger');
    document.getElementById('reset').classList.toggle('btn-outline-danger');
    document.getElementById('dark').classList.toggle('btn-dark');
    document.getElementById('dark').classList.toggle('btn-outline-light');
    // Toggles darkmode for background and text
    document.getElementById('body').classList.toggle('dark-mode-bg');
}

document.getElementById('name').addEventListener('click', nameIn); // Runs nameIn() when 'Add Name' button is clicked

document.getElementById('randomName').addEventListener('click', pickRandomName); // Picks a random name when 'Randomly Select a Name' button is clicked

// Allows ENTER button to run nameIn() function
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      nameIn();
    }
});