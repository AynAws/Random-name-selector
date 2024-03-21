let nameList = [];
function nameIn() {
    let name; //Stores
    name = prompt('Enter one name.')
    nameList.unshift(name);
    console.log(nameList);
}

   // Make a container element for the list
   let listContainer = document.createElement('div');

   // Make the list
   let listElement = document.createElement('ul');

   // Make the list item
   let listItem = document.createElement('li');

   // Add it to the page
   document.body.appendChild(listContainer);
   listContainer.appendChild(listElement);

   // Set up a loop that goes through the items in listItems one at a time
   let numberOfListItems = nameList.length;

   for (let i = 0; i < numberOfListItems; ++i) {
       // Add the item text

   // Use this if the array elements contain HTML
       // listItem.innerHTML = listData[i];
       // If not, use the line below

   // Use this if the array elements are text only
       listItem.textContent = nameList[i];

       // Add listItem to the listElement
       listElement.appendChild(listItem);

       // Reset the list item
       listItem = document.createElement('li');
   }